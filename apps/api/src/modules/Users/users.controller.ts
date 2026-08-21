import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "@repo/db";

const updateSchema = z.object({
  first_name: z.string().trim().min(1).max(255),
  last_name: z.string().trim().min(1).max(255),
  phone: z.string().trim().max(255).nullable().optional(),
});

export async function getMe(req: Request, res: Response) {
  const user = await prisma.users.findUnique({ where: { id: req.userId! }, select: { id: true, email: true, phone: true, first_name: true, last_name: true, avatar_url: true, status: true, email_verified_at: true, created_at: true, updated_at: true } });
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json(user);
}

export async function updateMe(req: Request, res: Response) {
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid profile details" });
  try {
    const user = await prisma.users.update({ where: { id: req.userId! }, data: parsed.data, select: { id: true, email: true, phone: true, first_name: true, last_name: true, avatar_url: true, status: true, email_verified_at: true, created_at: true, updated_at: true } });
    return res.json(user);
  } catch (error: any) {
    if (error?.code === "P2002") return res.status(409).json({ message: "That phone number is already in use" });
    return res.status(500).json({ message: "Unable to update profile" });
  }
}
