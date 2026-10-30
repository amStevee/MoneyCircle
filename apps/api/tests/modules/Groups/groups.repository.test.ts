import { prisma } from "@repo/db";
import {
  acceptInvitationTx,
  createGroup,
} from "../../../src/modules/Groups/groups.repository.js";

const mockTransaction = {
  savings_circles: {
    create: jest.fn(),
  },
  circle_members: {
    create: jest.fn(),
    upsert: jest.fn(),
    findMany: jest.fn(),
  },
  savings_schedules: {
    create: jest.fn(),
    findFirst: jest.fn(),
  },
  contributions: {
    createMany: jest.fn(),
  },
  circle_invitations: {
    update: jest.fn(),
  },
};

jest.mock("@repo/db", () => ({
  prisma: { $transaction: jest.fn() },
}));

const mockPrisma = prisma as unknown as { $transaction: jest.Mock };

describe("group member contributions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma.$transaction.mockImplementation(
      async (callback: (tx: typeof mockTransaction) => Promise<unknown>) =>
        callback(mockTransaction),
    );
    mockTransaction.savings_circles.create.mockResolvedValue({
      id: "group-1",
      contribution_amount: 2500,
    });
    mockTransaction.circle_members.create.mockResolvedValue({});
    mockTransaction.circle_members.upsert.mockResolvedValue({
      id: "membership-2",
    });
    mockTransaction.circle_members.findMany.mockResolvedValue([
      { user_id: "user-1" },
      { user_id: "user-2" },
    ]);
    mockTransaction.savings_schedules.create.mockResolvedValue({});
    mockTransaction.savings_schedules.findFirst.mockResolvedValue({
      contribution_amount: 2500,
      frequency: "MONTHLY",
      start_date: new Date("2026-01-31T12:00:00.000Z"),
      total_cycles: 3,
    });
    mockTransaction.contributions.createMany.mockResolvedValue({ count: 6 });
    mockTransaction.circle_invitations.update.mockResolvedValue({});
  });

  it("creates every scheduled contribution for the group owner", async () => {
    await createGroup("user-1", {
      name: "Shared savings",
      description: "",
      contributionAmount: 2500,
      currency: "NGN",
      frequency: "MONTHLY",
      memberLimit: 2,
      totalCycles: 3,
      startDate: new Date("2026-01-31T12:00:00.000Z"),
    });

    expect(mockTransaction.contributions.createMany).toHaveBeenCalledWith({
      data: [
        {
          circle_id: "group-1",
          circle_member: "user-1",
          cycle_number: 1,
          amount: 2500,
          due_date: new Date("2026-01-31T12:00:00.000Z"),
          status: "PENDING",
        },
        {
          circle_id: "group-1",
          circle_member: "user-1",
          cycle_number: 2,
          amount: 2500,
          due_date: new Date("2026-02-28T12:00:00.000Z"),
          status: "PENDING",
        },
        {
          circle_id: "group-1",
          circle_member: "user-1",
          cycle_number: 3,
          amount: 2500,
          due_date: new Date("2026-03-31T12:00:00.000Z"),
          status: "PENDING",
        },
      ],
      skipDuplicates: true,
    });
  });

  it("creates missing scheduled contributions for both active members when an invitation is accepted", async () => {
    await acceptInvitationTx({
      invitationId: "invitation-1",
      circleId: "group-1",
      userId: "user-2",
    });

    expect(mockTransaction.circle_members.upsert).toHaveBeenCalled();
    expect(mockTransaction.circle_members.findMany).toHaveBeenCalledWith({
      where: { circle_id: "group-1", status: "ACTIVE" },
      select: { user_id: true },
    });
    const contributionBatch =
      mockTransaction.contributions.createMany.mock.calls[0]?.[0];
    expect(contributionBatch).toMatchObject({
      skipDuplicates: true,
      data: expect.arrayContaining([
        expect.objectContaining({
          circle_member: "user-1",
          cycle_number: 2,
          due_date: new Date("2026-02-28T12:00:00.000Z"),
        }),
        expect.objectContaining({
          circle_member: "user-2",
          cycle_number: 2,
          due_date: new Date("2026-02-28T12:00:00.000Z"),
        }),
      ]),
    });
    expect(contributionBatch?.data).toHaveLength(6);
  });

  it("does not accept an invitation when the group has no schedule", async () => {
    mockTransaction.savings_schedules.findFirst.mockResolvedValue(null);

    await expect(
      acceptInvitationTx({
        invitationId: "invitation-1",
        circleId: "group-1",
        userId: "user-2",
      }),
    ).rejects.toThrow("Savings schedule not found");

    expect(mockTransaction.contributions.createMany).not.toHaveBeenCalled();
  });
});
