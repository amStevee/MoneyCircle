import { Request, Response } from "express";
import { authService } from "./auth.service.js";

class AuthController {
  async getSignupContext(req: Request, res: Response) {
    const { token } = req.query;

    if (!token) {
      throw new Error("token not provided");
    }

    const waitlistEntry = await authService.getSignupContext(String(token));

    res.status(200).json(waitlistEntry);
  }
}

const authController = new AuthController();

export {AuthController, authController}