import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { getMe, updateMe } from "./users.controller.js";
const router:Router = Router();
router.get("/me", requireAuth, getMe);
router.patch("/me", requireAuth, updateMe);
export default router;
