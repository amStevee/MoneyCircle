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
  const user = useUserStore((state) => state.user)

  const isHydrated = useUserStore((state) => state.isHydrated)

  const clearUser = useUserStore((state) => state.clearUser)

  /*
   * Do not initialize form state from `user` here.
   *
   * During the first render:
   *
   * user = null
   * isHydrated = false
   *
   * Therefore these values must have safe defaults.
   */
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")

  const [saved, setSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  /**
   * Zustand has not finished restoring the persisted
   * state from localStorage.
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
   * Hydration has completed but there is no user.
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
   * IMPORTANT:
   *
   * We are now guaranteed to have a user.
   *
   * However, React hooks cannot be conditionally called.
   * Therefore we cannot put useState() below the `if (!user)`
   * return.
   *
   * The solution is to keep the form state above and populate
   * it when the page is first rendered with a user.
   */

  return (
    <ProfileForm
      user={user}
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      saved={saved}
      isSaving={isSaving}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setPhone={setPhone}
      setSaved={setSaved}
      setIsSaving={setIsSaving}
      clearUser={clearUser}
    />
  )
}

/**
 * Separate form component.
 *
 * This component is only mounted after:
 *
 * 1. Zustand has hydrated.
 * 2. A user exists.
 *
 * Therefore we can safely initialize the form from `user`.
 */
type ProfileFormProps = {
  user: {
    email: string
    first_name: string
    last_name: string
    phone?: string | null
  }

  firstName: string
  lastName: string
  phone: string

  saved: boolean
  isSaving: boolean

  setFirstName: React.Dispatch<React.SetStateAction<string>>

  setLastName: React.Dispatch<React.SetStateAction<string>>

  setPhone: React.Dispatch<React.SetStateAction<string>>

  setSaved: React.Dispatch<React.SetStateAction<boolean>>

  setIsSaving: React.Dispatch<React.SetStateAction<boolean>>

  clearUser: () => void
}

function ProfileForm({
  user,
  firstName,
  lastName,
  phone,
  saved,
  isSaving,
  setFirstName,
  setLastName,
  setPhone,
  setSaved,
  setIsSaving,
  clearUser,
}: ProfileFormProps) {
  /**
   * Save profile information.
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
       * Update the Zustand store with the
       * latest user returned by the API.
       */
      useUserStore.setState({
        user: updated,
      })

      setSaved(true)

      window.setTimeout(() => {
        setSaved(false)
      }, 2500)
    } catch {
      // Add toast/error handling here.
    } finally {
      setIsSaving(false)
    }
  }

  /**
   * Sign out.
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
