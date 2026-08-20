import { ChevronRight, Users } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { formatNaira, type SavingsGroupSummary } from "@/lib/dashboard-data"

interface SavingsGroupsCardProps {
  groups: SavingsGroupSummary[]
}

export function SavingsGroupsCard({ groups }: SavingsGroupsCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold">My Savings Groups</span>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {groups.map((group) => {
          const percent = Math.round(
            (group.contributionsMade / group.totalContributions) * 100
          )

          return (
            <button
              key={group.id}
              type="button"
              className="flex items-start gap-3 rounded-xl border border-border p-4 text-left transition-colors hover:bg-muted/50"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                <Users className="size-5 text-green-600 dark:text-green-500" />
              </div>

              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold">{group.name}</span>
                  <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {formatNaira(group.contributionAmount)} /{" "}
                  {group.frequencyLabel}
                </span>
                <span className="text-sm text-muted-foreground">
                  {group.contributionsMade} of {group.totalContributions}{" "}
                  contributions
                </span>

                <div className="mt-1 flex items-center gap-3">
                  <Progress
                    value={percent}
                    className="flex-1"
                    indicatorClassName="bg-green-500"
                  />
                  <span className="shrink-0 rounded-full border border-green-200 px-2.5 py-1 text-sm font-medium text-green-600 dark:border-green-900 dark:text-green-500">
                    {percent}%
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </Card>
  )
}
