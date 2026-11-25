import { prisma } from "@repo/db";
import type { Prisma } from "@repo/db";
import crypto from "node:crypto";
import type { User } from "./user.type.js";
import {
  outstandingContributionWhere,
  startOfUtcDay,
} from "../Contributions/contribution-status.js";
import { cancelUpcomingContributions } from "../Contributions/contributions.repository.js";

/**
 * Prisma representation of a user.
 *
 * Keeping this type explicit prevents TypeScript from
 * generating a non-portable inferred return type that
 * references Prisma's generated Status enum.
 */
type UserRecord = Prisma.usersGetPayload<{}>;
// type User = Prisma.$usersPayload;

class OwnedGroupsRequireResolutionError extends Error {
  constructor(
    readonly groups: { id: string; name: string; status: string }[],
  ) {
    super("Resolve, transfer, or archive owned groups before deleting your account");
    this.name = "OwnedGroupsRequireResolutionError";
  }
}

/*
 * Get user Info
*/ 

async function getmeRepo(userId: string): Promise<Pick<
  UserRecord,
  | "id"
  | "email"
  | "phone"
  | "first_name"
  | "last_name"
  | "avatar_url"
  | "status"
  | "email_verified_at"
  | "created_at"
  | "updated_at"
> | null> {
  return await prisma.users.findUnique({ 
    where: { id: userId! }, 
    select: { 
      id: true, 
      email: true, 
      phone: true, 
      first_name: true, 
      last_name: true, 
      avatar_url: true, 
      status: true, 
      email_verified_at: true, 
      created_at: true, 
      updated_at: true } 
  });
}

/*
* Update User
*/ 

async function updateMeRepo(userId: string, data: Prisma.usersUpdateInput): Promise<Pick<
  UserRecord,
  | "id"
  | "email"
  | "phone"
  | "first_name"
  | "last_name"
  | "avatar_url"
  | "status"
  | "email_verified_at"
  | "created_at"
  | "updated_at"
>> {
  const user = await prisma.users.update({ 
        where: { id: userId }, 
        data, 
        select: { id: true, 
          email: true, 
          phone: true, 
          first_name: true, 
          last_name: true, 
          avatar_url: true, 
          status: true, 
          email_verified_at: true, 
          created_at: true, 
          updated_at: true } 
      });
  
      return user
}

async function deleteMeRepo(userId: string): Promise<void> {
  await prisma.$transaction(async (tx) => {
    const user = await tx.users.findUniqueOrThrow({
      where: { id: userId },
      select: { first_name: true, last_name: true },
    });

    const ownedGroups = await tx.savings_circles.findMany({
      where: {
        owner_id: userId,
        status: { not: "ARCHIVED" },
      },
      select: { id: true, name: true, status: true },
    });
    if (ownedGroups.length) {
      throw new OwnedGroupsRequireResolutionError(ownedGroups);
    }

    const memberships = await tx.circle_members.findMany({
      where: {
        user_id: userId,
        status: "ACTIVE",
      },
      include: {
        savings_circle: {
          select: {
            id: true,
            name: true,
            owner_id: true,
          },
        },
      },
    });

    const ownerNotifications = memberships
      .filter(({ savings_circle }) => savings_circle.owner_id !== userId)
      .map(({ savings_circle }) => ({
        user_id: savings_circle.owner_id,
        type: "CIRCLE_UPDATE" as const,
        title: "Member account deleted",
        message: `${user.first_name} ${user.last_name} deleted their account and left "${savings_circle.name}".`.slice(
          0,
          255,
        ),
        data: {
          event: "MEMBER_ACCOUNT_DELETED",
          circleId: savings_circle.id,
        },
      }));

    if (ownerNotifications.length) {
      await tx.notifications.createMany({
        data: ownerNotifications,
      });
    }

    // The leaving member can never pay their not-yet-overdue cycles. Cancel
    // them so they don't sit PENDING forever and block the group from being
    // closed. Overdue/paid rows are real records and are left untouched.
    await cancelUpcomingContributions(tx, {
      userId,
      from: startOfUtcDay(),
    });

    // Record the departure in each group's history, including what the
    // member leaves unpaid. The app does not chase it: the group settles it.
    const leftCircleIds = memberships.map(({ circle_id }) => circle_id);
    if (leftCircleIds.length) {
      const unpaid = await tx.contributions.findMany({
        where: {
          circle_member: userId,
          circle_id: { in: leftCircleIds },
          ...outstandingContributionWhere(),
        },
        select: { circle_id: true, cycle_number: true, amount: true },
      });
      await tx.audit_log.createMany({
        data: leftCircleIds.map((circleId) => {
          const rows = unpaid.filter((c) => c.circle_id === circleId);
          return {
            user_id: userId,
            action: "MEMBER_LEFT",
            entity_type: "savings_circle",
            entity_id: circleId,
            metadata: {
              memberName: `${user.first_name} ${user.last_name}`,
              reason: "ACCOUNT_DELETED",
              unpaidCycles: rows.map((c) => c.cycle_number),
              unpaidTotal: rows.reduce((sum, c) => sum + Number(c.amount), 0),
            },
          };
        }),
      });
    }

    await tx.circle_members.updateMany({
      where: {
        user_id: userId,
        status: "ACTIVE",
      },
      data: {
        status: "LEFT",
        left_at: new Date(),
      },
    });

    await tx.sessions.updateMany({
      where: {
        user_id: userId,
        revoked_at: null,
      },
      data: {
        revoked_at: new Date(),
      },
    });

    await tx.users.update({
      where: { id: userId },
      data: {
        email: `deleted-${userId}@deleted.invalid`,
        phone: null,
        password_hash: crypto.randomBytes(32).toString("hex"),
        first_name: "Deleted",
        last_name: "User",
        avatar_url: null,
        email_verified_at: null,
        status: "UNSUBSCRIBED",
      },
    });
  });
}

/**
 * Create a new user.
 */
async function createUser(user: User): Promise<UserRecord> {
  try {
    return await prisma.users.create({
      data: {
        email: user.email,
        phone: user.phone,
        password_hash: user.password_hash as string,
        first_name: user.first_name,
        last_name: user.last_name,
        avatar_url: user.avatar_url,
      },
    });
  } catch (error) {
    throw new Error("Error occurred while creating the user");
  }
}

/**
 * Find a user by email.
 */
async function findUserByEmail(email: string): Promise<UserRecord | null> {
  try {
    return await prisma.users.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    throw new Error("Error occurred while finding the user by email");
  }
}

/**
 * Find a user by ID.
 */
async function findUserById(id: string): Promise<UserRecord | null> {
  try {
    return await prisma.users.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error("Error occurred while finding the user by id");
  }
}

export {
  createUser,
  deleteMeRepo,
  findUserByEmail,
  findUserById,
  getmeRepo,
  OwnedGroupsRequireResolutionError,
  updateMeRepo,
};
