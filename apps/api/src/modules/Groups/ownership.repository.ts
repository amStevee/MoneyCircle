import { prisma } from "@repo/db";
import {
  inFlightPaymentWhere,
  outstandingContributionWhere,
  processingPayoutWhere,
  startOfNextUtcDay,
} from "../Contributions/contribution-status.js";
import { cancelUpcomingContributions } from "../Contributions/contributions.repository.js";

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
  /** Total unpaid amount across those contributions (informational). */
  outstandingAmount: number;
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
  const [
    contributionCounts,
    payoutCounts,
    processingTransactions,
    processingPayoutCounts,
  ] = await Promise.all([
      prisma.contributions.groupBy({
        by: ["circle_id"],
        where: {
          circle_id: { in: circleIds },
          ...outstandingContributionWhere(),
        },
        _count: { _all: true },
        _sum: { amount: true },
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
          AND: [
            inFlightPaymentWhere(),
            {
              OR: [
                { contribution: { is: { circle_id: { in: circleIds } } } },
                { payout: { is: { circle_id: { in: circleIds } } } },
              ],
            },
          ],
        },
        select: {
          contribution: { select: { circle_id: true } },
          payout: { select: { circle_id: true } },
        },
      }),
      prisma.payouts.groupBy({
        by: ["circle_id"],
        where: {
          circle_id: { in: circleIds },
          ...processingPayoutWhere(),
        },
        _count: { _all: true },
      }),
    ]);

  const contributionsByCircle = new Map(
    contributionCounts.map(({ circle_id, _count }) => [
      circle_id,
      _count._all,
    ]),
  );
  const amountByCircle = new Map(
    contributionCounts.map(({ circle_id, _sum }) => [
      circle_id,
      Number(_sum?.amount ?? 0),
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

  for (const { circle_id, _count } of processingPayoutCounts ?? []) {
    paymentsByCircle.set(
      circle_id,
      (paymentsByCircle.get(circle_id) ?? 0) + _count._all,
    );
  }

  return groups.map((group) => {
    const latestTransfer = group.ownership_transfers[0];
    // A decline only counts against the CURRENT owner's requests. If
    // ownership already changed hands, earlier declines were answers to
    // someone else and must not lock the nominee out forever.
    const declinedNominees = new Set(
      group.ownership_transfers
        .filter(
          ({ status, from_user_id }) =>
            status === "DECLINED" && from_user_id === group.owner_id,
        )
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
      outstandingAmount: amountByCircle.get(group.id) ?? 0,
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
        from_user_id: ownerId,
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

    // The group is winding down: future cycles will never be collected, so
    // stop showing them as "upcoming". Due-today, overdue and paid rows are
    // kept - those are real obligations/records.
    await cancelUpcomingContributions(tx, {
      circleId: groupId,
      from: startOfNextUtcDay(),
    });

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

    const now = new Date();

    // Safety net for groups that entered PENDING_RESOLUTION before upcoming
    // cycles were cancelled at that step.
    await cancelUpcomingContributions(tx, {
      circleId: groupId,
      from: startOfNextUtcDay(now),
    });

    // THE ONLY HARD BLOCK: money that is mid-flight (a payment in flight or
    // a payout being processed). Archiving now could leave a payment that
    // can no longer be attributed to anything.
    // Unpaid contributions/payouts never block - MoneyCircle is a tracker,
    // the group settles those itself. They are recorded in the group
    // history below instead.
    const [processingTransactions, processingPayouts] = await Promise.all([
      tx.payment_transactions.count({
        where: {
          AND: [
            inFlightPaymentWhere(now),
            {
              OR: [
                { contribution: { is: { circle_id: groupId } } },
                { payout: { is: { circle_id: groupId } } },
              ],
            },
          ],
        },
      }),
      // A payout still PROCESSING blocks closing too, even when it has no
      // live payment transaction attached.
      tx.payouts.count({
        where: { circle_id: groupId, ...processingPayoutWhere(now) },
      }),
    ]);
    if (processingTransactions || processingPayouts) {
      throw new Error(
        "Payments or payouts are still being processed for this group. Try again once they finish",
      );
    }

    const [unsettled, unsettledPayouts] = await Promise.all([
      tx.contributions.findMany({
        where: { circle_id: groupId, ...outstandingContributionWhere(now) },
        select: {
          circle_member: true,
          cycle_number: true,
          amount: true,
          due_date: true,
          users: { select: { first_name: true, last_name: true } },
        },
        orderBy: [{ due_date: "asc" }, { cycle_number: "asc" }],
      }),
      tx.payouts.count({
        where: {
          circle_id: groupId,
          status: { in: [...UNSETTLED_PAYOUT_STATUSES] },
        },
      }),
    ]);
    const memberships = unsettled.length
      ? await tx.circle_members.findMany({
          where: {
            circle_id: groupId,
            user_id: { in: [...new Set(unsettled.map((c) => c.circle_member))] },
          },
          select: { user_id: true, status: true },
        })
      : [];
    const statusByUser = new Map(
      memberships.map(({ user_id, status }) => [user_id, status]),
    );

    const unpaidByMember = new Map<
      string,
      {
        userId: string;
        name: string;
        memberStatus: string;
        cycles: number[];
        amount: number;
      }
    >();
    for (const row of unsettled) {
      const entry = unpaidByMember.get(row.circle_member) ?? {
        userId: row.circle_member,
        name: `${row.users.first_name} ${row.users.last_name}`,
        memberStatus: statusByUser.get(row.circle_member) ?? "UNKNOWN",
        cycles: [],
        amount: 0,
      };
      entry.cycles.push(row.cycle_number);
      entry.amount += Number(row.amount);
      unpaidByMember.set(row.circle_member, entry);
    }
    const unpaid = [...unpaidByMember.values()];

    // Group history entry: the permanent record of what was left unsettled.
    await tx.audit_log.create({
      data: {
        user_id: ownerId,
        action: "GROUP_CLOSED",
        entity_type: "savings_circle",
        entity_id: groupId,
        metadata: {
          unpaidContributions: unpaid,
          unpaidTotal: unpaid.reduce((sum, m) => sum + m.amount, 0),
          unsettledPayouts,
        },
      },
    });

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
