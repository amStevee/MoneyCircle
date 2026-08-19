const mockSend = jest.fn().mockResolvedValue({ messageId: "test-message-id" });
const mockFindByEmail = jest.fn().mockResolvedValue(null);
const mockJoinWaitingListRepository = jest
  .fn()
  .mockResolvedValue({ email: "user@example.com" });

jest.mock("../src/infrastructure/email/email.provider.js", () => ({
  emailService: {
    send: mockSend,
  },
}));

jest.mock("../src/modules/waiting-list/waitingList.repository.js", () => ({
  joinWaitingListRepository: mockJoinWaitingListRepository,
  findWaitingListByEmail: mockFindByEmail,
}));

describe("waitingListService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("joins the waiting list and sends a confirmation email", async () => {
    const { waitingListService } = await import(
      "../src/modules/waiting-list/waitingList.service.ts"
    );

    const result = await waitingListService.join("user@example.com");

    expect(mockFindByEmail).toHaveBeenCalledWith("user@example.com");
    expect(mockJoinWaitingListRepository).toHaveBeenCalledWith(
      "user@example.com",
    );
    expect(mockSend).toHaveBeenCalledWith({
      to: "user@example.com",
      subject: "Thanks for joining the waiting list",
      text: expect.any(String),
      html: expect.any(String),
    });
    expect(result).toEqual({ email: "user@example.com" });
  });

  it("throws when the email is invalid", async () => {
    const { waitingListService } = await import(
      "../src/modules/waiting-list/waitingList.service.ts"
    );

    await expect(waitingListService.join("not-an-email")).rejects.toThrow(
      "Invalid email format",
    );
    expect(mockSend).not.toHaveBeenCalled();
  });
});
