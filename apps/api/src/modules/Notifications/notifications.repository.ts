import { prisma } from "@repo/db";
import type { Prisma } from "@repo/db";

type UserNotification = Prisma.notificationsGetPayload<{}>;

/**
 * Find a user's most recent notifications.
 */
async function findUserNotifications(
  userId: string,
  limit = 20,
): Promise<UserNotification[]> {
  return prisma.notifications.findMany({
    where: {
      user_id: userId,
    },

    orderBy: {
      created_at: "desc",
    },

    take: limit,
  });
}

/**
 * Count a user's unread notifications.
 */
async function countUnreadNotifications(userId: string): Promise<number> {
  return prisma.notifications.count({
    where: {
      user_id: userId,
      read_at: null,
    },
  });
}

/**
 * Mark a single notification as read. Scoped to the
 * requesting user so one user can't mark another's as read.
 */
async function markNotificationRead(
  notificationId: string,
  userId: string,
): Promise<void> {
  await prisma.notifications.updateMany({
    where: {
      id: notificationId,
      user_id: userId,
    },

    data: {
      read_at: new Date(),
    },
  });
}

/**
 * Mark all of a user's unread notifications as read.
 */
async function markAllNotificationsRead(userId: string): Promise<void> {
  await prisma.notifications.updateMany({
    where: {
      user_id: userId,
      read_at: null,
    },

    data: {
      read_at: new Date(),
    },
  });
}

/**
 * Current status of ownership-transfer requests, so notifications can stop
 * offering Accept/Decline once a request is no longer pending.
 */
async function findTransferStatuses(
  transferIds: string[],
): Promise<{ id: string; status: string }[]> {
  if (!transferIds.length) return [];
  return prisma.group_ownership_transfers.findMany({
    where: { id: { in: transferIds } },
    select: { id: true, status: true },
  });
}

export {
  findTransferStatuses,
  countUnreadNotifications,
  findUserNotifications,
  markAllNotificationsRead,
  markNotificationRead,
};
