import { createNodemailerProvider } from "./providers/nodemailer.provider.ts";
import { createEmailService } from "./email.service.ts";

export const emailProvider = createNodemailerProvider();
export const emailService = createEmailService(emailProvider);
