import { createPrismaClient } from "./prisma.config.ts";

export const prisma = createPrismaClient();
// Re-export Prisma types/constructs for convenience
export * from "@prisma/client";
