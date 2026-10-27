import type { Request, Response } from "express";
import { z } from "zod";
import { OwnedGroupsRequireResolutionError } from "./users.repository.js";
import userService from "./user.service.js";

const updateSchema = z.object({
  first_name: z.string().trim().min(1).max(255),
  last_name: z.string().trim().min(1).max(255),
  phone: z.string().trim().max(255).nullable().optional(),
});

export async function getMe(req: Request, res: Response) {
  const user = await userService.getme(req.userId!);

  if (!user) return res.status(404).json({ message: "User not found" });

  return res.json(user);
}

export async function updateMe(req: Request, res: Response) {
  const parsed = updateSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: parsed.error.issues[0]?.message ?? "Invalid profile details",
    });
  }

  try {
    const user = await userService.updateMe(req.userId!, parsed.data);

    return res.json(user);
  } catch (error: any) {
    if (error?.code === "P2002") {
      return res
        .status(409)
        .json({ message: "That phone number is already in use" });
    }

    return res.status(500).json({ message: "Unable to update profile" });
  }
}

export async function deleteMe(req: Request, res: Response) {
  try {
    await userService.deleteMe(req.userId!);

    return res.json({ message: "Account deleted successfully" });
  } catch (error: any) {
    if (error instanceof OwnedGroupsRequireResolutionError) {
      return res.status(409).json({
        message: error.message,
        groups: error.groups,
      });
    }

    if (error?.code === "P2025") {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(500).json({ message: "Unable to delete account" });
  }
}
