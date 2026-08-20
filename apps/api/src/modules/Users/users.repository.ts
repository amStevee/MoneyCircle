import { prisma } from "@repo/db";
import { User } from "./user.type.js";

async function createUser(user: User) {
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

async function findUserByEmail(email: string) {
  try {
    return await prisma.users.findUnique({ where: { email } });
  } catch (error) {
    throw new Error("Error occurred while finding the user by email");
  }
}

async function findUserById(id: string) {
  try {
    return await prisma.users.findUnique({ where: { id } });
  } catch (error) {
    throw new Error("Error occurred while finding the user by id");
  }
}

export { createUser, findUserByEmail, findUserById };
