import { prisma } from "@repo/db";

async function createSession(userId: string, tokenHash: string, expiresAt: Date) {
  try {
    // `sessions.user_id` is unique in the schema, so each login replaces
    // the user's previous session rather than erroring on conflict.
    return await prisma.sessions.upsert({
      where: { user_id: userId },
      update: {
        token_hash: tokenHash,
        expires_at: expiresAt,
        revoked_at: null,
      },
      create: {
        user_id: userId,
        token_hash: tokenHash,
        expires_at: expiresAt,
      },
    });
  } catch (error) {
    throw new Error("Error occurred while creating the session");
  }
}

export { createSession };
