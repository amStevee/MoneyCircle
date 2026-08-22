import type { Request, Response } from "express";
import { groupsService } from "./groups.service.js";
import { findUserById } from "../Users/users.repository.js";

/**
 * Map a thrown error's message to an HTTP status code. Follows the
 * same string-matching convention already used by getGroup below.
 */
function statusForError(message: string | undefined): number {
  switch (message) {
    case "Savings group not found":
      return 404;
    case "Only the group owner or an admin can invite members":
    case "Only the group owner or an admin can view invitations":
      return 403;
    case "This person is already a member of the group":
    case "This group has reached its member limit":
    case "You can't invite yourself":
      return 409;
    case "Invalid or expired invitation":
      return 404;
    case "This invitation has already been used":
    case "This invitation has expired":
    case "This invitation was sent to a different email address":
      return 410;
    default:
      return 400;
  }
}

class GroupsController {
  async getGroups(req: Request, res: Response) {
    try {
      return res.status(200).json(await groupsService.getGroups(req.userId!));
    } catch (error) {
      return res.status(500).json({ message: "Unable to load savings groups" });
    }
  }

  async getGroup(req: Request, res: Response) {
    try {
      return res.status(200).json(await groupsService.getGroup((req.params.id as string), req.userId!));
    } catch (error: any) {
      return res.status(error?.message === "Savings group not found" ? 404 : 500).json({
        message: error?.message ?? "Unable to load savings group",
      });
    }
  }

  async createGroup(req: Request, res: Response) {
    try {
      const group = await groupsService.create(req.userId!, req.body);
      return res.status(201).json(group);
    } catch (error: any) {
      return res.status(400).json({ message: error?.message ?? "Unable to create savings group" });
    }
  }

  async inviteMember(req: Request, res: Response) {
    try {
      const result = await groupsService.inviteMember(
        req.params.id as string,
        req.userId!,
        req.body,
      );
      return res.status(201).json(result);
    } catch (error: any) {
      return res
        .status(statusForError(error?.message))
        .json({ message: error?.message ?? "Unable to send invitation" });
    }
  }

  async getInvitations(req: Request, res: Response) {
    try {
      const invitations = await groupsService.listInvitations(
        req.params.id as string,
        req.userId!,
      );
      return res.status(200).json(invitations);
    } catch (error: any) {
      return res
        .status(statusForError(error?.message))
        .json({ message: error?.message ?? "Unable to load invitations" });
    }
  }

  async acceptInvitation(req: Request, res: Response) {
    try {
      const user = await findUserById(req.userId!);
      if (!user) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const result = await groupsService.acceptInvitation(
        req.params.token as string,
        req.userId!,
        user.email,
      );
      return res.status(200).json(result);
    } catch (error: any) {
      return res
        .status(statusForError(error?.message))
        .json({ message: error?.message ?? "Unable to accept invitation" });
    }
  }
}

const groupsController = new GroupsController();
export { GroupsController, groupsController };
