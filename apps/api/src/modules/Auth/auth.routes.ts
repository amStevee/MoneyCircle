import express, { Router } from "express";
import { authController } from "./auth.controller.js";

const router:Router = express.Router();

// GET: `/api/v1/auth/signup-context?token=${query}`;
router.get("/signup-context", (req, res) =>
  authController.getSignupContext(req, res),
);

// POST: `/api/v1/auth/signup?token=${query}` (token optional)
router.post("/signup", (req, res) => authController.signup(req, res));

// POST: `/api/v1/auth/login`
router.post("/login", (req, res) => authController.login(req, res));

export default router;