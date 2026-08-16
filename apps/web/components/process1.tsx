import { Asterisk, CornerDownRight } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Process1Props {
  className?: string
}

const Process1 = ({ className }: Process1Props) => {
  const process = [
    {
      step: "01",
      title: "Create a Savings Group",
      description:
        "Start a private group with people you already know and trust.",
    },
    {
      step: "02",
      title: "Invite Members",
      description: "Share an invite link and let members join securely.",
    },
    {
      step: "03",
      title: "Set the Rules",
      description:
        "Choose contribution a,ount, frequency, number of members, payout order and start date.",
    },
    {
      step: "04",
      title: "Traack Contributions",
      description:
        'Everyone can see who has paid, upcoming contributions, group progress and payout schedule. No more asking, "who has paid"',
    },
    {
      step: "05",
      title: "Stay Updated",
      description:
        "Start a private group with people you already know and trust.",
    },
    {
      step: "06",
      title: "Grow Together",
      description:
        "Build a constistent saving habit with complete visibility for every member",
    },
  ]

  return (
    <section id="Learn-How-it-Works" className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              {" "}
              <h1 className="w-fit">How Money Circle Works</h1>
              <Asterisk className="absolute -top-2 -right-2 size-5 text-orange-500 md:size-10 lg:-right-14" />
            </div>
            <p className="text-base text-foreground/50">
              Simple. Transparent. Built for groups.
            </p>

            {/* <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
            >
              <CornerDownRight className="text-orange-500" />
              Get in touch
            </Button> */}
          </div>
          <ul className="relative col-span-4 w-full lg:pl-22">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute top-4 right-0" />

                <div className="flex size-12 items-center justify-center bg-muted px-4 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div className="">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Process1 }

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  )
}
