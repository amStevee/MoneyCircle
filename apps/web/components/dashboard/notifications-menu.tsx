"use client"

import { useEffect, useState } from "react"
import { Bell, Check } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { apiClient, type ApiNotification } from "@/lib/api"
import { cn } from "@/lib/utils"

function timeAgo(dateString: string) {
  const seconds = Math.floor(
    (Date.now() - new Date(dateString).getTime()) / 1000
  )
  if (seconds < 60) return "just now"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  return new Date(dateString).toLocaleDateString("en-NG", {
    month: "short",
    day: "numeric",
  })
}

export function NotificationsMenu() {
  const [open, setOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [notifications, setNotifications] = useState<
    ApiNotification[] | null
  >(null)
  const [transferResponses, setTransferResponses] = useState<
    Record<string, "accepted" | "declined">
  >({})
  const [respondingTransferId, setRespondingTransferId] = useState<
    string | null
  >(null)
  const [responseErrors, setResponseErrors] = useState<Record<string, string>>(
    {},
  )

  function getTransferId(data: unknown): string | null {
    if (
      typeof data === "object" &&
      data !== null &&
      "event" in data &&
      data.event === "GROUP_OWNERSHIP_TRANSFER" &&
      "transferId" in data &&
      typeof data.transferId === "string"
    ) {
      return data.transferId
    }
    return null
  }

  // Poll the unread count in the background so the dot stays accurate
  // even while the dropdown is closed.
  useEffect(() => {
    let cancelled = false

    function refreshCount() {
      apiClient
        .unreadNotificationCount()
        .then((r) => {
          if (!cancelled) setUnreadCount(r.count)
        })
        .catch(() => {})
    }

    refreshCount()
    const interval = setInterval(refreshCount, 30000)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    apiClient
      .notifications()
      .then(setNotifications)
      .catch(() => setNotifications([]))
  }, [open])

  async function handleMarkAllRead() {
    setUnreadCount(0)
    setNotifications(
      (prev) => prev?.map((n) => ({ ...n, read: true })) ?? prev
    )
    try {
      await apiClient.markAllNotificationsRead()
    } catch {
      // best-effort - next poll will resync if this failed
    }
  }

  async function handleNotificationClick(notification: ApiNotification) {
    if (notification.read) return
    setNotifications(
      (prev) =>
        prev?.map((n) =>
          n.id === notification.id ? { ...n, read: true } : n
        ) ?? prev
    )
    setUnreadCount((c) => Math.max(0, c - 1))
    try {
      await apiClient.markNotificationRead(notification.id)
    } catch {
      // best-effort - next poll will resync if this failed
    }
  }

  async function handleTransferResponse(
    notification: ApiNotification,
    accept: boolean,
  ) {
    const transferId = getTransferId(notification.data)
    if (!transferId || respondingTransferId) return

    setRespondingTransferId(transferId)
    setResponseErrors((current) => ({ ...current, [transferId]: "" }))
    try {
      await apiClient.respondToOwnershipTransfer(transferId, accept)
      setTransferResponses((current) => ({
        ...current,
        [transferId]: accept ? "accepted" : "declined",
      }))
      await handleNotificationClick(notification)
    } catch (error: any) {
      setResponseErrors((current) => ({
        ...current,
        [transferId]:
          error?.response?.data?.error ??
          error?.response?.data?.message ??
          "Unable to respond to this ownership request.",
      }))
    } finally {
      setRespondingTransferId(null)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="relative flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
        aria-label="Notifications"
      >
        <Bell className="size-5" />
        {unreadCount > 0 && (
          <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
        )}
      </PopoverTrigger>

      <PopoverContent className="p-0">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-sm font-semibold">Notifications</span>
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={handleMarkAllRead}
              className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              <Check className="size-3.5" />
              Mark all read
            </button>
          )}
        </div>

        <div className="max-h-80 overflow-y-auto">
          {notifications === null && (
            <p className="p-4 text-center text-sm text-muted-foreground">
              Loading…
            </p>
          )}

          {notifications !== null && notifications.length === 0 && (
            <p className="p-4 text-center text-sm text-muted-foreground">
              You&apos;re all caught up.
            </p>
          )}

          {notifications?.map((notification) => {
            const transferId = getTransferId(notification.data)
            const response = transferId
              ? transferResponses[transferId]
              : undefined
            const isResponding = transferId === respondingTransferId

            return (
              <div
                key={notification.id}
                className={cn(
                  "border-b border-border/60 px-4 py-3 last:border-b-0",
                  !notification.read && "bg-primary/5"
                )}
              >
                <button
                  type="button"
                  onClick={() => handleNotificationClick(notification)}
                  className="flex w-full flex-col gap-0.5 text-left"
                >
                  <div className="flex items-center gap-2">
                    {!notification.read && (
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                    )}
                    <span className="text-sm font-medium">
                      {notification.title}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {notification.message}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {timeAgo(notification.createdAt)}
                  </span>
                </button>

                {transferId && !response && (
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground disabled:opacity-50"
                      onClick={() =>
                        handleTransferResponse(notification, true)
                      }
                      disabled={isResponding || respondingTransferId !== null}
                    >
                      {isResponding ? "Saving..." : "Accept"}
                    </button>
                    <button
                      type="button"
                      className="rounded-md border px-3 py-1.5 text-xs font-medium disabled:opacity-50"
                      onClick={() =>
                        handleTransferResponse(notification, false)
                      }
                      disabled={isResponding || respondingTransferId !== null}
                    >
                      Decline
                    </button>
                  </div>
                )}
                {response && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    You {response} this ownership request.
                  </p>
                )}
                {transferId && !response && responseErrors[transferId] && (
                  <p className="mt-2 text-xs text-destructive">
                    {responseErrors[transferId]}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
