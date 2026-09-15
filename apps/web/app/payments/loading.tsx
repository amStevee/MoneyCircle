import { BottomNav } from "@/components/dashboard/bottom-nav"

function Placeholder({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-muted ${className}`} />
}

export default function PaymentsLoading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading payments"
      className="flex min-h-svh flex-col bg-muted/30"
    >
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-5 p-4 pb-28 sm:p-6 sm:pb-28">
        <header className="flex flex-col gap-2 pt-2">
          <Placeholder className="h-7 w-28" />
          <Placeholder className="h-4 w-64 max-w-full" />
        </header>
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
      </main>
      <BottomNav />
    </div>
  )
}