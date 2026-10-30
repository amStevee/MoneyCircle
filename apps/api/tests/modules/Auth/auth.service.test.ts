import { AuthService } from "../../../src/modules/Auth/auth.service.js";
import { createSession } from "../../../src/modules/Auth/sessions.repository.js";
import { findWaitlistEntry } from "../../../src/modules/waiting-list/waitingList.repository.js";
import {
  createUser,
  findUserByEmail,
} from "../../../src/modules/Users/users.repository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

jest.mock("../../../src/modules/waiting-list/waitingList.repository", () => ({
  findWaitlistEntry: jest.fn(),
  markWaitlistEntryVerified: jest.fn(),
}));

jest.mock("../../../src/modules/Users/users.repository", () => ({
  createUser: jest.fn(),
  findUserByEmail: jest.fn(),
}));

jest.mock("../../../src/modules/Auth/sessions.repository", () => ({
  createSession: jest.fn(),
}));

describe("AuthService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("rejects a signup with an invalid email before reaching persistence", async () => {
    const service = new AuthService();

    await expect(
      service.signup({
        first_name: "Test",
        last_name: "User",
        email: "not-an-email",
        password: "long-enough-password",
      }),
    ).rejects.toThrow("Please provide a valid email address");
  });

  it("rejects login when no account matches the normalized email", async () => {
    const service = new AuthService();
    jest.mocked(findUserByEmail).mockResolvedValue(null);

    await expect(
      service.login({ email: "  MISSING@example.com ", password: "secret" }),
    ).rejects.toThrow("Invalid email or password");

    expect(findUserByEmail).toHaveBeenCalledWith("missing@example.com");
  });

  it("rejects an invalid signup invitation", async () => {
    const service = new AuthService();
    jest.mocked(findWaitlistEntry).mockResolvedValue(null);

    await expect(service.getSignupContext("bad-token")).rejects.toThrow(
      "Invalid or expired signup invitation",
    );
  });

  it("creates a session and returns a safe user after signup", async () => {
    const service = new AuthService();
    const createdUser = {
      id: "user-1",
      email: "person@example.com",
      phone: null,
      password_hash: "stored-hash",
      first_name: "Test",
      last_name: "User",
      avatar_url: null,
      email_verified_at: null,
      status: "PENDING" as const,
      created_at: new Date(),
      updated_at: new Date(),
    };
    jest.mocked(findUserByEmail).mockResolvedValue(null);
    jest.mocked(createUser).mockResolvedValue(createdUser);
    jest
      .mocked(createSession)
      .mockResolvedValue({} as Awaited<ReturnType<typeof createSession>>);

    const result = await service.signup({
      first_name: "Test",
      last_name: "User",
      email: " PERSON@example.com ",
      password: "long-enough-password",
    });

    expect(result.user).toEqual({
      id: createdUser.id,
      email: "person@example.com",
      phone: null,
      first_name: "Test",
      last_name: "User",
      avatar_url: null,
      status: "PENDING",
    });
    expect(result.user).not.toHaveProperty("password_hash");
    expect(jwt.decode(result.token)).toMatchObject({ sub: createdUser.id });
    expect(createSession).toHaveBeenCalledWith(
      createdUser.id,
      expect.any(String),
      expect.any(Date),
    );
  });

  it("authenticates a user and returns a safe session on login", async () => {
    const service = new AuthService();
    const user = {
      id: "user-2",
      email: "person@example.com",
      phone: null,
      password_hash: await bcrypt.hash("correct-password", 4),
      first_name: "Test",
      last_name: "User",
      avatar_url: null,
      email_verified_at: null,
      status: "VERIFIED" as const,
      created_at: new Date(),
      updated_at: new Date(),
    };
    jest.mocked(findUserByEmail).mockResolvedValue(user);
    jest
      .mocked(createSession)
      .mockResolvedValue({} as Awaited<ReturnType<typeof createSession>>);

    const result = await service.login({
      email: " PERSON@example.com ",
      password: "correct-password",
    });

    expect(findUserByEmail).toHaveBeenCalledWith("person@example.com");
    expect(result.user).not.toHaveProperty("password_hash");
    expect(jwt.decode(result.token)).toMatchObject({ sub: user.id });
    expect(createSession).toHaveBeenCalledWith(
      user.id,
      expect.any(String),
      expect.any(Date),
    );
  });
});
