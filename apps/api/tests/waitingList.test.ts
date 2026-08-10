import request from "supertest";

const mockSend = jest.fn().mockResolvedValue({ messageId: "test-message-id" });
const mockFindByEmail = jest.fn().mockResolvedValue(null);
const mockJoinWaitingListRepository = jest
  .fn()
  .mockResolvedValue({ email: "user@example.com" });

jest.mock("../src/infrastructure/email/email.provider.ts", () => ({
  emailService: {
    send: mockSend,
  },
}));

jest.mock("../src/modules/waiting-list/waitingList.repository.ts", () => ({
  joinWaitingListRepository: mockJoinWaitingListRepository,
  findWaitingListByEmail: mockFindByEmail,
}));

describe("Waiting list", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("sends an email after successfully joining the waiting list", async () => {
    const app = (await import("../src/app.ts")).default;

    const response = await request(app)
      .post("/api/v1/waiting-list")
      .send({ email: "user@example.com" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Successfully joined the waiting list",
    });
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
  });

  it("returns 400 for invalid email", async () => {
    const app = (await import("../src/app.ts")).default;

    const response = await request(app)
      .post("/api/v1/waiting-list")
      .send({ email: "not-an-email" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(mockSend).not.toHaveBeenCalled();
  });
});
