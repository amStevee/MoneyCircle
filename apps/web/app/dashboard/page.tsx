"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { BottomNav } from "@/components/dashboard/bottom-nav"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { RecentActivityCard } from "@/components/dashboard/recent-activity-card"
import { SavingsGroupsCard } from "@/components/dashboard/savings-groups-card"
import { TotalContributionsCard } from "@/components/dashboard/total-contributions-card"
import { UpcomingContributionCard } from "@/components/dashboard/upcoming-contribution-card"
import { apiClient } from "@/lib/api"
import { useUserStore } from "@/store/useUserStore"

export default function DashboardPage() {
  const router = useRouter()
  const user = useUserStore((s) => s.user)
  const token = useUserStore((s) => s.token)
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    if (!token) router.replace("/login")
    else
      apiClient
        .dashboard()
        .then(setData)
        .catch(() => {})
  }, [token, router])
  if (!token || !user || !data) return null
  const groups = data.groups.map((g: any) => ({
    ...g,
    frequencyLabel: g.frequency.toLowerCase().replace("ly", ""),
  }))
  const upcoming = data.upcomingContribution
  return (
    <div className="flex min-h-svh flex-col bg-muted/30">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-6 p-4 pb-6 sm:p-6">
        <DashboardHeader firstName={user.first_name} />
        <TotalContributionsCard {...data.summary} />
        {upcoming && (
          <UpcomingContributionCard
            amount={upcoming.amount}
            groupName={upcoming.groupName}
            dueDate={new Date(upcoming.dueDate).toLocaleDateString("en-NG", {
              month: "short",
              day: "numeric",
            })}
          />
        )}
        <SavingsGroupsCard groups={groups} />
        <RecentActivityCard
          activity={data.recentActivity.map((a: any) => ({
            ...a,
            date: new Date(a.date).toLocaleDateString("en-NG", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          }))}
        />
      </div>
      <BottomNav />
    </div>
  )
}
