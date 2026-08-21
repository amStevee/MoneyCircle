import {
  findDashboardMemberships,
  findGroupMemberCounts,
  findPaidContributions,
  findRecentContributions,
  findUpcomingContribution,
} from "./dashboard.repository.js";

/**
 * Group displayed on the dashboard.
 */
type DashboardGroup = {
  id: string;
  name: string;
  description: string;
  contributionAmount: number;
  frequency: string;
  memberCount: number;
  memberLimit: number;
  status: string;
  startDate: Date;
  nextContributionDate: Date | null;
};

/**
 * Upcoming contribution displayed on the dashboard.
 */
type DashboardUpcomingContribution = {
  id: string;
  amount: number;
  groupName: string;
  groupId: string;
  dueDate: Date;
};

/**
 * Recent activity item displayed on the dashboard.
 */
type DashboardActivity = {
  id: string;
  amount: number;
  description: string;
  date: Date;
  status: "completed" | "failed" | "pending";
  groupId: string;
};

/**
 * Complete dashboard response.
 */
type DashboardResponse = {
  summary: {
    totalContributions: number;
    activeGroups: number;
    groupsCount: number;
    contributionsMadeCount: number;
  };

  upcomingContribution: DashboardUpcomingContribution | null;

  groups: DashboardGroup[];

  recentActivity: DashboardActivity[];
};

class DashboardService {
  async getDashboard(userId: string): Promise<DashboardResponse> {
    /**
     * These queries do not depend on each other,
     * so execute them concurrently.
     */
    const [memberships, paid, upcoming, activity] = await Promise.all([
      findDashboardMemberships(userId),
      findPaidContributions(userId),
      findUpcomingContribution(userId),
      findRecentContributions(userId),
    ]);

    /**
     * Get the circle IDs from the user's memberships.
     */
    const circleIds = memberships.map((membership) => membership.circle_id);

    /**
     * Get member counts for all groups at once.
     */
    const counts = await findGroupMemberCounts(circleIds);

    /**
     * The repository already converts Prisma's
     * `_count._all` into a simple `count` number.
     */
    const countMap = new Map(
      counts.map((item) => [item.circle_id, item.count]),
    );

    /**
     * Build the groups returned by the API.
     */
    const groups: DashboardGroup[] = memberships.map(
      ({ savings_circle: group }) => ({
        id: group.id,
        name: group.name,
        description: group.decription,

        contributionAmount: Number(group.contribution_amount),

        frequency: group.frequency,

        memberCount: countMap.get(group.id) ?? 0,

        memberLimit: group.member_limit,

        status: group.status,

        startDate: group.start_date,

        /**
         * This can later be populated from
         * the user's next contribution.
         */
        nextContributionDate: null,
      }),
    );

    /**
     * Build the dashboard response.
     */
    return {
      summary: {
        totalContributions: paid.reduce(
          (sum, contribution) => sum + Number(contribution.amount),
          0,
        ),

        activeGroups: groups.length,

        groupsCount: groups.length,

        contributionsMadeCount: paid.length,
      },

      /**
       * Upcoming contribution.
       */
      upcomingContribution: upcoming
        ? {
            id: upcoming.id,

            amount: Number(upcoming.amount),

            groupName: upcoming.savings_circle.name,

            groupId: upcoming.circle_id,

            dueDate: upcoming.due_date,
          }
        : null,

      /**
       * User's savings groups.
       */
      groups,

      /**
       * Recent contribution activity.
       */
      recentActivity: activity.map(
        (contribution): DashboardActivity => ({
          id: contribution.id,

          amount: Number(contribution.amount),

          description:
            contribution.status === "PAID"
              ? `Contribution to ${contribution.savings_circle.name}`
              : `Contribution for ${contribution.savings_circle.name}`,

          date: contribution.paid_at ?? contribution.due_date,

          status:
            contribution.status === "PAID"
              ? "completed"
              : contribution.status === "FAILED"
                ? "failed"
                : "pending",

          groupId: contribution.circle_id,
        }),
      ),
    };
  }
}

const dashboardService = new DashboardService();

export { DashboardService, dashboardService };
