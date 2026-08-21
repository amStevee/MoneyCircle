import { z } from "zod";
import {
  createGroup,
  findGroupByIdForUser,
  findGroupMemberCounts,
  findUserGroups,
  findUserPaidContributionCounts,
} from "./groups.repository.js";

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
}

const groupsService = new GroupsService();

export { GroupsService, groupsService };
