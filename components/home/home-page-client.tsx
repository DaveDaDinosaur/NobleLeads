"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SocialProofBar } from "@/components/home/social-proof-bar"
import { ProblemSection } from "@/components/home/problem-section"
import { VideoFeature } from "@/components/home/video-feature"
import { LeadStory } from "@/components/home/lead-story"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionHeading } from "@/components/growth/section-heading"
import { PaybackTable } from "@/components/growth/payback"
import { CaseStudyCards, Testimonials } from "@/components/growth/proof-section"
import { TimelineList } from "@/components/growth/timeline-list"
import { PricingCard } from "@/components/growth/pricing-card"
import { FAQList } from "@/components/growth/faq-list"
import { FinalCTA } from "@/components/growth/final-cta"
import { coreFAQs, GO_LIVE_WORKING_DAYS } from "@/lib/offer"
import { getTrade, type Trade } from "@/lib/trades"

const paybackTrades = ["roofers", "ewi-render", "refurbishments-extensions"]
  .map(getTrade)
  .filter((trade): trade is Trade => Boolean(trade))

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative scroll-mt-20 border-t border-border py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">{children}</div>
    </section>
  )
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group label-mono inline-flex items-center gap-2 py-2 text-secondary">
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  )
}

export function HomePageClient() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <VideoFeature />
      <LeadStory />

      <Section id="proof">
        <SectionHeading
          index="05"
          size="lg"
          eyebrow="Proof"
          title={
            <>
              Real trades. <span className="accent-mono text-secondary">Real numbers.</span>
            </>
          }
          intro="Every number here is tracked, from real client accounts. No made-up stats."
        />
        <div className="mt-14 sm:mt-20">
          <CaseStudyCards />
        </div>
        <div className="mt-6">
          <Testimonials />
        </div>
      </Section>

      <Section id="pricing">
        <SectionHeading
          index="06"
          size="lg"
          eyebrow="Pricing"
          title={
            <>
              One price. <span className="accent-mono text-secondary">No tiers.</span>
            </>
          }
          intro="Ad spend is paid on top, so every pound of it goes on your ads and you can see where it went."
        />
        <div className="mt-14 sm:mt-20">
          <PricingCard />
        </div>
        <div className="mt-6">
          <TextLink href="/growth-system#included">See everything that{"'"}s included</TextLink>
        </div>
        <div className="mt-16 sm:mt-24">
          <h3 className="display text-3xl text-foreground sm:text-4xl">
            What it takes <span className="accent-mono text-secondary">to pay for itself.</span>
          </h3>
          <div className="mt-8 sm:mt-10">
            <PaybackTable trades={paybackTrades} />
          </div>
        </div>
      </Section>

      <Section id="how-it-works">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              index="07"
              eyebrow="After you pay"
              size="md"
              title={
                <>
                  Live within <span className="accent-mono text-secondary">{GO_LIVE_WORKING_DAYS} working days.</span>
                </>
              }
              intro="Work starts the day your payment lands. The clock to go-live starts once we have your logo, photos and access, so the faster you send them, the faster you're live."
            />
            <div className="mt-8">
              <TextLink href="/how-it-works">See how it works, day by day</TextLink>
            </div>
          </div>
          <div className="lg:col-span-7">
            <TimelineList compact />
          </div>
        </div>
      </Section>


      <Section id="faq">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              index="08"
              eyebrow="FAQ"
              size="md"
              title={
                <>
                  Straight <span className="accent-mono text-secondary">answers.</span>
                </>
              }
              intro="The questions we get asked on almost every call."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQList items={coreFAQs} />
          </div>
        </div>
      </Section>

      <FinalCTA />
      <Footer />
      <MobileCTABar />
    </main>
  )
}
