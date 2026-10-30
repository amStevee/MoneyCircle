import crypto from "node:crypto";
import { WaitingListService } from "../../../src/modules/waiting-list/waitingList.service.js";
import {
  findWaitingListByEmail,
  joinWaitingListRepository,
} from "../../../src/modules/waiting-list/waitingList.repository.js";
import { emailService } from "../../../src/infrastructure/email/email.provider.js";

jest.mock("../../../src/modules/waiting-list/waitingList.repository", () => ({
  findWaitingListByEmail: jest.fn(),
  joinWaitingListRepository: jest.fn(),
}));

jest.mock("../../../src/infrastructure/email/email.provider", () => ({
  emailService: { send: jest.fn() },
}));

describe("WaitingListService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("rejects an invalid email before looking up or creating an entry", async () => {
    const service = new WaitingListService();

    await expect(service.join("not-an-email")).rejects.toThrow(
      "Invalid email format",
    );
    expect(findWaitingListByEmail).not.toHaveBeenCalled();
  });

  it("normalizes the email, stores a hashed invite, and sends confirmation", async () => {
    const service = new WaitingListService();
    const newEntry = { id: "entry-1", email: "person@example.com" };
    jest.mocked(findWaitingListByEmail).mockResolvedValue(null);
    jest.mocked(joinWaitingListRepository).mockResolvedValue(newEntry);
    jest.mocked(emailService.send).mockResolvedValue({ messageId: "mail-1" });

    const result = await service.join(" Person@Example.com ");

    expect(result.newEntry).toBe(newEntry);
    expect(result.token).toMatch(/^[a-f0-9]{64}$/);
    expect(findWaitingListByEmail).toHaveBeenCalledWith("person@example.com");
    const repositoryCall = jest.mocked(joinWaitingListRepository).mock.calls[0];
    if (!repositoryCall) throw new Error("Waitlist entry was not persisted");
    const [email, expiresAt, tokenHash] = repositoryCall;
    expect(email).toBe("person@example.com");
    expect(expiresAt.getTime()).toBeGreaterThan(Date.now());
    expect(expiresAt.getTime()).toBeLessThanOrEqual(
      Date.now() + 24 * 60 * 60 * 1000,
    );
    expect(tokenHash).toBe(
      crypto.createHash("sha256").update(result.token).digest("hex"),
    );
    expect(emailService.send).toHaveBeenCalledWith(
      expect.objectContaining({ to: "person@example.com" }),
    );
  });
});
