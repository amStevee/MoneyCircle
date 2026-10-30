import { BrevoProvider } from "../../../src/infrastructure/email/providers/brevo.js";

const mockSendTransacEmail = jest.fn();

jest.mock("@getbrevo/brevo", () => ({
  BrevoClient: jest.fn().mockImplementation(() => ({
    transactionalEmails: { sendTransacEmail: mockSendTransacEmail },
  })),
  BrevoError: class BrevoError extends Error {},
}));

describe("BrevoProvider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("reports missing configuration without attempting to send", async () => {
    const previousApiKey = process.env.BREVO_API_KEY;
    delete process.env.BREVO_API_KEY;

    try {
      await expect(
        new BrevoProvider().sendEmail({
          to: "person@example.com",
          subject: "Welcome",
          htmlContent: "<p>Hello</p>",
        }),
      ).rejects.toThrow("BREVO_API_KEY is not configured.");
    } finally {
      if (previousApiKey === undefined) {
        delete process.env.BREVO_API_KEY;
      } else {
        process.env.BREVO_API_KEY = previousApiKey;
      }
    }
  });

  it("uses the configured sender and sends the requested message", async () => {
    const previousValues = {
      apiKey: process.env.BREVO_API_KEY,
      from: process.env.EMAIL_FROM,
      senderName: process.env.TZ_BREVO_SENDER_NAME,
    };
    process.env.BREVO_API_KEY = "test-api-key";
    process.env.EMAIL_FROM = "notifications@example.com";
    process.env.TZ_BREVO_SENDER_NAME = "MoneyCircle Test";
    mockSendTransacEmail.mockResolvedValue({ messageId: "message-2" });

    try {
      const payload = {
        to: "person@example.com",
        subject: "Welcome",
        htmlContent: "<p>Hello</p>",
      };

      await expect(new BrevoProvider().sendEmail(payload)).resolves.toEqual({
        messageId: "message-2",
      });
      expect(mockSendTransacEmail).toHaveBeenCalledWith({
        sender: {
          email: "notifications@example.com",
          name: "MoneyCircle Test",
        },
        to: [{ email: "person@example.com" }],
        subject: "Welcome",
        htmlContent: "<p>Hello</p>",
      });
    } finally {
      if (previousValues.apiKey === undefined) delete process.env.BREVO_API_KEY;
      else process.env.BREVO_API_KEY = previousValues.apiKey;
      if (previousValues.from === undefined) delete process.env.EMAIL_FROM;
      else process.env.EMAIL_FROM = previousValues.from;
      if (previousValues.senderName === undefined) {
        delete process.env.TZ_BREVO_SENDER_NAME;
      } else {
        process.env.TZ_BREVO_SENDER_NAME = previousValues.senderName;
      }
    }
  });
});
