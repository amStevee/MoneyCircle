import { prisma } from "@repo/db";
import type { Prisma } from "@repo/db";
import { startOfUtcDay } from "./contribution-status.js";

/**
 * Persist the OVERDUE status. Contributions are created as PENDING for every
 * cycle up front and nothing else flips them, so we do it lazily whenever
 * someone reads their contributions. It is one indexed UPDATE and idempotent.
 * (A scheduled job would be the long-term home for this.)
 */
async function markOverdueContributions(
  scope: { userId?: string; circleIds?: string[] } = {},
  now: Date = new Date(),
): Promise<number> {
  const result = await prisma.contributions.updateMany({
    where: {
      status: "PENDING",
      due_date: { lt: startOfUtcDay(now) },
      ...(scope.userId ? { circle_member: scope.userId } : {}),
      ...(scope.circleIds ? { circle_id: { in: scope.circleIds } } : {}),
    },
    data: { status: "OVERDUE" },
  });
  return result.count;
}

/**
 * Cancel unpaid PENDING contributions that fall due on/after `from`.
 * Used when a group winds down or a member leaves, so future cycles stop
 * showing up as "upcoming" and stop blocking the group from being closed.
 * PAID / OVERDUE / FAILED rows are never touched - those are real records.
 */
async function cancelUpcomingContributions(
  client: Pick<Prisma.TransactionClient, "contributions">,
  params: { from: Date; circleId?: string; userId?: string },
): Promise<number> {
  const result = await client.contributions.updateMany({
    where: {
      status: "PENDING",
      due_date: { gte: params.from },
      ...(params.circleId ? { circle_id: params.circleId } : {}),
      ...(params.userId ? { circle_member: params.userId } : {}),
    },
    data: { status: "CANCELLED" },
  });
  return result.count;
}

export { markOverdueContributions, cancelUpcomingContributions };
