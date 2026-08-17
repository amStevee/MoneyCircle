"use client"

import { BackgroundLines } from "@/components/ui/background-lines"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { type ChangeEvent } from "react"
import api from "@/lib/apiAxios"
import { toast } from "react-toastify"

interface Waitlist1Props {
  className?: string
}

const Waitlist1 = ({ className }: Waitlist1Props) => {
  const [email, setEmail] = useState<string>("")
  

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  async function joinWaitList(email: string) {
    try {
      const { data } = await api.post<{ message: string }>(
        "/api/v1/waiting-list",
        { email }
      )
      toast.success(data.message || "Successfully joined the waitlist!")
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Something went wrong!"
      toast.error(errorMessage)
    }
  }

  return (
    <section
      className={cn(
        "flex max-h-[1200px] min-h-[600px] items-center justify-center overflow-hidden py-5 md:py-5",
        className
      )}
      id="waitlist"
    >
      <BackgroundLines className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
        <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-10 lg:text-8xl">
          Join the Waitlist
        </h2>
        <p className="text-md mx-auto max-w-xl text-center text-muted-foreground lg:text-lg">
          Help shape the futrue of digital Ajo. Get early access, product
          updates, and oppurtunities to provied feedback before public launch
        </p>
        <div className="relative z-20 mt-10 flex w-full max-w-md items-center gap-3 rounded-full p-1">
          <Input
            className="h-10 w-full rounded-xl border-none bg-muted shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none active:ring-0 active:outline-0"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
          />
          <Button
            className="h-10 rounded-xl"
            onClick={() => joinWaitList(email)}
          >
            Join the Waitlist
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-2">
          <span className="inline-flex items-center -space-x-2.5">
            {Array.from({ length: 6 }).map((_, index) => (
              <Avatar key={index} className="size-8">
                <AvatarImage
                  src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar${index + 1}.png`}
                  alt="placeholder"
                />
              </Avatar>
            ))}
          </span>
          <p className="tracking-tight text-muted-foreground/80">
            +1000 people already joined
          </p>
        </div>
      </BackgroundLines>
    </section>
  )
}

export { Waitlist1 }
