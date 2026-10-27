import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { deleteMe, getMe, updateMe } from "./users.controller.js";
const router:Router = Router();
router.get("/me", requireAuth, getMe);
router.patch("/me", requireAuth, updateMe);
router.delete("/me", requireAuth, deleteMe);
export default router;
