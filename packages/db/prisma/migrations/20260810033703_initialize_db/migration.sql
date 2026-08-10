-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'VERIFIED', 'UNSUBSCRIBED');

-- CreateTable
CREATE TABLE "waitlistEntry" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "verification_token_hash" VARCHAR(255),
    "verification_expires_at" TIMESTAMP(3) NOT NULL,
    "verified_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "waitlistEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "waitlistEntry_email_key" ON "waitlistEntry"("email");

-- CreateIndex
CREATE INDEX "waitlistEntry_status_idx" ON "waitlistEntry"("status");

-- CreateIndex
CREATE INDEX "waitlistEntry_created_at_idx" ON "waitlistEntry"("created_at");
