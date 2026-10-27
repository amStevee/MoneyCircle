import { BottomNav } from "@/components/dashboard/bottom-nav"

function Placeholder({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-muted ${className}`} />
}

function PageLoader({
  label,
  titleWidth,
  descriptionWidth,
  children,
}: {
  label: string
  titleWidth: string
  descriptionWidth: string
  children: React.ReactNode
}) {
  return (
    <div
      aria-busy="true"
      aria-label={label}
      className="flex min-h-svh flex-col bg-muted/30"
    >
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-5 p-4 pb-28 sm:p-6 sm:pb-28">
        <header className="flex flex-col gap-2 pt-2">
          <Placeholder className={`h-7 ${titleWidth}`} />
          <Placeholder className={`h-4 max-w-full ${descriptionWidth}`} />
        </header>
        {children}
      </main>
      <BottomNav />
    </div>
  )
}

export function GroupDetailsLoading() {
  return (
    <PageLoader
      label="Loading group"
      titleWidth="w-44"
      descriptionWidth="w-64"
    >
      <Placeholder className="h-9 w-32" />
      <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Placeholder className="size-12 rounded-full" />
            <div className="flex flex-col gap-2">
              <Placeholder className="h-4 w-36" />
              <Placeholder className="h-3 w-28" />
            </div>
          </div>
          <Placeholder className="h-5 w-16 rounded-full" />
        </div>
        <Placeholder className="mt-5 h-2 w-full rounded-full" />
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Placeholder className="h-16 w-full rounded-xl" />
          <Placeholder className="h-16 w-full rounded-xl" />
        </div>
      </div>
      <Placeholder className="h-5 w-24" />
      <div className="rounded-2xl border border-border bg-card shadow-card">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-3 border-b border-border/60 p-4 last:border-b-0"
          >
            <Placeholder className="size-9 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Placeholder className="h-4 w-32" />
              <Placeholder className="h-3 w-20" />
            </div>
            <Placeholder className="h-5 w-16 rounded-full" />
          </div>
        ))}
      </div>
      <Placeholder className="h-5 w-36" />
      <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
        <Placeholder className="h-10 w-full rounded-xl" />
      </div>
    </PageLoader>
  )
}

export function PaymentsLoading() {
  return (
    <PageLoader
      label="Loading payments"
      titleWidth="w-28"
      descriptionWidth="w-64"
    >
      <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
        <Placeholder className="h-3 w-40" />
        <Placeholder className="mt-3 h-9 w-40" />
        <Placeholder className="mt-3 h-3 w-32" />
      </div>
      <div className="flex flex-col gap-3">
        <Placeholder className="h-5 w-40" />
        <Placeholder className="h-16 w-full rounded-2xl" />
      </div>
      <Placeholder className="h-10 w-full" />
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border bg-card p-5 shadow-card"
          >
            <div className="flex items-start gap-3">
              <Placeholder className="size-10 rounded-full" />
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <Placeholder className="h-4 w-32" />
                    <Placeholder className="h-3 w-24" />
                  </div>
                  <Placeholder className="h-5 w-20 rounded-full" />
                </div>
                <div className="flex items-end justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <Placeholder className="h-5 w-24" />
                    <Placeholder className="h-3 w-36" />
                  </div>
                  <Placeholder className="h-4 w-14" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLoader>
  )
}

export function PaymentDetailsLoading() {
  return (
    <PageLoader
      label="Loading payment details"
      titleWidth="w-36"
      descriptionWidth="w-24"
    >
      <Placeholder className="h-9 w-36" />
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-7 shadow-card">
        <Placeholder className="size-16 rounded-full" />
        <Placeholder className="h-3 w-24" />
        <Placeholder className="h-9 w-36" />
        <Placeholder className="h-6 w-20 rounded-full" />
      </div>
      <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-card">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex justify-between gap-4">
            <Placeholder className="h-4 w-20" />
            <Placeholder className="h-4 w-32" />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
        <Placeholder className="size-6 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Placeholder className="h-4 w-36" />
          <Placeholder className="h-3 w-full" />
          <Placeholder className="h-3 w-4/5" />
        </div>
      </div>
    </PageLoader>
  )
}
