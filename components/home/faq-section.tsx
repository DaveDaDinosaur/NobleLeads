import { SectionReveal } from "@/components/section-reveal"
import type { FAQItem } from "@/app/(shared)/schema"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const homepageFAQs: FAQItem[] = [
  {
    question: "Do I need a big budget to get started?",
    answer:
      "No. Most trades start with a sensible monthly budget that fits where the business is today. The aim is to prove the system at a level you’re comfortable with, then scale once it’s paying for itself.",
  },
  {
    question: "How long before I see results?",
    answer:
      "For paid traffic, most clients start seeing new enquiries within the first 2–4 weeks. For SEO, meaningful movement typically takes 3–6 months. We’ll be clear about timelines before we recommend anything.",
  },
  {
    question: "Do you work with sole traders as well as larger teams?",
    answer:
      "Yes. We work with sole traders through to small teams of around 10 people. What matters most is that you have solid delivery, good reviews and a genuine desire to grow in a controlled way.",
  },
  {
    question: "What makes NobleLeads different from other agencies?",
    answer:
      "We only work with UK property service trades, so everything—from the copy to the follow-up flows—is built around how your world actually works. No generic funnels, no vanity metrics—just jobs booked.",
  },
  {
    question: "Are there long contracts or lock-ins?",
    answer:
      "Noble Core is month-to-month. Growth and Dominate have an initial optimisation period so we can do the setup properly, then move to rolling. If we’re not delivering value, we don’t want you tied in.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with trades across the whole of the UK, with particular depth in cities like Cambridge, Manchester, Leeds, Birmingham and London. The system is built to fit your local service area.",
  },
]

type HomeFAQSectionProps = {
  items?: FAQItem[]
}

export function HomeFAQSection({ items = homepageFAQs }: HomeFAQSectionProps) {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
              Common Questions
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
              Straight answers to the questions trades ask us before they come on
              board. No fluff, no jargon—just what you need to know before you
              make a decision.
            </p>
          </div>
        </SectionReveal>
        <div className="mt-8 sm:mt-10">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3"
          >
            {items.map((item, index) => (
              <SectionReveal key={item.question} direction="up" delay={40}>
                <AccordionItem
                  value={`faq-${index}`}
                  className="border border-border/40 bg-card/40 rounded-xl px-4 sm:px-5"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4 sm:pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </SectionReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

