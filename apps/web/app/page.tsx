import { About3 } from "@/components/about3"
import { Contact7 } from "@/components/contact7"
import { Faq1 } from "@/components/faq1"
import { Feature17 } from "@/components/feature17"
import { Footer2 } from "@/components/footer2"
import { Hero47 } from "@/components/hero47"
import { Navbar1 } from "@/components/navbar1"
import { Problems17 } from "@/components/problems17"
import { Process1 } from "@/components/process1"
import { Research17 } from "@/components/research"
import { Waitlist1 } from "@/components/waitlist1"

export default function Page() {
  return (
    <>
      <Navbar1 />
      <div className="flex flex-col gap-10 p-10 lg:gap-32">
        <Hero47
          heading="The modern way"
          subheading=" for trusted groups to save together."
          description="Money Circle helps friends, families, cowokers, and small communities organize rotational savings with transparency, reminders, and a clear record of every contribution"
          buttons={{
            primary: { text: "Join the Waitlist", url: "#waitlist" },
            secondary: {
              text: "Learn How it Works",
              url: "#Learn-How-it-Works",
            },
          }}
        />
        <Problems17
          label="Saving together shouldn't be strssful."
          heading="Traditional Ajo works because of trust, but managing it often doesn't."
        />
        <Process1 />
        <Feature17 />
        <Research17 />
        <Faq1 />
        <Waitlist1 />
        <About3
          {...({
            title: "About Money Circle",
          } as any)}
        />
        <Contact7 />
        <Footer2 />
      </div>
    </>
  )
}
