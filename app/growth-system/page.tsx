import type { Metadata } from "next"

import { JsonLd } from "@/components/json-ld"
import { SectionReveal } from "@/components/section-reveal"
import { PageHero, PageSection, PageShell } from "@/components/growth/page-shell"
import { SectionHeading } from "@/components/growth/section-heading"
import { PricingCard } from "@/components/growth/pricing-card"
import { PaybackTable } from "@/components/growth/payback"
import { CaseStudyCards, Testimonials } from "@/components/growth/proof-section"
import { RuleColumns, RuleRows } from "@/components/growth/rules"
import { IncludedDetail } from "@/components/growth/included-detail"
import { Showcase } from "@/components/growth/showcase"
import { FinalCTA } from "@/components/growth/final-cta"
import { addOns, formatGBP, leavingTerms, MONTHLY_FEE, SETUP_FEE, terms } from "@/lib/offer"
import { getTrade, type Trade } from "@/lib/trades"
import { buildMetadata } from "../(shared)/seo-config"
import { BUSINESS_URL, getServiceSchema } from "../(shared)/schema"

const canonicalPath = "/growth-system"

export const metadata: Metadata = buildMetadata({
  title: "The Growth System: Pricing and What's Included",
  description: `One offer for UK trades: ${formatGBP(SETUP_FEE)} setup, ${formatGBP(MONTHLY_FEE)} a month plus ad spend. Website, Google Ads, Portal and follow-up, built and run in-house.`,
  canonicalPath,
})

const paybackTrades = ["stairlifts-mobility", "roofers", "ewi-render", "refurbishments-extensions"]
  .map(getTrade)
  .filter((trade): trade is Trade => Boolean(trade))

export default function GrowthSystemPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Growth System"
        title={
          <>
            One system. <span className="accent-mono text-secondary">Everything you need</span> to win work online.
          </>
        }
        intro="We build your website, ads and follow-up once. Then we run it every month, to bring you more enquiries and more booked jobs. You own all of it."
      />

      <PageSection id="showcase">
        <SectionReveal>
          <SectionHeading
            eyebrow="What you get"
            title="Four parts. One team running them."
            intro="Ads bring people to your website, the website turns them into enquiries, and the follow-up makes sure none of them go cold."
          />
        </SectionReveal>
        <div className="mt-12">
          <Showcase />
        </div>
      </PageSection>

      <PageSection id="proof">
        <SectionReveal>
          <SectionHeading eyebrow="Proof" title="Already running for real trades." />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <Testimonials />
          </div>
        </SectionReveal>
        <SectionReveal delay={150}>
          <div className="mt-14">
            <CaseStudyCards />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="pricing">
        <SectionReveal>
          <SectionHeading
            eyebrow="Pricing"
            title="One price. Nothing hidden."
            intro="Ad spend is paid on top, so every pound of it goes on your ads and you can see where it went."
          />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <PricingCard />
          </div>
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-16 sm:mt-20">
            <h3 className="display text-3xl text-foreground sm:text-4xl">What it takes to pay for itself.</h3>
            <div className="mt-8">
              <PaybackTable trades={paybackTrades} />
            </div>
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="included">
        <SectionReveal>
          <SectionHeading
            eyebrow="Everything included"
            title="The full list, line by line."
            intro="Built once by our in-house team, then run, watched and improved every month. Tap a heading to see what's in it."
          />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <IncludedDetail />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="add-ons">
        <SectionReveal>
          <SectionHeading
            eyebrow="Add-ons"
            title="Want more? Add it on."
            intro="Optional extras on top of the Growth System. We'll price them on the call if they make sense for you."
          />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <RuleColumns items={addOns} numbered={false} />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="terms">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionReveal>
              <SectionHeading
                eyebrow="Terms"
                title="The small print, in plain English."
                intro="Nothing starts until the setup invoice is paid. Once it is, everything starts the same day."
              />
            </SectionReveal>
          </div>
          <div className="lg:col-span-8">
            <SectionReveal delay={100}>
              <RuleRows
                rows={[
                  ...terms.map((term) => ({ label: term.title, body: term.body })),
                  { label: "If you leave", body: leavingTerms, accent: true },
                ]}
              />
            </SectionReveal>
          </div>
        </div>
      </PageSection>

      <FinalCTA />

      <JsonLd
        data={[
          getServiceSchema({
            name: "NobleLeads Growth System",
            description:
              "A done-for-you lead system for UK trades: website, Google Ads, Google Business Profile, call tracking and automated follow-up, built and run in-house.",
            url: `${BUSINESS_URL}${canonicalPath}`,
          }),
        ]}
      />
    </PageShell>
  )
}
