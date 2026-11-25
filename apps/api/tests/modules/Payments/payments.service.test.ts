import crypto from "node:crypto";
import { PaymentsService } from "../../../src/modules/Payments/payments.service.js";
import {
  findDueContributions,
  findTransactionByReference,
  markTransactionPaid,
} from "../../../src/modules/Payments/payments.repository.js";

jest.mock("../../../src/modules/Payments/payments.repository", () => ({
  createPendingTransaction: jest.fn(),
  findContributionForPayment: jest.fn(),
  findDueContributions: jest.fn(),
  findTransactionByReference: jest.fn(),
  findUser: jest.fn(),
  findUserTransaction: jest.fn(),
  findUserTransactions: jest.fn(),
  markTransactionPaid: jest.fn(),
}));

jest.mock(
  "../../../src/modules/Contributions/contributions.repository",
  () => ({
    markOverdueContributions: jest.fn().mockResolvedValue(0),
    cancelUpcomingContributions: jest.fn(),
  }),
);

describe("PaymentsService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("verifies Paystack's signature before marking a transaction paid", async () => {
    const service = new PaymentsService();
    const previousSecret = process.env.PAYSTACK_SECRET_KEY;
    const secret = "test-paystack-secret";
    process.env.PAYSTACK_SECRET_KEY = secret;
    const event = {
      event: "charge.success",
      data: { reference: "MC-123", id: 98765, status: "success" },
    };
    const body = JSON.stringify(event);
    const signature = crypto
      .createHmac("sha512", secret)
      .update(body)
      .digest("hex");
    jest.mocked(findTransactionByReference).mockResolvedValue({
      id: "transaction-1",
      status: "PENDING",
      provider_reference: null,
    } as never);

    try {
      await service.handlePaystackWebhook(signature, body, event);

      expect(findTransactionByReference).toHaveBeenCalledWith("MC-123");
      expect(markTransactionPaid).toHaveBeenCalledWith(
        "transaction-1",
        "98765",
        event.data,
      );
    } finally {
      if (previousSecret === undefined) delete process.env.PAYSTACK_SECRET_KEY;
      else process.env.PAYSTACK_SECRET_KEY = previousSecret;
    }
  });

  it("rejects an invalid Paystack signature without querying transactions", async () => {
    const service = new PaymentsService();
    const previousSecret = process.env.PAYSTACK_SECRET_KEY;
    process.env.PAYSTACK_SECRET_KEY = "test-paystack-secret";

    try {
      await expect(
        service.handlePaystackWebhook(
          "invalid-signature",
          '{"event":"charge.success"}',
          { event: "charge.success" },
        ),
      ).rejects.toThrow("Invalid signature");
      expect(findTransactionByReference).not.toHaveBeenCalled();
      expect(markTransactionPaid).not.toHaveBeenCalled();
    } finally {
      if (previousSecret === undefined) delete process.env.PAYSTACK_SECRET_KEY;
      else process.env.PAYSTACK_SECRET_KEY = previousSecret;
    }
  });

  it("lists overdue contributions first, then the next upcoming one per group", async () => {
    const service = new PaymentsService();
    const now = new Date("2026-03-10T12:00:00.000Z");
    const dueDate = new Date("2026-03-10T23:59:00.000Z");
    const pastDueDate = new Date("2026-03-09T12:00:00.000Z");
    jest.useFakeTimers().setSystemTime(now);
    jest.mocked(findDueContributions).mockResolvedValue([
      {
        id: "contribution-due",
        circle_id: "circle-1",
        amount: 2500,
        cycle_number: 1,
        due_date: dueDate,
        status: "PENDING",
        savings_circle: {
          name: "Savings",
          currency: "NGN",
        },
      },
      {
        id: "contribution-past-due",
        circle_id: "circle-2",
        amount: 3000,
        cycle_number: 2,
        due_date: pastDueDate,
        status: "PENDING",
        savings_circle: {
          name: "Travel",
          currency: "NGN",
        },
      },
    ] as never);

    try {
      await expect(service.getDueContributions("user-1")).resolves.toEqual([
        {
          id: "contribution-past-due",
          groupId: "circle-2",
          groupName: "Travel",
          amount: 3000,
          currency: "NGN",
          cycle: 2,
          dueDate: pastDueDate,
          status: "OVERDUE",
        },
        {
          id: "contribution-due",
          groupId: "circle-1",
          groupName: "Savings",
          amount: 2500,
          currency: "NGN",
          cycle: 1,
          dueDate,
          status: "PENDING",
        },
      ]);
    } finally {
      jest.useRealTimers();
    }
  });

  it("only offers the next upcoming cycle per group and keeps a contribution due today pending", async () => {
    const service = new PaymentsService();
    jest.useFakeTimers().setSystemTime(new Date("2026-03-10T12:00:00.000Z"));
    const row = (id: string, cycle: number, due: string, status = "PENDING") => ({
      id,
      circle_id: "circle-1",
      amount: 2500,
      cycle_number: cycle,
      due_date: new Date(due),
      status,
      savings_circle: { name: "Savings", currency: "NGN" },
    });
    jest.mocked(findDueContributions).mockResolvedValue([
      row("late", 1, "2026-03-01T00:00:00.000Z", "OVERDUE"),
      row("today", 2, "2026-03-10T00:00:00.000Z"),
      row("later-1", 3, "2026-04-10T00:00:00.000Z"),
      row("later-2", 4, "2026-05-10T00:00:00.000Z"),
    ] as never);

    try {
      const result = await service.getDueContributions("user-1");
      expect(result.map((c) => [c.id, c.status])).toEqual([
        ["late", "OVERDUE"],
        ["today", "PENDING"],
      ]);
    } finally {
      jest.useRealTimers();
    }
  });
});
