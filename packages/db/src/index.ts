import { createPrismaClient } from "./prisma.config.js";

export const prisma = createPrismaClient();
// Re-export Prisma types/constructs for convenience
export * from "@prisma/client";
