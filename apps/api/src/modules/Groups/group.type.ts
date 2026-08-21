export interface CreateGroupInput {
  name: string;
  description?: string;
  contributionAmount: number;
  currency: string;
  frequency: "WEEKLY" | "MONTHLY" | "YEARLY";
  memberLimit: number;
  totalCycles: number;
  startDate: Date;
}
