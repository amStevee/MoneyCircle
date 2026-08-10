import type {
  EmailPayload,
  EmailProvider,
  EmailSendResult,
} from "./email.types.ts";

export class EmailService {
  constructor(private readonly provider: EmailProvider) {}

  async send(payload: EmailPayload): Promise<EmailSendResult> {
    return this.provider.sendEmail(payload);
  }
}

export function createEmailService(provider: EmailProvider): EmailService {
  return new EmailService(provider);
}
