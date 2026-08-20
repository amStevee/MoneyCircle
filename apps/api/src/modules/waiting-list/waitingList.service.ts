import { z } from "zod";
import {
  joinWaitingListRepository,
  findWaitingListByEmail,
} from "./waitingList.repository.js";
import { emailService } from "../../infrastructure/email/email.provider.js";
import crypto from "crypto";


export const joinWaitingListSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("please provide a valid email address"),
});

export type JoinWaitingListInput = z.infer<typeof joinWaitingListSchema>;
type JoinWaitingListResult = Awaited<ReturnType<typeof joinWaitingListRepository>>;

class WaitingListService {
  async join(email: JoinWaitingListInput["email"]): Promise<JoinWaitingListResult> {
    const result = joinWaitingListSchema.safeParse({ email });
    if (!result.success) {
      throw new Error("Invalid email format");
    }

    const normalizeEmail = result.data.email;

    const existingEntry = await findWaitingListByEmail(normalizeEmail);

    if (existingEntry) {
      throw new Error("Email already exists in the waiting list");
    }

    const token = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const expresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now **NOTE: change to a shorter value as application is in development**

    const newEntry = await joinWaitingListRepository(normalizeEmail, expresAt, tokenHash);

    await emailService.send({
      to: normalizeEmail,
      subject: "Thanks for joining the waiting list",
      htmlContent: `<p>Hello!</p><p>Thank you for joining our waiting list. We&apos;ll notify you when we launch.</p>`,
    });

    return {newEntry, token};
  }
}

const waitingListService = new WaitingListService();
export { WaitingListService, waitingListService };
