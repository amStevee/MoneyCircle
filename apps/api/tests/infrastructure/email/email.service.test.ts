import { createEmailService } from "../../../src/infrastructure/email/email.service.js";
import type { EmailProvider } from "../../../src/infrastructure/email/email.types.js";

describe("EmailService", () => {
  it("delegates the payload to its provider and returns the provider result", async () => {
    const result = { messageId: "message-1" };
    const sendEmail = jest.fn().mockResolvedValue(result);
    const provider: EmailProvider = { sendEmail };
    const service = createEmailService(provider);
    const payload = {
      to: "person@example.com",
      subject: "Welcome",
      htmlContent: "<p>Hello</p>",
    };

    await expect(service.send(payload)).resolves.toBe(result);
    expect(sendEmail).toHaveBeenCalledWith(payload);
  });
});
