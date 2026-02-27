"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionSectionProps = {
  title: string
  items: FAQItem[]
}

export function FAQAccordionSection({ title, items }: FAQAccordionSectionProps) {
  return (
    <section className="mt-10 space-y-5">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
        {title}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-4 border border-border/40 rounded-xl divide-y divide-border/40 overflow-hidden bg-card/40"
      >
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`} className="border-0">
            <AccordionTrigger className="px-5 sm:px-6 py-4 text-left text-sm sm:text-base font-semibold text-foreground hover:no-underline hover:bg-card/60 [&[data-state=open]]:bg-card/60">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

