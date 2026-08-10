import { Request, Response } from "express";
import { waitingListService } from "./waitingList.service.js";

class WaitingListController {
  async join(req: Request, res: Response) {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      await waitingListService.join(email);
      return res
        .status(200)
        .json({ message: "Successfully joined the waiting list" });
    } catch (err: any) {
      return res
        .status(400)
        .json({ message: err?.message ?? "Unable to join" });
    }
  }
}

const waitingListController = new WaitingListController();
export { WaitingListController, waitingListController };
