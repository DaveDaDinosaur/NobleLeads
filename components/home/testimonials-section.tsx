"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "We were relying on word of mouth and the odd Facebook post. Within a few weeks of launching the NobleLeads system, we had more enquiries than we could comfortably handle and finally raised our prices.",
    name: "Lee, window cleaning business owner in Leeds",
    role: "Domestic & commercial window cleaning",
    result: "+3–4 jobs/week",
  },
  {
    quote:
      "Before this, every storm meant a mad scramble on Checkatrade. Now people find us directly on Google, the phone rings steadily and we can choose the roofing jobs that actually make sense for the team.",
    name: "Amir, roofing contractor in Birmingham",
    role: "Owner, small roofing team",
    result: "More booked re-roofs",
  },
  {
    quote:
      "The automation has taken a huge weight off. Missed calls get a text, quotes are followed up and I can see exactly what came from which campaign without guessing.",
    name: "Kelly, commercial cleaning company in Cambridge",
    role: "Director, commercial cleaning & facilities",
    result: "Time back & clear tracking",
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

        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <SectionReveal key={testimonial.name} delay={i * 140} direction="up">
              <div className="group flex h-full flex-col rounded-xl border border-border/40 bg-card/30 p-6 sm:p-8 lg:p-10 backdrop-blur-sm transition-all duration-500 hover:border-secondary/30 hover:bg-card/50 relative overflow-hidden">
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
      </div>
    </section>
  )
}

