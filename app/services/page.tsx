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

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Conversion websites, SEO, CRM, lead alerts, booking, automation and tender-ready infrastructure for UK property service businesses.",
  openGraph: {
    title: "Services | Noble Leads",
    description:
      "Conversion websites, SEO, CRM, lead alerts, booking, automation and tender-ready infrastructure for UK property service businesses.",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WhoWeServe />
          <ServicesCTA />
        </div>
      </div>
      <Footer />
      <MobileCTABar />
    </main>
  )
}
