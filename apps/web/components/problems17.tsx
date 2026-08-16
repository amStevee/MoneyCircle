import { Banknote, Bell, Calendar, Eye } from "lucide-react"
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
  heading: "Build faster with production ready features",
  label: "Features",
  features: [
    {
      icon: <Calendar className="size-5" />,
      title: "Contributions get forgotten",
      description: "",
    },
    {
      icon: <Banknote className="size-5" />,
      title: "Payment record becomes difficult to track",
      description: "",
    },
    {
      icon: <Bell className="size-5" />,
      title: "Group admins spend hours reminding members.",
      description: "",
    },
    {
      icon: <Eye className="size-5" />,
      title: "Disagreements happen because information isn't transparent",
      description: "",
    },
  ],
  buttons: {
    primary: {
      text: "Money Circle brings structure without changing the tradition people already trust.",
      url: "",
    },
  },
}

const MAX_FEATURES = 6

const Problems17 = (props: Props) => {
  const { heading, label, features, buttons, className } = {
    ...defaultProps,
    ...props,
  }
  const items = (features ?? []).slice(0, MAX_FEATURES)

  return (
    <section className={cn("py-32", className)}>
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
        {buttons?.primary?.url && (
          <div className="mt-16 flex justify-center">
            <Button
              variant={"outline"}
              size="lg"
              render={<a href={buttons.primary.url} />}
              nativeButton={false}
            >
              {buttons.primary.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export { Problems17 }
