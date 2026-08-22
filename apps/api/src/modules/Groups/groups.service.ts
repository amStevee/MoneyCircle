import crypto from "node:crypto";
import { z } from "zod";
import {
  createGroup,
  findGroupByIdForUser,
  findGroupMemberCounts,
  findUserGroups,
  findUserPaidContributionCounts,
  countActiveMembers,
  findMembershipByUserId,
  findPendingInvitationByEmail,
  findPendingInvitations,
  findInvitationByTokenHash,
  createInvitation,
  refreshInvitation,
  upsertInvitedMembership,
  acceptInvitationTx,
} from "./groups.repository.js";
import { findUserByEmail } from "../Users/users.repository.js";
import { emailService } from "../../infrastructure/email/email.provider.js";

export const createGroupSchema = z.object({
  name: z.string().trim().min(2).max(255),
  description: z.string().trim().max(255).optional(),
  contributionAmount: z.number().positive(),
  currency: z.string().length(3).default("NGN"),
  frequency: z.enum(["WEEKLY", "MONTHLY", "YEARLY"]),
  memberLimit: z.number().int().min(2).max(100),
  totalCycles: z.number().int().min(1).max(100).default(12),
  startDate: z.coerce.date(),
});

export type CreateGroupInput = z.infer<typeof createGroupSchema>;

export const inviteMemberSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please provide a valid email address"),
});

export type InviteMemberInput = z.infer<typeof inviteMemberSchema>;

const INVITATION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// Base URL of the web app, used to build the link put in invitation
// emails. Falls back to the production URL already hardcoded for CORS
// in app.ts so this works out of the box in that environment too.
const WEB_APP_URL = process.env.WEB_APP_URL || "https://money-circle-web.vercel.app";

function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

/**
 * API response for a pending group invitation.
 */
type InvitationSummary = {
  id: string;
  email: string;
  status: string;
  expiresAt: Date;
  createdAt: Date;
};

/**
 * API response for a group in the groups list.
 */
type GroupListItem = {
  id: string;
  name: string;
  description: string;
  contributionAmount: number;
  currency: string;
  frequency: string;
  memberCount: number;
  memberLimit: number;
  contributionsMade: number;
  status: string;
  startDate: Date;
};

/**
 * API response for a group member.
 */
type GroupMember = {
  id: string;
  userId: string;
  name: string;
  role: string;
  status: string;
  joinedAt: Date;
};

/**
 * API response for a savings schedule.
 */
type GroupSchedule = {
  id: string;
  circle_id: string;
  contribution_amount: number;
  frequency: string;
  start_date: Date;
  end_date: Date | null;
  total_cycles: number;
  current_cycle: number;
  created_at: Date;
  updated_at: Date;
};

/**
 * API response for a single group.
 */
type GroupDetails = {
  id: string;
  name: string;
  decription: string;
  owner_id: string;
  contribution_amount: number;
  currency: string;
  frequency: string;
  member_limit: number;
  start_date: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
  members: GroupMember[];
  schedule: GroupSchedule | null;
};

/**
 * Create-group response.
 */
type CreateGroupResponse = {
  id: string;
  name: string;
  decription: string;
  owner_id: string;
  contribution_amount: number;
  currency: string;
  frequency: string;
  member_limit: number;
  start_date: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
};

class GroupsService {
  async getGroups(userId: string): Promise<GroupListItem[]> {
    const memberships = await findUserGroups(userId);

    const circleIds = memberships.map((membership) => membership.circle_id);

    const [memberCounts, contributionCounts] = await Promise.all([
      findGroupMemberCounts(circleIds),
      findUserPaidContributionCounts(userId, circleIds),
    ]);

    const memberCountMap = new Map(
      memberCounts.map((item) => [item.circle_id, item.count]),
    );

    const contributionCountMap = new Map(
      contributionCounts.map((item) => [item.circle_id, item.count]),
    );

    return memberships.map(
      ({ savings_circle: group }): GroupListItem => ({
        id: group.id,
        name: group.name,
        description: group.decription,
        contributionAmount: Number(group.contribution_amount),
        currency: group.currency,
        frequency: group.frequency,
        memberCount: memberCountMap.get(group.id) ?? 0,
        memberLimit: group.member_limit,
        contributionsMade: contributionCountMap.get(group.id) ?? 0,
        status: group.status,
        startDate: group.start_date,
      }),
    );
  }

  async getGroup(groupId: string, userId: string): Promise<GroupDetails> {
    const group = await findGroupByIdForUser(groupId, userId);

    if (!group) {
      throw new Error("Savings group not found");
    }

    const schedule = group.savings_schedules[0] ?? null;

    return {
      id: group.id,
      name: group.name,
      decription: group.decription,
      owner_id: group.owner_id,
      contribution_amount: Number(group.contribution_amount),
      currency: group.currency,
      frequency: group.frequency,
      member_limit: group.member_limit,
      start_date: group.start_date,
      status: group.status,
      created_at: group.created_at,
      updated_at: group.updated_at,

      members: group.circle_members.map(
        (member): GroupMember => ({
          id: member.id,
          userId: member.user_id,
          name: `${member.users.first_name} ${member.users.last_name}`,
          role: member.role,
          status: member.status,
          joinedAt: member.joined_at,
        }),
      ),

      schedule: schedule
        ? {
            id: schedule.id,
            circle_id: schedule.circle_id,
            contribution_amount: Number(schedule.contribution_amount),
            frequency: schedule.frequency,
            start_date: schedule.start_date,
            end_date: schedule.end_date,
            total_cycles: schedule.total_cycles,
            current_cycle: schedule.current_cycle,
            created_at: schedule.created_at,
            updated_at: schedule.updated_at,
          }
        : null,
    };
  }

  async create(
    userId: string,
    input: CreateGroupInput,
  ): Promise<CreateGroupResponse> {
    const result = createGroupSchema.safeParse(input);

    if (!result.success) {
      throw new Error(
        result.error.issues[0]?.message ?? "Invalid group details",
      );
    }

    const group = await createGroup(userId, result.data);

    return {
      id: group.id,
      name: group.name,
      decription: group.decription,
      owner_id: group.owner_id,
      contribution_amount: Number(group.contribution_amount),
      currency: group.currency,
      frequency: group.frequency,
      member_limit: group.member_limit,
      start_date: group.start_date,
      status: group.status,
      created_at: group.created_at,
      updated_at: group.updated_at,
    };
  }

  /**
   * Invite someone to join a group by email. Only an ACTIVE member with
   * role OWNER or ADMIN may invite. If the email belongs to an existing
   * user, their membership is reflected immediately with status
   * INVITED so the group shows up for them ahead of formal acceptance.
   * Re-inviting an address with an outstanding invitation refreshes
   * that invitation instead of creating a duplicate.
   */
  async inviteMember(
    groupId: string,
    inviterId: string,
    input: InviteMemberInput,
  ): Promise<{ invitation: InvitationSummary; inviteUrl: string }> {
    const result = inviteMemberSchema.safeParse(input);
    if (!result.success) {
      throw new Error(result.error.issues[0]?.message ?? "Invalid invite details");
    }
    const email = result.data.email;

    const group = await findGroupByIdForUser(groupId, inviterId);
    if (!group) {
      throw new Error("Savings group not found");
    }

    const inviter = group.circle_members.find((member) => member.user_id === inviterId);
    if (!inviter || (inviter.role !== "OWNER" && inviter.role !== "ADMIN")) {
      throw new Error("Only the group owner or an admin can invite members");
    }

    if (group.status !== "ACTIVE") {
      throw new Error("Cannot invite members to a group that isn't active");
    }

    const invitedUser = await findUserByEmail(email);
    if (invitedUser?.id === inviterId) {
      throw new Error("You can't invite yourself");
    }

    if (invitedUser) {
      const existingMembership = await findMembershipByUserId(groupId, invitedUser.id);
      if (existingMembership?.status === "ACTIVE") {
        throw new Error("This person is already a member of the group");
      }
    }

    const activeMemberCount = await countActiveMembers(groupId);
    if (activeMemberCount >= group.member_limit) {
      throw new Error("This group has reached its member limit");
    }

    const token = crypto.randomBytes(32).toString("hex");
    const tokenHash = hashToken(token);
    const expiresAt = new Date(Date.now() + INVITATION_TTL_MS);

    const existingInvitation = await findPendingInvitationByEmail(groupId, email);
    const invitation = existingInvitation
      ? await refreshInvitation(existingInvitation.id, { tokenHash, expiresAt })
      : await createInvitation({
          circleId: groupId,
          invitedBy: inviterId,
          email,
          tokenHash,
          expiresAt,
        });

    if (invitedUser) {
      await upsertInvitedMembership(groupId, invitedUser.id);
    }

    const inviteUrl = `${WEB_APP_URL}/invitations/${token}`;

    try {
      await emailService.send({
        to: email,
        subject: `You've been invited to join ${group.name} on MoneyCircle`,
        htmlContent: `<p>Hello!</p><p>You've been invited to join the <strong>${group.name}</strong> savings group on MoneyCircle.</p><p><a href="${inviteUrl}">Click here to accept the invitation</a></p><p>This invitation expires on ${expiresAt.toDateString()}.</p>`,
      });
    } catch (error) {
      // Don't fail the whole request if the email provider isn't
      // configured or the send fails - the invitation is already
      // persisted and the caller still gets the shareable link back.
      console.error("[GroupsService] Failed to send invitation email:", error);
    }

    return {
      invitation: {
        id: invitation.id,
        email: invitation.email,
        status: invitation.status,
        expiresAt: invitation.expires_at,
        createdAt: invitation.created_at,
      },
      inviteUrl,
    };
  }

  /**
   * List outstanding invitations for a group. Only an ACTIVE member
   * with role OWNER or ADMIN may view them.
   */
  async listInvitations(groupId: string, userId: string): Promise<InvitationSummary[]> {
    const group = await findGroupByIdForUser(groupId, userId);
    if (!group) {
      throw new Error("Savings group not found");
    }

    const member = group.circle_members.find((m) => m.user_id === userId);
    if (!member || (member.role !== "OWNER" && member.role !== "ADMIN")) {
      throw new Error("Only the group owner or an admin can view invitations");
    }

    const invitations = await findPendingInvitations(groupId);

    return invitations.map((invitation) => ({
      id: invitation.id,
      email: invitation.email,
      status: invitation.status,
      expiresAt: invitation.expires_at,
      createdAt: invitation.created_at,
    }));
  }

  /**
   * Accept a group invitation on behalf of the currently authenticated
   * user. The invitation must be valid, unexpired, and addressed to
   * that user's email.
   */
  async acceptInvitation(
    token: string,
    userId: string,
    userEmail: string,
  ): Promise<{ groupId: string; groupName: string }> {
    const tokenHash = hashToken(token);
    const invitation = await findInvitationByTokenHash(tokenHash);

    if (!invitation) {
      throw new Error("Invalid or expired invitation");
    }

    if (invitation.status !== "PENDING") {
      throw new Error("This invitation has already been used");
    }

    if (invitation.expires_at < new Date()) {
      throw new Error("This invitation has expired");
    }

    if (invitation.email.toLowerCase() !== userEmail.toLowerCase()) {
      throw new Error("This invitation was sent to a different email address");
    }

    const activeMemberCount = await countActiveMembers(invitation.circle_id);
    if (activeMemberCount >= invitation.savings_circle.member_limit) {
      throw new Error("This group has reached its member limit");
    }

    await acceptInvitationTx({
      invitationId: invitation.id,
      circleId: invitation.circle_id,
      userId,
    });

    return {
      groupId: invitation.circle_id,
      groupName: invitation.savings_circle.name,
    };
  }
}

const groupsService = new GroupsService();

export { GroupsService, groupsService };
