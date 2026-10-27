-- CreateEnum
CREATE TYPE "Group_Status" AS ENUM ('INVITED', 'ACTIVE', 'SUSPENDED', 'LEFT', 'REMOVED', 'PENDING_RESOLUTION', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "Ownership_Transfer_Status" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'CANCELLED');

-- Preserve existing status values when moving the group column to its own enum.
ALTER TABLE "savings_circles" RENAME COLUMN "status" TO "status_legacy";
ALTER TABLE "savings_circles" ADD COLUMN "status" "Group_Status" NOT NULL DEFAULT 'ACTIVE';
UPDATE "savings_circles"
SET "status" = "status_legacy"::text::"Group_Status";
ALTER TABLE "savings_circles" DROP COLUMN "status_legacy";

-- CreateTable
CREATE TABLE "group_ownership_transfers" (
    "id" TEXT NOT NULL,
    "circle_id" TEXT NOT NULL,
    "from_user_id" TEXT NOT NULL,
    "to_user_id" TEXT NOT NULL,
    "status" "Ownership_Transfer_Status" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responded_at" TIMESTAMP(3),

    CONSTRAINT "group_ownership_transfers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "group_ownership_transfers_circle_id_status_idx" ON "group_ownership_transfers"("circle_id", "status");

-- CreateIndex
CREATE INDEX "group_ownership_transfers_to_user_id_status_idx" ON "group_ownership_transfers"("to_user_id", "status");

-- CreateIndex
CREATE INDEX "group_ownership_transfers_from_user_id_idx" ON "group_ownership_transfers"("from_user_id");

-- CreateIndex
CREATE INDEX "savings_circles_status_idx" ON "savings_circles"("status");

-- AddForeignKey
ALTER TABLE "group_ownership_transfers" ADD CONSTRAINT "group_ownership_transfers_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "savings_circles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_ownership_transfers" ADD CONSTRAINT "group_ownership_transfers_from_user_id_fkey" FOREIGN KEY ("from_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_ownership_transfers" ADD CONSTRAINT "group_ownership_transfers_to_user_id_fkey" FOREIGN KEY ("to_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
