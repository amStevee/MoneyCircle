import {
  inFlightPaymentWhere,
  isContributionOverdue,
  outstandingContributionWhere,
  startOfNextUtcDay,
  startOfUtcDay,
} from "../../../src/modules/Contributions/contribution-status.js";

const now = new Date("2026-11-25T15:30:00.000Z");

describe("contribution status rules", () => {
  it("uses UTC day boundaries", () => {
    expect(startOfUtcDay(now)).toEqual(new Date("2026-11-25T00:00:00.000Z"));
    expect(startOfNextUtcDay(now)).toEqual(new Date("2026-11-26T00:00:00.000Z"));
  });

  it("is not overdue on the due day, even after the due time has passed", () => {
    const dueEarlierToday = { status: "PENDING", due_date: new Date("2026-11-25T00:00:00.000Z") };
    expect(isContributionOverdue(dueEarlierToday, now)).toBe(false);
  });

  it("is overdue once the due day has passed", () => {
    const dueYesterday = { status: "PENDING", due_date: new Date("2026-11-24T23:00:00.000Z") };
    expect(isContributionOverdue(dueYesterday, now)).toBe(true);
  });

  it("treats a stored OVERDUE status as overdue and never flags PAID/CANCELLED", () => {
    const old = new Date("2026-01-01T00:00:00.000Z");
    expect(isContributionOverdue({ status: "OVERDUE", due_date: old }, now)).toBe(true);
    expect(isContributionOverdue({ status: "PAID", due_date: old }, now)).toBe(false);
    expect(isContributionOverdue({ status: "CANCELLED", due_date: old }, now)).toBe(false);
  });

  it("only counts contributions due today or earlier as outstanding", () => {
    expect(outstandingContributionWhere(now)).toEqual({
      OR: [
        { status: { in: ["OVERDUE", "FAILED"] } },
        { status: "PENDING", due_date: { lt: new Date("2026-11-26T00:00:00.000Z") } },
      ],
    });
  });

  it("ignores PENDING payments older than 24 hours (abandoned checkouts)", () => {
    expect(inFlightPaymentWhere(now)).toEqual({
      OR: [
        { status: "PROCESSING" },
        { status: "PENDING", created_at: { gte: new Date("2026-11-24T15:30:00.000Z") } },
      ],
    });
  });
});
