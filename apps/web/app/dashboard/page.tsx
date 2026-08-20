"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { BottomNav } from "@/components/dashboard/bottom-nav"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { RecentActivityCard } from "@/components/dashboard/recent-activity-card"
import { SavingsGroupsCard } from "@/components/dashboard/savings-groups-card"
import { TotalContributionsCard } from "@/components/dashboard/total-contributions-card"
import { UpcomingContributionCard } from "@/components/dashboard/upcoming-contribution-card"
import {
  dashboardSummary,
  recentActivity,
  savingsGroups,
  upcomingContribution,
} from "@/lib/dashboard-data"
import { useUserStore } from "@/store/useUserStore"

export default function DashboardPage() {
  const router = useRouter()
  const user = useUserStore((state) => state.user)
  const token = useUserStore((state) => state.token)

  useEffect(() => {
    if (!token) {
      router.replace("/login")
    }
  }, [token, router])

  if (!token || !user) {
    return null
  }

  return (
    <div className="flex min-h-svh flex-col bg-muted/30">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-6 p-4 pb-6 sm:p-6">
        <DashboardHeader firstName={user.first_name} />

        <TotalContributionsCard
          totalContributions={dashboardSummary.totalContributions}
          activeGroups={dashboardSummary.activeGroups}
          groupsCount={dashboardSummary.groupsCount}
          contributionsMadeCount={dashboardSummary.contributionsMadeCount}
        />

        <UpcomingContributionCard
          amount={upcomingContribution.amount}
          groupName={upcomingContribution.groupName}
          dueDate={upcomingContribution.dueDate}
        />

        <SavingsGroupsCard groups={savingsGroups} />

        <RecentActivityCard activity={recentActivity} />
      </div>

      <BottomNav />
    </div>
  )
}
