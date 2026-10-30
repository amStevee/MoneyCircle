import Link from "next/link"
import { Calendar } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { formatNaira } from "@/lib/dashboard-data"

interface UpcomingContributionCardProps {
  amount: number
  groupName: string
  dueDate: string
  status?: "PENDING" | "OVERDUE"
}

export function UpcomingContributionCard({
  amount,
  groupName,
  dueDate,
  status = "PENDING",
}: UpcomingContributionCardProps) {
  const isOverdue = status === "OVERDUE"

  return (
    <Card className="p-6">
      <span className="text-base font-semibold">
        {isOverdue ? "Past-due Contribution" : "Upcoming Contribution"}
      </span>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent">
            <Calendar className="size-6 text-primary" />
          </div>
          {amount && groupName && dueDate ? 
              <div className="flex flex-col">
                <span className="text-xl font-bold">{formatNaira(amount)}</span>
                <span className="text-sm text-muted-foreground">{groupName}</span>
                <span className="text-sm text-muted-foreground">
                  {isOverdue ? "Was due" : "Due"}{" "}
                  <span className="font-medium text-primary">{dueDate}</span>
                </span>
              </div>
          : <span className="text-sm text-muted-foreground">No upcoming contributions</span>}
        </div>

        {amount && groupName && dueDate ? (
          <Link href="/payments" className={buttonVariants({ size: "lg", className: "w-full rounded-xl sm:w-auto" })}>
            Pay contribution
          </Link>
        ) : null}
      </div>
    </Card>
  )
}
