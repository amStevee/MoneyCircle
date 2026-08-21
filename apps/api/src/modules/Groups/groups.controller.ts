import type { Request, Response } from "express";
import { groupsService } from "./groups.service.js";

class GroupsController {
  async getGroups(req: Request, res: Response) {
    try {
      return res.status(200).json(await groupsService.getGroups(req.userId!));
    } catch (error) {
      return res.status(500).json({ message: "Unable to load savings groups" });
    }
  }

  async getGroup(req: Request, res: Response) {
    try {
      return res.status(200).json(await groupsService.getGroup((req.params.id as string), req.userId!));
    } catch (error: any) {
      return res.status(error?.message === "Savings group not found" ? 404 : 500).json({
        message: error?.message ?? "Unable to load savings group",
      });
    }
  }

  async createGroup(req: Request, res: Response) {
    try {
      const group = await groupsService.create(req.userId!, req.body);
      return res.status(201).json(group);
    } catch (error: any) {
      return res.status(400).json({ message: error?.message ?? "Unable to create savings group" });
    }
  }
}

const groupsController = new GroupsController();
export { GroupsController, groupsController };
