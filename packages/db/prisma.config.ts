/* Prisma configuration helper

- Exports `migrateUrl` for migration tooling to use (migrate will read this file).
- Exports `createPrismaClient()` which constructs a `PrismaClient` and accepts
  either an `accelerateUrl` (Prisma Accelerate) or an `adapter` for direct DB
  connections, per Prisma 7 guidance.

Adjust `DATABASE_URL` or `PRISMA_ACCELERATE_URL` in packages/db/.env.
*/

import path from "path";
import dotenv from "dotenv";

// Load dotenv from this package's folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const migrateUrl = process.env.DATABASE_URL ?? "";

export function createPrismaClient() {
  // Use require to avoid potential ESM/CJS interop issues at runtime
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { PrismaClient } = require("@prisma/client");

  // Only pass adapter/accelerateUrl when explicitly enabled via env flags.
  // This avoids constructor validation errors on older Prisma client versions.
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

  // Default: no special options, compatible with Prisma 5+.
  return new PrismaClient();
}
