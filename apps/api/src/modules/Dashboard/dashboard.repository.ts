import { prisma } from "@repo/db";
import type { Prisma } from "@repo/db";
import { Decimal } from "../../../../../packages/db/src/generated/prisma/runtime/client.js";

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
 * Application-level representation of a user's paid
 * contribution count within a circle.
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
  const memberships = await prisma.circle_members.findMany({
    where: {
      user_id: userId,
      status: "ACTIVE"
    },
    include: {
      savings_circle: {
        include: {
          savings_schedules: true,
        },
      },
      payouts: {
        where: {
          status: "PAID",
        }
      }
    }
  });

  for (const membership of memberships) {
    const schedule = membership.savings_circle.savings_schedules;

    const currentCycle = schedule[0]?.current_cycle;

    const hasPaid = membership.payouts.some(
      payout =>
        payout.cycle_number === currentCycle &&
        payout.circle_id === membership.circle_id
    );

    if (!hasPaid) {
      return {
        id: `${membership.circle_id}-${currentCycle}`,
        circle_id: membership.circle_id,
        savings_circle: {
          id: membership.savings_circle.id,
          name: membership.savings_circle.name,
        },
        created_at: new Date(),
        updated_at: new Date(),
        circle_member: userId,
        cycle_number: (currentCycle as number),
        amount: (schedule[0]?.contribution_amount as Decimal),
        due_date: (schedule[0]?.end_date as Date),
        paid_at: null,
        transaction_id: null,
        status: "PENDING",
      }
    }
  }

  return null;  
  // return prisma.contributions.findFirst({
  //   where: {
  //     circle_member: userId,
  //     status: {
  //       in: ["PENDING", "OVERDUE"],
  //     },
  //   },

  //   include: {
  //     savings_circle: {
  //       select: {
  //         id: true,
  //         name: true,
  //       },
  //     },
  //   },

  //   orderBy: {
  //     due_date: "asc",
  //   },
  // });
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

/**
 * Count this user's paid contributions in each savings circle.
 *
 * Used to compute each group's contribution progress
 * on the dashboard (mirrors groups.repository.ts).
 */
async function findUserPaidContributionCounts(
  userId: string,
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
      circle_member: userId,
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
  findUpcomingContribution,
  findUserPaidContributionCounts,
};
