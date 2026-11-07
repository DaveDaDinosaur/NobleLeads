import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionReveal } from "@/components/section-reveal"
import { RuleList } from "@/components/growth/rules"
import { GrowthSurvey } from "@/components/survey/growth-survey"
import {
  formatGBP,
  MONTHLY_FEE,
  SETUP_FEE,
} from "@/lib/offer"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "Get Your Growth Plan",
  description:
    "Tell us about your trade business and pick a time to talk. We'll go through your numbers and show you what the Growth System would look like for you.",
  canonicalPath: "/survey",
})

const onTheCall = [
  "How you show up on Google next to your local competitors",
  "The jobs and searches we'd go after for you",
  "What it would cost, and how many jobs would cover it",
  "How quickly we could get you live",
]

export default function SurveyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-14">
            <div className="lg:col-span-5">
              <SectionReveal>
                <p className="label-mono text-muted-foreground">Your growth plan</p>
                <h1 className="display mt-5 text-balance text-4xl text-foreground sm:text-6xl">
                  See what this would look like for your business.
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Tell us a bit about your trade and your jobs, then pick a time to talk. No
                  pressure and no obligation.
                </p>
              </SectionReveal>
            </div>

            <div className="lg:col-span-7 lg:row-span-2">
              <SectionReveal delay={100}>
                <GrowthSurvey />
              </SectionReveal>
            </div>

            <div className="lg:col-span-5">
              <SectionReveal delay={150}>
                <h2 className="label-mono mb-4 text-muted-foreground">What we{"'"}ll cover on the call</h2>
                <RuleList items={onTheCall} tone="strong" />
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  The price, up front: {formatGBP(SETUP_FEE)} setup, then {formatGBP(MONTHLY_FEE)} a month
                  plus ad spend. 3-month minimum. No VAT.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
