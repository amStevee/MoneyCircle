import { createResendProvider } from "./providers/resend.js";
import { createEmailService } from "./email.service.js";

export const emailProvider = createResendProvider();
export const emailService = createEmailService(emailProvider);
