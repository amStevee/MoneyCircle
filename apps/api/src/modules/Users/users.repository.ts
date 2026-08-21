import { prisma } from "@repo/db";
import type { Prisma } from "@repo/db";
import type { User } from "./user.type.js";

/**
 * Prisma representation of a user.
 *
 * Keeping this type explicit prevents TypeScript from
 * generating a non-portable inferred return type that
 * references Prisma's generated Status enum.
 */
type UserRecord = Prisma.usersGetPayload<{}>;

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

export { createUser, findUserByEmail, findUserById };
