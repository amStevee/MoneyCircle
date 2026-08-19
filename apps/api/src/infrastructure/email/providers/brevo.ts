import { BrevoClient, BrevoError } from "@getbrevo/brevo";
import type {
  EmailPayload,
  EmailProvider,
  EmailSendResult,
} from "../email.types.js";

export class BrevoProvider implements EmailProvider {
  // Cache the client on the instance instead of a module-level constant.
  // `undefined` = "not yet attempted", `null` = "attempted, no API key".
  // Deferring creation until the first `sendEmail()` call (rather than the
  // constructor) means `process.env.BREVO_API_KEY` is read at send-time, not
  // at "whenever this module happened to be imported" - so it no longer
  // matters whether something like `dotenv.config()` ran before or after
  // this file was pulled in via a transitive import chain.
  private brevo: BrevoClient | null | undefined;

  private getClient(): BrevoClient | null {
    if (this.brevo === undefined) {
      const brevoApiKey = process.env.BREVO_API_KEY;
      this.brevo = brevoApiKey
        ? new BrevoClient({ apiKey: brevoApiKey })
        : null;
    }
    return this.brevo;
  }

  async sendEmail(payload: EmailPayload): Promise<EmailSendResult> {
    const brevo = this.getClient();
    if (!brevo) {
      throw new Error("BREVO_API_KEY is not configured.");
    }

    const defaultFrom = process.env.EMAIL_FROM ?? "example@example.com";

    const emailPayload = {
      sender: {
        email: defaultFrom,
        name: process.env.TZ_BREVO_SENDER_NAME ?? "MoneyCircle",
      },
      to: [
        {
          email: payload.to,
        },
      ],
      subject: payload.subject,
      htmlContent: payload.htmlContent,
    };

    try {
      return await brevo.transactionalEmails.sendTransacEmail(emailPayload);
    } catch (error) {
      if (error instanceof BrevoError) {
        console.error("[BrevoProvider] Failed to send email:", {
          to: payload.to,
          statusCode: error.statusCode,
          requestId: error.requestId,
          body: error.body,
          message: error.message,
        });
      } else {
        console.error("[BrevoProvider] Failed to send email:", {
          to: payload.to,
          error,
        });
      }
      throw error;
    }
  }
}

export function createBrevoProvider(): EmailProvider {
  return new BrevoProvider();
}
