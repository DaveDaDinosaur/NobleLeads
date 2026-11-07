import type { Metadata } from "next"

import { SectionReveal } from "@/components/section-reveal"
import { PageHero, PageSection, PageShell } from "@/components/growth/page-shell"
import { SectionHeading } from "@/components/growth/section-heading"
import { TimelineList } from "@/components/growth/timeline-list"
import { FinalCTA } from "@/components/growth/final-cta"
import { RuleColumns, RuleList, RuleRows } from "@/components/growth/rules"
import { GO_LIVE_WORKING_DAYS, kickoffAssets } from "@/lib/offer"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "How It Works: From Payment to Live in 10 Working Days",
  description:
    "What happens after you sign up to the NobleLeads Growth System, day by day. Work starts the day you pay, and we aim to be live within 10 working days of getting your assets.",
  canonicalPath: "/how-it-works",
})

const beforeSteps = [
  {
    title: "Tell us about your business",
    body: "A few quick questions about your trade, your jobs and your goals, so the call is about you.",
  },
  {
    title: "Have a call",
    body: "Pick a time that suits you. We go through your numbers and show you how the system would work for your business.",
  },
  {
    title: "Decide",
    body: "No pressure. If you want to go ahead, we send the invoice. Work starts the day it's paid.",
  },
]

const monthly = [
  { when: "Every day", what: "Automated checks on spend, cost per lead, disapproved ads and tracking." },
  { when: "Every week", what: "Search terms reviewed, wasted searches blocked, bids and budgets adjusted." },
  { when: "Every month", what: "30 days of social posts from your job photos, plus a plain-English report and a short video walkthrough." },
  { when: "Whenever you need us", what: "A direct line to your account manager, with a same working day response." },
]

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Live within <span className="accent-mono text-secondary">{GO_LIVE_WORKING_DAYS} working days.</span>
          </>
        }
        intro="Work starts the day you pay. Here's exactly what happens next, and what we need from you to hit that target."
      />

      <PageSection id="before">
        <SectionReveal>
          <SectionHeading eyebrow="Before you pay" title="Three steps. No hard sell." />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <RuleColumns items={beforeSteps} />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="timeline">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionReveal>
                <SectionHeading
                  eyebrow="After you pay"
                  title="Day 1 to go-live."
                  intro={`Our target is live within ${GO_LIVE_WORKING_DAYS} working days. The clock starts when we have everything from your kickoff form. Missing assets are the main thing that slows a launch down.`}
                />
              </SectionReveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionReveal delay={100}>
              <TimelineList />
            </SectionReveal>
          </div>
        </div>
      </PageSection>

      <PageSection id="what-we-need">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionReveal>
              <SectionHeading
                eyebrow="What we need from you"
                title="One form. Then we do the rest."
                intro="Send these over on your kickoff form and we can get building. After launch, all we need is photos and videos of your jobs."
              />
            </SectionReveal>
          </div>
          <div className="lg:col-span-7">
            <SectionReveal delay={100}>
              <RuleList items={kickoffAssets} columns={2} tone="strong" />
            </SectionReveal>
          </div>
        </div>
      </PageSection>

      <PageSection id="after-launch">
        <SectionReveal>
          <SectionHeading
            eyebrow="After go-live"
            title="Then we run it. Every month."
            intro="You get on with the work. We keep the system running and show you every number."
          />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <RuleRows rows={monthly.map((row) => ({ label: row.when, body: row.what }))} />
          </div>
        </SectionReveal>
      </PageSection>

      <FinalCTA title="Ready to get started?" />
    </PageShell>
  )
}
