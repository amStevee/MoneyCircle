import { CircleAlert, CircleCheck } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { formatNaira, type ActivityItem } from "@/lib/dashboard-data"
import Link from "next/link"

interface RecentActivityCardProps {
  activity: ActivityItem[]
}

export function RecentActivityCard({ activity }: RecentActivityCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold">Recent Activity</span>
        <Link
          href="/payments"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="flex flex-col">
        {activity.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "flex items-center gap-3 py-3",
              index !== 0 && "border-t border-border"
            )}
          >
            <div
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full",
                item.status === "completed"
                  ? "bg-green-500"
                  : "border-2 border-orange-400"
              )}
            >
              {item.status === "completed" ? (
                <CircleCheck className="size-5 text-white" />
              ) : (
                <CircleAlert className="size-4 text-orange-500" />
              )}
            </div>

            <span className="w-24 shrink-0 font-semibold">
              {formatNaira(item.amount)}
            </span>

            <span className="flex-1 truncate text-sm text-muted-foreground">
              {item.description}
            </span>

            <span
              className={cn(
                "shrink-0 text-sm",
                item.status === "pending"
                  ? "font-medium text-orange-500"
                  : "text-muted-foreground"
              )}
            >
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
