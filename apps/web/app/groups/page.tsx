"use client"
import { useEffect, useMemo, useState } from "react"
import { ArrowRight, Plus, Search, Users } from "lucide-react"
import Link from "next/link"
import { PageShell } from "@/components/dashboard/page-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { apiClient, type ApiGroup } from "@/lib/api"
import { formatNaira } from "@/lib/dashboard-data"
export default function GroupsPage() {
  const [groups, setGroups] = useState<ApiGroup[]>([])
  const [query, setQuery] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({
    name: "",
    description: "",
    contributionAmount: "",
    frequency: "MONTHLY",
    memberLimit: "10",
    totalCycles: "12",
    startDate: new Date().toISOString().slice(0, 10),
  })
  useEffect(() => {
    apiClient
      .groups()
      .then(setGroups)
      .catch((e) =>
        setError(e?.response?.data?.message || "Unable to load groups")
      )
  }, [])
  const filtered = useMemo(
    () =>
      groups.filter((g) => g.name.toLowerCase().includes(query.toLowerCase())),
    [groups, query]
  )
  async function create(e: React.FormEvent) {
    e.preventDefault()
    try {
      const g = await apiClient.createGroup({
        ...form,
        contributionAmount: Number(form.contributionAmount),
        memberLimit: Number(form.memberLimit),
        totalCycles: Number(form.totalCycles),
      })
      setGroups((x) => [
        {
          ...g,
          description: g.decription,
          contributionAmount: Number(g.contribution_amount),
          currency: g.currency,
          frequency: g.frequency,
          memberCount: 1,
          memberLimit: g.member_limit,
          contributionsMade: 0,
          status: g.status,
          startDate: g.start_date,
        },
        ...x,
      ])
      setShow(false)
      setForm({ ...form, name: "", description: "", contributionAmount: "" })
    } catch (e: any) {
      setError(e?.response?.data?.message || "Unable to create group")
    }
  }
  return (
    <PageShell
      title="Savings Groups"
      description="Manage your active ajo circles and track your progress."
    >
      <Button
        className="w-full rounded-xl"
        size="lg"
        onClick={() => setShow((v) => !v)}
      >
        <Plus /> Create savings group
      </Button>
      {show && (
        <Card className="p-5">
          <form onSubmit={create} className="grid gap-3">
            <Input
              placeholder="Group name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <Input
              type="number"
              min="1"
              placeholder="Contribution amount"
              required
              value={form.contributionAmount}
              onChange={(e) =>
                setForm({ ...form, contributionAmount: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-3">
              <select
                className="h-10 rounded-md border bg-background px-3 text-sm"
                value={form.frequency}
                onChange={(e) =>
                  setForm({ ...form, frequency: e.target.value })
                }
              >
                <option value="WEEKLY">Weekly</option>
                <option value="MONTHLY">Monthly</option>
                <option value="YEARLY">Yearly</option>
              </select>
              <Input
                type="number"
                min="2"
                value={form.memberLimit}
                onChange={(e) =>
                  setForm({ ...form, memberLimit: e.target.value })
                }
              />
            </div>
            <Input
              type="number"
              min="1"
              value={form.totalCycles}
              onChange={(e) =>
                setForm({ ...form, totalCycles: e.target.value })
              }
              placeholder="Number of cycles"
            />
            <Input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
            <Button type="submit" className="rounded-xl">
              Create group
            </Button>
          </form>
        </Card>
      )}
      <div className="relative">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search groups"
          className="h-10 pl-9"
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <div className="flex flex-col gap-4">
        {filtered.map((g) => (
          <Card key={g.id} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-accent">
                  <Users className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{g.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatNaira(g.contributionAmount)} /{" "}
                    {g.frequency.toLowerCase().replace("ly", "")}
                  </p>
                </div>
              </div>
              <Badge variant="secondary">{g.status.toLowerCase()}</Badge>
            </div>
            <div className="mt-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-muted-foreground">Your cycles</span>
                <span>{g.contributionsMade}</span>
              </div>
              <Progress
                value={Math.min(
                  (g.contributionsMade / Math.max(g.memberLimit, 1)) * 100,
                  100
                )}
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {g.memberCount}/{g.memberLimit} members
              </span>
              <Link
                href={`/groups/${g.id}`}
                className="inline-flex items-center gap-1 font-medium text-primary"
              >
                View group <ArrowRight className="size-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
