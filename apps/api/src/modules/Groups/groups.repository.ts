import { prisma } from "@repo/db";
import type { Prisma } from "@repo/db";
import type { CreateGroupInput } from "./group.type.js";

type UserGroup = Prisma.circle_membersGetPayload<{
  include: {
    savings_circle: true;
  };
}>;

type GroupDetails = Prisma.savings_circlesGetPayload<{
  include: {
    circle_members: {
      where: {
        status: {
          in: ["ACTIVE", "INVITED"];
        };
      };
      include: {
        users: {
          select: {
            id: true;
            first_name: true;
            last_name: true;
            avatar_url: true;
          };
        };
      };
      orderBy: {
        joined_at: "asc";
      };
    };
    savings_schedules: true;
  };
}>;

type CreatedGroup = Prisma.savings_circlesGetPayload<{}>;

type GroupMemberCount = {
  circle_id: string;
  count: number;
};

type UserContributionCount = {
  circle_id: string;
  count: number;
};

type CircleMember = Prisma.circle_membersGetPayload<{}>;

type CircleInvitation = Prisma.circle_invitationsGetPayload<{}>;

type CircleInvitationWithGroup = Prisma.circle_invitationsGetPayload<{
  include: {
    savings_circle: true;
  };
}>;

type ContributionFrequency = "WEEKLY" | "MONTHLY" | "YEARLY";

function getCycleDueDate(
  startDate: Date,
  frequency: ContributionFrequency,
  cycleNumber: number,
): Date {
  const cycleOffset = cycleNumber - 1;
  if (frequency === "WEEKLY") {
    const dueDate = new Date(startDate);
    dueDate.setUTCDate(dueDate.getUTCDate() + cycleOffset * 7);
    return dueDate;
  }

  const targetMonth =
    startDate.getUTCMonth() +
    (frequency === "MONTHLY" ? cycleOffset : cycleOffset * 12);
  const targetYear = startDate.getUTCFullYear() + Math.floor(targetMonth / 12);
  const month = targetMonth % 12;
  const day = Math.min(
    startDate.getUTCDate(),
    new Date(Date.UTC(targetYear, month + 1, 0)).getUTCDate(),
  );
  const dueDate = new Date(startDate);
  dueDate.setUTCFullYear(targetYear, month, day);
  return dueDate;
}

function buildContributionRows(params: {
  circleId: string;
  userId: string;
  amount: Prisma.Decimal | number;
  frequency: ContributionFrequency;
  startDate: Date;
  totalCycles: number;
}) {
  return Array.from({ length: params.totalCycles }, (_, index) => {
    const cycleNumber = index + 1;
    return {
      circle_id: params.circleId,
      circle_member: params.userId,
      cycle_number: cycleNumber,
      amount: params.amount,
      due_date: getCycleDueDate(
        params.startDate,
        params.frequency,
        cycleNumber,
      ),
      status: "PENDING" as const,
    };
  });
}

async function createContributionRows(
  tx: Prisma.TransactionClient,
  rows: Prisma.contributionsCreateManyInput[],
): Promise<void> {
  const batchSize = 5000;
  for (let index = 0; index < rows.length; index += batchSize) {
    await tx.contributions.createMany({
      data: rows.slice(index, index + batchSize),
      skipDuplicates: true,
    });
  }
}

async function findUserGroups(userId: string): Promise<UserGroup[]> {
  return prisma.circle_members.findMany({
    where: {
      user_id: userId,
      status: {
        in: ["ACTIVE", "INVITED"],
      },
    },
    include: {
      savings_circle: true,
    },
    orderBy: {
      joined_at: "desc",
    },
  });
}

async function findGroupMemberCounts(
  circleIds: string[],
): Promise<GroupMemberCount[]> {
  if (!circleIds.length) {
    return [];
  }

  const counts = await prisma.circle_members.groupBy({
    by: ["circle_id"],
    where: {
      circle_id: {
        in: circleIds,
      },
      status: "ACTIVE",
    },
    _count: {
      _all: true,
    },
  });

  return counts.map((item) => ({
    circle_id: item.circle_id,
    count: item._count._all,
  }));
}

async function findUserPaidContributionCounts(
  userId: string,
  circleIds: string[],
): Promise<UserContributionCount[]> {
  if (!circleIds.length) {
    return [];
  }

  const counts = await prisma.contributions.groupBy({
    by: ["circle_id"],
    where: {
      circle_id: {
        in: circleIds,
      },
      circle_member: userId,
      status: "PAID",
    },
    _count: {
      _all: true,
    },
  });

  return counts.map((item) => ({
    circle_id: item.circle_id,
    count: item._count._all,
  }));
}

async function findGroupByIdForUser(
  groupId: string,
  userId: string,
): Promise<GroupDetails | null> {
  return prisma.savings_circles.findFirst({
    where: {
      id: groupId,
      circle_members: {
        some: {
          user_id: userId,
          status: "ACTIVE",
        },
      },
    },
    include: {
      circle_members: {
        where: {
          status: {
            in: ["ACTIVE", "INVITED"],
          },
        },
        include: {
          users: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
              avatar_url: true,
            },
          },
        },
        orderBy: {
          joined_at: "asc",
        },
      },
      savings_schedules: true,
    },
  });
}

async function createGroup(
  userId: string,
  input: CreateGroupInput,
): Promise<CreatedGroup> {
  return prisma.$transaction(async (tx) => {
    const circle = await tx.savings_circles.create({
      data: {
        name: input.name,
        decription: input.description ?? "",
        owner_id: userId,
        contribution_amount: input.contributionAmount,
        currency: input.currency,
        frequency: input.frequency,
        member_limit: input.memberLimit,
        start_date: input.startDate,
        status: "ACTIVE",
      },
    });

    await tx.circle_members.create({
      data: {
        circle_id: circle.id,
        user_id: userId,
        role: "OWNER",
        status: "ACTIVE",
        joined_at: new Date(),
      },
    });

    await tx.savings_schedules.create({
      data: {
        circle_id: circle.id,
        frequency: input.frequency,
        contribution_amount: input.contributionAmount,
        start_date: input.startDate,
        total_cycles: input.totalCycles,
        current_cycle: 1,
      },
    });

    await createContributionRows(
      tx,
      buildContributionRows({
        circleId: circle.id,
        userId,
        amount: input.contributionAmount,
        frequency: input.frequency,
        startDate: input.startDate,
        totalCycles: input.totalCycles,
      }),
    );

    return circle;
  });
}

/**
 * Count ACTIVE members in a savings circle.
 */
async function countActiveMembers(circleId: string): Promise<number> {
  return prisma.circle_members.count({
    where: {
      circle_id: circleId,
      status: "ACTIVE",
    },
  });
}

/**
 * Find a circle member row for a specific user in a specific circle,
 * regardless of status. Used to check whether someone is already a
 * member (or has already been invited) before sending a new invite.
 */
async function findMembershipByUserId(
  circleId: string,
  userId: string,
): Promise<CircleMember | null> {
  return prisma.circle_members.findUnique({
    where: {
      circle_id_user_id: {
        circle_id: circleId,
        user_id: userId,
      },
    },
  });
}

/**
 * Find an outstanding (still PENDING, not yet expired) invitation for
 * a given email address within a circle.
 */
async function findPendingInvitationByEmail(
  circleId: string,
  email: string,
): Promise<CircleInvitation | null> {
  return prisma.circle_invitations.findFirst({
    where: {
      circle_id: circleId,
      email,
      status: "PENDING",
      expires_at: {
        gt: new Date(),
      },
    },
  });
}

/**
 * List outstanding invitations for a circle, most recent first.
 */
async function findPendingInvitations(
  circleId: string,
): Promise<CircleInvitation[]> {
  return prisma.circle_invitations.findMany({
    where: {
      circle_id: circleId,
      status: "PENDING",
      expires_at: {
        gt: new Date(),
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });
}

/**
 * Find an invitation by its hashed token, including the parent circle
 * so callers can validate capacity / build a response without a second
 * round-trip.
 */
async function findInvitationByTokenHash(
  tokenHash: string,
): Promise<CircleInvitationWithGroup | null> {
  return prisma.circle_invitations.findUnique({
    where: {
      token_hash: tokenHash,
    },
    include: {
      savings_circle: true,
    },
  });
}

/**
 * Create a brand new invitation record.
 */
async function createInvitation(params: {
  circleId: string;
  invitedBy: string;
  email: string;
  tokenHash: string;
  expiresAt: Date;
}): Promise<CircleInvitation> {
  return prisma.circle_invitations.create({
    data: {
      circle_id: params.circleId,
      invited_by: params.invitedBy,
      email: params.email,
      token_hash: params.tokenHash,
      status: "PENDING",
      expires_at: params.expiresAt,
    },
  });
}

/**
 * Refresh an existing pending invitation with a new token/expiry
 * instead of creating a duplicate row (used when re-sending an
 * invite that hasn't been accepted yet).
 */
async function refreshInvitation(
  invitationId: string,
  params: { tokenHash: string; expiresAt: Date },
): Promise<CircleInvitation> {
  return prisma.circle_invitations.update({
    where: { id: invitationId },
    data: {
      token_hash: params.tokenHash,
      expires_at: params.expiresAt,
    },
  });
}

/**
 * If the invited email already belongs to a registered user, reflect
 * the invite on their membership row too (status INVITED) so the
 * group shows up for them ahead of formal acceptance. Existing
 * ACTIVE/INVITED rows are left untouched by the upsert's update
 * branch other than bumping updated_at.
 */
async function upsertInvitedMembership(
  circleId: string,
  userId: string,
): Promise<CircleMember> {
  return prisma.circle_members.upsert({
    where: {
      circle_id_user_id: {
        circle_id: circleId,
        user_id: userId,
      },
    },
    create: {
      circle_id: circleId,
      user_id: userId,
      role: "MEMBER",
      status: "INVITED",
    },
    update: {},
  });
}

/**
 * Accept an invitation: activate (or create) the membership for the
 * accepting user and mark the invitation as used, in a single
 * transaction.
 */
async function acceptInvitationTx(params: {
  invitationId: string;
  circleId: string;
  userId: string;
}): Promise<CircleMember> {
  return prisma.$transaction(async (tx) => {
    const member = await tx.circle_members.upsert({
      where: {
        circle_id_user_id: {
          circle_id: params.circleId,
          user_id: params.userId,
        },
      },
      create: {
        circle_id: params.circleId,
        user_id: params.userId,
        role: "MEMBER",
        status: "ACTIVE",
        joined_at: new Date(),
      },
      update: {
        status: "ACTIVE",
        joined_at: new Date(),
      },
    });

    await tx.circle_invitations.update({
      where: { id: params.invitationId },
      data: {
        status: "VERIFIED",
        accepted_at: new Date(),
      },
    });

    const schedule = await tx.savings_schedules.findFirst({
      where: { circle_id: params.circleId },
      orderBy: { created_at: "desc" },
    });
    if (!schedule) {
      throw new Error("Savings schedule not found");
    }

    const activeMembers = await tx.circle_members.findMany({
      where: { circle_id: params.circleId, status: "ACTIVE" },
      select: { user_id: true },
    });
    await createContributionRows(
      tx,
      activeMembers.flatMap(({ user_id }) =>
        buildContributionRows({
          circleId: params.circleId,
          userId: user_id,
          amount: schedule.contribution_amount,
          frequency: schedule.frequency,
          startDate: schedule.start_date,
          totalCycles: schedule.total_cycles,
        }),
      ),
    );

    return member;
  });
}

export {
  type GroupMemberCount,
  type UserContributionCount,
  type CircleMember,
  type CircleInvitation,
  type CircleInvitationWithGroup,
  createGroup,
  findGroupByIdForUser,
  findGroupMemberCounts,
  findUserGroups,
  findUserPaidContributionCounts,
  countActiveMembers,
  findMembershipByUserId,
  findPendingInvitationByEmail,
  findPendingInvitations,
  findInvitationByTokenHash,
  createInvitation,
  refreshInvitation,
  upsertInvitedMembership,
  acceptInvitationTx,
};
