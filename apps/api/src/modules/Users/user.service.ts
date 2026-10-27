import {
  deleteMeRepo,
  getmeRepo,
  updateMeRepo,
} from "./users.repository.js";
import type { Prisma } from "@repo/db";

type UserRecord = Prisma.usersGetPayload<{}>;

class UserService {
  async getme(
    userId: string,
  ): Promise<Pick<
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
    const user = await getmeRepo(userId);

    return user;
  }

  async updateMe(
    userId: string,
    data: Prisma.usersUpdateInput,
  ): Promise<Awaited<ReturnType<typeof updateMeRepo>>> {
    const user = await updateMeRepo(userId, data);

    return user;
  }

  async deleteMe(userId: string): Promise<void> {
    await deleteMeRepo(userId);
  }
}

const userService = new UserService();

export default userService;
