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
 * Application-level representation of a circle's paid
 * contribution count across all active members.
 */
type DashboardContributionCount = {
  circle_id: string;
  count: number;
};

/**
 * Application-level representation of a circle's
 * total planned contribution cycles.
 */
type DashboardCircleCycles = {
  circle_id: string;
  total_cycles: number;
};

/**
 * Find the savings groups the user belongs to.
 * Archived groups are finished, so they are not shown on the dashboard.
 */
async function findDashboardMemberships(
  userId: string,
): Promise<DashboardMembership[]> {
  return prisma.circle_members.findMany({
    where: {
      user_id: userId,
      status: "ACTIVE",
      savings_circle: {
        status: { not: "ARCHIVED" },
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
 * Find the user's unpaid contributions (PENDING + OVERDUE), oldest first.
 *
 * Restricted to live groups the user is still an ACTIVE member of, so
 * contributions of archived groups never show up as "upcoming" or "overdue".
 * The service decides which of these are overdue vs upcoming.
 */
async function findUpcomingContributions(
  userId: string,
): Promise<DashboardContribution[]> {
  return prisma.contributions.findMany({
    where: {
      circle_member: userId,
      status: {
        in: ["PENDING", "OVERDUE"],
      },
      savings_circle: {
        status: { in: ["ACTIVE", "PENDING_RESOLUTION"] },
        circle_members: {
          some: { user_id: userId, status: "ACTIVE" },
        },
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

    orderBy: [
      {
        due_date: "asc",
      },
      { created_at: "asc" },
    ],
  });
}

/**
 * Find recent contributions for dashboard activity.
 * Cancelled rows (future cycles of closed groups / left members) are not
 * activity, so they are left out instead of showing up as "pending".
 */
async function findRecentContributions(
  userId: string,
): Promise<DashboardContribution[]> {
  return prisma.contributions.findMany({
    where: {
      circle_member: userId,
      status: { in: ["PAID", "FAILED"], not: "CANCELLED" },
      // status: { not: "CANCELLED" },
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

/**
 * Count paid contributions in each savings circle.
 *
 * Used to compute group-wide contribution progress on the dashboard.
 */
async function findGroupPaidContributionCounts(
  circleIds: string[],
): Promise<DashboardContributionCount[]> {
  if (!circleIds.length) {
    return [];
  }

  const counts = await prisma.contributions.groupBy({
    by: ["circle_id"],

    where: {
      circle_id: {
        in: circleIds,
      },
      status: "PAID",
    },

    _count: {
      _all: true,
    },
  });

  return counts.map(
    (item): DashboardContributionCount => ({
      circle_id: item.circle_id,
      count: item._count._all,
    }),
  );
}

/**
 * Find each circle's total planned contribution cycles,
 * used as the denominator for contribution progress.
 */
async function findCircleTotalCycles(
  circleIds: string[],
): Promise<DashboardCircleCycles[]> {
  if (!circleIds.length) {
    return [];
  }

  const schedules = await prisma.savings_schedules.findMany({
    where: {
      circle_id: {
        in: circleIds,
      },
    },

    orderBy: {
      created_at: "desc",
    },

    select: {
      circle_id: true,
      total_cycles: true,
    },
  });

  /**
   * A circle can have more than one schedule historically;
   * keep only the most recent one per circle.
   */
  const seen = new Set<string>();
  const latest: DashboardCircleCycles[] = [];

  for (const schedule of schedules) {
    if (seen.has(schedule.circle_id)) continue;
    seen.add(schedule.circle_id);
    latest.push(schedule);
  }

  return latest;
}

export {
  findCircleTotalCycles,
  findDashboardMemberships,
  findGroupMemberCounts,
  findPaidContributions,
  findRecentContributions,
  findUpcomingContributions,
  findGroupPaidContributionCounts,
};
