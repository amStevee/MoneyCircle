import type { Request, Response } from "express";
import { z } from "zod";
import { ownershipService } from "./ownership.service.js";

const nominateSchema = z.object({
  nomineeId: z.string().uuid(),
});

const respondSchema = z.object({
  accept: z.boolean(),
});

const closeSchema = z.object({
  confirmsNoDisputes: z.literal(true),
});

function ownershipErrorStatus(message: string): number {
  if (message.includes("not found")) return 404;
  if (
    message.includes("Only the current group owner") ||
    message.includes("Only the group owner")
  ) {
    return 403;
  }
  if (
    message.includes("already awaiting") ||
    message.includes("no longer") ||
    message.includes("must be") ||
    message.includes("Resolve all outstanding") ||
    message.includes("Only active groups") ||
    message.includes("Only groups pending")
  ) {
    return 409;
  }
  return 400;
}

class OwnershipController {
  async listOwnedGroups(req: Request, res: Response) {
    try {
      return res
        .status(200)
        .json(await ownershipService.listOwnedGroups(req.userId!));
    } catch {
      return res
        .status(500)
        .json({ message: "Unable to load group ownership resolutions" });
    }
  }

  async nominate(req: Request, res: Response) {
    const parsed = nominateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: parsed.error.issues[0]?.message ?? "Invalid nominee",
      });
    }

    try {
      return res.status(201).json(
        await ownershipService.nominate(
          req.params.id as string,
          req.userId!,
          parsed.data.nomineeId,
        ),
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to request transfer";
      return res.status(ownershipErrorStatus(message)).json({ message });
    }
  }

  async respond(req: Request, res: Response) {
    const parsed = respondSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: parsed.error.issues[0]?.message ?? "Invalid response",
      });
    }

    try {
      await ownershipService.respond(
        req.params.transferId as string,
        req.userId!,
        parsed.data.accept,
      );
      return res
        .status(200)
        .json({ message: "Ownership transfer response recorded" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to respond to transfer";
      return res.status(ownershipErrorStatus(message)).json({ message });
    }
  }

  async cancel(req: Request, res: Response) {
    try {
      await ownershipService.cancel(
        req.params.id as string,
        req.params.transferId as string,
        req.userId!,
      );
      return res.status(200).json({ message: "Transfer request cancelled" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to cancel transfer";
      return res.status(ownershipErrorStatus(message)).json({ message });
    }
  }

  async moveToPendingResolution(req: Request, res: Response) {
    try {
      await ownershipService.moveToPendingResolution(
        req.params.id as string,
        req.userId!,
      );
      return res.status(200).json({ message: "Group is pending resolution" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to update group status";
      return res.status(ownershipErrorStatus(message)).json({ message });
    }
  }

  async close(req: Request, res: Response) {
    const parsed = closeSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message:
          "Confirm that there are no unresolved disputes before closing this group",
      });
    }

    try {
      await ownershipService.close(
        req.params.id as string,
        req.userId!,
        parsed.data.confirmsNoDisputes,
      );
      return res.status(200).json({ message: "Group archived successfully" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to close group";
      return res.status(ownershipErrorStatus(message)).json({ message });
    }
  }
}

const ownershipController = new OwnershipController();
export { ownershipController };
