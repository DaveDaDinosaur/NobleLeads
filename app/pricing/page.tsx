import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingIntro } from "@/components/pricing/pricing-intro"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { PricingWhatYouGet } from "@/components/pricing/pricing-what-you-get"
import { PricingWhySetup } from "@/components/pricing/pricing-why-setup"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { PricingCTA } from "@/components/pricing/pricing-cta"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear pricing for trade businesses. Professional websites, lead generation and ongoing management. Built for roofers, electricians, plumbers and builders.",
  openGraph: {
    title: "Pricing | Noble Leads",
    description:
      "Clear pricing. Proper setup. Ongoing management. Growth systems for UK trade businesses.",
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <PricingHero />
      <div className="relative bg-background">
        <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingIntro />
          <PricingTiers />
          <PricingWhatYouGet />
        </div>
        <PricingWhySetup />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingFAQ />
        </div>
        <PricingCTA />
      </div>
      <Footer />
      <MobileCTABar />
    </main>
  )
}
