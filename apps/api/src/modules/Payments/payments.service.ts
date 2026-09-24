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
import { calculateCircleDueDate } from "../../utils.js";

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
  /**
   * If a transaction is still PENDING, check its real status
   * directly with Paystack instead of waiting on the webhook.
   *
   * The webhook remains the source of truth for background
   * confirmation, but relying on it alone means a user who is
   * redirected straight back from checkout can see a stale
   * "pending" status if the webhook hasn't arrived yet (or is
   * unreachable, e.g. in local development). Verifying on read
   * closes that gap without needing the frontend to poll.
   */
  private async verifyPendingTransaction<
    T extends { id: string; refernce: string; status: string; provider_reference: string | null },
  >(transaction: T): Promise<T> {
    if (transaction.status !== "PENDING") return transaction;

    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) return transaction;

    try {
      const response = await fetch(
        `https://api.paystack.co/transaction/verify/${encodeURIComponent(transaction.refernce)}`,
        {
          headers: {
            Authorization: `Bearer ${secret}`,
          },
        },
      );

      const payload = await response.json();

      if (
        response.ok &&
        payload?.status &&
        payload?.data?.status === "success"
      ) {
        await markTransactionPaid(
          transaction.id,
          payload.data.id
            ? String(payload.data.id)
            : transaction.provider_reference,
          payload.data,
        );

        return { ...transaction, status: "PAID" };
      }
    } catch {
      /**
       * Paystack unreachable or verification failed - leave the
       * status as-is. The webhook will still update it later.
       */
    }

    return transaction;
  }

  async getPayments(userId: string): Promise<SerializedTransaction[]> {
    const transactions = await findUserTransactions(userId);

    const verified = await Promise.all(
      transactions.map((transaction) =>
        this.verifyPendingTransaction(transaction),
      ),
    );

    return verified.map(serializeTransaction);
  }

  async getPayment(
    userId: string,
    transactionId: string,
  ): Promise<PaymentResponse> {
    const transaction = await findUserTransaction(userId, transactionId);
    if (!transaction) throw new Error("Payment not found");

    if (transaction.status === "PENDING") {
      await this.verifyPendingTransaction(transaction);
    }

    /**
     * Re-fetch after verification so the returned status and
     * status history reflect the just-confirmed payment.
     */
    const latest =
      transaction.status === "PENDING"
        ? ((await findUserTransaction(userId, transactionId)) ?? transaction)
        : transaction;

    return {
      ...serializeTransaction(latest),
      history: latest.payment_status_history,
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
      dueDate: calculateCircleDueDate(
        (contribution.savings_circle as typeof contribution.savings_circle & {
          start_date: Date;
        }).start_date,
        (contribution.savings_circle as typeof contribution.savings_circle & {
          frequency: Parameters<typeof calculateCircleDueDate>[1];
        }).frequency,
        contribution.cycle_number,
      ),
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
