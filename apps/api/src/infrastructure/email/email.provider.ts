import { createNodemailerProvider } from "./providers/nodemailer.provider.js";
import { createEmailService } from "./email.service.js";

export const emailProvider = createNodemailerProvider();
export const emailService = createEmailService(emailProvider);
