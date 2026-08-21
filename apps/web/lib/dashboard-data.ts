export interface SavingsGroupSummary { id: string; name: string; description?: string; contributionAmount: number; frequencyLabel: string; contributionsMade: number; totalContributions: number; memberCount?: number; memberLimit?: number; status?: "active" | "completed" | "pending"; startDate?: string; nextContributionDate?: string }
export interface ActivityItem { id: string; amount: number; description: string; date: string; status: "completed" | "pending" | "failed"; groupId?: string }
export interface PaymentItem { id: string; reference: string; groupName: string; groupId: string; amount: number; date: string; status: "completed" | "pending" | "failed"; type: "contribution" | "payout"; cycle: number }
export interface GroupMember { id: string; name: string; role: "Owner" | "Admin" | "Member"; status: "Active" | "Pending" }
export function formatNaira(amount: number) { return `₦${amount.toLocaleString("en-NG")}` }
