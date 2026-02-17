"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Before Noble Leads, we were getting maybe 2-3 enquiries a month from our website. Now we're averaging 15+ qualified leads. The system basically runs itself.",
    name: "James Harwood",
    role: "Director, Harwood Commercial Cleaning",
    result: "+400% enquiries",
  },
  {
    quote:
      "They didn't just build us a website. They built us an entire lead generation machine. We've secured 3 new commercial contracts worth over 45k in the first quarter alone.",
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Fire & Security",
    result: "+45k in Q1",
  },
  {
    quote:
      "The automation alone has saved me 10+ hours a week. Every lead gets followed up instantly. I can focus on actually running the business instead of chasing enquiries.",
    name: "David Clarke",
    role: "Founder, Clarke Electrical Services",
    result: "10+ hrs saved/week",
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
                The numbers speak.{" "}
                <span className="text-muted-foreground">So do our clients.</span>
              </h2>
            </div>
          </SectionReveal>
        </ParallaxSection>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <SectionReveal key={testimonial.name} delay={i * 140} direction="up">
              <div className="group flex flex-col h-full rounded-xl border border-border/40 bg-card/30 p-6 sm:p-8 lg:p-10 backdrop-blur-sm transition-all duration-500 hover:border-secondary/30 hover:bg-card/50 relative overflow-hidden">
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
                    <p className="text-xs text-muted-foreground mt-0.5">
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
