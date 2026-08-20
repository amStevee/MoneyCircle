import crypto from "node:crypto";
import { findWaitlistEntry } from "../waiting-list/waitingList.repository.js";

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
}

const authService = new AuthService();
export { AuthService, authService };
