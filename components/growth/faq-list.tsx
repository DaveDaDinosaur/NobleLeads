"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FAQ } from "@/lib/offer"

export function FAQList({ items }: { items: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full border-t border-border">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`faq-${index}`}
          className="border-b border-border"
        >
          <AccordionTrigger className="py-6 text-left text-base font-medium text-foreground transition-colors hover:text-secondary hover:no-underline sm:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
