import { prisma } from "@repo/db";
import {
  deleteMeRepo,
  OwnedGroupsRequireResolutionError,
} from "../../../src/modules/Users/users.repository.js";

const mockTransaction = {
  users: {
    findUniqueOrThrow: jest.fn(),
    update: jest.fn(),
  },
  savings_circles: {
    findMany: jest.fn(),
  },
  circle_members: {
    findMany: jest.fn(),
    updateMany: jest.fn(),
  },
  notifications: {
    createMany: jest.fn(),
  },
  sessions: {
    updateMany: jest.fn(),
  },
};

jest.mock("@repo/db", () => ({
  prisma: { $transaction: jest.fn() },
}));

const mockPrisma = prisma as unknown as { $transaction: jest.Mock };

describe("deleteMeRepo", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma.$transaction.mockImplementation(
      async (callback: (tx: typeof mockTransaction) => Promise<unknown>) =>
        callback(mockTransaction),
    );
    mockTransaction.users.findUniqueOrThrow.mockResolvedValue({
      first_name: "Test",
      last_name: "Member",
    });
    mockTransaction.savings_circles.findMany.mockResolvedValue([]);
    mockTransaction.circle_members.findMany.mockResolvedValue([]);
    mockTransaction.circle_members.updateMany.mockResolvedValue({ count: 0 });
    mockTransaction.sessions.updateMany.mockResolvedValue({ count: 0 });
    mockTransaction.users.update.mockResolvedValue({});
    mockTransaction.notifications.createMany.mockResolvedValue({ count: 0 });
  });

  it("blocks deletion while any non-archived group is still owned", async () => {
    const groups = [
      { id: "group-1", name: "Active group", status: "ACTIVE" },
      { id: "group-2", name: "Unresolved group", status: "PENDING_RESOLUTION" },
    ];
    mockTransaction.savings_circles.findMany.mockResolvedValue(groups);

    await expect(deleteMeRepo("user-1")).rejects.toEqual(
      expect.objectContaining({
        name: "OwnedGroupsRequireResolutionError",
        message:
          "Resolve, transfer, or archive owned groups before deleting your account",
        groups,
      }),
    );

    expect(mockTransaction.savings_circles.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          owner_id: "user-1",
          status: { not: "ARCHIVED" },
        },
      }),
    );
    expect(mockTransaction.circle_members.updateMany).not.toHaveBeenCalled();
    expect(mockTransaction.sessions.updateMany).not.toHaveBeenCalled();
    expect(mockTransaction.users.update).not.toHaveBeenCalled();
  });

  it("excludes archived groups, anonymizes the user, leaves memberships, revokes sessions, and notifies other owners", async () => {
    mockTransaction.circle_members.findMany.mockResolvedValue([
      {
        savings_circle: {
          id: "owned-archived",
          name: "Archived group",
          owner_id: "user-1",
        },
      },
      {
        savings_circle: {
          id: "other-group",
          name: "Other group",
          owner_id: "other-owner",
        },
      },
    ]);

    await deleteMeRepo("user-1");

    expect(mockTransaction.savings_circles.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { owner_id: "user-1", status: { not: "ARCHIVED" } },
      }),
    );
    expect(mockTransaction.notifications.createMany).toHaveBeenCalledWith({
      data: [
        {
          user_id: "other-owner",
          type: "CIRCLE_UPDATE",
          title: "Member account deleted",
          message: 'Test Member deleted their account and left "Other group".',
          data: {
            event: "MEMBER_ACCOUNT_DELETED",
            circleId: "other-group",
          },
        },
      ],
    });
    expect(mockTransaction.circle_members.updateMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { user_id: "user-1", status: "ACTIVE" },
        data: expect.objectContaining({
          status: "LEFT",
          left_at: expect.any(Date),
        }),
      }),
    );
    expect(mockTransaction.sessions.updateMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { user_id: "user-1", revoked_at: null },
        data: { revoked_at: expect.any(Date) },
      }),
    );
    const updateCall = mockTransaction.users.update.mock.calls[0];
    expect(updateCall).toBeDefined();
    const update = updateCall?.[0];
    expect(update).toMatchObject({
      where: { id: "user-1" },
      data: {
        email: "deleted-user-1@deleted.invalid",
        phone: null,
        first_name: "Deleted",
        last_name: "User",
        avatar_url: null,
        email_verified_at: null,
        status: "UNSUBSCRIBED",
      },
    });
    expect(update?.data.password_hash).toMatch(/^[a-f0-9]{64}$/);
    expect(update?.data.password_hash).not.toBe("old-password-hash");
  });

  it("does not create owner notifications when the user has no active memberships", async () => {
    await deleteMeRepo("user-1");

    expect(mockTransaction.notifications.createMany).not.toHaveBeenCalled();
    expect(mockTransaction.circle_members.updateMany).toHaveBeenCalled();
    expect(mockTransaction.sessions.updateMany).toHaveBeenCalled();
    expect(mockTransaction.users.update).toHaveBeenCalled();
  });
});
