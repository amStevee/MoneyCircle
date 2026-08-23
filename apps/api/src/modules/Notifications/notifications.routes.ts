import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { notificationsController } from "./notifications.controller.js";

const router: Router = Router();

router.use(requireAuth);

router.get("/", (req, res) => notificationsController.getNotifications(req, res));
router.get("/unread-count", (req, res) =>
  notificationsController.getUnreadCount(req, res),
);
router.post("/read-all", (req, res) =>
  notificationsController.markAllAsRead(req, res),
);
router.patch("/:id/read", (req, res) =>
  notificationsController.markAsRead(req, res),
);

export default router;
