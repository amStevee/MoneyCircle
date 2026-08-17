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
          title="About Money Circle"
          mainImage={{
            src: "/online-community.png",
            alt: "about",
          }}
          secondaryImage={{
            src: "/undraw_profile.png",
            alt: "about",
          }}
          breakout={{
            src: "https://github.com/amStevee.png",
            alt: "Steven Anongo",
            title: "Hi, I'm Steven.",
            description:
              "I'm a software engineer building Money Circle, a platform that helps people save money together in a transparent and secure way. This is a capstone project for my software development bootcamp, and I'm excited to share it with the world. I hope you find it useful and enjoy using it as much as I enjoyed building it.",
            buttonText: "Learn More",
            buttonUrl: "https://www.linkedin.com/in/steven-anongo",
          }}
        />
        <Contact7 />
        <Footer2 />
      </div>
    </>
  )
}
