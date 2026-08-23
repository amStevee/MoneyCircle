import { Bell } from "lucide-react"
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
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
        >
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-primary" />
        </button>
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
