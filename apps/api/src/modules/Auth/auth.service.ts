import crypto from "node:crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import {
  findWaitlistEntry,
  markWaitlistEntryVerified,
} from "../waiting-list/waitingList.repository.js";
import {
  createUser,
  findUserByEmail,
} from "../Users/users.repository.js";
import { createSession } from "./sessions.repository.js";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export const signupSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required"),
  last_name: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().toLowerCase().email("Please provide a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please provide a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

function toSafeUser(user: {
  id: string;
  email: string;
  phone: string | null;
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  status: string;
}) {
  return {
    id: user.id,
    email: user.email,
    phone: user.phone,
    first_name: user.first_name,
    last_name: user.last_name,
    avatar_url: user.avatar_url,
    status: user.status,
  };
}

function issueToken(userId: string) {
  return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: "7d" });
}

async function persistSession(userId: string, jwtToken: string) {
  const tokenHash = crypto.createHash("sha256").update(jwtToken).digest("hex");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await createSession(userId, tokenHash, expiresAt);
}

class AuthService {
  async getSignupContext(token: string) {
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    const waitlisEntry = await findWaitlistEntry(tokenHash);

    if (!waitlisEntry) {
      throw new Error("Invalid or expired signup invitation");
    }

    return {
      email: waitlisEntry.email,
    };
  }

  async signup(input: SignupInput, token?: string) {
    const result = signupSchema.safeParse(input);
    if (!result.success) {
      throw new Error(result.error.issues[0]?.message ?? "Invalid signup details");
    }

    const { first_name, last_name, email, password } = result.data;

    let tokenHash: string | null = null;

    // If the signup was initiated from a waitlist invite link, the invite
    // must still be valid and must match the email being registered.
    if (token) {
      tokenHash = crypto.createHash("sha256").update(token).digest("hex");
      const waitlistEntry = await findWaitlistEntry(tokenHash);

      if (!waitlistEntry) {
        throw new Error("Invalid or expired signup invitation");
      }

      if (waitlistEntry.email !== email) {
        throw new Error("Email does not match the signup invitation");
      }
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      throw new Error("An account with this email already exists");
    }

    const password_hash = await bcrypt.hash(password, 10);

    const user = await createUser({
      email,
      first_name,
      last_name,
      password_hash,
    });

    if (tokenHash) {
      await markWaitlistEntryVerified(tokenHash, user.id);
    }

    const jwtToken = issueToken(user.id);
    await persistSession(user.id, jwtToken);

    return { user: toSafeUser(user), token: jwtToken };
  }

  async login(input: LoginInput) {
    const result = loginSchema.safeParse(input);
    if (!result.success) {
      throw new Error(result.error.issues[0]?.message ?? "Invalid login details");
    }

    const { email, password } = result.data;

    const user = await findUserByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const passwordMatches = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatches) {
      throw new Error("Invalid email or password");
    }

    const jwtToken = issueToken(user.id);
    await persistSession(user.id, jwtToken);

    return { user: toSafeUser(user), token: jwtToken };
  }
}

const authService = new AuthService();
export { AuthService, authService };
