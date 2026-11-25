import { prisma } from "@repo/db";
import {
  cancelOwnershipTransfer,
  closeResolvedGroup,
  listOwnedGroupsForResolution,
  moveGroupToPendingResolution,
  nominateGroupOwner,
  respondToOwnershipTransfer,
} from "../../../src/modules/Groups/ownership.repository.js";

const mockTx = {
  $queryRaw: jest.fn(),
  savings_circles: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
  },
  circle_members: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
  },
  audit_log: {
    create: jest.fn(),
  },
  group_ownership_transfers: {
    findFirst: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    updateMany: jest.fn(),
  },
  notifications: {
    create: jest.fn(),
    createMany: jest.fn(),
  },
  contributions: {
    count: jest.fn(),
    findMany: jest.fn(),
    groupBy: jest.fn(),
    updateMany: jest.fn(),
  },
  payouts: {
    count: jest.fn(),
    groupBy: jest.fn(),
  },
  payment_transactions: {
    count: jest.fn(),
    findMany: jest.fn(),
  },
};

jest.mock("@repo/db", () => ({
  prisma: {
    $transaction: jest.fn(),
    savings_circles: { findMany: jest.fn() },
    contributions: { groupBy: jest.fn() },
    payouts: { groupBy: jest.fn() },
    payment_transactions: { findMany: jest.fn() },
  },
}));

const mockPrisma = prisma as unknown as {
  $transaction: jest.Mock;
  savings_circles: { findMany: jest.Mock };
  contributions: { groupBy: jest.Mock };
  payouts: { groupBy: jest.Mock };
  payment_transactions: { findMany: jest.Mock };
};

const activeGroup = {
  id: "group-1",
  name: "Savings",
  owner_id: "owner-1",
  status: "ACTIVE",
};

const activeTransfer = {
  id: "transfer-1",
  circle_id: "group-1",
  from_user_id: "owner-1",
  to_user_id: "nominee-1",
  status: "PENDING",
  savings_circle: {
    id: "group-1",
    name: "Savings",
    owner_id: "owner-1",
    status: "ACTIVE",
  },
};

function runTransactionWithMocks() {
  mockPrisma.$transaction.mockImplementation(
    async (callback: (tx: typeof mockTx) => Promise<unknown>) =>
      callback(mockTx),
  );
}

describe("ownership repository", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    runTransactionWithMocks();
    mockTx.$queryRaw.mockResolvedValue([]);
    mockTx.savings_circles.findUnique.mockResolvedValue(activeGroup);
    mockTx.savings_circles.update.mockResolvedValue({});
    mockTx.group_ownership_transfers.findFirst.mockResolvedValue(null);
    mockTx.group_ownership_transfers.findMany.mockResolvedValue([]);
    mockTx.group_ownership_transfers.findUnique
      .mockReset()
      .mockResolvedValue(null);
    mockTx.group_ownership_transfers.create.mockResolvedValue({
      id: "transfer-new",
    });
    mockTx.group_ownership_transfers.update.mockResolvedValue({});
    mockTx.group_ownership_transfers.updateMany.mockResolvedValue({ count: 0 });
    mockTx.circle_members.findUnique.mockResolvedValue({
      status: "ACTIVE",
      users: {
        first_name: "New",
        last_name: "Owner",
        status: "VERIFIED",
      },
    });
    mockTx.circle_members.update.mockResolvedValue({});
    mockTx.notifications.create.mockResolvedValue({});
    mockTx.notifications.createMany.mockResolvedValue({ count: 0 });
    mockTx.contributions.count.mockResolvedValue(0);
    mockTx.contributions.updateMany.mockResolvedValue({ count: 0 });
    mockTx.contributions.findMany.mockResolvedValue([]);
    mockTx.circle_members.findMany.mockResolvedValue([]);
    mockTx.audit_log.create.mockResolvedValue({});
    mockTx.payouts.count.mockResolvedValue(0);
    mockTx.payment_transactions.count.mockResolvedValue(0);
    mockTx.group_ownership_transfers.findMany.mockResolvedValue([]);
    mockPrisma.savings_circles.findMany.mockResolvedValue([]);
    mockPrisma.contributions.groupBy.mockResolvedValue([]);
    mockPrisma.payouts.groupBy.mockResolvedValue([]);
    mockPrisma.payment_transactions.findMany.mockResolvedValue([]);
  });

  describe("nominateGroupOwner", () => {
    it.each([
      [
        "group does not exist",
        null,
        "Only the current group owner can transfer ownership",
      ],
      [
        "requester is not the current owner",
        { ...activeGroup, owner_id: "other-owner" },
        "Only the current group owner can transfer ownership",
      ],
      [
        "group is not active",
        { ...activeGroup, status: "PENDING_RESOLUTION" },
        "Only active groups can transfer ownership",
      ],
    ])("rejects when %s", async (_condition, group, message) => {
      mockTx.savings_circles.findUnique.mockResolvedValue(group);

      await expect(
        nominateGroupOwner("group-1", "owner-1", "nominee-1"),
      ).rejects.toThrow(message);
      expect(mockTx.group_ownership_transfers.create).not.toHaveBeenCalled();
    });

    it("rejects transfer to the current owner", async () => {
      await expect(
        nominateGroupOwner("group-1", "owner-1", "owner-1"),
      ).rejects.toThrow("You cannot transfer ownership to yourself");
      expect(mockTx.circle_members.findUnique).not.toHaveBeenCalled();
    });

    it("rejects while another transfer request is pending", async () => {
      mockTx.group_ownership_transfers.findFirst.mockResolvedValueOnce({
        id: "pending-transfer",
      });

      await expect(
        nominateGroupOwner("group-1", "owner-1", "nominee-1"),
      ).rejects.toThrow("A transfer request is already awaiting a response");
      expect(mockTx.group_ownership_transfers.create).not.toHaveBeenCalled();
    });

    it.each([
      ["no membership", null],
      [
        "inactive membership",
        { status: "LEFT", users: { status: "VERIFIED" } },
      ],
      ["deleted user", { status: "ACTIVE", users: { status: "UNSUBSCRIBED" } }],
    ])("rejects a nominee with %s", async (_condition, membership) => {
      mockTx.circle_members.findUnique.mockResolvedValue(membership);

      await expect(
        nominateGroupOwner("group-1", "owner-1", "nominee-1"),
      ).rejects.toThrow("The nominee must be an active group member");
      expect(mockTx.group_ownership_transfers.create).not.toHaveBeenCalled();
    });

    it("rejects a nominee who previously declined ownership", async () => {
      mockTx.group_ownership_transfers.findFirst
        .mockResolvedValueOnce(null)
        .mockResolvedValueOnce({ id: "declined-transfer" });

      await expect(
        nominateGroupOwner("group-1", "owner-1", "nominee-1"),
      ).rejects.toThrow("Choose another member who has not declined");
      expect(mockTx.group_ownership_transfers.create).not.toHaveBeenCalled();
    });

    it("creates a pending transfer, returns the nominee name, and notifies them", async () => {
      await expect(
        nominateGroupOwner("group-1", "owner-1", "nominee-1"),
      ).resolves.toEqual({
        transferId: "transfer-new",
        nomineeName: "New Owner",
      });

      expect(mockTx.group_ownership_transfers.create).toHaveBeenCalledWith({
        data: {
          circle_id: "group-1",
          from_user_id: "owner-1",
          to_user_id: "nominee-1",
        },
      });
      expect(mockTx.$queryRaw).toHaveBeenCalled();
      expect(mockTx.notifications.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            user_id: "nominee-1",
            data: {
              event: "GROUP_OWNERSHIP_TRANSFER",
              transferId: "transfer-new",
              circleId: "group-1",
            },
          }),
        }),
      );
    });
  });

  describe("respondToOwnershipTransfer", () => {
    beforeEach(() => {
      mockTx.group_ownership_transfers.findUnique
        .mockReset()
        .mockResolvedValueOnce({ circle_id: "group-1" })
        .mockResolvedValueOnce(activeTransfer);
    });

    it("rejects when the transfer does not exist", async () => {
      mockTx.group_ownership_transfers.findUnique
        .mockReset()
        .mockResolvedValue(null);

      await expect(
        respondToOwnershipTransfer("missing", "nominee-1", true),
      ).rejects.toThrow("Ownership transfer request not found");
      expect(mockTx.$queryRaw).not.toHaveBeenCalled();
    });

    it("rejects a response from anyone other than the nominated member", async () => {
      mockTx.group_ownership_transfers.findUnique
        .mockReset()
        .mockResolvedValueOnce({ circle_id: "group-1" })
        .mockResolvedValueOnce({ ...activeTransfer, to_user_id: "other-user" });

      await expect(
        respondToOwnershipTransfer("transfer-1", "nominee-1", true),
      ).rejects.toThrow("Ownership transfer request not found");
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
    });

    it("rejects a transfer that has already been resolved", async () => {
      mockTx.group_ownership_transfers.findUnique
        .mockReset()
        .mockResolvedValueOnce({ circle_id: "group-1" })
        .mockResolvedValueOnce({ ...activeTransfer, status: "DECLINED" });

      await expect(
        respondToOwnershipTransfer("transfer-1", "nominee-1", true),
      ).rejects.toThrow("This ownership transfer request is no longer pending");
    });

    it.each([
      [
        "ownership has changed",
        { ...activeTransfer.savings_circle, owner_id: "other" },
      ],
      [
        "group is inactive",
        { ...activeTransfer.savings_circle, status: "PENDING_RESOLUTION" },
      ],
    ])("rejects when %s", async (_condition, group) => {
      mockTx.group_ownership_transfers.findUnique
        .mockReset()
        .mockResolvedValueOnce({ circle_id: "group-1" })
        .mockResolvedValueOnce({ ...activeTransfer, savings_circle: group });

      await expect(
        respondToOwnershipTransfer("transfer-1", "nominee-1", true),
      ).rejects.toThrow(
        "This group is no longer eligible for ownership transfer",
      );
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
    });

    it("records a decline and notifies the current owner", async () => {
      await respondToOwnershipTransfer("transfer-1", "nominee-1", false);

      expect(mockTx.group_ownership_transfers.update).toHaveBeenCalledWith({
        where: { id: "transfer-1" },
        data: { status: "DECLINED", responded_at: expect.any(Date) },
      });
      expect(mockTx.$queryRaw).toHaveBeenCalled();
      expect(mockTx.notifications.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            user_id: "owner-1",
            data: {
              event: "GROUP_OWNERSHIP_TRANSFER_DECLINED",
              circleId: "group-1",
            },
          }),
        }),
      );
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
    });

    it.each([
      ["nominee is no longer a member", null, { status: "ACTIVE" }],
      [
        "nominee is inactive",
        { status: "LEFT", users: { status: "VERIFIED" } },
        { status: "ACTIVE" },
      ],
      [
        "nominee account is deleted",
        { status: "ACTIVE", users: { status: "UNSUBSCRIBED" } },
        { status: "ACTIVE" },
      ],
      [
        "owner is no longer active",
        { status: "ACTIVE", users: { status: "VERIFIED" } },
        null,
      ],
      [
        "owner membership is inactive",
        { status: "ACTIVE", users: { status: "VERIFIED" } },
        { status: "LEFT" },
      ],
    ])(
      "does not accept when %s",
      async (_condition, nomineeMembership, ownerMembership) => {
        mockTx.circle_members.findUnique
          .mockReset()
          .mockResolvedValueOnce(nomineeMembership)
          .mockResolvedValueOnce(ownerMembership);

        await expect(
          respondToOwnershipTransfer("transfer-1", "nominee-1", true),
        ).rejects.toThrow(
          "Both members must remain active to transfer ownership",
        );
        expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
        expect(mockTx.group_ownership_transfers.update).not.toHaveBeenCalled();
      },
    );

    it("transfers group and membership ownership atomically and notifies the former owner", async () => {
      await respondToOwnershipTransfer("transfer-1", "nominee-1", true);

      expect(mockTx.savings_circles.update).toHaveBeenCalledWith({
        where: { id: "group-1" },
        data: { owner_id: "nominee-1" },
      });
      expect(mockTx.$queryRaw).toHaveBeenCalled();
      expect(mockTx.circle_members.update).toHaveBeenNthCalledWith(1, {
        where: {
          circle_id_user_id: { circle_id: "group-1", user_id: "owner-1" },
        },
        data: { role: "MEMBER" },
      });
      expect(mockTx.circle_members.update).toHaveBeenNthCalledWith(2, {
        where: {
          circle_id_user_id: { circle_id: "group-1", user_id: "nominee-1" },
        },
        data: { role: "OWNER" },
      });
      expect(mockTx.group_ownership_transfers.update).toHaveBeenCalledWith({
        where: { id: "transfer-1" },
        data: { status: "ACCEPTED", responded_at: expect.any(Date) },
      });
      expect(mockTx.notifications.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            user_id: "owner-1",
            data: {
              event: "GROUP_OWNERSHIP_TRANSFER_ACCEPTED",
              circleId: "group-1",
            },
          }),
        }),
      );
    });
  });

  describe("cancelOwnershipTransfer", () => {
    it.each([
      ["transfer is missing", null],
      [
        "transfer belongs to another group",
        { ...activeTransfer, circle_id: "other-group" },
      ],
      [
        "requester did not create the transfer",
        { ...activeTransfer, from_user_id: "other-owner" },
      ],
      [
        "requester is no longer the group owner",
        {
          ...activeTransfer,
          savings_circle: { ...activeGroup, owner_id: "other-owner" },
        },
      ],
    ])("rejects when %s", async (_condition, transfer) => {
      mockTx.group_ownership_transfers.findUnique.mockResolvedValue(transfer);

      await expect(
        cancelOwnershipTransfer("group-1", "transfer-1", "owner-1"),
      ).rejects.toThrow("Ownership transfer request not found");
      expect(mockTx.group_ownership_transfers.update).not.toHaveBeenCalled();
    });

    it("rejects cancellation after the request is no longer pending", async () => {
      mockTx.group_ownership_transfers.findUnique.mockResolvedValue({
        ...activeTransfer,
        status: "ACCEPTED",
      });

      await expect(
        cancelOwnershipTransfer("group-1", "transfer-1", "owner-1"),
      ).rejects.toThrow("This ownership transfer request is no longer pending");
    });

    it("cancels the request and notifies its nominee", async () => {
      mockTx.group_ownership_transfers.findUnique.mockResolvedValue(
        activeTransfer,
      );

      await cancelOwnershipTransfer("group-1", "transfer-1", "owner-1");

      expect(mockTx.group_ownership_transfers.update).toHaveBeenCalledWith({
        where: { id: "transfer-1" },
        data: { status: "CANCELLED", responded_at: expect.any(Date) },
      });
      expect(mockTx.$queryRaw).toHaveBeenCalled();
      expect(mockTx.notifications.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            user_id: "nominee-1",
            data: {
              event: "GROUP_OWNERSHIP_TRANSFER_CANCELLED",
              circleId: "group-1",
            },
          }),
        }),
      );
    });
  });

  describe("moveGroupToPendingResolution", () => {
    it("rejects a group that does not exist", async () => {
      mockTx.savings_circles.findUnique.mockResolvedValue(null);

      await expect(
        moveGroupToPendingResolution("missing", "owner-1"),
      ).rejects.toThrow(
        "Only the group owner can change its resolution status",
      );
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
    });

    it("rejects a non-owner", async () => {
      mockTx.savings_circles.findUnique.mockResolvedValue({
        ...activeGroup,
        owner_id: "other-owner",
      });

      await expect(
        moveGroupToPendingResolution("group-1", "owner-1"),
      ).rejects.toThrow(
        "Only the group owner can change its resolution status",
      );
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
    });

    it("is idempotent when already pending resolution", async () => {
      mockTx.savings_circles.findUnique.mockResolvedValue({
        ...activeGroup,
        status: "PENDING_RESOLUTION",
      });

      await expect(
        moveGroupToPendingResolution("group-1", "owner-1"),
      ).resolves.toBeUndefined();
      expect(mockTx.group_ownership_transfers.findMany).not.toHaveBeenCalled();
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
    });

    it("rejects an archived group", async () => {
      mockTx.savings_circles.findUnique.mockResolvedValue({
        ...activeGroup,
        status: "ARCHIVED",
      });

      await expect(
        moveGroupToPendingResolution("group-1", "owner-1"),
      ).rejects.toThrow("This group cannot enter pending resolution");
    });

    it("cancels pending transfer requests, notifies nominees, and changes group status", async () => {
      mockTx.group_ownership_transfers.findMany.mockResolvedValue([
        { id: "transfer-1", to_user_id: "nominee-1" },
        { id: "transfer-2", to_user_id: "nominee-2" },
      ]);

      await moveGroupToPendingResolution("group-1", "owner-1");

      expect(mockTx.group_ownership_transfers.updateMany).toHaveBeenCalledWith({
        where: { id: { in: ["transfer-1", "transfer-2"] } },
        data: { status: "CANCELLED", responded_at: expect.any(Date) },
      });
      expect(mockTx.notifications.createMany).toHaveBeenCalledWith({
        data: expect.arrayContaining([
          expect.objectContaining({ user_id: "nominee-1" }),
          expect.objectContaining({ user_id: "nominee-2" }),
        ]),
      });
      expect(mockTx.contributions.updateMany).toHaveBeenCalledWith({
        where: {
          status: "PENDING",
          due_date: { gte: expect.any(Date) },
          circle_id: "group-1",
        },
        data: { status: "CANCELLED" },
      });
      expect(mockTx.savings_circles.update).toHaveBeenCalledWith({
        where: { id: "group-1" },
        data: { status: "PENDING_RESOLUTION" },
      });
      expect(mockTx.$queryRaw).toHaveBeenCalled();
    });
  });

  describe("closeResolvedGroup", () => {
    it("requires explicit confirmation before starting a transaction", async () => {
      await expect(
        closeResolvedGroup("group-1", "owner-1", false),
      ).rejects.toThrow(
        "Confirm that there are no unresolved disputes before closing",
      );
      expect(mockPrisma.$transaction).not.toHaveBeenCalled();
    });

    it.each([
      ["group does not exist", null],
      [
        "requester is not the owner",
        { ...activeGroup, owner_id: "other-owner" },
      ],
    ])("rejects when %s", async (_condition, group) => {
      mockTx.savings_circles.findUnique.mockResolvedValue(group);

      await expect(
        closeResolvedGroup("group-1", "owner-1", true),
      ).rejects.toThrow("Only the group owner can close this group");
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
    });

    it.each(["ACTIVE", "ARCHIVED"])(
      "rejects a group in %s status",
      async (status) => {
        mockTx.savings_circles.findUnique.mockResolvedValue({
          ...activeGroup,
          status,
        });

        await expect(
          closeResolvedGroup("group-1", "owner-1", true),
        ).rejects.toThrow("Only groups pending resolution can be closed");
        expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
      },
    );

    it("refuses closure only while payments are in flight", async () => {
      mockTx.savings_circles.findUnique.mockResolvedValue({
        ...activeGroup,
        status: "PENDING_RESOLUTION",
      });
      mockTx.payment_transactions.count.mockResolvedValue(1);

      await expect(
        closeResolvedGroup("group-1", "owner-1", true),
      ).rejects.toThrow("Payments or payouts are still being processed for this group");
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
      expect(mockTx.audit_log.create).not.toHaveBeenCalled();
    });

    it("refuses closure while a payout is still being processed", async () => {
      mockTx.savings_circles.findUnique.mockResolvedValue({
        ...activeGroup,
        status: "PENDING_RESOLUTION",
      });
      mockTx.payouts.count.mockResolvedValueOnce(1);

      await expect(
        closeResolvedGroup("group-1", "owner-1", true),
      ).rejects.toThrow("still being processed");
      expect(mockTx.payouts.count).toHaveBeenCalledWith({
        where: {
          circle_id: "group-1",
          status: "PROCESSING",
          NOT: {
            payment_transaction: {
              is: expect.objectContaining({ OR: expect.any(Array) }),
            },
          },
        },
      });
      expect(mockTx.savings_circles.update).not.toHaveBeenCalled();
      expect(mockTx.audit_log.create).not.toHaveBeenCalled();
    });

    it("archives the group even with unpaid contributions and records them in the group history", async () => {
      mockTx.savings_circles.findUnique.mockResolvedValue({
        ...activeGroup,
        status: "PENDING_RESOLUTION",
      });
      mockTx.contributions.findMany.mockResolvedValue([
        {
          circle_member: "left-1",
          cycle_number: 1,
          amount: 2500,
          due_date: new Date("2026-01-01T00:00:00.000Z"),
          users: { first_name: "Deleted", last_name: "User" },
        },
        {
          circle_member: "left-1",
          cycle_number: 2,
          amount: 2500,
          due_date: new Date("2026-02-01T00:00:00.000Z"),
          users: { first_name: "Deleted", last_name: "User" },
        },
        {
          circle_member: "active-1",
          cycle_number: 2,
          amount: 2500,
          due_date: new Date("2026-02-01T00:00:00.000Z"),
          users: { first_name: "Ada", last_name: "Obi" },
        },
      ]);
      mockTx.circle_members.findMany.mockResolvedValue([
        { user_id: "left-1", status: "LEFT" },
        { user_id: "active-1", status: "ACTIVE" },
      ]);
      // 1st call: payouts being processed (none); 2nd: unsettled payouts.
      mockTx.payouts.count.mockResolvedValueOnce(0).mockResolvedValueOnce(1);

      await expect(
        closeResolvedGroup("group-1", "owner-1", true),
      ).resolves.toBeUndefined();

      // future cycles cancelled, then only in-flight payments are checked
      expect(mockTx.contributions.updateMany).toHaveBeenCalledWith({
        where: {
          status: "PENDING",
          due_date: { gte: expect.any(Date) },
          circle_id: "group-1",
        },
        data: { status: "CANCELLED" },
      });
      expect(mockTx.contributions.count).not.toHaveBeenCalled();

      expect(mockTx.audit_log.create).toHaveBeenCalledWith({
        data: {
          user_id: "owner-1",
          action: "GROUP_CLOSED",
          entity_type: "savings_circle",
          entity_id: "group-1",
          metadata: {
            unpaidContributions: [
              {
                userId: "left-1",
                name: "Deleted User",
                memberStatus: "LEFT",
                cycles: [1, 2],
                amount: 5000,
              },
              {
                userId: "active-1",
                name: "Ada Obi",
                memberStatus: "ACTIVE",
                cycles: [2],
                amount: 2500,
              },
            ],
            unpaidTotal: 7500,
            unsettledPayouts: 1,
          },
        },
      });
      expect(mockTx.savings_circles.update).toHaveBeenCalledWith({
        where: { id: "group-1" },
        data: { status: "ARCHIVED" },
      });
      expect(mockTx.$queryRaw).toHaveBeenCalled();
    });

    it("archives a fully settled group and still writes a history entry", async () => {
      mockTx.savings_circles.findUnique.mockResolvedValue({
        ...activeGroup,
        status: "PENDING_RESOLUTION",
      });

      await expect(
        closeResolvedGroup("group-1", "owner-1", true),
      ).resolves.toBeUndefined();

      expect(mockTx.audit_log.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          action: "GROUP_CLOSED",
          metadata: {
            unpaidContributions: [],
            unpaidTotal: 0,
            unsettledPayouts: 0,
          },
        }),
      });
      expect(mockTx.savings_circles.update).toHaveBeenCalled();
    });
  });

  describe("listOwnedGroupsForResolution", () => {
    it("returns no records without querying obligations when the owner has no groups", async () => {
      mockPrisma.savings_circles.findMany.mockResolvedValue([]);

      await expect(listOwnedGroupsForResolution("owner-1")).resolves.toEqual(
        [],
      );

      expect(mockPrisma.contributions.groupBy).not.toHaveBeenCalled();
      expect(mockPrisma.payouts.groupBy).not.toHaveBeenCalled();
      expect(mockPrisma.payment_transactions.findMany).not.toHaveBeenCalled();
    });

    it("reports zero obligations and no pending transfer when none are found", async () => {
      mockPrisma.savings_circles.findMany.mockResolvedValue([
        {
          id: "group-1",
          name: "Savings",
          status: "ACTIVE",
          circle_members: [],
          ownership_transfers: [],
        },
      ]);

      await expect(listOwnedGroupsForResolution("owner-1")).resolves.toEqual([
        {
          id: "group-1",
          name: "Savings",
          status: "ACTIVE",
          eligibleMembers: [],
          pendingTransfer: null,
          outstandingContributions: 0,
          outstandingAmount: 0,
          outstandingPayouts: 0,
          processingPayments: 0,
        },
      ]);
    });

    it("excludes deleted and previously declining nominees and reports obligations", async () => {
      mockPrisma.savings_circles.findMany.mockResolvedValue([
        {
          id: "group-1",
          name: "Savings",
          status: "ACTIVE",
          circle_members: [
            {
              users: {
                id: "eligible",
                first_name: "Eligible",
                last_name: "Member",
                status: "VERIFIED",
              },
            },
            {
              users: {
                id: "deleted",
                first_name: "Deleted",
                last_name: "Member",
                status: "UNSUBSCRIBED",
              },
            },
            {
              users: {
                id: "declined",
                first_name: "Declined",
                last_name: "Member",
                status: "VERIFIED",
              },
            },
          ],
          ownership_transfers: [
            {
              id: "pending-transfer",
              status: "PENDING",
              to_user_id: "eligible",
              created_at: new Date("2026-01-02T00:00:00.000Z"),
              to_user: {
                id: "eligible",
                first_name: "Eligible",
                last_name: "Member",
              },
            },
            {
              id: "declined-transfer",
              status: "DECLINED",
              to_user_id: "declined",
              to_user: {
                id: "declined",
                first_name: "Declined",
                last_name: "Member",
              },
            },
          ],
        },
      ]);
      mockPrisma.contributions.groupBy.mockResolvedValue([
        { circle_id: "group-1", _count: { _all: 2 }, _sum: { amount: 5000 } },
      ]);
      // 1st call: unsettled payouts; 2nd call: payouts being processed.
      mockPrisma.payouts.groupBy
        .mockResolvedValueOnce([{ circle_id: "group-1", _count: { _all: 1 } }])
        .mockResolvedValueOnce([{ circle_id: "group-1", _count: { _all: 1 } }]);
      mockPrisma.payment_transactions.findMany.mockResolvedValue([
        {
          contribution: { circle_id: "group-1" },
          payout: null,
        },
        {
          contribution: null,
          payout: { circle_id: "group-1" },
        },
        {
          contribution: null,
          payout: null,
        },
      ]);

      await expect(listOwnedGroupsForResolution("owner-1")).resolves.toEqual([
        {
          id: "group-1",
          name: "Savings",
          status: "ACTIVE",
          eligibleMembers: [{ id: "eligible", name: "Eligible Member" }],
          pendingTransfer: {
            id: "pending-transfer",
            nomineeId: "eligible",
            nomineeName: "Eligible Member",
            createdAt: new Date("2026-01-02T00:00:00.000Z"),
          },
          outstandingContributions: 2,
          outstandingAmount: 5000,
          outstandingPayouts: 1,
          // 2 in-flight transactions + 1 payout being processed
          processingPayments: 3,
        },
      ]);
    });
  });
});
