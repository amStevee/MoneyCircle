"use client"

import { useState } from "react"
import { LogOut, Mail, Phone, Save, ShieldCheck, User } from "lucide-react"

import { PageShell } from "@/components/dashboard/page-shell"
import { apiClient } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserStore } from "@/store/useUserStore"

export default function ProfilePage() {
  const user = useUserStore((state) => state.user)!
  const clearUser = useUserStore((state) => state.clearUser)
  const [firstName, setFirstName] = useState(user.first_name)
  const [lastName, setLastName] = useState(user.last_name)
  const [phone, setPhone] = useState(user.phone ?? "")
  const [saved, setSaved] = useState(false)

  async function saveProfile(event: React.FormEvent) {
    event.preventDefault()
    try {
      const updated = await apiClient.updateMe({ first_name: firstName, last_name: lastName, phone: phone || null })
      useUserStore.setState({ user: updated })
      setSaved(true)
      window.setTimeout(() => setSaved(false), 2500)
    } catch {}
  }

  return (
    <PageShell title="Profile" description="Manage your MoneyCircle account information.">
      <Card className="items-center p-6 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-accent text-xl font-bold text-primary">
          {firstName[0]}{lastName[0]}
        </div>
        <h2 className="mt-2 text-xl font-bold">{firstName} {lastName}</h2>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </Card>

      <form onSubmit={saveProfile}>
        <Card className="p-5">
          <div className="flex items-center gap-2"><User className="size-5 text-primary" /><h2 className="font-semibold">Personal information</h2></div>
          <div className="mt-2 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2"><Label htmlFor="first-name">First name</Label><Input id="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} /></div>
              <div className="grid gap-2"><Label htmlFor="last-name">Last name</Label><Input id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)} /></div>
            </div>
            <div className="grid gap-2"><Label htmlFor="phone">Phone</Label><div className="relative"><Phone className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} className="pl-9" placeholder="Add your phone number" /></div></div>
            <div className="grid gap-2"><Label htmlFor="email">Email</Label><div className="relative"><Mail className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input id="email" value={user.email} disabled className="pl-9" /></div></div>
            <Button type="submit" className="w-full rounded-xl"><Save /> {saved ? "Saved" : "Save changes"}</Button>
          </div>
        </Card>
      </form>

      <Card className="p-5"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 size-5 text-green-600" /><div><p className="font-semibold">Account security</p><p className="text-sm text-muted-foreground">Your signed-in session is protected by the authentication token stored for this device.</p></div></div></Card>
      <Button variant="destructive" className="w-full rounded-xl" onClick={async () => { await apiClient.logout().catch(() => {}); clearUser() }}><LogOut /> Sign out</Button>
    </PageShell>
  )
}
