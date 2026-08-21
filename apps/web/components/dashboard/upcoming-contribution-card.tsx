import Link from "next/link"
import { Calendar } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { formatNaira } from "@/lib/dashboard-data"

interface UpcomingContributionCardProps {
  amount: number
  groupName: string
  dueDate: string
}

export function UpcomingContributionCard({
  amount,
  groupName,
  dueDate,
}: UpcomingContributionCardProps) {
  return (
    <Card className="p-6">
      <span className="text-base font-semibold">Upcoming Contribution</span>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent">
            <Calendar className="size-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">{formatNaira(amount)}</span>
            <span className="text-sm text-muted-foreground">{groupName}</span>
            <span className="text-sm text-muted-foreground">
              Due <span className="font-medium text-primary">{dueDate}</span>
            </span>
          </div>
        </div>

        <Link href="/payments" className={buttonVariants({ size: "lg", className: "w-full rounded-xl sm:w-auto" })}>Pay contribution</Link>
      </div>
    </Card>
  )
}
