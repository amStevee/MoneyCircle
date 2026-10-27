"use client"

import { Suspense } from "react"
import { SignupForm } from "@/components/signup-form"
import Image from "next/image"
import Link from "next/link"
// import { GalleryVerticalEndIcon } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            MoneyCircle
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Suspense fallback={<div>Loading form...</div>}>
              <SignupForm />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="relative hidden overflow-hidden bg-muted lg:block">
        <Image
          src="/signup-sid.svg"
          alt="Signup illustration"
          className="h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}
