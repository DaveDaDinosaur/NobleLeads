"use client"

import { SectionReveal } from "@/components/section-reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = [
  {
    q: "How long does it take to go live?",
    a: "Core websites can go live within a few days. Growth and Dominate include more setup — we’ll give you a clear timeline on the strategy call, usually 2–4 weeks depending on scope.",
  },
  {
    q: "Is there a contract?",
    a: "Core is month-to-month. Growth and Dominate have an initial 3-month period so we can properly optimise your campaigns, then it’s flexible. We’re not interested in locking you in.",
  },
  {
    q: "Do I have to run ads?",
    a: "Only if you choose Growth or Dominate. Core is just the website and management — no ads. If you want more enquiries and are ready to invest in paid lead generation, that’s when Growth or Dominate make sense.",
  },
  {
    q: "What’s included in the monthly management?",
    a: "Monthly management covers hosting, technical upkeep, performance monitoring, and ongoing improvements. For Growth and Dominate clients, it also includes active ad management and optimisation to keep enquiries consistent and cost-effective. We manage the system so it continues to perform - not just sit online.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. Many clients start with Core and move to Growth when they’re ready for paid lead generation. We’ll make the switch straightforward.",
  },
  {
    q: "What if I already have a website?",
    a: "We can work with what you have, improve it, add the enquiry system and tracking, or rebuild if it’s holding you back. The strategy call is where we decide the best path.",
  },
  {
    q: "How much should I spend on ads?",
    a: "It depends on your trade, area and competition. We’ll recommend a sensible starting budget on the strategy call and adjust as we see what works. No guesswork: everything is tracked and optimised.",
  },
  {
    q: "Will this work in my area?",
    a: "We work with trade businesses across the UK. Local services like roofing, plumbing and electrical do well with our approach because we focus on enquiries from people in your area. We’ll talk through your specific market on the call.",
  },
]

export function PricingFAQ() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-24">
      <SectionReveal>
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h2>
      </SectionReveal>
      <SectionReveal delay={100}>
        <Accordion
          type="single"
          collapsible
          className="mt-10 border border-border/50 rounded-xl divide-y divide-border/50 overflow-hidden bg-card/30"
        >
          {FAQ.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-sm font-semibold hover:no-underline hover:bg-card/50 [&[data-state=open]]:bg-card/50">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionReveal>
    </section>
  )
}
