import type { Metadata } from "next"

import { JsonLd } from "@/components/json-ld"
import { SectionReveal } from "@/components/section-reveal"
import { PageHero, PageSection, PageShell } from "@/components/growth/page-shell"
import { SectionHeading } from "@/components/growth/section-heading"
import { PricingCard } from "@/components/growth/pricing-card"
import { PaybackTable } from "@/components/growth/payback"
import { CaseStudyCards, Testimonials } from "@/components/growth/proof-section"
import { RuleColumns, RuleList, RuleRows } from "@/components/growth/rules"
import { Showcase } from "@/components/growth/showcase"
import { FAQList } from "@/components/growth/faq-list"
import { FinalCTA } from "@/components/growth/final-cta"
import {
  addOns,
  buildDetail,
  coreFAQs,
  formatGBP,
  leavingTerms,
  MONTHLY_FEE,
  runDetail,
  SETUP_FEE,
  terms,
  type OfferGroup,
} from "@/lib/offer"
import { getTrade, type Trade } from "@/lib/trades"
import { buildMetadata } from "../(shared)/seo-config"
import { BUSINESS_URL, getFAQPageSchema, getServiceSchema } from "../(shared)/schema"

const canonicalPath = "/growth-system"

export const metadata: Metadata = buildMetadata({
  title: "The Growth System: Pricing and What's Included",
  description: `One offer for UK trades: ${formatGBP(SETUP_FEE)} setup, ${formatGBP(MONTHLY_FEE)} a month plus ad spend. Website, Google Ads, Portal and follow-up, built and run in-house.`,
  canonicalPath,
})

const pricingFAQs = coreFAQs.filter((faq) =>
  [
    "What budget do I need?",
    "How long is the contract?",
    "What happens if I leave?",
    "Do I own the website?",
    "Can you guarantee a number of leads?",
  ].includes(faq.question)
)

const paybackTrades = ["stairlifts-mobility", "roofers", "ewi-render", "refurbishments-extensions"]
  .map(getTrade)
  .filter((trade): trade is Trade => Boolean(trade))

function DetailGroups({ groups }: { groups: OfferGroup[] }) {
  return (
    <div>
      {groups.map((group) => (
        <SectionReveal key={group.title}>
          <div className="grid grid-cols-1 gap-5 border-t border-border py-8 lg:grid-cols-12 lg:gap-16">
            <h3 className="display text-3xl text-foreground lg:col-span-4">{group.title}</h3>
            <div className="lg:col-span-8">
              <RuleList items={group.items} columns={2} />
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  )
}

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

      <PageSection id="build">
        <SectionReveal>
          <SectionHeading
            eyebrow={`The Build · ${formatGBP(SETUP_FEE)} one-off`}
            title="Everything set up, tested and handed over."
            intro="A complete lead system you own, built once by our in-house team and live within days of us getting your assets."
          />
        </SectionReveal>
        <div className="mt-12">
          <DetailGroups groups={buildDetail} />
        </div>
      </PageSection>

      <PageSection id="run">
        <SectionReveal>
          <SectionHeading
            eyebrow={`The Run · ${formatGBP(MONTHLY_FEE)} a month`}
            title="Run, watched and improved every month."
            intro="So the enquiries keep coming and none slip through."
          />
        </SectionReveal>
        <div className="mt-12">
          <DetailGroups groups={runDetail} />
        </div>
      </PageSection>

      <PageSection id="pricing">
        <SectionReveal>
          <SectionHeading eyebrow="Pricing" title="One price. Nothing hidden." />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <PricingCard />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="payback">
        <SectionReveal>
          <SectionHeading eyebrow="The maths" title="What it takes to pay for itself." />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-8">
            <PaybackTable trades={paybackTrades} />
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

      <PageSection id="faq" narrow>
        <SectionReveal>
          <SectionHeading eyebrow="FAQ" title="Questions about the price." />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-8">
            <FAQList items={pricingFAQs} />
          </div>
        </SectionReveal>
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
          getFAQPageSchema(pricingFAQs),
        ]}
      />
    </PageShell>
  )
}
