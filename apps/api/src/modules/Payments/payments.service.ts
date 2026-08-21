import crypto from "node:crypto";
import { z } from "zod";
import {
  createPendingTransaction,
  findContributionForPayment,
  findDueContributions,
  findTransactionByReference,
  findUser,
  findUserTransaction,
  findUserTransactions,
  markTransactionPaid,
} from "./payments.repository.js";

type SerializedTransaction = {
  id: string;
  reference: string;
  providerReference: string | null;
  groupId: string | null;
  groupName: string;
  amount: number;
  currency: string;
  date: Date;
  status: string;
  type: string;
  cycle: number | null;
};

type PaymentHistoryItem = {
  id: string;
  transaction_id: string;
  status: string;
  created_at: Date;
};

type PaymentResponse = SerializedTransaction & {
  history: PaymentHistoryItem[];
};

type DueContributionResponse = {
  id: string;
  groupId: string;
  groupName: string;
  amount: number;
  currency: string;
  cycle: number;
  dueDate: Date;
  status: string;
};

const initializePaymentSchema = z.object({ contributionId: z.string().uuid() });
export type InitializePaymentInput = z.infer<typeof initializePaymentSchema>;

function serializeTransaction(transaction: any): SerializedTransaction {
  return {
    id: transaction.id,
    reference: transaction.refernce,
    providerReference: transaction.provider_reference,
    groupId:
      transaction.contribution?.circle_id ??
      transaction.payout?.circle_id ??
      null,
    groupName:
      transaction.contribution?.savings_circle.name ??
      transaction.payout?.savings_circle.name ??
      "",
    amount: Number(transaction.amount),
    currency: transaction.currency,
    date: transaction.created_at,
    status: transaction.status,
    type: transaction.type,
    cycle:
      transaction.contribution?.cycle_number ??
      transaction.payout?.cycle_number ??
      null,
  };
}

class PaymentsService {
  async getPayments(userId: string): Promise<SerializedTransaction[]> {
    const transactions = await findUserTransactions(userId);
    return transactions.map(serializeTransaction);
  }

  async getPayment(
    userId: string,
    transactionId: string,
  ): Promise<PaymentResponse> {
    const transaction = await findUserTransaction(userId, transactionId);
    if (!transaction) throw new Error("Payment not found");
    return {
      ...serializeTransaction(transaction),
      history: transaction.payment_status_history,
    };
  }

  async getDueContributions(
    userId: string,
  ): Promise<DueContributionResponse[]> {
    const contributions = await findDueContributions(userId);
    return contributions.map((contribution) => ({
      id: contribution.id,
      groupId: contribution.circle_id,
      groupName: contribution.savings_circle.name,
      amount: Number(contribution.amount),
      currency: contribution.savings_circle.currency,
      cycle: contribution.cycle_number,
      dueDate: contribution.due_date,
      status: contribution.status,
    }));
  }

  async initializeContributionPayment(
    userId: string,
    input: InitializePaymentInput,
  ) {
    const result = initializePaymentSchema.safeParse(input);
    if (!result.success) throw new Error("A valid contributionId is required");

    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) throw new Error("Payment provider is not configured");

    const [contribution, user] = await Promise.all([
      findContributionForPayment(result.data.contributionId, userId),
      findUser(userId),
    ]);

    if (!contribution)
      throw new Error("Contribution not found or already paid");
    if (!user) throw new Error("User not found");

    const reference = `MC-${Date.now()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
    const idempotencyKey = crypto.randomUUID();
    const amount = Number(contribution.amount);
    const metadata = {
      contributionId: contribution.id,
      groupId: contribution.circle_id,
    };

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          amount: Math.round(amount * 100),
          currency: contribution.savings_circle.currency,
          reference,
          callback_url: process.env.PAYSTACK_CALLBACK_URL,
          metadata,
        }),
      },
    );

    const payload = await response.json();
    if (!response.ok || !payload?.status || !payload?.data?.authorization_url) {
      throw new Error(payload?.message ?? "Unable to initialize payment");
    }

    const transaction = await createPendingTransaction({
      userId,
      contributionId: contribution.id,
      reference,
      idempotencyKey,
      amount,
      currency: contribution.savings_circle.currency,
      metadata: {
        ...metadata,
        authorizationUrl: payload.data.authorization_url,
      },
    });

    return {
      transactionId: transaction.id,
      authorizationUrl: payload.data.authorization_url,
      reference,
    };
  }

  async handlePaystackWebhook(
    signature: string | undefined,
    body: string,
    event: any,
  ) {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret || !signature) throw new Error("Unauthorized");

    const expected = crypto
      .createHmac("sha512", secret)
      .update(body)
      .digest("hex");
    if (
      signature.length !== expected.length ||
      !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
    ) {
      throw new Error("Invalid signature");
    }

    if (event?.event !== "charge.success" || !event?.data?.reference) return;

    const transaction = await findTransactionByReference(event.data.reference);
    if (!transaction || transaction.status === "PAID") return;

    await markTransactionPaid(
      transaction.id,
      event.data.id ? String(event.data.id) : transaction.provider_reference,
      event.data,
    );
  }
}

const paymentsService = new PaymentsService();
export { PaymentsService, paymentsService };
