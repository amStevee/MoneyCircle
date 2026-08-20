import { prisma } from "@repo/db";

async function joinWaitingListRepository(email: string, expiresAt: Date, tokenHash: string): Promise<any> {
  try {
    const verificationExpiresAt = expiresAt;
    const newEntry = await prisma.waitlistEntry.create({
      data: {
        email,
        verification_expires_at: verificationExpiresAt,
        verification_token_hash: tokenHash,
      },
    });
    return newEntry;
  } catch (error) {
    throw new Error("Error occurred while creating the waiting list entry");
  }
}

async function findWaitingListByEmail(email: string): Promise<any | null> {
  try {
    return await prisma.waitlistEntry.findUnique({ where: { email } });
  } catch (error) {
    console.log(error)
    throw new Error("Error occurred while finding the waiting list entry");
  }
}

async function findWaitlistEntry(tokenHash:string) {
  try {
    return await prisma.waitlistEntry.findFirst({
      where: {
        verification_token_hash: tokenHash,
        verification_expires_at: {
          gt: new Date(),
        },
        status: "PENDING",
      },
      select: {
        email: true,
      },
    });
  } catch (error) {
    console.log(error)
    throw new Error("Error occurred while finding the waitlist entry");
  }
}

async function markWaitlistEntryVerified(tokenHash: string, userId: string) {
  try {
    return await prisma.waitlistEntry.updateMany({
      where: {
        verification_token_hash: tokenHash,
        status: "PENDING",
      },
      data: {
        status: "VERIFIED",
        verified_at: new Date(),
        userId,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error occurred while verifying the waitlist entry");
  }
}

export {
  joinWaitingListRepository,
  findWaitingListByEmail,
  findWaitlistEntry,
  markWaitlistEntryVerified,
};

