import { Resend } from "resend";
import type {
  EmailPayload,
  EmailProvider,
  EmailSendResult,
} from "../email.types.js";

const resendApiKey = process.env.RESEND_API_KEY;
const defaultFrom = process.env.EMAIL_FROM ?? "onboarding@resend.dev";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export class ResendProvider implements EmailProvider {
  async sendEmail(payload: EmailPayload): Promise<EmailSendResult> {
    if (!resend) {
      throw new Error("RESEND_API_KEY is not configured.");
    }

    const recipients = Array.isArray(payload.to) ? payload.to : [payload.to];

    if (!payload.text && !payload.html) {
      throw new Error("Email payload must include either text or html content.");
    }

    const emailPayload = {
      from: payload.from ?? defaultFrom,
      to: recipients,
      subject: payload.subject,
      ...(payload.text ? { text: payload.text } : {}),
      ...(payload.html ? { html: payload.html } : {}),
    } as Parameters<typeof resend.emails.send>[0];

    const result = await resend.emails.send(emailPayload);

    if (result.error) {
      throw new Error(result.error.message ?? "Failed to send email with Resend.");
    }

    return {
      messageId: result.data?.id ?? "",
      accepted: result.data?.id ? [result.data.id] : [],
      rejected: [],
      response: "Email sent successfully",
    };
  }
}

export function createResendProvider(): EmailProvider {
  return new ResendProvider();
}
