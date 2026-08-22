"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { CheckCircle2, Loader2, XCircle } from "lucide-react"
import { toast } from "react-toastify"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { apiClient } from "@/lib/api"
import { useUserStore } from "@/store/useUserStore"

type AcceptState =
  | { status: "checking" }
  | { status: "success"; groupId: string; groupName: string }
  | { status: "error"; message: string }

export default function AcceptInvitationPage() {
  const { token } = useParams<{ token: string }>()
  const router = useRouter()
  const authToken = useUserStore((state) => state.token)
  const isHydrated = useUserStore((state) => state.isHydrated)

  const [state, setState] = useState<AcceptState>({ status: "checking" })

  // Not signed in: nothing to poll for, so this is derived at render
  // time rather than stored in state.
  const needsLogin = isHydrated && !authToken

  useEffect(() => {
    if (!isHydrated || !authToken) return

    apiClient
      .acceptInvitation(token)
      .then(({ groupId, groupName }) => {
        toast.success(`You've joined ${groupName}`)
        setState({ status: "success", groupId, groupName })
      })
      .catch((err) => {
        setState({
          status: "error",
          message:
            err?.response?.data?.message || "Unable to accept this invitation",
        })
      })
  }, [isHydrated, authToken, token])

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-muted/30 p-6">
      <Link href="/" className="font-medium">
        MoneyCircle
      </Link>

      <Card className="w-full max-w-sm p-6 text-center">
        {state.status === "checking" && !needsLogin && (
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="size-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">
              Checking your invitation...
            </p>
          </div>
        )}

        {needsLogin && (
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold">Sign in to accept this invitation</p>
            <p className="text-sm text-muted-foreground">
              Log in or create an account with the email address this
              invitation was sent to, then open this link again.
            </p>
            <div className="mt-2 flex w-full gap-2">
              <Link
                href="/login"
                className="flex-1"
                onClick={() =>
                  window.sessionStorage?.setItem(
                    "moneycircle_pending_invite",
                    token
                  )
                }
              >
                <Button className="w-full rounded-xl">Log in</Button>
              </Link>
              <Link
                href="/signup"
                className="flex-1"
                onClick={() =>
                  window.sessionStorage?.setItem(
                    "moneycircle_pending_invite",
                    token
                  )
                }
              >
                <Button variant="outline" className="w-full rounded-xl">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        )}

        {state.status === "success" && (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle2 className="size-10 text-primary" />
            <p className="font-semibold">
              You&apos;ve joined {state.groupName}
            </p>
            <p className="text-sm text-muted-foreground">
              You&apos;re now a member of this savings group.
            </p>
            <Button
              className="mt-2 w-full rounded-xl"
              onClick={() => router.push(`/groups/${state.groupId}`)}
            >
              Go to group
            </Button>
          </div>
        )}

        {state.status === "error" && (
          <div className="flex flex-col items-center gap-3">
            <XCircle className="size-10 text-destructive" />
            <p className="font-semibold">Couldn&apos;t accept invitation</p>
            <p className="text-sm text-muted-foreground">{state.message}</p>
            <Link href="/groups" className="w-full">
              <Button variant="outline" className="mt-2 w-full rounded-xl">
                Go to your groups
              </Button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  )
}
