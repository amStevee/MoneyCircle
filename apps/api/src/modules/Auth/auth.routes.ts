import express, { Router } from "express";
import { authController } from "./auth.controller.js";

const router:Router = express.Router();

// GET: `/api/v1/auth/signup-context?token=${query}`;
router.get("/signup-context", (req, res) =>
  authController.getSignupContext(req, res),
);

export default router;