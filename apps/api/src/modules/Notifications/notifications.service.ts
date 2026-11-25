import {
  findTransferStatuses,
  countUnreadNotifications,
  findUserNotifications,
  markAllNotificationsRead,
  markNotificationRead,
} from "./notifications.repository.js";

type SerializedNotification = {
  id: string;
  type: string;
  title: string;
  message: string;
  data: unknown;
  read: boolean;
  createdAt: Date;
};

function serializeNotification(notification: any): SerializedNotification {
  return {
    id: notification.id,
    type: notification.type,
    title: notification.title,
    message: notification.message,
    data: notification.data,
    read: notification.read_at !== null,
    createdAt: notification.created_at,
  };
}

class NotificationsService {
  async getNotifications(userId: string): Promise<SerializedNotification[]> {
    const notifications = await findUserNotifications(userId);

    // Attach the live status of any ownership-transfer request so the UI
    // only shows Accept/Decline while the request is still PENDING.
    const transferIdOf = (data: any): string | null =>
      data?.event === "GROUP_OWNERSHIP_TRANSFER" &&
      typeof data.transferId === "string"
        ? data.transferId
        : null;
    const transferIds = notifications
      .map((n: any) => transferIdOf(n.data))
      .filter((id): id is string => id !== null);
    const statuses = new Map(
      (await findTransferStatuses(transferIds)).map((t) => [t.id, t.status]),
    );

    return notifications.map((notification: any) => {
      const serialized = serializeNotification(notification);
      const transferId = transferIdOf(notification.data);
      if (!transferId) return serialized;
      return {
        ...serialized,
        data: {
          ...notification.data,
          transferStatus: statuses.get(transferId) ?? "UNKNOWN",
        },
      };
    });
  }

  async getUnreadCount(userId: string): Promise<{ count: number }> {
    const count = await countUnreadNotifications(userId);
    return { count };
  }

  async markAsRead(userId: string, notificationId: string): Promise<void> {
    await markNotificationRead(notificationId, userId);
  }

  async markAllAsRead(userId: string): Promise<void> {
    await markAllNotificationsRead(userId);
  }
}

const notificationsService = new NotificationsService();
export { NotificationsService, notificationsService };
