"use client"

import { useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

import { BottomNav } from "@/components/dashboard/bottom-nav"
import { useUserStore } from "@/store/useUserStore"

interface PageShellProps {
  title: string
  description?: string
  children: ReactNode
}

export function PageShell({ title, description, children }: PageShellProps) {
  const router = useRouter()
  const token = useUserStore((state) => state.token)
  const user = useUserStore((state) => state.user)

  useEffect(() => {
    if (!token) router.replace("/login")
  }, [router, token])

  if (!token || !user) return null

  return (
    <div className="flex min-h-svh flex-col bg-muted/30">
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-5 p-4 pb-28 sm:p-6 sm:pb-28">
        <header className="flex flex-col gap-1 pt-2">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </header>
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
