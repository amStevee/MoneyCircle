import { prisma } from "@repo/db";
import {
  findGroupPaidContributionCounts,
  findUpcomingContributions,
} from "../../../src/modules/Dashboard/dashboard.repository.js";

jest.mock("@repo/db", () => ({
  prisma: {
    contributions: {
      findMany: jest.fn(),
      groupBy: jest.fn(),
    },
  },
}));

describe("findUpcomingContributions", () => {
  it("queries stored pending and overdue contribution dates in due-date order", async () => {
    jest.mocked(prisma.contributions.findMany).mockResolvedValue([] as never);

    await findUpcomingContributions("user-1");

    expect(prisma.contributions.findMany).toHaveBeenCalledWith({
      where: {
        circle_member: "user-1",
        status: { in: ["PENDING", "OVERDUE"] },
      },
      include: {
        savings_circle: {
          select: { id: true, name: true },
        },
      },
      orderBy: [{ due_date: "asc" }, { created_at: "asc" }],
    });
  });
});

describe("findGroupPaidContributionCounts", () => {
  it("counts paid contributions across every member of the requested groups", async () => {
    jest
      .mocked(prisma.contributions.groupBy)
      .mockResolvedValue([
        { circle_id: "group-1", _count: { _all: 2 } },
      ] as never);

    await expect(findGroupPaidContributionCounts(["group-1"])).resolves.toEqual(
      [{ circle_id: "group-1", count: 2 }],
    );

    expect(prisma.contributions.groupBy).toHaveBeenCalledWith({
      by: ["circle_id"],
      where: {
        circle_id: { in: ["group-1"] },
        status: "PAID",
      },
      _count: { _all: true },
    });
  });
});
