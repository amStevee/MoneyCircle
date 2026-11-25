/**
 * Single source of truth for "when is a contribution overdue / outstanding?".
 *
 * Before this file existed the rule `due_date < now` was copy-pasted into the
 * dashboard service (twice) and the payments service, and nothing ever wrote
 * OVERDUE back to the database. Every module must now use these helpers.
 *
 * All day boundaries are UTC. A contribution due on 25 Nov is NOT overdue
 * until 26 Nov 00:00 UTC (01:00 in Nigeria), so the member has the whole due
 * day to pay.
 */

export const STALE_PAYMENT_MS = 24 * 60 * 60 * 1000;

export function startOfUtcDay(now: Date = new Date()): Date {
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
}

export function startOfNextUtcDay(now: Date = new Date()): Date {
  const start = startOfUtcDay(now);
  start.setUTCDate(start.getUTCDate() + 1);
  return start;
}

type ContributionLike = { status: string; due_date: Date };

/** True once the whole due day has passed and the contribution is still unpaid. */
export function isContributionOverdue(
  contribution: ContributionLike,
  now: Date = new Date(),
): boolean {
  if (contribution.status === "OVERDUE") return true;
  if (contribution.status !== "PENDING") return false;
  return contribution.due_date < startOfUtcDay(now);
}

/**
 * Prisma `where` for contributions that block closing a group: failed or
 * overdue ones, plus anything still pending that is due today or earlier.
 * Future cycles are deliberately excluded - they are not an obligation yet.
 */
export function outstandingContributionWhere(now: Date = new Date()) {
  return {
    OR: [
      { status: { in: ["OVERDUE", "FAILED"] as ("OVERDUE" | "FAILED")[] } },
      {
        status: "PENDING" as const,
        due_date: { lt: startOfNextUtcDay(now) },
      },
    ],
  };
}

/**
 * Prisma `where` for payments that are genuinely in flight. A Paystack
 * checkout the user abandoned stays PENDING forever, so PENDING only counts
 * while it is recent.
 */
export function inFlightPaymentWhere(now: Date = new Date()) {
  return {
    OR: [
      { status: "PROCESSING" as const },
      {
        status: "PENDING" as const,
        created_at: { gte: new Date(now.getTime() - STALE_PAYMENT_MS) },
      },
    ],
  };
}
