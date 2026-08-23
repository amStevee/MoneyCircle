import type { Request, Response } from "express";
import { notificationsService } from "./notifications.service.js";

class NotificationsController {
  async getNotifications(req: Request, res: Response) {
    try {
      return res
        .status(200)
        .json(await notificationsService.getNotifications(req.userId!));
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unable to load notifications" });
    }
  }

  async getUnreadCount(req: Request, res: Response) {
    try {
      return res
        .status(200)
        .json(await notificationsService.getUnreadCount(req.userId!));
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unable to load unread count" });
    }
  }

  async markAsRead(req: Request, res: Response) {
    try {
      await notificationsService.markAsRead(
        req.userId!,
        req.params.id as string,
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unable to mark notification as read" });
    }
  }

  async markAllAsRead(req: Request, res: Response) {
    try {
      await notificationsService.markAllAsRead(req.userId!);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unable to mark notifications as read" });
    }
  }
}

const notificationsController = new NotificationsController();
export { NotificationsController, notificationsController };
