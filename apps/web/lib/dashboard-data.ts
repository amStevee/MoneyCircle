// Static data shaped to match the provided dashboard UI. There is no backend
// endpoint yet for contributions/groups/activity, so this mirrors the design
// exactly and can be swapped for real API data later without changing the UI.

export interface SavingsGroupSummary {
  id: string
  name: string
  contributionAmount: number
  frequencyLabel: string
  contributionsMade: number
  totalContributions: number
}

export interface ActivityItem {
  id: string
  amount: number
  description: string
  date: string
  status: "completed" | "pending"
}

export const dashboardSummary = {
  totalContributions: 350000,
  activeGroups: 2,
  groupsCount: 2,
  contributionsMadeCount: 7,
}

export const upcomingContribution = {
  amount: 50000,
  groupName: "Tech Professionals Ajo",
  dueDate: "Aug 25",
}

export const savingsGroups: SavingsGroupSummary[] = [
  {
    id: "tech-professionals-ajo",
    name: "Tech Professionals Ajo",
    contributionAmount: 50000,
    frequencyLabel: "month",
    contributionsMade: 5,
    totalContributions: 12,
  },
]

export const recentActivity: ActivityItem[] = [
  {
    id: "1",
    amount: 50000,
    description: "Contribution to Tech Professionals Ajo",
    date: "Aug 18, 2024",
    status: "completed",
  },
  {
    id: "2",
    amount: 50000,
    description: "Contribution to House Rent Ajo",
    date: "Aug 11, 2024",
    status: "completed",
  },
  {
    id: "3",
    amount: 50000,
    description: "Pending contribution to Emergency Fund",
    date: "Aug 4, 2024",
    status: "pending",
  },
]

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`
}
