-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."Circle_Status" AS ENUM ('INVITED', 'ACTIVE', 'SUSPENDED', 'LEFT', 'REMOVED');

-- CreateEnum
CREATE TYPE "public"."Contribution_status" AS ENUM ('PENDING', 'PAID', 'OVERDUE', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."Frequency" AS ENUM ('WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "public"."Notifications" AS ENUM ('CONTRIBUTION_DUE', 'CONTRIBUTION_SUCCESS', 'CONTRIBUTION_OVERDUE', 'PAYOUT_AVAILABLE', 'PAYOUT_SUCCESS', 'CIRCLE_INVITATION', 'CIRCLE_UPDATE');

-- CreateEnum
CREATE TYPE "public"."Payment_Status" AS ENUM ('PENDING', 'PROCESSING', 'PAID', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."Payment_type" AS ENUM ('CONTRIBUTION', 'PAYOUT');

-- CreateEnum
CREATE TYPE "public"."Payout_Status" AS ENUM ('PENDING', 'PROCESSING', 'PAID', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."Provider" AS ENUM ('PAYSTACK', 'STRIPE');

-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('OWNER', 'ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('PENDING', 'VERIFIED', 'UNSUBSCRIBED');

-- CreateTable
CREATE TABLE "public"."audit_log" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "action" VARCHAR(255) NOT NULL,
    "entity_type" VARCHAR(255) NOT NULL,
    "entity_id" TEXT,
    "metadata" JSONB,
    "ip_address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."circle_invitations" (
    "id" TEXT NOT NULL,
    "circle_id" TEXT NOT NULL,
    "invited_by" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "token_hash" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'PENDING',
    "expires_at" TIMESTAMP(3) NOT NULL,
    "accepted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "circle_invitations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."circle_members" (
    "id" TEXT NOT NULL,
    "circle_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'MEMBER',
    "status" "public"."Circle_Status" NOT NULL DEFAULT 'ACTIVE',
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "left_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "circle_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contributions" (
    "id" TEXT NOT NULL,
    "circle_id" TEXT NOT NULL,
    "circle_member" TEXT NOT NULL,
    "cycle_number" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "paid_at" TIMESTAMP(3),
    "status" "public"."Contribution_status" NOT NULL DEFAULT 'PENDING',
    "transaction_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notifications" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "public"."Notifications" NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "data" JSONB NOT NULL,
    "read_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."payment_status_history" (
    "id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "status" "public"."Payment_Status" NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "metadata" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_status_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."payment_transactions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "refernce" TEXT NOT NULL,
    "idempotency_key" TEXT NOT NULL,
    "provider" "public"."Provider" NOT NULL,
    "provider_reference" TEXT,
    "type" "public"."Payment_type" NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL,
    "status" "public"."Payment_Status" NOT NULL DEFAULT 'PENDING',
    "metadata" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."payouts" (
    "id" TEXT NOT NULL,
    "circle_id" TEXT NOT NULL,
    "member_id" TEXT NOT NULL,
    "cycle_number" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "scheduled_date" TIMESTAMP(3) NOT NULL,
    "paid_at" TIMESTAMP(3),
    "status" "public"."Payout_Status" NOT NULL DEFAULT 'PENDING',
    "transaction_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."savings_circles" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "decription" VARCHAR(255) NOT NULL,
    "owner_id" TEXT NOT NULL,
    "contribution_amount" DECIMAL(65,30) NOT NULL,
    "currency" VARCHAR(255) NOT NULL,
    "frequency" "public"."Frequency" NOT NULL,
    "member_limit" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "status" "public"."Circle_Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "savings_circles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."savings_schedules" (
    "id" TEXT NOT NULL,
    "circle_id" TEXT NOT NULL,
    "frequency" "public"."Frequency" NOT NULL,
    "contribution_amount" DECIMAL(65,30) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "total_cycles" INTEGER NOT NULL,
    "current_cycle" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "savings_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sessions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "token_hash" VARCHAR(225) NOT NULL,
    "expires_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revoked_at" TIMESTAMP(3),

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255),
    "password_hash" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "avatar_url" VARCHAR(255),
    "email_verified_at" TIMESTAMP(3),
    "status" "public"."Status" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."waitlistEntry" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'PENDING',
    "verification_token_hash" VARCHAR(255),
    "verification_expires_at" TIMESTAMP(3) NOT NULL,
    "verified_at" TIMESTAMP(3),
    "userId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "waitlistEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_log_created_at_idx" ON "public"."audit_log"("created_at" ASC);

-- CreateIndex
CREATE INDEX "audit_log_entity_type_entity_id_idx" ON "public"."audit_log"("entity_type" ASC, "entity_id" ASC);

-- CreateIndex
CREATE INDEX "audit_log_user_id_idx" ON "public"."audit_log"("user_id" ASC);

-- CreateIndex
CREATE INDEX "circle_invitations_circle_id_idx" ON "public"."circle_invitations"("circle_id" ASC);

-- CreateIndex
CREATE INDEX "circle_invitations_email_idx" ON "public"."circle_invitations"("email" ASC);

-- CreateIndex
CREATE INDEX "circle_invitations_invited_by_idx" ON "public"."circle_invitations"("invited_by" ASC);

-- CreateIndex
CREATE INDEX "circle_invitations_status_idx" ON "public"."circle_invitations"("status" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "circle_invitations_token_hash_key" ON "public"."circle_invitations"("token_hash" ASC);

-- CreateIndex
CREATE INDEX "circle_members_circle_id_idx" ON "public"."circle_members"("circle_id" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "circle_members_circle_id_user_id_key" ON "public"."circle_members"("circle_id" ASC, "user_id" ASC);

-- CreateIndex
CREATE INDEX "circle_members_status_idx" ON "public"."circle_members"("status" ASC);

-- CreateIndex
CREATE INDEX "circle_members_user_id_idx" ON "public"."circle_members"("user_id" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "contributions_circle_id_circle_member_cycle_number_key" ON "public"."contributions"("circle_id" ASC, "circle_member" ASC, "cycle_number" ASC);

-- CreateIndex
CREATE INDEX "contributions_circle_id_idx" ON "public"."contributions"("circle_id" ASC);

-- CreateIndex
CREATE INDEX "contributions_circle_member_idx" ON "public"."contributions"("circle_member" ASC);

-- CreateIndex
CREATE INDEX "contributions_due_date_idx" ON "public"."contributions"("due_date" ASC);

-- CreateIndex
CREATE INDEX "contributions_status_idx" ON "public"."contributions"("status" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "contributions_transaction_id_key" ON "public"."contributions"("transaction_id" ASC);

-- CreateIndex
CREATE INDEX "notifications_created_at_idx" ON "public"."notifications"("created_at" ASC);

-- CreateIndex
CREATE INDEX "notifications_read_at_idx" ON "public"."notifications"("read_at" ASC);

-- CreateIndex
CREATE INDEX "notifications_type_idx" ON "public"."notifications"("type" ASC);

-- CreateIndex
CREATE INDEX "notifications_user_id_idx" ON "public"."notifications"("user_id" ASC);

-- CreateIndex
CREATE INDEX "payment_status_history_created_at_idx" ON "public"."payment_status_history"("created_at" ASC);

-- CreateIndex
CREATE INDEX "payment_status_history_status_idx" ON "public"."payment_status_history"("status" ASC);

-- CreateIndex
CREATE INDEX "payment_status_history_transaction_id_idx" ON "public"."payment_status_history"("transaction_id" ASC);

-- CreateIndex
CREATE INDEX "payment_transactions_created_at_idx" ON "public"."payment_transactions"("created_at" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "payment_transactions_idempotency_key_key" ON "public"."payment_transactions"("idempotency_key" ASC);

-- CreateIndex
CREATE INDEX "payment_transactions_provider_idx" ON "public"."payment_transactions"("provider" ASC);

-- CreateIndex
CREATE INDEX "payment_transactions_provider_reference_idx" ON "public"."payment_transactions"("provider_reference" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "payment_transactions_refernce_key" ON "public"."payment_transactions"("refernce" ASC);

-- CreateIndex
CREATE INDEX "payment_transactions_status_idx" ON "public"."payment_transactions"("status" ASC);

-- CreateIndex
CREATE INDEX "payment_transactions_type_idx" ON "public"."payment_transactions"("type" ASC);

-- CreateIndex
CREATE INDEX "payment_transactions_user_id_idx" ON "public"."payment_transactions"("user_id" ASC);

-- CreateIndex
CREATE INDEX "payouts_circle_id_idx" ON "public"."payouts"("circle_id" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "payouts_circle_id_member_id_cycle_number_key" ON "public"."payouts"("circle_id" ASC, "member_id" ASC, "cycle_number" ASC);

-- CreateIndex
CREATE INDEX "payouts_member_id_idx" ON "public"."payouts"("member_id" ASC);

-- CreateIndex
CREATE INDEX "payouts_scheduled_date_idx" ON "public"."payouts"("scheduled_date" ASC);

-- CreateIndex
CREATE INDEX "payouts_status_idx" ON "public"."payouts"("status" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "payouts_transaction_id_key" ON "public"."payouts"("transaction_id" ASC);

-- CreateIndex
CREATE INDEX "savings_circles_created_at_idx" ON "public"."savings_circles"("created_at" ASC);

-- CreateIndex
CREATE INDEX "savings_circles_owner_id_idx" ON "public"."savings_circles"("owner_id" ASC);

-- CreateIndex
CREATE INDEX "savings_circles_status_idx" ON "public"."savings_circles"("status" ASC);

-- CreateIndex
CREATE INDEX "savings_schedules_circle_id_idx" ON "public"."savings_schedules"("circle_id" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_user_id_key" ON "public"."sessions"("user_id" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "public"."users"("phone" ASC);

-- CreateIndex
CREATE INDEX "waitlistEntry_created_at_idx" ON "public"."waitlistEntry"("created_at" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "waitlistEntry_email_key" ON "public"."waitlistEntry"("email" ASC);

-- CreateIndex
CREATE INDEX "waitlistEntry_status_idx" ON "public"."waitlistEntry"("status" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "waitlistEntry_userId_key" ON "public"."waitlistEntry"("userId" ASC);

-- AddForeignKey
ALTER TABLE "public"."circle_invitations" ADD CONSTRAINT "circle_invitations_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "public"."savings_circles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."circle_invitations" ADD CONSTRAINT "circle_invitations_invited_by_fkey" FOREIGN KEY ("invited_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."circle_members" ADD CONSTRAINT "circle_members_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "public"."savings_circles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."circle_members" ADD CONSTRAINT "circle_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."contributions" ADD CONSTRAINT "contributions_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "public"."savings_circles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."contributions" ADD CONSTRAINT "contributions_circle_member_fkey" FOREIGN KEY ("circle_member") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."contributions" ADD CONSTRAINT "contributions_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."payment_transactions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payment_status_history" ADD CONSTRAINT "payment_status_history_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."payment_transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payment_transactions" ADD CONSTRAINT "payment_transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payouts" ADD CONSTRAINT "payouts_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "public"."savings_circles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payouts" ADD CONSTRAINT "payouts_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "public"."circle_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payouts" ADD CONSTRAINT "payouts_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."payment_transactions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."savings_circles" ADD CONSTRAINT "savings_circles_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."savings_schedules" ADD CONSTRAINT "savings_schedules_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "public"."savings_circles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."waitlistEntry" ADD CONSTRAINT "waitlistEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
