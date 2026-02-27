import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesPillarOverview } from "@/components/services/services-pillar-overview"
import { WhatWeDeliver } from "@/components/services/what-we-deliver"
import { ServicesContrast } from "@/components/services/services-contrast"
import { ServicesROI } from "@/components/services/services-roi"
import { ServicesFAQ } from "@/components/services/services-faq"
import { ServicesCTA } from "@/components/services/services-cta"
import { WhoWeServe } from "@/components/services/who-we-serve"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { JsonLd } from "@/components/json-ld"

import type { Metadata } from "next"
import { buildMetadata } from "../(shared)/seo-config"
import { getLocalBusinessSchema } from "../(shared)/schema"

export const metadata: Metadata = buildMetadata({
  title: "Marketing Services for UK Trades",
  description:
    "Conversion websites, SEO, Google Ads, CRM automation and tender-ready infrastructure for UK property service businesses across the UK.",
  canonicalPath: "/services",
})

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <ServicesHero />
      <div className="relative bg-background">
        <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <ServicesPillarOverview />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WhatWeDeliver />
        </div>
        <ServicesContrast />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesROI />
          <ServicesFAQ />
        </div>
        <WhoWeServe />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesCTA />
        </div>
      </div>
      <JsonLd data={getLocalBusinessSchema()} />
      <Footer />
      <MobileCTABar />
    </main>
  )
}
