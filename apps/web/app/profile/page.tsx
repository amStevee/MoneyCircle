"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { LogOut, Mail, Phone, Save, ShieldCheck, Trash2, User } from "lucide-react"
import { useState } from "react"
import { toast } from "react-toastify"

import { PageShell } from "@/components/dashboard/page-shell"
import { apiClient, type ApiOwnershipResolutionGroup } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserStore } from "@/store/useUserStore"

export default function ProfilePage() {
  const user = useUserStore((state) => state.user)
  const isHydrated = useUserStore((state) => state.isHydrated)
  const clearUser = useUserStore((state) => state.clearUser)

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

  return <ProfileContent user={user} clearUser={clearUser} />
}

function ProfileContent({
  user,
  clearUser,
}: {
  user: NonNullable<ReturnType<typeof useUserStore.getState>["user"]>
  clearUser: () => void
}) {
  const [firstName, setFirstName] = useState(user.first_name)

  const [lastName, setLastName] = useState(user.last_name)

  const [phone, setPhone] = useState(user.phone ?? "")

  const [saved, setSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [ownedGroups, setOwnedGroups] = useState<
    ApiOwnershipResolutionGroup[] | null
  >(null)
  const [selectedNominees, setSelectedNominees] = useState<
    Record<string, string>
  >({})
  const [confirmedNoDisputes, setConfirmedNoDisputes] = useState<
    Record<string, boolean>
  >({})
  const [resolvingGroupId, setResolvingGroupId] = useState<string | null>(null)
  const router = useRouter()

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

      useUserStore.setState({
        user: updated,
      })

      setSaved(true)

      window.setTimeout(() => {
        setSaved(false)
      }, 2500)
    } catch {
      // Handle error with toast.
    } finally {
      setIsSaving(false)
    }
  }

  async function handleLogout() {
    await apiClient.logout().catch(() => {})
    clearUser()
  }

  async function handleDeleteAccount() {
    if (isDeleting) return

    const confirmed = window.confirm(
      "Permanently delete your MoneyCircle account? Group owners will be notified when you leave. Your past payment and contribution records will remain unchanged.",
    )
    if (!confirmed) return

    setIsDeleting(true)

    try {
      await apiClient.deleteMe()
      clearUser()
      toast.success("Account deleted successfully.")
      router.replace("/login")
    } catch (error) {
      if (
        axios.isAxiosError<{ groups?: { id: string }[] }>(error) &&
        error.response?.status === 409 &&
        error.response.data.groups?.length
      ) {
        try {
          setOwnedGroups(await apiClient.ownershipResolution())
        } catch {
          toast.error("Unable to load groups that need ownership resolution.")
        }
      }

      const message = axios.isAxiosError<{ error?: string; message?: string }>(
        error,
      )
        ? error.response?.data.message ??
          error.response?.data.error ??
          "Unable to delete your account. Please try again."
        : error instanceof Error
          ? error.message
          : "Unable to delete your account. Please try again."

      toast.error(message)
    } finally {
      setIsDeleting(false)
    }
  }

  async function refreshOwnedGroups() {
    setOwnedGroups(await apiClient.ownershipResolution())
  }

  async function resolveGroup(
    groupId: string,
    action: () => Promise<unknown>,
    successMessage: string,
  ) {
    if (resolvingGroupId) return
    setResolvingGroupId(groupId)

    try {
      await action()
      await refreshOwnedGroups()
      toast.success(successMessage)
    } catch (error) {
      const message = axios.isAxiosError<{ error?: string; message?: string }>(
        error,
      )
        ? error.response?.data.message ??
          error.response?.data.error ??
          "Unable to update group ownership."
        : error instanceof Error
          ? error.message
          : "Unable to update group ownership."
      toast.error(message)
    } finally {
      setResolvingGroupId(null)
    }
  }

  function handleNominate(group: ApiOwnershipResolutionGroup) {
    const nomineeId = selectedNominees[group.id]
    if (!nomineeId) {
      toast.error("Choose an active member to nominate.")
      return
    }

    return resolveGroup(
      group.id,
      () => apiClient.nominateGroupOwner(group.id, nomineeId),
      "Ownership transfer request sent.",
    )
  }

  function handleCancelTransfer(group: ApiOwnershipResolutionGroup) {
    if (!group.pendingTransfer) return

    return resolveGroup(
      group.id,
      () =>
        apiClient.cancelGroupOwnershipTransfer(
          group.id,
          group.pendingTransfer!.id,
        ),
      "Transfer request cancelled.",
    )
  }

  function handleMoveToPendingResolution(
    group: ApiOwnershipResolutionGroup,
  ) {
    if (
      !window.confirm(
        `Stop trying to transfer ownership and place "${group.name}" in pending resolution?`,
      )
    ) {
      return
    }

    return resolveGroup(
      group.id,
      () => apiClient.moveGroupToPendingResolution(group.id),
      "Group moved to pending resolution.",
    )
  }

  function handleCloseGroup(group: ApiOwnershipResolutionGroup) {
    if (
      !window.confirm(
        `Archive "${group.name}"? This does not delete its financial records.`,
      )
    ) {
      return
    }

    return resolveGroup(
      group.id,
      () => apiClient.closeResolvedGroup(group.id),
      "Group archived. Its financial records were preserved.",
    )
  }

  const initials = `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`.toUpperCase()

  return (
    <PageShell
      title="Profile"
      description="Manage your MoneyCircle account information."
    >
      <Card className="items-center p-6 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-accent text-xl font-bold text-primary">
          {initials || <User className="size-7" />}
        </div>

        <h2 className="mt-2 text-xl font-bold">
          {firstName} {lastName}
        </h2>

        <p className="text-sm text-muted-foreground">{user.email}</p>
      </Card>

      <form onSubmit={saveProfile}>
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <User className="size-5 text-primary" />

            <h2 className="font-semibold">Personal information</h2>
          </div>

          <div className="mt-4 flex flex-col gap-4">
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

      <Button
        variant="destructive"
        className="w-full rounded-xl"
        onClick={handleLogout}
      >
        <LogOut />
        Sign out
      </Button>

      {ownedGroups !== null && (
        <Card className="border-amber-500/40 p-5">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-semibold">Resolve group ownership first</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Transfer ownership, or place each group in pending resolution
                and close it separately before deleting your account. Financial
                records are retained.
              </p>
            </div>

            {ownedGroups.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No groups currently need resolution. You can try deleting your
                account again.
              </p>
            ) : (
              ownedGroups.map((group) => {
                const isWorking = resolvingGroupId === group.id
                const outstandingCount =
                  group.outstandingContributions +
                  group.outstandingPayouts +
                  group.processingPayments

                return (
                  <div key={group.id} className="rounded-xl border p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-medium">{group.name}</h3>
                      <span className="text-xs text-muted-foreground">
                        {group.status.replaceAll("_", " ").toLowerCase()}
                      </span>
                    </div>

                    {group.status === "ACTIVE" && (
                      <div className="mt-3 flex flex-col gap-3">
                        {group.pendingTransfer ? (
                          <>
                            <p className="text-sm text-muted-foreground">
                              Waiting for {group.pendingTransfer.nomineeName} to
                              accept or decline the ownership request.
                            </p>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => handleCancelTransfer(group)}
                              disabled={isWorking}
                            >
                              {isWorking
                                ? "Updating..."
                                : "Cancel request and choose another member"}
                            </Button>
                          </>
                        ) : (
                          <>
                            {group.eligibleMembers.length > 0 ? (
                              <div className="flex flex-col gap-2">
                                <Label htmlFor={`nominee-${group.id}`}>
                                  Nominate an active member
                                </Label>
                                <select
                                  id={`nominee-${group.id}`}
                                  className="h-10 rounded-md border bg-background px-3 text-sm"
                                  value={selectedNominees[group.id] ?? ""}
                                  onChange={(event) =>
                                    setSelectedNominees((current) => ({
                                      ...current,
                                      [group.id]: event.target.value,
                                    }))
                                  }
                                >
                                  <option value="">Choose a member</option>
                                  {group.eligibleMembers.map((member) => (
                                    <option key={member.id} value={member.id}>
                                      {member.name}
                                    </option>
                                  ))}
                                </select>
                                <Button
                                  type="button"
                                  onClick={() => handleNominate(group)}
                                  disabled={isWorking}
                                >
                                  {isWorking
                                    ? "Sending request..."
                                    : "Request ownership transfer"}
                                </Button>
                              </div>
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                No eligible members remain to nominate.
                              </p>
                            )}

                            <Button
                              type="button"
                              variant="outline"
                              onClick={() =>
                                handleMoveToPendingResolution(group)
                              }
                              disabled={isWorking}
                            >
                              Stop trying and move to pending resolution
                            </Button>
                          </>
                        )}
                      </div>
                    )}

                    {group.status !== "ACTIVE" &&
                      group.status !== "PENDING_RESOLUTION" && (
                        <div className="mt-3 flex flex-col gap-3">
                          <p className="text-sm text-muted-foreground">
                            This group needs review before account deletion.
                          </p>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                              handleMoveToPendingResolution(group)
                            }
                            disabled={isWorking}
                          >
                            Move to pending resolution
                          </Button>
                        </div>
                      )}

                    {group.status === "PENDING_RESOLUTION" && (
                      <div className="mt-3 flex flex-col gap-3">
                        <p className="text-sm text-muted-foreground">
                          Outstanding contributions:{" "}
                          {group.outstandingContributions}; payouts:{" "}
                          {group.outstandingPayouts}; processing payments:{" "}
                          {group.processingPayments}.
                        </p>
                        {outstandingCount > 0 ? (
                          <p className="text-sm text-muted-foreground">
                            Resolve these obligations before closing.{" "}
                            <a
                              className="font-medium text-primary underline"
                              href={`mailto:savagekidsteven@email.com?subject=${encodeURIComponent(
                                `Help resolving ${group.name}`,
                              )}&body=${encodeURIComponent(
                                `Please help resolve group ${group.name} (${group.id}) before closure.`,
                              )}`}
                            >
                              Contact support
                            </a>
                          </p>
                        ) : (
                          <>
                            <label className="flex items-start gap-2 text-sm">
                              <input
                                type="checkbox"
                                className="mt-1"
                                checked={
                                  confirmedNoDisputes[group.id] ?? false
                                }
                                onChange={(event) =>
                                  setConfirmedNoDisputes((current) => ({
                                    ...current,
                                    [group.id]: event.target.checked,
                                  }))
                                }
                              />
                              I confirm there are no unresolved disputes. If
                              there are disputes, contact support before
                              archiving.
                            </label>
                            <Button
                              type="button"
                              variant="destructive"
                              onClick={() => handleCloseGroup(group)}
                              disabled={
                                isWorking ||
                                !confirmedNoDisputes[group.id]
                              }
                            >
                              {isWorking ? "Archiving..." : "Archive group"}
                            </Button>
                          </>
                        )}
                        <a
                          className="text-sm font-medium text-primary underline"
                          href={`mailto:savagekidsteven@email.com?subject=${encodeURIComponent(
                            `Question about ${group.name}`,
                          )}&body=${encodeURIComponent(
                            `Please contact me about group ${group.name} (${group.id}).`,
                          )}`}
                        >
                          Contact support about a dispute
                        </a>
                      </div>
                    )}
                  </div>
                )
              })
            )}

            <Button
              type="button"
              variant="outline"
              onClick={() =>
                refreshOwnedGroups().catch(() =>
                  toast.error("Unable to refresh ownership status."),
                )
              }
              disabled={resolvingGroupId !== null}
            >
              Refresh group status
            </Button>
          </div>
        </Card>
      )}

      <Card className="border-destructive/40 p-5">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="font-semibold text-destructive">Delete account</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Permanently delete your account. Group owners will be notified
              when you leave, and your past payment records will remain
              unchanged.
            </p>
          </div>

          <Button
            variant="destructive"
            className="w-full rounded-xl"
            onClick={handleDeleteAccount}
            disabled={isDeleting}
          >
            <Trash2 />
            {isDeleting ? "Deleting account..." : "Delete account"}
          </Button>
        </div>
      </Card>
    </PageShell>
  )
}
