import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { prisma } from "@repo/db";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

declare global {
  namespace Express {
    interface Request { userId?: string }
  }
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header("authorization");
  if (!header?.startsWith("Bearer ")) return res.status(401).json({ message: "Authentication required" });
  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    if (!payload.sub) throw new Error("Invalid token");
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const session = await prisma.sessions.findFirst({
      where: { user_id: String(payload.sub), token_hash: tokenHash, revoked_at: null, OR: [{ expires_at: null }, { expires_at: { gt: new Date() } }] },
    });
    if (!session) return res.status(401).json({ message: "Session expired or revoked" });
    req.userId = String(payload.sub);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid authentication token" });
  }
}
