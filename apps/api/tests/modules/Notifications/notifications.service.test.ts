import { NotificationsService } from "../../../src/modules/Notifications/notifications.service.js";
import { findUserNotifications } from "../../../src/modules/Notifications/notifications.repository.js";

jest.mock(
  "../../../src/modules/Notifications/notifications.repository",
  () => ({
    countUnreadNotifications: jest.fn(),
    findUserNotifications: jest.fn(),
    markAllNotificationsRead: jest.fn(),
    markNotificationRead: jest.fn(),
  }),
);

describe("NotificationsService", () => {
  it("serializes read state and timestamps for a user's notifications", async () => {
    const service = new NotificationsService();
    const createdAt = new Date("2026-03-01T10:00:00.000Z");
    const readAt = new Date("2026-03-02T10:00:00.000Z");
    jest.mocked(findUserNotifications).mockResolvedValue([
      {
        id: "notification-1",
        type: "CIRCLE_UPDATE",
        title: "New update",
        message: "A group changed",
        data: { circleId: "circle-1" },
        read_at: null,
        created_at: createdAt,
      },
      {
        id: "notification-2",
        type: "PAYMENT",
        title: "Payment received",
        message: "Contribution paid",
        data: null,
        read_at: readAt,
        created_at: createdAt,
      },
    ] as never);

    await expect(service.getNotifications("user-1")).resolves.toEqual([
      {
        id: "notification-1",
        type: "CIRCLE_UPDATE",
        title: "New update",
        message: "A group changed",
        data: { circleId: "circle-1" },
        read: false,
        createdAt,
      },
      {
        id: "notification-2",
        type: "PAYMENT",
        title: "Payment received",
        message: "Contribution paid",
        data: null,
        read: true,
        createdAt,
      },
    ]);
  });
});
