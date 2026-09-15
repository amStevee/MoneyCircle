import { BottomNav } from "@/components/dashboard/bottom-nav"

function Placeholder({ className = "" }: { className?: string }) {
	return <div className={`animate-pulse rounded-lg bg-muted ${className}`} />
}

export default function DashboardLoading() {
	return (
		<div
			aria-busy="true"
			aria-label="Loading dashboard"
			className="flex min-h-svh flex-col bg-muted/30"
		>
			<main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-6 p-4 pb-6 sm:p-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Placeholder className="size-11 rounded-full" />
						<div className="flex flex-col gap-2">
							<Placeholder className="h-3 w-20" />
							<Placeholder className="h-5 w-32" />
						</div>
					</div>
					<Placeholder className="size-9 rounded-full" />
				</div>
				<div className="rounded-2xl border border-border bg-card p-5 shadow-card">
					<Placeholder className="h-3 w-32" />
					<Placeholder className="mt-3 h-9 w-44" />
					<Placeholder className="mt-3 h-3 w-28" />
				</div>
				<div className="rounded-2xl border border-border bg-card p-5 shadow-card">
					<Placeholder className="h-4 w-36" />
					<Placeholder className="mt-3 h-3 w-48" />
					<Placeholder className="mt-5 h-10 w-full rounded-xl" />
				</div>
				<div className="rounded-2xl border border-border bg-card p-5 shadow-card">
					<div className="flex items-center justify-between">
						<Placeholder className="h-4 w-32" />
						<Placeholder className="h-8 w-20 rounded-xl" />
					</div>
					<div className="mt-5 flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<Placeholder className="size-10 rounded-full" />
							<div className="flex flex-1 flex-col gap-2">
								<Placeholder className="h-3 w-28" />
								<Placeholder className="h-3 w-20" />
							</div>
						</div>
						<div className="flex items-center gap-3">
							<Placeholder className="size-10 rounded-full" />
							<div className="flex flex-1 flex-col gap-2">
								<Placeholder className="h-3 w-36" />
								<Placeholder className="h-3 w-24" />
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-2xl border border-border bg-card p-5 shadow-card">
					<Placeholder className="h-4 w-36" />
					<div className="mt-5 flex flex-col gap-4">
						<Placeholder className="h-12 w-full rounded-xl" />
						<Placeholder className="h-12 w-full rounded-xl" />
					</div>
				</div>
			</main>
			<BottomNav />
		</div>
	)
export function DashboardLoading() {
}

export default DashboardLoading
