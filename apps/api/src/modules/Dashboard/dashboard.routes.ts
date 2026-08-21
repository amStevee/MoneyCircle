import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { dashboardController } from "./dashboard.controller.js";

const router:Router = Router();
router.get("/", requireAuth, (req, res) => dashboardController.getDashboard(req, res));

export default router;
