import { prisma } from "@repo/db";

async function joinWaitingListRepository(email: string): Promise<any> {
  try {
    const verificationExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const newEntry = await prisma.waitlistEntry.create({
      data: {
        email,
        verification_expires_at: verificationExpiresAt,
        verification_token_hash: null,
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
    throw new Error("Error occurred while finding the waiting list entry");
  }
}

export { joinWaitingListRepository, findWaitingListByEmail };
