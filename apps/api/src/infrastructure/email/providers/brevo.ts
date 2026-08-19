import { BrevoClient } from "@getbrevo/brevo";
import type {
  EmailPayload,
  EmailProvider,
  EmailSendResult,
} from "../email.types.js";

const brevoApiKey = process.env.BREVO_API_KEY;
const defaultFrom = process.env.EMAIL_FROM ?? "example@example.com";

const brevo = brevoApiKey ? new BrevoClient({apiKey: brevoApiKey}) : null;

export class ResendProvider implements EmailProvider {
  async sendEmail(payload: EmailPayload): Promise<EmailSendResult> {
    if (!brevo) {
      throw new Error("BREVO_API_KEY is not configured.");
    }

    const emailPayload = {
        sender: {
            email: defaultFrom,
            name: process.env.TZ_BREVO_SENDER_NAME ?? "MoneyCircle",
        },
        to: [
            {
                email: payload.to,
                name:  "",
            },
        ],
        subject: payload.subject,
        htmlContent: payload.htmlContent,
    };

    return brevo.transactionalEmails.sendTransacEmail(emailPayload)
  }
}

export function createResendProvider(): EmailProvider {
  return new ResendProvider();
}
