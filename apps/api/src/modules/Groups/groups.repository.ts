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

    await tx.contributions.create({
      data: {
        circle_id: circle.id,
        circle_member: userId,
        cycle_number: 1,
        amount: input.contributionAmount,
        due_date: input.startDate,
        status: "PENDING",
      },
    });

    return circle;
  });
}

export {
  type GroupMemberCount,
  type UserContributionCount,
  createGroup,
  findGroupByIdForUser,
  findGroupMemberCounts,
  findUserGroups,
  findUserPaidContributionCounts,
};
