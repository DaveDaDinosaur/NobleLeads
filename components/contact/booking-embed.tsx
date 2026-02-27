"use client"

import Script from "next/script"
import { SectionReveal } from "@/components/section-reveal"

const GHL_BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/qqSY7tgsOrKlt7yubct6"

export function BookingEmbed() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24">
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="rounded-2xl border border-border/50 bg-card/50 overflow-hidden backdrop-blur-sm">
                <div className="p-6 sm:p-8 lg:p-10 border-b border-border/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    Pick a time that works
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    Growth & Enquiry Strategy Call (30 Minutes)
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A quick look at your online presence and how we can turn it
                    into a consistent enquiry system. No pressure — just
                    clarity.
                  </p>
                </div>
                <div className="w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] overflow-hidden">
                  <iframe
                    src={GHL_BOOKING_URL}
                    className="w-full border-0 min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] block"
                    scrolling="no"
                    title="Growth & Enquiry Strategy Call - Book with Noble Leads"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="lg:col-span-5">
            <SectionReveal delay={200}>
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-foreground">
                  What Happens Next
                </h3>
                <div className="mt-6 flex flex-col gap-6">
                  {[
                    {
                      step: "1",
                      title: "Pick Your Time",
                      description:
                        "Choose a 30-minute slot that fits your schedule. You'll get a calendar invite right away.",
                    },
                    {
                      step: "2",
                      title: "Strategy Call",
                      description:
                        "We walk through your lead flow, your market, and identify the biggest opportunity for growth.",
                    },
                    {
                      step: "3",
                      title: "Custom Growth Plan",
                      description:
                        "You receive a tailored plan showing exactly how we'd generate predictable enquiries for your business.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-secondary">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={400}>
              <div className="mt-4 sm:mt-6 rounded-2xl border border-secondary/20 bg-card/60 p-6 sm:p-8 backdrop-blur-sm">
                <p className="text-sm text-foreground/80 leading-relaxed italic">
                  &quot;If one additional commercial contract per month would
                  cover this investment, the question isn&apos;t whether you can
                  afford it. It&apos;s whether you can afford not to.&quot;
                </p>
                <p className="mt-4 text-xs font-semibold text-secondary">
                  The Noble Leads Approach
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
