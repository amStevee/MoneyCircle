import {
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
    return notifications.map(serializeNotification);
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
