import { Request, Response } from "express";
import { authService } from "./auth.service.js";

class AuthController {
  async getSignupContext(req: Request, res: Response) {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: "token not provided" });
    }

    try {
      const waitlistEntry = await authService.getSignupContext(String(token));
      res.status(200).json(waitlistEntry);
    } catch (err: any) {
      res.status(400).json({ message: err?.message ?? "Invalid signup invitation" });
    }
  }

  async signup(req: Request, res: Response) {
    const { token } = req.query;
    const { first_name, last_name, email, password } = req.body ?? {};

    try {
      const { user, token: jwtToken } = await authService.signup(
        { first_name, last_name, email, password },
        token ? String(token) : undefined
      );

      res.status(201).json({
        message: "Account created successfully",
        user,
        token: jwtToken,
      });
    } catch (err: any) {
      res.status(400).json({ message: err?.message ?? "Unable to sign up" });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body ?? {};

    try {
      const { user, token: jwtToken } = await authService.login({ email, password });

      res.status(200).json({
        message: "Logged in successfully",
        user,
        token: jwtToken,
      });
    } catch (err: any) {
      res.status(401).json({ message: err?.message ?? "Unable to log in" });
    }
  }
}

const authController = new AuthController();

export { AuthController, authController };
