import { Bell } from "lucide-react"

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
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14"
              cy="14"
              r="10"
              stroke="var(--primary)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="47 15"
            />
          </svg>
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
          <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
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
