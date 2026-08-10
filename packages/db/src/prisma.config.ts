/* Prisma configuration helper placed in `src` so TypeScript includes it.

- Exports `migrateUrl` for migration tooling.
- Exports `createPrismaClient()` which constructs a `PrismaClient` and
  conditionally uses adapter/accelerate options only when explicitly enabled.
*/

import path from "path";
import dotenv from "dotenv";

// Load dotenv from the package root
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

export const migrateUrl = process.env.DATABASE_URL ?? "";

export function createPrismaClient() {
  // Use require to avoid potential ESM/CJS interop issues at runtime
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { PrismaClient } = require("@prisma/client");

  // Avoid passing Prisma 7-specific constructor options unless explicitly enabled
  const enableDriverAdapters =
    process.env.PRISMA_ENABLE_DRIVER_ADAPTERS === "1";
  const enableAccelerate = process.env.PRISMA_ENABLE_ACCELERATE === "1";

  if (enableAccelerate && process.env.PRISMA_ACCELERATE_URL) {
    return new PrismaClient({
      accelerateUrl: process.env.PRISMA_ACCELERATE_URL,
    });
  }

  if (enableDriverAdapters && process.env.DATABASE_URL) {
    return new PrismaClient({ adapter: { url: process.env.DATABASE_URL } });
  }

  return new PrismaClient();
}
