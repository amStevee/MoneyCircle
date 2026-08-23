import { NotificationsMenu } from "@/components/dashboard/notifications-menu"
import Image from "next/image"

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

interface DashboardHeaderProps {
  firstName: string
}

export function DashboardHeader({ firstName }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-black.svg"
            alt="MoneyCircle"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-xl font-semibold tracking-tight">
            MoneyCircle
          </span>
        </div>
        <NotificationsMenu />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">
          {getGreeting()}, {firstName} <span aria-hidden>👋</span>
        </h1>
        <p className="text-muted-foreground">
          Let&apos;s keep growing your savings.
        </p>
      </div>
    </div>
  )
}
