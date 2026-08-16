import { File, Shield, Users, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

interface FeatureIconListItem {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
}
interface Button {
  text: string
  url: string
  icon?: React.ReactNode
}
interface Buttons {
  primary?: Button
  secondary?: Button
}

interface FeatureIconListProps {
  heading: string
  label?: string
  features?: FeatureIconListItem[]
  buttons?: Buttons
  className?: string
}

type Feature17Props = FeatureIconListProps
type Props = Partial<Feature17Props>

const defaultProps: Feature17Props = {
  heading: "Why Choose Money Circle",
  label: "",
  features: [
    {
      icon: <Shield className="size-5" />,
      title: "Built for trust",
      description: "Designed around transparency instead of assumptions",
    },
    {
      icon: <Zap className="size-5" />,
      title: "Simple to use",
      description: "No accounting knowledge required",
    },
    {
      icon: <File className="size-5" />,
      title: "Organized",
      description:
        "Every contribution is recorded.  \n Every payout is tracked. \n Every member stays informed.",
    },
    {
      icon: <Users className="size-5" />,
      title: "Designed for communities",
      description:
        "Whether it's family, friends, coworkers, or local associations.",
    },
  ],
  buttons: {
    primary: {
      text: "Browse Components",
      url: "https://www.shadcnblocks.com",
    },
  },
}

const MAX_FEATURES = 6

const Feature17 = (props: Props) => {
  const { heading, label, features, buttons, className } = {
    ...defaultProps,
    ...props,
  }
  const items = (features ?? []).slice(0, MAX_FEATURES)

  return (
    <section id="features" className={cn("py-32", className)}>
      <div className="container">
        {(label || heading) && (
          <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center">
            {label && <Badge variant="secondary">{label}</Badge>}
            <h2 className="text-3xl font-semibold tracking-tight text-pretty md:text-4xl lg:text-5xl">
              {heading}
            </h2>
          </div>
        )}
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          {items.map((feature, idx) => (
            <div
              key={idx}
              className="flex gap-6 rounded-lg md:block md:space-y-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium tracking-tight md:mb-2 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* {buttons?.primary?.url && (
          <div className="mt-16 flex justify-center">
            <Button
              size="lg"
              render={<a href={buttons.primary.url} />}
              nativeButton={false}
            >
              {buttons.primary.text}
            </Button>
          </div>
        )} */}
      </div>
    </section>
  )
}

export { Feature17 }
