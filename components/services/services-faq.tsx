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
    q: "What if I already have a website?",
    a: "We work with what you have. We can audit it for conversion, add the missing pieces (CRM, alerts, SEO), or rebuild if it’s holding you back. The strategy call clarifies the best path.",
  },
  {
    q: "Is this a contract?",
    a: "We’re not interested in locking you in. We offer clear scope and flexible terms. Many clients start with one part of the system and expand as they see results.",
  },
  {
    q: "How long does it take?",
    a: "Core systems can go live within 48 hours. Full rollout depends on scope—we’ll give you a clear timeline on the strategy call.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee the infrastructure: you get a system that captures, tracks and follows up. Results depend on your market, offer and consistency. We focus on what we can control and measure.",
  },
  {
    q: "Who is this for?",
    a: "UK trade businesses that want consistent enquiries—commercial cleaners, fire & security, electrical, facilities, roofing, plumbing, landscaping and related trades. If you have strong reviews and want to grow without relying on word of mouth, we want to talk.",
  },
]

export function ServicesFAQ() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </SectionReveal>
        <SectionReveal delay={100}>
          <Accordion type="single" collapsible className="mt-10 border border-border/50 rounded-xl divide-y divide-border/50 overflow-hidden bg-card/30">
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
      </div>
    </section>
  )
}
