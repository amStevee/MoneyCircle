"use client"

import { CreditCard, Home, User, Users } from "lucide-react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "#", icon: Home },
  { label: "Groups", href: "/groups", icon: Users },
  { label: "Payments", href: "/payments", icon: CreditCard },
  { label: "Profile", href: "/profile", icon: User },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="sticky bottom-0 left-0 right-0 border-t border-border bg-background">
      <div className="mx-auto flex max-w-xl items-center justify-between px-6 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-xs font-medium",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="size-6" />
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
