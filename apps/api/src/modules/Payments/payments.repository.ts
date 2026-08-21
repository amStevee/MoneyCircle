import { prisma } from "@repo/db";
import type { Prisma } from "@repo/db";

/**
 * Payment transaction returned by the payments list endpoint.
 */
type UserTransaction = Prisma.payment_transactionsGetPayload<{
  include: {
    contribution: {
      include: {
        savings_circle: {
          select: {
            id: true;
            name: true;
          };
        };
      };
    };
    payout: {
      include: {
        savings_circle: {
          select: {
            id: true;
            name: true;
          };
        };
      };
    };
  };
}>;

/**
 * Payment transaction returned by the payment details endpoint.
 */
type UserTransactionDetails = Prisma.payment_transactionsGetPayload<{
  include: {
    contribution: {
      include: {
        savings_circle: true;
      };
    };
    payout: {
      include: {
        savings_circle: true;
      };
    };
    payment_status_history: {
      orderBy: {
        created_at: "asc";
      };
    };
  };
}>;

/**
 * Contribution returned when listing outstanding contributions.
 */
type DueContribution = Prisma.contributionsGetPayload<{
  include: {
    savings_circle: {
      select: {
        id: true;
        name: true;
        currency: true;
      };
    };
  };
}>;

/**
 * Contribution returned when initializing a payment.
 */
type ContributionForPayment = Prisma.contributionsGetPayload<{
  include: {
    savings_circle: true;
  };
}>;

/**
 * User returned by findUser.
 */
type PaymentUser = Prisma.usersGetPayload<{}>;

/**
 * Transaction created by createPendingTransaction.
 */
type CreatedTransaction = Prisma.payment_transactionsGetPayload<{}>;

/**
 * Metadata accepted by the payment repository.
 */
type PaymentMetadata = Prisma.InputJsonValue;

/**
 * Find all transactions belonging to a user.
 */
async function findUserTransactions(
  userId: string,
): Promise<UserTransaction[]> {
  return prisma.payment_transactions.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      contribution: {
        include: {
          savings_circle: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      payout: {
        include: {
          savings_circle: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
}

/**
 * Find one transaction belonging to a user.
 */
async function findUserTransaction(
  userId: string,
  transactionId: string,
): Promise<UserTransactionDetails | null> {
  return prisma.payment_transactions.findFirst({
    where: {
      id: transactionId,
      user_id: userId,
    },
    include: {
      contribution: {
        include: {
          savings_circle: true,
        },
      },
      payout: {
        include: {
          savings_circle: true,
        },
      },
      payment_status_history: {
        orderBy: {
          created_at: "asc",
        },
      },
    },
  });
}

/**
 * Find outstanding contributions for a user.
 */
async function findDueContributions(
  userId: string,
): Promise<DueContribution[]> {
  return prisma.contributions.findMany({
    where: {
      circle_member: userId,
      status: {
        in: ["PENDING", "OVERDUE"],
      },
    },
    orderBy: {
      due_date: "asc",
    },
    include: {
      savings_circle: {
        select: {
          id: true,
          name: true,
          currency: true,
        },
      },
    },
  });
}

/**
 * Find a contribution that can be paid by a user.
 */
async function findContributionForPayment(
  contributionId: string,
  userId: string,
): Promise<ContributionForPayment | null> {
  return prisma.contributions.findFirst({
    where: {
      id: contributionId,
      circle_member: userId,
      status: {
        in: ["PENDING", "OVERDUE"],
      },
    },
    include: {
      savings_circle: true,
    },
  });
}

/**
 * Find a user.
 */
async function findUser(userId: string): Promise<PaymentUser | null> {
  return prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
}

/**
 * Create a pending payment transaction and
 * its initial status history entry atomically.
 */
async function createPendingTransaction(data: {
  userId: string;
  contributionId: string;
  reference: string;
  idempotencyKey: string;
  amount: number;
  currency: string;
  metadata: PaymentMetadata;
}): Promise<CreatedTransaction> {
  return prisma.$transaction(async (tx) => {
    const transaction = await tx.payment_transactions.create({
      data: {
        user_id: data.userId,
        refernce: data.reference,
        idempotency_key: data.idempotencyKey,
        provider: "PAYSTACK",
        type: "CONTRIBUTION",
        amount: data.amount,
        currency: data.currency,
        status: "PENDING",
        metadata: data.metadata,
        contribution: {
          connect: {
            id: data.contributionId,
          },
        },
      },
    });

    await tx.payment_status_history.create({
      data: {
        transaction_id: transaction.id,
        status: "PENDING",
        message: "Paystack payment initialized",
        metadata: data.metadata,
      },
    });

    return transaction;
  });
}

/**
 * Find a transaction by its internal reference.
 */
async function findTransactionByReference(
  reference: string,
): Promise<CreatedTransaction | null> {
  return prisma.payment_transactions.findUnique({
    where: {
      refernce: reference,
    },
  });
}

/**
 * Mark a transaction as paid and update
 * the associated contribution atomically.
 */
async function markTransactionPaid(
  transactionId: string,
  providerReference: string | null,
  metadata: PaymentMetadata,
): Promise<CreatedTransaction> {
  return prisma.$transaction(async (tx) => {
    const transaction = await tx.payment_transactions.update({
      where: {
        id: transactionId,
      },
      data: {
        status: "PAID",
        provider_reference: providerReference,
      },
    });

    await tx.payment_status_history.create({
      data: {
        transaction_id: transactionId,
        status: "PAID",
        message: "Paystack payment confirmed",
        metadata,
      },
    });

    await tx.contributions.updateMany({
      where: {
        transaction_id: transactionId,
      },
      data: {
        status: "PAID",
        paid_at: new Date(),
      },
    });

    return transaction;
  });
}

export {
  createPendingTransaction,
  findContributionForPayment,
  findDueContributions,
  findTransactionByReference,
  findUser,
  findUserTransaction,
  findUserTransactions,
  markTransactionPaid,
};
