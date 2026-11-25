import { createBrevoProvider } from "./providers/brevo.js";
import { createEmailService } from "./email.service.js";

export const emailProvider = createBrevoProvider();
export const emailService = createEmailService(emailProvider);
