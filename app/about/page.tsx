import type { Metadata } from "next"

import { SectionReveal } from "@/components/section-reveal"
import { PageHero, PageSection, PageShell } from "@/components/growth/page-shell"
import { SectionHeading } from "@/components/growth/section-heading"
import { FinalCTA } from "@/components/growth/final-cta"
import { RuleColumns, RuleList } from "@/components/growth/rules"
import { formatGBP, MIN_AD_SPEND, MIN_JOB_VALUE } from "@/lib/offer"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "About NobleLeads",
  description:
    "NobleLeads is a UK lead generation agency for trades with high-value jobs. We build your own website, ads and follow-up in-house, so you own your leads instead of renting them.",
  canonicalPath: "/about",
})

const howWeWork = [
  {
    title: "Built in-house",
    body: "Every website is built by our own web team. No outsourcing, no off-the-shelf templates with your logo dropped in.",
  },
  {
    title: "One system, joined up",
    body: "Ads, website, tracking and follow-up are built by the same team to work together. When something isn't working, there's nobody else to blame and nowhere to hide.",
  },
  {
    title: "One point of contact",
    body: "You get a direct line to your account manager, with a same working day response. Not a ticket queue.",
  },
  {
    title: "Every number in front of you",
    body: "A monthly report in plain English: leads, cost per lead, spend, what we changed and what's next. With a short video walking you through it.",
  },
]

const weDo = [
  "Build you a lead system you own",
  "Follow up every enquiry automatically",
  "Show you every number, every month",
  "Tell you straight if something isn't working",
]

const weDont = [
  "Sell you shared leads",
  "Promise a number of leads or jobs",
  "Tie you in for a year",
  "Hold your website back if you leave",
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About NobleLeads"
        title={
          <>
            Own your leads. <span className="accent-mono text-secondary">Don{"'"}t rent them.</span>
          </>
        }
        intro="NobleLeads is a UK lead generation agency for trades with high-value jobs. We build and run your own lead system: website, Google Ads and automatic follow-up. You own it."
      />

      <PageSection id="why">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionReveal>
              <SectionHeading eyebrow="Why we exist" title="Good trades shouldn't have to rent their work." />
            </SectionReveal>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:col-span-7">
            <SectionReveal delay={80}>
              <p>
                Most trades we speak to get their work in one of two ways. They wait on
                referrals, or they pay a directory like Checkatrade, Bark or Rated People
                for leads that get sent to three or four other firms at the same time.
              </p>
            </SectionReveal>
            <SectionReveal delay={120}>
              <p>
                Referrals are great until they dry up. Directories work until you stop
                paying, and then you{"'"}ve got nothing to show for it. No website, no
                rankings, no list of past enquiries. Just a bill that never ends.
              </p>
            </SectionReveal>
            <SectionReveal delay={160}>
              <p className="font-medium text-foreground">
                We started NobleLeads to give trades something they own instead. Their
                own website, their own ads, their own leads, and a system that follows up
                every enquiry while they{"'"}re on the tools.
              </p>
            </SectionReveal>
          </div>
        </div>
      </PageSection>

      <PageSection id="how-we-work">
        <SectionReveal>
          <SectionHeading eyebrow="How we work" title="One team. Everything in-house." />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <RuleColumns items={howWeWork} columns={2} numbered={false} />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="promises">
        <SectionReveal>
          <SectionHeading eyebrow="Straight talk" title="What we do. What we won't." />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="label-mono mb-4 text-secondary">We will</h3>
              <RuleList items={weDo} tone="strong" />
            </div>
            <div>
              <h3 className="label-mono mb-4 text-muted-foreground">We won{"'"}t</h3>
              <RuleList items={weDont} />
            </div>
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="who">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionReveal>
              <SectionHeading eyebrow="Who we work with" title="Established trades with high-value jobs." />
            </SectionReveal>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:col-span-7">
            <SectionReveal delay={80}>
              <p>
                We work with trades whose average job is worth {formatGBP(MIN_JOB_VALUE)} or
                more. Fire doors, EWI and render, roofing, extensions and refurbs, loft
                conversions, kitchens, driveways, solar and heat pumps, stairlifts. Jobs
                where every extra booked job makes a real difference.
              </p>
            </SectionReveal>
            <SectionReveal delay={120}>
              <p>
                Usually the owner is still on the tools, or close to it. They want to grow
                the team, or get off the tools altogether. And they can put around{" "}
                {formatGBP(MIN_AD_SPEND)} a month behind their ads.
              </p>
            </SectionReveal>
            <SectionReveal delay={160}>
              <p>
                If it wouldn{"'"}t pay for itself, we{"'"}ll say so. We{"'"}d rather turn work
                down than sell you something that doesn{"'"}t.
              </p>
            </SectionReveal>
          </div>
        </div>
      </PageSection>

      <FinalCTA />
    </PageShell>
  )
}
