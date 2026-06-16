"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Star, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    quote:
      "Summer was manic and winter was dead — we never knew what the next month would look like. NobleLeads got our Google presence and follow-up sorted. Within two months we had steady enquiries through the quiet season and booked enough paving work to keep the team busy year-round.",
    name: "Sarah P., landscaping business owner",
    role: "Garden design, paving & maintenance · Bristol",
    result: "Steady work through winter",
  },
  {
    quote:
      "Before this, every storm meant a mad scramble on Checkatrade. Now people find us directly on Google, the phone rings steadily and we can choose the roofing jobs that actually make sense for the team.",
    name: "Amir K., roofing contractor",
    role: "Owner, 4-man roofing team · Birmingham",
    result: "Off Checkatrade in 3 months",
  },
  {
    quote:
      "The missed call text-back alone paid for the first month. Missed calls get a reply within seconds, quotes are followed up automatically and I can see exactly what came from which campaign — no more guessing.",
    name: "Craig H., owner",
    role: "Focus Refurbishment · Commercial refurbishment · Kent",
    result: "First month ROI covered by text-back",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="proof"
      className="relative py-14 sm:py-16 lg:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.06}>
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80 border-b border-secondary/20 pb-2">
                Client Results
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
                Real outcomes for real UK trades.
              </h2>
            </div>
          </SectionReveal>
        </ParallaxSection>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 items-stretch">
          {testimonials.map((testimonial, i) => (
            <SectionReveal key={testimonial.name} delay={i * 140} direction="up">
              <div className="group flex h-full flex-col rounded-xl border border-border/40 bg-card p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-secondary/30 hover:bg-card relative overflow-hidden">
                {/* Result badge */}
                <div className="inline-flex self-start items-center gap-1 rounded-full bg-secondary/10 border border-secondary/20 px-3 py-1 text-[11px] font-semibold text-secondary">
                  {testimonial.result}
                </div>

                {/* Quote icon */}
                <Quote className="mt-5 h-6 w-6 text-secondary/20" />

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  {`"${testimonial.quote}"`}
                </blockquote>

                <div className="mt-6 flex items-center justify-between pt-5 border-t border-border/20">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={500}>
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/case-studies/focus-refurbishment"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
            >
              See how we helped Focus Refurbishment go from referrals to a full growth system
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

