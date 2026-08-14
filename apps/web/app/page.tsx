import { Faq1 } from "@/components/faq1"
import { Hero47 } from "@/components/hero47"
import { Navbar1 } from "@/components/navbar1"
import { Process1 } from "@/components/process1"
import { Waitlist1 } from "@/components/waitlist1"

export default function Page() {
  return (
    <div className="p-5">
      <Navbar1 />
      <Hero47 />
      <Process1 />
      <Faq1 />
      <Waitlist1 />
    </div>
  )
}
