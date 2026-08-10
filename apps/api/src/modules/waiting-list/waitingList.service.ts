import { z } from "zod";
import {
  joinWaitingListRepository,
  findWaitingListByEmail,
} from "./waitingList.repository.ts";
import { emailService } from "../../infrastructure/email/email.provider.ts";
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

    await emailService.send({
      to: normalizeEmail,
      subject: "Thanks for joining the waiting list",
      text: `Hello!\n\nThank you for joining our waiting list. We'll notify you when we launch.`,
      html: `<p>Hello!</p><p>Thank you for joining our waiting list. We&apos;ll notify you when we launch.</p>`,
    });

    return newEntry;
  }
}

const waitingListService = new WaitingListService();
export { WaitingListService, waitingListService };
