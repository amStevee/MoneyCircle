import { CircleCheck, Users, Wallet } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatNaira } from "@/lib/dashboard-data"

interface TotalContributionsCardProps {
  totalContributions: number
  activeGroups: number
  groupsCount: number
  contributionsMadeCount: number
}

export function TotalContributionsCard({
  totalContributions,
  activeGroups,
  groupsCount,
  contributionsMadeCount,
}: TotalContributionsCardProps) {
  return (
    <Card className="gap-0 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">
            Total Contributions
          </span>
          <span className="text-4xl font-bold tracking-tight">
            {formatNaira(totalContributions)}
          </span>
          <span className="text-sm text-muted-foreground">
            Across{" "}
            <span className="font-medium text-primary">{activeGroups}</span>{" "}
            active groups
          </span>
        </div>
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent">
          <Wallet className="size-6 text-primary" />
        </div>
      </div>

      <Separator className="my-5" />

      <CardContent className="grid grid-cols-2 gap-4 p-0">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent">
            <Users className="size-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight">
              {groupsCount}
            </span>
            <span className="text-sm text-muted-foreground">Groups</span>
          </div>
        </div>

        <div className="flex items-center gap-3 border-l border-border pl-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
            <CircleCheck className="size-5 text-green-600 dark:text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight">
              {contributionsMadeCount}
            </span>
            <span className="text-sm text-muted-foreground">
              Contributions made
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
