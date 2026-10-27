import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { groupsController } from "./groups.controller.js";
import { ownershipController } from "./ownership.controller.js";

const router:Router = Router();
router.use(requireAuth);
router.get("/ownership-resolution", (req, res) =>
  ownershipController.listOwnedGroups(req, res),
);
router.post("/ownership-transfers/:transferId/respond", (req, res) =>
  ownershipController.respond(req, res),
);
router.post("/:id/ownership-transfers", (req, res) =>
  ownershipController.nominate(req, res),
);
router.post("/:id/ownership-transfers/:transferId/cancel", (req, res) =>
  ownershipController.cancel(req, res),
);
router.post("/:id/pending-resolution", (req, res) =>
  ownershipController.moveToPendingResolution(req, res),
);
router.post("/:id/close", (req, res) =>
  ownershipController.close(req, res),
);
router.get("/", (req, res) => groupsController.getGroups(req, res));
router.post("/", (req, res) => groupsController.createGroup(req, res));
router.post("/invitations/:token/accept", (req, res) => groupsController.acceptInvitation(req, res));
router.get("/:id/invitations", (req, res) => groupsController.getInvitations(req, res));
router.post("/:id/invitations", (req, res) => groupsController.inviteMember(req, res));
router.get("/:id", (req, res) => groupsController.getGroup(req, res));

export default router;
