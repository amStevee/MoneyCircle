import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { groupsController } from "./groups.controller.js";

const router:Router = Router();
router.use(requireAuth);
router.get("/", (req, res) => groupsController.getGroups(req, res));
router.get("/:id", (req, res) => groupsController.getGroup(req, res));
router.post("/", (req, res) => groupsController.createGroup(req, res));

export default router;
