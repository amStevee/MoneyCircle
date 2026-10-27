import { prisma } from "@repo/db";

const UNSETTLED_CONTRIBUTION_STATUSES = ["PENDING", "OVERDUE", "FAILED"] as const;
const UNSETTLED_PAYOUT_STATUSES = ["PENDING", "PROCESSING", "FAILED"] as const;

type OwnedGroup = {
  id: string;
  name: string;
  status: string;
  eligibleMembers: { id: string; name: string }[];
  pendingTransfer: {
    id: string;
    nomineeId: string;
    nomineeName: string;
    createdAt: Date;
  } | null;
  outstandingContributions: number;
  outstandingPayouts: number;
  processingPayments: number;
};

async function listOwnedGroupsForResolution(
  ownerId: string,
): Promise<OwnedGroup[]> {
  const groups = await prisma.savings_circles.findMany({
    where: {
      owner_id: ownerId,
      status: { not: "ARCHIVED" },
    },
    include: {
      circle_members: {
        where: { status: "ACTIVE", role: { not: "OWNER" } },
        include: {
          users: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
              status: true,
            },
          },
        },
      },
      ownership_transfers: {
        where: { status: { in: ["PENDING", "DECLINED"] } },
        include: {
          to_user: {
            select: { id: true, first_name: true, last_name: true },
          },
        },
        orderBy: { created_at: "desc" },
      },
    },
  });

  if (!groups.length) return [];

  const circleIds = groups.map(({ id }) => id);
  const [contributionCounts, payoutCounts, processingTransactions] =
    await Promise.all([
      prisma.contributions.groupBy({
        by: ["circle_id"],
        where: {
          circle_id: { in: circleIds },
          status: { in: [...UNSETTLED_CONTRIBUTION_STATUSES] },
        },
        _count: { _all: true },
      }),
      prisma.payouts.groupBy({
        by: ["circle_id"],
        where: {
          circle_id: { in: circleIds },
          status: { in: [...UNSETTLED_PAYOUT_STATUSES] },
        },
        _count: { _all: true },
      }),
      prisma.payment_transactions.findMany({
        where: {
          status: { in: ["PENDING", "PROCESSING"] },
          OR: [
            { contribution: { is: { circle_id: { in: circleIds } } } },
            { payout: { is: { circle_id: { in: circleIds } } } },
          ],
        },
        select: {
          contribution: { select: { circle_id: true } },
          payout: { select: { circle_id: true } },
        },
      }),
    ]);

  const contributionsByCircle = new Map(
    contributionCounts.map(({ circle_id, _count }) => [
      circle_id,
      _count._all,
    ]),
  );
  const payoutsByCircle = new Map(
    payoutCounts.map(({ circle_id, _count }) => [circle_id, _count._all]),
  );
  const paymentsByCircle = new Map<string, number>();
  for (const transaction of processingTransactions) {
    const circleId =
      transaction.contribution?.circle_id ?? transaction.payout?.circle_id;
    if (circleId) {
      paymentsByCircle.set(
        circleId,
        (paymentsByCircle.get(circleId) ?? 0) + 1,
      );
    }
  }

  return groups.map((group) => {
    const latestTransfer = group.ownership_transfers[0];
    const declinedNominees = new Set(
      group.ownership_transfers
        .filter(({ status }) => status === "DECLINED")
        .map(({ to_user_id }) => to_user_id),
    );

    return {
      id: group.id,
      name: group.name,
      status: group.status,
      eligibleMembers: group.circle_members
        .filter(
          ({ users }) =>
            users.status !== "UNSUBSCRIBED" &&
            !declinedNominees.has(users.id),
        )
        .map(({ users }) => ({
          id: users.id,
          name: `${users.first_name} ${users.last_name}`,
        })),
      pendingTransfer:
        latestTransfer?.status === "PENDING"
          ? {
              id: latestTransfer.id,
              nomineeId: latestTransfer.to_user.id,
              nomineeName: `${latestTransfer.to_user.first_name} ${latestTransfer.to_user.last_name}`,
              createdAt: latestTransfer.created_at,
            }
          : null,
      outstandingContributions:
        contributionsByCircle.get(group.id) ?? 0,
      outstandingPayouts: payoutsByCircle.get(group.id) ?? 0,
      processingPayments: paymentsByCircle.get(group.id) ?? 0,
    };
  });
}

async function nominateGroupOwner(
  groupId: string,
  ownerId: string,
  nomineeId: string,
): Promise<{ transferId: string; nomineeName: string }> {
  return prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT id FROM "savings_circles" WHERE id = ${groupId} FOR UPDATE`;

    const group = await tx.savings_circles.findUnique({
      where: { id: groupId },
      select: { id: true, name: true, owner_id: true, status: true },
    });
    if (!group || group.owner_id !== ownerId) {
      throw new Error("Only the current group owner can transfer ownership");
    }
    if (group.status !== "ACTIVE") {
      throw new Error("Only active groups can transfer ownership");
    }
    if (nomineeId === ownerId) {
      throw new Error("You cannot transfer ownership to yourself");
    }

    const existingRequest = await tx.group_ownership_transfers.findFirst({
      where: { circle_id: groupId, status: "PENDING" },
    });
    if (existingRequest) {
      throw new Error("A transfer request is already awaiting a response");
    }

    const membership = await tx.circle_members.findUnique({
      where: {
        circle_id_user_id: { circle_id: groupId, user_id: nomineeId },
      },
      include: {
        users: {
          select: {
            first_name: true,
            last_name: true,
            status: true,
          },
        },
      },
    });
    if (
      !membership ||
      membership.status !== "ACTIVE" ||
      membership.users.status === "UNSUBSCRIBED"
    ) {
      throw new Error("The nominee must be an active group member");
    }

    const priorDecline = await tx.group_ownership_transfers.findFirst({
      where: {
        circle_id: groupId,
        to_user_id: nomineeId,
        status: "DECLINED",
      },
    });
    if (priorDecline) {
      throw new Error("Choose another member who has not declined");
    }

    const transfer = await tx.group_ownership_transfers.create({
      data: {
        circle_id: groupId,
        from_user_id: ownerId,
        to_user_id: nomineeId,
      },
    });

    await tx.notifications.create({
      data: {
        user_id: nomineeId,
        type: "CIRCLE_UPDATE",
        title: "Group ownership transfer requested",
        message: `You have been nominated to own "${group.name}". Accept or decline the request from your notifications.`.slice(
          0,
          255,
        ),
        data: {
          event: "GROUP_OWNERSHIP_TRANSFER",
          transferId: transfer.id,
          circleId: groupId,
        },
      },
    });

    return {
      transferId: transfer.id,
      nomineeName: `${membership.users.first_name} ${membership.users.last_name}`,
    };
  });
}

async function respondToOwnershipTransfer(
  transferId: string,
  nomineeId: string,
  accept: boolean,
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    const initialTransfer = await tx.group_ownership_transfers.findUnique({
      where: { id: transferId },
      select: { circle_id: true },
    });
    if (!initialTransfer) {
      throw new Error("Ownership transfer request not found");
    }
    await tx.$queryRaw`SELECT id FROM "savings_circles" WHERE id = ${initialTransfer.circle_id} FOR UPDATE`;

    const transfer = await tx.group_ownership_transfers.findUnique({
      where: { id: transferId },
      include: {
        savings_circle: {
          select: { id: true, name: true, owner_id: true, status: true },
        },
      },
    });
    if (!transfer || transfer.to_user_id !== nomineeId) {
      throw new Error("Ownership transfer request not found");
    }
    if (transfer.status !== "PENDING") {
      throw new Error("This ownership transfer request is no longer pending");
    }
    if (
      transfer.savings_circle.owner_id !== transfer.from_user_id ||
      transfer.savings_circle.status !== "ACTIVE"
    ) {
      throw new Error("This group is no longer eligible for ownership transfer");
    }

    if (!accept) {
      await tx.group_ownership_transfers.update({
        where: { id: transfer.id },
        data: { status: "DECLINED", responded_at: new Date() },
      });
      await tx.notifications.create({
        data: {
          user_id: transfer.from_user_id,
          type: "CIRCLE_UPDATE",
          title: "Ownership transfer declined",
          message: `The nominee declined ownership of "${transfer.savings_circle.name}". You can nominate another active member.`.slice(
            0,
            255,
          ),
          data: {
            event: "GROUP_OWNERSHIP_TRANSFER_DECLINED",
            circleId: transfer.circle_id,
          },
        },
      });
      return;
    }

    const nomineeMembership = await tx.circle_members.findUnique({
      where: {
        circle_id_user_id: {
          circle_id: transfer.circle_id,
          user_id: nomineeId,
        },
      },
      include: { users: { select: { status: true } } },
    });
    const ownerMembership = await tx.circle_members.findUnique({
      where: {
        circle_id_user_id: {
          circle_id: transfer.circle_id,
          user_id: transfer.from_user_id,
        },
      },
    });
    if (
      !nomineeMembership ||
      nomineeMembership.status !== "ACTIVE" ||
      nomineeMembership.users.status === "UNSUBSCRIBED" ||
      !ownerMembership ||
      ownerMembership.status !== "ACTIVE"
    ) {
      throw new Error("Both members must remain active to transfer ownership");
    }

    await tx.savings_circles.update({
      where: { id: transfer.circle_id },
      data: { owner_id: nomineeId },
    });
    await tx.circle_members.update({
      where: {
        circle_id_user_id: {
          circle_id: transfer.circle_id,
          user_id: transfer.from_user_id,
        },
      },
      data: { role: "MEMBER" },
    });
    await tx.circle_members.update({
      where: {
        circle_id_user_id: {
          circle_id: transfer.circle_id,
          user_id: nomineeId,
        },
      },
      data: { role: "OWNER" },
    });
    await tx.group_ownership_transfers.update({
      where: { id: transfer.id },
      data: { status: "ACCEPTED", responded_at: new Date() },
    });
    await tx.notifications.create({
      data: {
        user_id: transfer.from_user_id,
        type: "CIRCLE_UPDATE",
        title: "Group ownership transferred",
        message: `You transferred ownership of "${transfer.savings_circle.name}" to a member.`,
        data: {
          event: "GROUP_OWNERSHIP_TRANSFER_ACCEPTED",
          circleId: transfer.circle_id,
        },
      },
    });
  });
}

async function cancelOwnershipTransfer(
  groupId: string,
  transferId: string,
  ownerId: string,
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT id FROM "savings_circles" WHERE id = ${groupId} FOR UPDATE`;

    const transfer = await tx.group_ownership_transfers.findUnique({
      where: { id: transferId },
      include: {
        savings_circle: {
          select: { owner_id: true, name: true },
        },
      },
    });
    if (
      !transfer ||
      transfer.circle_id !== groupId ||
      transfer.from_user_id !== ownerId ||
      transfer.savings_circle.owner_id !== ownerId
    ) {
      throw new Error("Ownership transfer request not found");
    }
    if (transfer.status !== "PENDING") {
      throw new Error("This ownership transfer request is no longer pending");
    }

    await tx.group_ownership_transfers.update({
      where: { id: transferId },
      data: { status: "CANCELLED", responded_at: new Date() },
    });
    await tx.notifications.create({
      data: {
        user_id: transfer.to_user_id,
        type: "CIRCLE_UPDATE",
        title: "Ownership transfer cancelled",
        message: `The ownership transfer request for "${transfer.savings_circle.name}" was cancelled.`.slice(
          0,
          255,
        ),
        data: {
          event: "GROUP_OWNERSHIP_TRANSFER_CANCELLED",
          circleId: groupId,
        },
      },
    });
  });
}

async function moveGroupToPendingResolution(
  groupId: string,
  ownerId: string,
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT id FROM "savings_circles" WHERE id = ${groupId} FOR UPDATE`;
    const group = await tx.savings_circles.findUnique({
      where: { id: groupId },
      select: { owner_id: true, status: true, name: true },
    });
    if (!group || group.owner_id !== ownerId) {
      throw new Error("Only the group owner can change its resolution status");
    }
    if (group.status === "PENDING_RESOLUTION") return;
    if (group.status === "ARCHIVED") {
      throw new Error("This group cannot enter pending resolution");
    }

    const pendingTransfers = await tx.group_ownership_transfers.findMany({
      where: { circle_id: groupId, status: "PENDING" },
      select: { id: true, to_user_id: true },
    });
    if (pendingTransfers.length) {
      await tx.group_ownership_transfers.updateMany({
        where: { id: { in: pendingTransfers.map(({ id }) => id) } },
        data: { status: "CANCELLED", responded_at: new Date() },
      });
      await tx.notifications.createMany({
        data: pendingTransfers.map(({ to_user_id }) => ({
          user_id: to_user_id,
          type: "CIRCLE_UPDATE" as const,
          title: "Ownership transfer cancelled",
          message: `The ownership transfer request for "${group.name}" was cancelled.`.slice(
            0,
            255,
          ),
          data: { event: "GROUP_OWNERSHIP_TRANSFER_CANCELLED", circleId: groupId },
        })),
      });
    }

    await tx.savings_circles.update({
      where: { id: groupId },
      data: { status: "PENDING_RESOLUTION" },
    });
  });
}

async function closeResolvedGroup(
  groupId: string,
  ownerId: string,
  confirmsNoDisputes: boolean,
): Promise<void> {
  if (!confirmsNoDisputes) {
    throw new Error("Confirm that there are no unresolved disputes before closing");
  }

  await prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT id FROM "savings_circles" WHERE id = ${groupId} FOR UPDATE`;
    const group = await tx.savings_circles.findUnique({
      where: { id: groupId },
      select: { owner_id: true, status: true },
    });
    if (!group || group.owner_id !== ownerId) {
      throw new Error("Only the group owner can close this group");
    }
    if (group.status !== "PENDING_RESOLUTION") {
      throw new Error("Only groups pending resolution can be closed");
    }

    const [contributions, payouts, processingPayments] = await Promise.all([
      tx.contributions.count({
        where: {
          circle_id: groupId,
          status: { in: [...UNSETTLED_CONTRIBUTION_STATUSES] },
        },
      }),
      tx.payouts.count({
        where: {
          circle_id: groupId,
          status: { in: [...UNSETTLED_PAYOUT_STATUSES] },
        },
      }),
      tx.payment_transactions.count({
        where: {
          status: { in: ["PENDING", "PROCESSING"] },
          OR: [
            { contribution: { is: { circle_id: groupId } } },
            { payout: { is: { circle_id: groupId } } },
          ],
        },
      }),
    ]);
    if (contributions || payouts || processingPayments) {
      throw new Error(
        "Resolve all outstanding contributions, payouts, and processing payments before closing this group",
      );
    }

    await tx.savings_circles.update({
      where: { id: groupId },
      data: { status: "ARCHIVED" },
    });
  });
}

export {
  cancelOwnershipTransfer,
  closeResolvedGroup,
  listOwnedGroupsForResolution,
  moveGroupToPendingResolution,
  nominateGroupOwner,
  respondToOwnershipTransfer,
};
