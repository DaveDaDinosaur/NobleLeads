import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { JsonLd } from "@/components/json-ld"
import { SectionReveal } from "@/components/section-reveal"
import { PageHero, PageSection, PageShell } from "@/components/growth/page-shell"
import { SectionHeading } from "@/components/growth/section-heading"
import { BuildRun } from "@/components/growth/build-run"
import { PaybackExample } from "@/components/growth/payback"
import { RuleColumns, RuleList } from "@/components/growth/rules"
import { Showcase } from "@/components/growth/showcase"
import { FAQList } from "@/components/growth/faq-list"
import { FinalCTA } from "@/components/growth/final-cta"
import { ProofPlaceholder } from "@/components/proof-placeholder"
import { RelatedTrades } from "@/components/trades/related-trades"
import { coreFAQs } from "@/lib/offer"
import { getTrade, tradeHref, trades } from "@/lib/trades"
import { buildMetadata } from "../(shared)/seo-config"
import {
  BUSINESS_URL,
  getBreadcrumbSchema,
  getFAQPageSchema,
  getServiceSchema,
} from "../(shared)/schema"

type Params = { trade: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return trades.map((trade) => ({ trade: trade.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const trade = getTrade((await params).trade)
  if (!trade) return {}
  return buildMetadata({
    title: trade.metaTitle,
    description: trade.metaDescription,
    canonicalPath: tradeHref(trade),
  })
}

const sharedFAQs = coreFAQs.filter((faq) =>
  ["What budget do I need?", "How long is the contract?", "What happens if I leave?"].includes(
    faq.question
  )
)

export default async function TradePage({ params }: { params: Promise<Params> }) {
  const trade = getTrade((await params).trade)
  if (!trade) notFound()

  const faqs = [...trade.faqs, ...sharedFAQs]
  const url = `${BUSINESS_URL}${tradeHref(trade)}`

  return (
    <PageShell>
      <PageHero
        eyebrow={`For ${trade.plural}`}
        title={trade.headline}
        intro={trade.intro}
      >
        <p className="label-mono mt-10 text-muted-foreground">
          <span className="mr-2 text-secondary">●</span>Typical jobs: {trade.jobRange}
        </p>
      </PageHero>

      <PageSection id="problem">
        <SectionReveal>
          <SectionHeading
            eyebrow="Sound familiar?"
            title={`Why good ${trade.plural} still have quiet months.`}
          />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <RuleColumns items={trade.pains.map((pain) => ({ title: pain.title, body: pain.body }))} />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="showcase">
        <SectionReveal>
          <SectionHeading
            eyebrow="What we build"
            title={`Your own lead system, set up for ${trade.plural}.`}
            intro="Four parts that work together, built and run by one team."
          />
        </SectionReveal>
        <div className="mt-12">
          <Showcase search={trade.searches[0]} />
        </div>
      </PageSection>

      <PageSection id="what-we-go-after">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionReveal>
              <SectionHeading
                eyebrow={`Built for ${trade.plural}`}
                title="The jobs you want. From people searching now."
                intro="We build your campaigns and pages around the work that pays, and block the searches that don't."
              />
            </SectionReveal>
          </div>
          <SectionReveal delay={80} className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <h3 className="label-mono mb-4 text-muted-foreground">Jobs we go after</h3>
                <RuleList items={trade.jobs} tone="strong" />
              </div>
              <div>
                <h3 className="label-mono mb-4 text-muted-foreground">Searches like these</h3>
                <RuleList items={trade.searches.map((search) => `"${search}"`)} tone="strong" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </PageSection>

      <PageSection id="proof" narrow={!trade.caseStudy}>
        <SectionReveal>
          <SectionHeading eyebrow="Proof" title={trade.caseStudy ? "Real results in this trade." : "Real results."} />
        </SectionReveal>
        <SectionReveal delay={100}>
          {trade.caseStudy ? (
            <Link
              href={trade.caseStudy.href}
              className="group mt-10 grid grid-cols-1 gap-4 border-y border-border py-8 sm:grid-cols-12 sm:gap-8"
            >
              <p className="display text-3xl text-foreground transition-colors duration-500 group-hover:text-secondary sm:col-span-5 sm:text-4xl">
                {trade.caseStudy.name}
              </p>
              <div className="sm:col-span-7">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{trade.caseStudy.line}</p>
                <span className="label-mono mt-5 inline-flex items-center gap-2 text-secondary">
                  Read the case study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ) : (
            <div className="mt-8 space-y-4">
              <ProofPlaceholder
                label={`${trade.name} case study or testimonial`}
                note={`No real ${trade.plural} result yet. Add one to the caseStudy field for "${trade.slug}" in lib/trades.ts once you have it.`}
              />
              <p className="text-sm text-muted-foreground">
                See what we{"'"}ve built for other trades in our{" "}
                <Link href="/case-studies" className="font-semibold text-secondary hover:underline">
                  case studies
                </Link>
                .
              </p>
            </div>
          )}
        </SectionReveal>
      </PageSection>

      <PageSection id="price">
        <SectionReveal>
          <SectionHeading
            eyebrow="The price"
            title="What it takes to pay for itself."
            intro={<>Typical UK prices: {trade.jobRange}.</>}
          />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-12">
            <PaybackExample trade={trade} />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="system">
        <SectionReveal>
          <SectionHeading
            eyebrow="The Growth System"
            title="Everything that's included."
            intro="The same system for every trade, set up around your jobs and your area."
          />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-10">
            <BuildRun />
          </div>
        </SectionReveal>
      </PageSection>

      <PageSection id="faq" narrow>
        <SectionReveal>
          <SectionHeading eyebrow="FAQ" title={`Questions from ${trade.plural}.`} />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-8">
            <FAQList items={faqs} />
          </div>
        </SectionReveal>
        <RelatedTrades currentSlug={trade.slug} />
      </PageSection>

      <FinalCTA />

      <JsonLd
        data={[
          getServiceSchema({
            name: `Lead generation for ${trade.plural}`,
            description: trade.metaDescription,
            url,
          }),
          getFAQPageSchema(faqs),
          getBreadcrumbSchema([
            { name: "Home", url: BUSINESS_URL },
            { name: "Trades", url: `${BUSINESS_URL}/trades` },
            { name: trade.name, url },
          ]),
        ]}
      />
    </PageShell>
  )
}
