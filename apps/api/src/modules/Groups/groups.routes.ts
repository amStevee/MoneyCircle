import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { groupsController } from "./groups.controller.js";

const router:Router = Router();
router.use(requireAuth);
router.get("/", (req, res) => groupsController.getGroups(req, res));
router.post("/", (req, res) => groupsController.createGroup(req, res));
router.post("/invitations/:token/accept", (req, res) => groupsController.acceptInvitation(req, res));
router.get("/:id/invitations", (req, res) => groupsController.getInvitations(req, res));
router.post("/:id/invitations", (req, res) => groupsController.inviteMember(req, res));
router.get("/:id", (req, res) => groupsController.getGroup(req, res));

export default router;
