import Link from "next/link"
import { AlertCircle, ArrowRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { formatNaira } from "@/lib/dashboard-data"
import type { DashboardContribution } from "@/lib/api"

interface OverdueContributionsCardProps {
  contributions: DashboardContribution[]
}

export function OverdueContributionsCard({
  contributions,
}: OverdueContributionsCardProps) {
  return (
    <Card className="gap-0 border-destructive/30 p-0">
      <div className="flex items-center gap-3 border-b border-border p-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertCircle className="size-5" />
        </div>
        <div>
          <h2 className="font-semibold">Overdue contributions</h2>
          {contributions.length > 0 && (
            <p className="text-sm text-muted-foreground">
              {contributions.length} contribution
              {contributions.length === 1 ? "" : "s"} need your attention
            </p>
          )}
        </div>
      </div>
      {contributions.length === 0 ? (
        <p className="p-5 text-sm text-muted-foreground">
          No overdue contributions
        </p>
      ) : (
        <ul className="divide-y divide-border">
          {contributions.map((contribution) => (
            <li key={contribution.id} className="flex items-center gap-3 p-5">
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{contribution.groupName}</p>
                <p className="text-sm text-muted-foreground">
                  Was due{" "}
                  {new Date(contribution.dueDate).toLocaleDateString("en-NG", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <span className="font-semibold">
                  {formatNaira(contribution.amount)}
                </span>
                <Link
                  href="/payments"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                >
                  Pay now <ArrowRight className="size-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
