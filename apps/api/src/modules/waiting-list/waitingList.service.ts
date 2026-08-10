import { z } from "zod";
import {
  joinWaitingListRepository,
  findWaitingListByEmail,
} from "./waitingList.repository.js";

export const joinWaitingListSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("please provide a valid email address"),
});

export type JoinWaitingListInput = z.infer<typeof joinWaitingListSchema>;

class WaitingListService {
  async join(email: JoinWaitingListInput["email"]) {
    const result = joinWaitingListSchema.safeParse({ email });
    if (!result.success) {
      throw new Error("Invalid email format");
    }

    const normalizeEmail = result.data.email;

    const existingEntry = await findWaitingListByEmail(normalizeEmail);

    if (existingEntry) {
      throw new Error("Email already exists in the waiting list");
    }

    const newEntry = await joinWaitingListRepository(normalizeEmail);
    return newEntry;
  }
}

const waitingListService = new WaitingListService();
export { WaitingListService, waitingListService };
