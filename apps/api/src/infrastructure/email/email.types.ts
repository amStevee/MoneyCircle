export interface EmailPayload {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
}

export interface EmailSendResult {
  messageId?: string;
  accepted?: string[];
  rejected?: string[];
  response?: string;
}

export interface EmailProvider {
  sendEmail(payload: EmailPayload): Promise<EmailSendResult>;
}
