"use client"
import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Copy, Mail, Users } from "lucide-react"
import { useParams } from "next/navigation"
import { PageShell } from "@/components/dashboard/page-shell"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { apiClient, type ApiInvitation } from "@/lib/api"
import { formatNaira } from "@/lib/dashboard-data"
import { useUserStore } from "@/store/useUserStore"

export default function GroupDetailsPage() {
  const { groupId } = useParams<{ groupId: string }>()
  const currentUser = useUserStore((state) => state.user)

  const [group, setGroup] = useState<any>(null)
  const [invitations, setInvitations] = useState<ApiInvitation[]>([])

  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteError, setInviteError] = useState("")
  const [inviteLink, setInviteLink] = useState("")
  const [isInviting, setIsInviting] = useState(false)
  const [copied, setCopied] = useState(false)

  const loadGroup = useCallback(() => {
    apiClient
      .group(groupId)
      .then(setGroup)
      .catch(() => setGroup(false))
  }, [groupId])

  useEffect(() => {
    loadGroup()
  }, [loadGroup])

  const currentMember = group
    ? group.members.find((m: any) => m.userId === currentUser?.id)
    : null
  const canInvite =
    currentMember?.role === "OWNER" || currentMember?.role === "ADMIN"

  useEffect(() => {
    if (!canInvite) return
    apiClient
      .groupInvitations(groupId)
      .then(setInvitations)
      .catch(() => setInvitations([]))
  }, [groupId, canInvite])

  async function sendInvite(e: React.FormEvent) {
    e.preventDefault()
    setInviteError("")
    setInviteLink("")
    setCopied(false)
    setIsInviting(true)
    try {
      const { inviteUrl } = await apiClient.inviteToGroup(groupId, inviteEmail)
      setInviteEmail("")
      setInviteLink(inviteUrl)
      loadGroup()
      apiClient
        .groupInvitations(groupId)
        .then(setInvitations)
        .catch(() => {})
    } catch (err: any) {
      setInviteError(
        err?.response?.data?.message || "Unable to send invitation"
      )
    } finally {
      setIsInviting(false)
    }
  }

  function copyInviteLink() {
    if (!inviteLink) return
    navigator.clipboard?.writeText(inviteLink)
    setCopied(true)
  }

  if (group === false) {
    return (
      <PageShell title="Group not found">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">
            This savings group could not be found.
          </p>
          <Link
            href="/groups"
            className={buttonVariants({
              variant: "outline",
              className: "mt-4 rounded-xl",
            })}
          >
            <ArrowLeft /> Back to groups
          </Link>
        </Card>
      </PageShell>
    )
  }

  if (!group) return null

  const progress = Math.min(
    ((group.schedule?.current_cycle ?? 1) /
      Math.max(group.schedule?.total_cycles ?? 1, 1)) *
      100,
    100
  )

  return (
    <PageShell title={group.name} description={group.decription}>
      <Link
        href="/groups"
        className={buttonVariants({ variant: "ghost", className: "w-fit px-0" })}
      >
        <ArrowLeft /> All groups
      </Link>

      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-accent">
              <Users className="text-primary" />
            </div>
            <div>
              <p className="font-semibold">{group.frequency} contribution</p>
              <p className="text-sm text-muted-foreground">
                {formatNaira(group.contribution_amount)} /{" "}
                {group.frequency.toLowerCase().replace("ly", "")}
              </p>
            </div>
          </div>
          <Badge>Active</Badge>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Cycle progress</span>
            <span>
              {group.schedule?.current_cycle ?? 1} of{" "}
              {group.schedule?.total_cycles ?? 1}
            </span>
          </div>
          <Progress value={progress} />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-muted/50 p-3">
            <p className="text-muted-foreground">Members</p>
            <p className="mt-1 font-semibold">
              {group.members.length} / {group.member_limit}
            </p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3">
            <p className="text-muted-foreground">Started</p>
            <p className="mt-1 font-semibold">
              {new Date(group.start_date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Card>

      <h2 className="font-semibold">Members</h2>
      <Card className="p-0">
        {group.members.map((m: any, i: number) => (
          <div
            key={m.id}
            className={`flex items-center gap-3 p-4 ${i ? "border-t" : ""}`}
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-accent text-sm font-semibold">
              {m.name
                .split(" ")
                .map((x: string) => x[0])
                .join("")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.role}</p>
            </div>
            <Badge variant={m.status === "ACTIVE" ? "secondary" : "outline"}>
              {m.status}
            </Badge>
          </div>
        ))}
      </Card>

      {canInvite && (
        <>
          <h2 className="font-semibold">Invite a member</h2>
          <Card className="p-5">
            <form onSubmit={sendInvite} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                placeholder="Email address"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" className="rounded-xl" disabled={isInviting}>
                <Mail /> {isInviting ? "Sending..." : "Send invite"}
              </Button>
            </form>
            {inviteError && (
              <p className="mt-3 text-sm text-destructive">{inviteError}</p>
            )}
            {inviteLink && (
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-muted/50 p-3 text-sm">
                <span className="min-w-0 flex-1 truncate text-muted-foreground">
                  {inviteLink}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-lg"
                  onClick={copyInviteLink}
                >
                  <Copy /> {copied ? "Copied" : "Copy link"}
                </Button>
              </div>
            )}

            {invitations.length > 0 && (
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  Pending invitations
                </p>
                <div className="flex flex-col divide-y rounded-xl border">
                  {invitations.map((invite) => (
                    <div
                      key={invite.id}
                      className="flex items-center justify-between gap-3 p-3 text-sm"
                    >
                      <span className="min-w-0 truncate">{invite.email}</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </>
      )}

      <Card className="p-5">
        <div className="flex items-center gap-3">
          <Calendar className="size-5 text-primary" />
          <div>
            <p className="font-semibold">Contribution schedule</p>
            <p className="text-sm text-muted-foreground">
              {formatNaira(group.contribution_amount)} is due every{" "}
              {group.frequency.toLowerCase().replace("ly", "")}.
            </p>
          </div>
        </div>
      </Card>
    </PageShell>
  )
}
