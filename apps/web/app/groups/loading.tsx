import { BottomNav } from "@/components/dashboard/bottom-nav"

function Placeholder({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-muted ${className}`} />
}

export default function GroupsLoading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading groups"
      className="flex min-h-svh flex-col bg-muted/30"
    >
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-5 p-4 pb-28 sm:p-6 sm:pb-28">
        <header className="flex flex-col gap-2 pt-2">
          <Placeholder className="h-7 w-44" />
          <Placeholder className="h-4 w-64 max-w-full" />
        </header>
        <Placeholder className="h-10 w-full rounded-xl" />
        <Placeholder className="h-10 w-full" />
        <div className="flex flex-col gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Placeholder className="size-11 rounded-full" />
                  <div className="flex flex-col gap-2">
                    <Placeholder className="h-4 w-28" />
                    <Placeholder className="h-3 w-36" />
                  </div>
                </div>
                <Placeholder className="h-5 w-16 rounded-full" />
              </div>
              <Placeholder className="mt-5 h-2 w-full rounded-full" />
              <div className="mt-4 flex justify-between">
                <Placeholder className="h-3 w-24" />
                <Placeholder className="h-4 w-20" />
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  )
export function GroupsLoading() {
}

export default GroupsLoading