import type { Request, Response } from "express";
import { dashboardService } from "./dashboard.service.js";

class DashboardController {
  async getDashboard(req: Request, res: Response) {
    try {
      return res.status(200).json(await dashboardService.getDashboard(req.userId!));
    } catch (error) {
      return res.status(500).json({ message: "Unable to load dashboard" });
    }
  }
}

const dashboardController = new DashboardController();
export { DashboardController, dashboardController };
