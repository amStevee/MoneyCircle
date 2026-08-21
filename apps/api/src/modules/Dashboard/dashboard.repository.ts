import { prisma } from "@repo/db";
import type { Prisma } from "@repo/db";

/**
 * Dashboard membership with the associated savings circle.
 */
type DashboardMembership = Prisma.circle_membersGetPayload<{
  include: {
    savings_circle: true;
  };
}>;

/**
 * Contribution with the savings-circle fields
 * required by the dashboard.
 */
type DashboardContribution = Prisma.contributionsGetPayload<{
  include: {
    savings_circle: {
      select: {
        id: true;
        name: true;
      };
    };
  };
}>;

/**
 * Application-level representation of member counts.
 */
type DashboardMemberCount = {
  circle_id: string;
  count: number;
};

/**
 * Find the savings groups the user belongs to.
 */
async function findDashboardMemberships(
  userId: string,
): Promise<DashboardMembership[]> {
  return prisma.circle_members.findMany({
    where: {
      user_id: userId,
      status: "ACTIVE",
    },

    include: {
      savings_circle: true,
    },

    orderBy: {
      joined_at: "desc",
    },
  });
}

/**
 * Find all paid contributions belonging to the user.
 *
 * Used for:
 * - total contributions
 * - contributions made count
 */
async function findPaidContributions(
  userId: string,
): Promise<DashboardContribution[]> {
  return prisma.contributions.findMany({
    where: {
      circle_member: userId,
      status: "PAID",
    },

    include: {
      savings_circle: {
        select: {
          id: true,
          name: true,
        },
      },
    },

    orderBy: {
      paid_at: "desc",
    },
  });
}

/**
 * Find the user's next contribution that is due.
 */
async function findUpcomingContribution(
  userId: string,
): Promise<DashboardContribution | null> {
  return prisma.contributions.findFirst({
    where: {
      circle_member: userId,
      status: {
        in: ["PENDING", "OVERDUE"],
      },
    },

    include: {
      savings_circle: {
        select: {
          id: true,
          name: true,
        },
      },
    },

    orderBy: {
      due_date: "asc",
    },
  });
}

/**
 * Find recent contributions for dashboard activity.
 */
async function findRecentContributions(
  userId: string,
): Promise<DashboardContribution[]> {
  return prisma.contributions.findMany({
    where: {
      circle_member: userId,
    },

    include: {
      savings_circle: {
        select: {
          id: true,
          name: true,
        },
      },
    },

    orderBy: {
      created_at: "desc",
    },

    take: 10,
  });
}

/**
 * Count active members in each savings circle.
 */
async function findGroupMemberCounts(
  circleIds: string[],
): Promise<DashboardMemberCount[]> {
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

  /**
   * Convert Prisma's aggregation result into
   * our application-level type.
   */
  return counts.map(
    (item): DashboardMemberCount => ({
      circle_id: item.circle_id,
      count: item._count._all,
    }),
  );
}

export {
  findDashboardMemberships,
  findGroupMemberCounts,
  findPaidContributions,
  findRecentContributions,
  findUpcomingContribution,
};
