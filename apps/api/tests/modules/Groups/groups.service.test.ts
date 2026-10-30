import crypto from "node:crypto";
import { GroupsService } from "../../../src/modules/Groups/groups.service.js";
import {
  countActiveMembers,
  createInvitation,
  findGroupByIdForUser,
  findPendingInvitationByEmail,
} from "../../../src/modules/Groups/groups.repository.js";
import { findUserByEmail } from "../../../src/modules/Users/users.repository.js";
import { emailService } from "../../../src/infrastructure/email/email.provider.js";

jest.mock("../../../src/modules/Groups/groups.repository", () => ({
  acceptInvitationTx: jest.fn(),
  countActiveMembers: jest.fn(),
  createGroup: jest.fn(),
  createInvitation: jest.fn(),
  findGroupByIdForUser: jest.fn(),
  findGroupMemberCounts: jest.fn(),
  findInvitationByTokenHash: jest.fn(),
  findPendingInvitationByEmail: jest.fn(),
  findPendingInvitations: jest.fn(),
  findUserGroups: jest.fn(),
  findUserPaidContributionCounts: jest.fn(),
  refreshInvitation: jest.fn(),
  upsertInvitedMembership: jest.fn(),
}));

jest.mock("../../../src/modules/Users/users.repository", () => ({
  findUserByEmail: jest.fn(),
}));

jest.mock("../../../src/infrastructure/email/email.provider", () => ({
  emailService: { send: jest.fn() },
}));

describe("GroupsService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("prevents a regular member from inviting another user", async () => {
    const service = new GroupsService();
    jest.mocked(findGroupByIdForUser).mockResolvedValue({
      status: "ACTIVE",
      circle_members: [{ user_id: "member-1", role: "MEMBER" }],
    } as never);

    await expect(
      service.inviteMember("group-1", "member-1", {
        email: "invitee@example.com",
      }),
    ).rejects.toThrow("Only the group owner or an admin can invite members");

    expect(findUserByEmail).not.toHaveBeenCalled();
  });

  it("creates an invitation with a hashed token and sends its shareable link", async () => {
    const service = new GroupsService();
    const createdAt = new Date("2026-03-01T10:00:00.000Z");
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    jest.mocked(findGroupByIdForUser).mockResolvedValue({
      id: "group-1",
      name: "Savings",
      status: "ACTIVE",
      member_limit: 5,
      circle_members: [{ user_id: "owner-1", role: "OWNER" }],
    } as never);
    jest.mocked(findUserByEmail).mockResolvedValue(null);
    jest.mocked(countActiveMembers).mockResolvedValue(1);
    jest.mocked(findPendingInvitationByEmail).mockResolvedValue(null);
    jest.mocked(createInvitation).mockResolvedValue({
      id: "invitation-1",
      email: "invitee@example.com",
      status: "PENDING",
      expires_at: expiresAt,
      created_at: createdAt,
    } as never);
    jest.mocked(emailService.send).mockResolvedValue({ messageId: "mail-1" });

    const result = await service.inviteMember("group-1", "owner-1", {
      email: " Invitee@Example.com ",
    });

    expect(result.invitation).toEqual({
      id: "invitation-1",
      email: "invitee@example.com",
      status: "PENDING",
      expiresAt,
      createdAt,
    });
    const token = result.inviteUrl.split("/").pop()!;
    const invitationCall = jest.mocked(createInvitation).mock.calls[0];
    if (!invitationCall) throw new Error("Invitation was not persisted");
    const [invitationInput] = invitationCall;
    expect(invitationInput.email).toBe("invitee@example.com");
    expect(invitationInput.tokenHash).toBe(
      crypto.createHash("sha256").update(token).digest("hex"),
    );
    expect(emailService.send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "invitee@example.com",
        htmlContent: expect.stringContaining(result.inviteUrl),
      }),
    );
  });
});
