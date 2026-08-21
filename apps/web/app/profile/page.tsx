"use client"

import { useEffect, useState } from "react"
import { LogOut, Mail, Phone, Save, ShieldCheck, User } from "lucide-react"

import { PageShell } from "@/components/dashboard/page-shell"
import { apiClient } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserStore } from "@/store/useUserStore"

export default function ProfilePage() {
  const user = useUserStore((state) => state.user)
  const isHydrated = useUserStore((state) => state.isHydrated)
  const clearUser = useUserStore((state) => state.clearUser)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [saved, setSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  /**
   * Populate the form when the persisted user
   * becomes available after Zustand hydration.
   */
  useEffect(() => {
    if (!user) return

    setFirstName(user.first_name ?? "")
    setLastName(user.last_name ?? "")
    setPhone(user.phone ?? "")
  }, [user])

  /**
   * Zustand has not finished restoring the
   * persisted state from localStorage.
   */
  if (!isHydrated) {
    return (
      <PageShell
        title="Profile"
        description="Manage your MoneyCircle account information."
      >
        <Card className="p-6">
          <div className="flex min-h-40 items-center justify-center">
            <p className="text-sm text-muted-foreground">Loading profile...</p>
          </div>
        </Card>
      </PageShell>
    )
  }

  /**
   * Hydration is complete but there is no user.
   *
   * This normally means the user is not authenticated
   * or the session has been cleared.
   */
  if (!user) {
    return (
      <PageShell
        title="Profile"
        description="Manage your MoneyCircle account information."
      >
        <Card className="p-6">
          <div className="flex min-h-40 flex-col items-center justify-center text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-accent text-primary">
              <User className="size-7" />
            </div>

            <h2 className="mt-3 font-semibold">Profile unavailable</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              You are not currently signed in.
            </p>
          </div>
        </Card>
      </PageShell>
    )
  }

  /**
   * Save updated profile information.
   */
  async function saveProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsSaving(true)
    setSaved(false)

    try {
      const updated = await apiClient.updateMe({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        phone: phone.trim() || null,
      })

      /**
       * Update the Zustand store with the latest
       * user returned by the API.
       */
      useUserStore.setState({
        user: updated,
      })

      setSaved(true)

      window.setTimeout(() => {
        setSaved(false)
      }, 2500)
    } catch {
      // Add toast/error handling here if required.
    } finally {
      setIsSaving(false)
    }
  }

  /**
   * Sign the user out.
   */
  async function handleLogout() {
    await apiClient.logout().catch(() => {})
    clearUser()
  }

  /**
   * Generate initials safely.
   */
  const initials = `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`.toUpperCase()

  return (
    <PageShell
      title="Profile"
      description="Manage your MoneyCircle account information."
    >
      {/* Profile summary */}
      <Card className="items-center p-6 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-accent text-xl font-bold text-primary">
          {initials || <User className="size-7" />}
        </div>

        <h2 className="mt-2 text-xl font-bold">
          {firstName} {lastName}
        </h2>

        <p className="text-sm text-muted-foreground">{user.email}</p>
      </Card>

      {/* Personal information */}
      <form onSubmit={saveProfile}>
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <User className="size-5 text-primary" />

            <h2 className="font-semibold">Personal information</h2>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            {/* First and last name */}
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>

                <Input
                  id="first-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>

                <Input
                  id="last-name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>

              <div className="relative">
                <Phone className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="pl-9"
                  placeholder="Add your phone number"
                />
              </div>
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>

              <div className="relative">
                <Mail className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="email"
                  value={user.email}
                  disabled
                  className="pl-9"
                />
              </div>
            </div>

            {/* Save */}
            <Button
              type="submit"
              className="w-full rounded-xl"
              disabled={isSaving}
            >
              <Save />

              {isSaving ? "Saving..." : saved ? "Saved" : "Save changes"}
            </Button>
          </div>
        </Card>
      </form>

      {/* Account security */}
      <Card className="p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 size-5 text-green-600" />

          <div>
            <p className="font-semibold">Account security</p>

            <p className="text-sm text-muted-foreground">
              Your signed-in session is protected by the authentication token
              stored for this device.
            </p>
          </div>
        </div>
      </Card>

      {/* Sign out */}
      <Button
        variant="destructive"
        className="w-full rounded-xl"
        onClick={handleLogout}
      >
        <LogOut />
        Sign out
      </Button>
    </PageShell>
  )
}
