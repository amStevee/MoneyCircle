import nodemailer from "nodemailer";
import type {
  EmailPayload,
  EmailProvider,
  EmailSendResult,
} from "../email.types.ts";

const smtpUrl = process.env.EMAIL_SMTP_URL;
const smtpHost = process.env.EMAIL_SMTP_HOST;
const smtpPort = process.env.EMAIL_SMTP_PORT
  ? Number(process.env.EMAIL_SMTP_PORT)
  : undefined;
const smtpUser = process.env.EMAIL_SMTP_USER;
const smtpPass = process.env.EMAIL_SMTP_PASSWORD;
const smtpSecure = process.env.EMAIL_SMTP_SECURE === "true";
const defaultFrom = process.env.EMAIL_FROM ?? "no-reply@example.com";

function buildTransportOptions() {
  if (smtpUrl) {
    return smtpUrl;
  }

  const baseConfig: any = {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
  };

  if (smtpUser || smtpPass) {
    baseConfig.auth = {
      user: smtpUser,
      pass: smtpPass,
    };
  }

  return baseConfig;
}

const transport = nodemailer.createTransport(buildTransportOptions());

export class NodemailerProvider implements EmailProvider {
  async sendEmail(payload: EmailPayload): Promise<EmailSendResult> {
    const info = await transport.sendMail({
      from: payload.from ?? defaultFrom,
      to: payload.to,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
    });

    return {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    };
  }
}

export function createNodemailerProvider(): EmailProvider {
  return new NodemailerProvider();
}
