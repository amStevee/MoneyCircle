"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Archive, ArrowLeft, History, LogOut } from "lucide-react"
import { PageShell } from "@/components/dashboard/page-shell"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { apiClient } from "@/lib/api"
import { formatNaira } from "@/lib/dashboard-data"
import { GroupDetailsLoading } from "@/components/dashboard/page-loaders"

type HistoryEntry = Awaited<ReturnType<typeof apiClient.groupHistory>>[number]

interface UnpaidMember {
  userId?: string
  name?: string
  memberStatus?: string
  cycles?: number[]
  amount?: number
}

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : {}
}

function asNumber(value: unknown): number {
  return typeof value === "number" ? value : 0
}

function cyclesLabel(cycles: number[] = []) {
  if (!cycles.length) return ""
  return `${cycles.length === 1 ? "Cycle" : "Cycles"} ${cycles.join(", ")}`
}

function formatDateTime(value: string) {
  return new Date(value).toLocaleString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

function GroupClosedEntry({ details }: { details: Record<string, unknown> }) {
  const unpaid = Array.isArray(details.unpaidContributions)
    ? (details.unpaidContributions as UnpaidMember[])
    : []
  const total = asNumber(details.unpaidTotal)
  const payouts = asNumber(details.unsettledPayouts)

  return (
    <>
      <p className="text-sm text-muted-foreground">
        {total > 0
          ? `${formatNaira(total)} was still unpaid when the group was archived. MoneyCircle does not collect it - the group settles it between its members.`
          : "Everything was settled when the group was archived."}
      </p>
      {unpaid.length > 0 && (
        <div className="flex flex-col divide-y rounded-xl border">
          {unpaid.map((member, index) => (
            <div
              key={member.userId ?? index}
              className="flex items-center justify-between gap-3 p-3 text-sm"
            >
              <div className="min-w-0">
                <p className="truncate font-medium">
                  {member.name ?? "Unknown member"}
                  {member.memberStatus === "LEFT" && (
                    <Badge variant="outline" className="ml-2">
                      Left the group
                    </Badge>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">
                  {cyclesLabel(member.cycles)}
                </p>
              </div>
              <span className="shrink-0 font-semibold">
                {formatNaira(member.amount ?? 0)}
              </span>
            </div>
          ))}
        </div>
      )}
      {payouts > 0 && (
        <p className="text-sm text-muted-foreground">
          {payouts} payout{payouts === 1 ? " was" : "s were"} not completed.
        </p>
      )}
    </>
  )
}

function MemberLeftEntry({ details }: { details: Record<string, unknown> }) {
  const cycles = Array.isArray(details.unpaidCycles)
    ? (details.unpaidCycles as number[])
    : []
  const total = asNumber(details.unpaidTotal)

  return (
    <p className="text-sm text-muted-foreground">
      {details.reason === "ACCOUNT_DELETED"
        ? "Left because their account was deleted. "
        : ""}
      {total > 0
        ? `They left ${formatNaira(total)} unpaid (${cyclesLabel(cycles).toLowerCase()}). The group settles this between its members.`
        : "They had no unpaid contributions."}
    </p>
  )
}

function entryView(entry: HistoryEntry) {
  const details = asRecord(entry.details)

  switch (entry.action) {
    case "GROUP_CLOSED":
      return {
        icon: Archive,
        title: "Group archived",
        body: <GroupClosedEntry details={details} />,
      }
    case "MEMBER_LEFT":
      return {
        icon: LogOut,
        title: `${
          typeof details.memberName === "string"
            ? details.memberName
            : "A member"
        } left the group`,
        body: <MemberLeftEntry details={details} />,
      }
    default:
      return {
        icon: History,
        title: entry.action
          .replaceAll("_", " ")
          .toLowerCase()
          .replace(/^\w/, (c) => c.toUpperCase()),
        body: null,
      }
  }
}

export default function GroupHistoryPage() {
  const { groupId } = useParams<{ groupId: string }>()
  const [entries, setEntries] = useState<HistoryEntry[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    apiClient
      .groupHistory(groupId)
      .then(setEntries)
      .catch(() => setFailed(true))
  }, [groupId])

  const back = (
    <Link
      href={`/groups/${groupId}`}
      className={buttonVariants({ variant: "ghost", className: "w-fit px-0" })}
    >
      <ArrowLeft /> Back to group
    </Link>
  )

  if (failed) {
    return (
      <PageShell title="Group history">
        {back}
        <Card className="p-6">
          <p role="alert" className="text-sm text-destructive">
            Unable to load this group&apos;s history.
          </p>
        </Card>
      </PageShell>
    )
  }

  if (!entries) return <GroupDetailsLoading />

  return (
    <PageShell
      title="Group history"
      description="A record of important events in this group. MoneyCircle tracks savings"
    >
      {back}
      {entries.length === 0 ? (
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">
            Nothing has been recorded for this group yet.
          </p>
        </Card>
      ) : (
        entries.map((entry) => {
          const { icon: Icon, title, body } = entryView(entry)
          return (
            <Card key={entry.id} className="gap-3 p-5">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{title}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDateTime(entry.createdAt)}
                  </p>
                </div>
              </div>
              {body}
            </Card>
          )
        })
      )}
    </PageShell>
  )
}
