import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FaqItem {
  id: string
  question: string
  answer: string
  className?: string
}

interface Faq1Props {
  heading?: string
  items?: FaqItem[]
  className?: string
}

const Faq1 = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: "faq-1",
      question: "What is Ajo?",
      answer:
        "Ajo is a traditional rotating savings scheme where a group of people agrees to contribute a fixed amount at regular intervals (daily, weekly, or monthly). Each contribution period, one participant receives the pooled amount until everyone has had a turn.",
    },
    {
      id: "faq-2",
      question: "Who is Money Circle for?",
      answer:
        "Money Circle is primarily for people who want to save money together in a structured, trusted group.",
    },
    {
      id: "faq-3",
      question: "Is my money stored in Money Circle?",
      answer:
        "No. Money Circle stores the financial records, not the actual money.",
    },
    {
      id: "faq-4",
      question: "Is Money Circle free?",
      answer:
        "Yes. Money Circle is a free platform. Future updates may include a payment plan.",
    },
    {
      id: "faq-5",
      question: "When will Money Circle launch?",
      answer:
        "At the moment, Money Circle is in its beta phase and will be released when it is deemed ready by the developer.",
    },
    {
      id: "faq-6",
      question: "Can I create multiple groups?",
      answer:
        "Yes. Money Circle supports the creation and management of multiple groups.",
    },
  ],
  className,
}: Faq1Props) => {
  return (
    <section id="faq" className={cn("py-5", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
            {heading}
          </h1>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export { Faq1 }
