import { DashboardService } from "../../../src/modules/Dashboard/dashboard.service.js";
import {
  findCircleTotalCycles,
  findDashboardMemberships,
  findGroupMemberCounts,
  findPaidContributions,
  findRecentContributions,
  findUpcomingContributions,
  findGroupPaidContributionCounts,
} from "../../../src/modules/Dashboard/dashboard.repository.js";

jest.mock("../../../src/modules/Dashboard/dashboard.repository", () => ({
  findCircleTotalCycles: jest.fn(),
  findDashboardMemberships: jest.fn(),
  findGroupMemberCounts: jest.fn(),
  findPaidContributions: jest.fn(),
  findRecentContributions: jest.fn(),
  findUpcomingContributions: jest.fn(),
  findGroupPaidContributionCounts: jest.fn(),
}));

describe("DashboardService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers().setSystemTime(new Date("2026-01-15T00:00:00.000Z"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("aggregates group progress, contributions, and recent activity", async () => {
    const service = new DashboardService();
    const startDate = new Date("2026-01-01T00:00:00.000Z");
    const paidAt = new Date("2026-01-10T00:00:00.000Z");
    const dueDate = new Date("2026-02-01T00:00:00.000Z");
    jest.mocked(findDashboardMemberships).mockResolvedValue([
      {
        circle_id: "circle-1",
        savings_circle: {
          id: "circle-1",
          name: "Savings",
          decription: "Monthly savings",
          contribution_amount: 2500,
          frequency: "MONTHLY",
          member_limit: 8,
          status: "ACTIVE",
          start_date: startDate,
        },
      },
    ] as never);
    jest.mocked(findPaidContributions).mockResolvedValue([
      {
        amount: 2500,
        savings_circle: { name: "Savings" },
      },
    ] as never);
    jest.mocked(findUpcomingContributions).mockResolvedValue([
      {
        id: "contribution-2",
        amount: 2500,
        circle_id: "circle-1",
        status: "PENDING",
        due_date: dueDate,
        savings_circle: { name: "Savings" },
      },
    ] as never);
    jest.mocked(findRecentContributions).mockResolvedValue([
      {
        id: "contribution-1",
        amount: 2500,
        circle_id: "circle-1",
        status: "PAID",
        paid_at: paidAt,
        due_date: dueDate,
        savings_circle: { name: "Savings" },
      },
    ] as never);
    jest
      .mocked(findGroupMemberCounts)
      .mockResolvedValue([{ circle_id: "circle-1", count: 4 }]);
    jest
      .mocked(findGroupPaidContributionCounts)
      .mockResolvedValue([{ circle_id: "circle-1", count: 1 }]);
    jest
      .mocked(findCircleTotalCycles)
      .mockResolvedValue([{ circle_id: "circle-1", total_cycles: 12 }]);

    await expect(service.getDashboard("user-1")).resolves.toEqual({
      summary: {
        totalContributions: 2500,
        activeGroups: 1,
        groupsCount: 1,
        contributionsMadeCount: 1,
      },
      upcomingContribution: {
        id: "contribution-2",
        amount: 2500,
        groupName: "Savings",
        groupId: "circle-1",
        dueDate,
        status: "PENDING",
      },
      overdueContributions: [],
      groups: [
        {
          id: "circle-1",
          name: "Savings",
          description: "Monthly savings",
          contributionAmount: 2500,
          frequency: "MONTHLY",
          memberCount: 4,
          memberLimit: 8,
          contributionsMade: 1,
          totalContributions: 48,
          status: "ACTIVE",
          startDate,
          nextContributionDate: dueDate,
        },
      ],
      recentActivity: [
        {
          id: "contribution-1",
          amount: 2500,
          description: "Contribution to Savings",
          date: paidAt,
          status: "completed",
          groupId: "circle-1",
        },
      ],
    });
  });

  it("calculates group progress from both members' paid contributions", async () => {
    const service = new DashboardService();
    const startDate = new Date("2026-01-01T00:00:00.000Z");
    const nextDueDate = new Date("2026-02-01T00:00:00.000Z");
    jest.mocked(findDashboardMemberships).mockResolvedValue([
      {
        circle_id: "circle-1",
        savings_circle: {
          id: "circle-1",
          name: "Shared savings",
          decription: "",
          contribution_amount: 2500,
          frequency: "MONTHLY",
          member_limit: 2,
          status: "ACTIVE",
          start_date: startDate,
        },
      },
    ] as never);
    jest.mocked(findPaidContributions).mockResolvedValue([]);
    jest.mocked(findUpcomingContributions).mockResolvedValue([
      {
        id: "user-1-next-cycle",
        amount: 2500,
        circle_id: "circle-1",
        status: "PENDING",
        due_date: nextDueDate,
        savings_circle: { name: "Shared savings" },
      },
    ] as never);
    jest.mocked(findRecentContributions).mockResolvedValue([]);
    jest
      .mocked(findGroupMemberCounts)
      .mockResolvedValue([{ circle_id: "circle-1", count: 2 }]);
    jest
      .mocked(findGroupPaidContributionCounts)
      .mockResolvedValue([{ circle_id: "circle-1", count: 2 }]);
    jest
      .mocked(findCircleTotalCycles)
      .mockResolvedValue([{ circle_id: "circle-1", total_cycles: 3 }]);

    const result = await service.getDashboard("user-1");

    expect(result.groups[0]).toMatchObject({
      memberCount: 2,
      contributionsMade: 2,
      totalContributions: 6,
    });
    expect(result.upcomingContribution).toMatchObject({
      id: "user-1-next-cycle",
      groupId: "circle-1",
    });
  });

  it("lists persisted past-due contributions separately from the upcoming contribution", async () => {
    const service = new DashboardService();
    const dueDate = new Date("2026-01-14T00:00:00.000Z");
    jest.mocked(findDashboardMemberships).mockResolvedValue([
      {
        circle_id: "circle-1",
        savings_circle: {
          id: "circle-1",
          name: "Savings",
          decription: "",
          contribution_amount: 2500,
          frequency: "MONTHLY",
          member_limit: 8,
          status: "ACTIVE",
          start_date: new Date("2026-01-01T00:00:00.000Z"),
        },
      },
    ] as never);
    jest.mocked(findPaidContributions).mockResolvedValue([]);
    jest.mocked(findUpcomingContributions).mockResolvedValue([
      {
        id: "contribution-overdue",
        amount: 2500,
        circle_id: "circle-1",
        status: "PENDING",
        due_date: dueDate,
        savings_circle: { name: "Savings" },
      },
    ] as never);
    jest.mocked(findRecentContributions).mockResolvedValue([]);
    jest.mocked(findGroupMemberCounts).mockResolvedValue([]);
    jest.mocked(findGroupPaidContributionCounts).mockResolvedValue([]);
    jest.mocked(findCircleTotalCycles).mockResolvedValue([]);

    const result = await service.getDashboard("user-1");

    expect(result.upcomingContribution).toBeNull();
    expect(result.overdueContributions).toEqual([
      {
        id: "contribution-overdue",
        amount: 2500,
        groupName: "Savings",
        groupId: "circle-1",
        dueDate,
        status: "OVERDUE",
      },
    ]);
    expect(result.groups[0]).toMatchObject({
      id: "circle-1",
      nextContributionDate: null,
    });
  });

  it("returns all overdue contributions while keeping the next future contribution upcoming", async () => {
    const service = new DashboardService();
    const firstPastDue = new Date("2026-01-10T00:00:00.000Z");
    const secondPastDue = new Date("2026-01-12T00:00:00.000Z");
    const nextDue = new Date("2026-02-01T00:00:00.000Z");
    jest.mocked(findDashboardMemberships).mockResolvedValue([]);
    jest.mocked(findPaidContributions).mockResolvedValue([]);
    jest.mocked(findUpcomingContributions).mockResolvedValue([
      {
        id: "overdue-1",
        amount: 2500,
        circle_id: "circle-1",
        status: "OVERDUE",
        due_date: firstPastDue,
        savings_circle: { name: "Savings" },
      },
      {
        id: "overdue-2",
        amount: 2500,
        circle_id: "circle-2",
        status: "PENDING",
        due_date: secondPastDue,
        savings_circle: { name: "Travel" },
      },
      {
        id: "upcoming-1",
        amount: 3000,
        circle_id: "circle-3",
        status: "PENDING",
        due_date: nextDue,
        savings_circle: { name: "Emergency fund" },
      },
    ] as never);
    jest.mocked(findRecentContributions).mockResolvedValue([]);
    jest.mocked(findGroupMemberCounts).mockResolvedValue([]);
    jest.mocked(findGroupPaidContributionCounts).mockResolvedValue([]);
    jest.mocked(findCircleTotalCycles).mockResolvedValue([]);

    const result = await service.getDashboard("user-1");

    expect(result.upcomingContribution).toMatchObject({
      id: "upcoming-1",
      groupName: "Emergency fund",
      status: "PENDING",
    });
    expect(result.overdueContributions).toEqual([
      {
        id: "overdue-1",
        amount: 2500,
        groupName: "Savings",
        groupId: "circle-1",
        dueDate: firstPastDue,
        status: "OVERDUE",
      },
      {
        id: "overdue-2",
        amount: 2500,
        groupName: "Travel",
        groupId: "circle-2",
        dueDate: secondPastDue,
        status: "OVERDUE",
      },
    ]);
  });

  it("keeps a contribution due exactly now as pending", async () => {
    const service = new DashboardService();
    const dueDate = new Date("2026-01-15T00:00:00.000Z");
    jest.mocked(findDashboardMemberships).mockResolvedValue([]);
    jest.mocked(findPaidContributions).mockResolvedValue([]);
    jest.mocked(findUpcomingContributions).mockResolvedValue([
      {
        id: "contribution-due-now",
        amount: 2500,
        circle_id: "circle-1",
        status: "PENDING",
        due_date: dueDate,
        savings_circle: { name: "Savings" },
      },
    ] as never);
    jest.mocked(findRecentContributions).mockResolvedValue([]);
    jest.mocked(findGroupMemberCounts).mockResolvedValue([]);
    jest.mocked(findGroupPaidContributionCounts).mockResolvedValue([]);
    jest.mocked(findCircleTotalCycles).mockResolvedValue([]);

    const result = await service.getDashboard("user-1");

    expect(result.upcomingContribution).toMatchObject({
      id: "contribution-due-now",
      dueDate,
      status: "PENDING",
    });
  });
});
