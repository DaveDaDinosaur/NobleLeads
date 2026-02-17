import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { PositioningSection } from "@/components/about/positioning-section"
import { WhatWeBuildSection } from "@/components/about/what-we-build-section"
import { MissionSection } from "@/components/about/mission-section"
import { WhoWeWorkWithSection } from "@/components/about/who-we-work-with-section"
import { AboutCTA } from "@/components/about/about-cta"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "UK performance partner for property service businesses. We build predictable revenue systems — not just websites.",
  openGraph: {
    title: "About | Noble Leads",
    description:
      "UK performance partner for property service businesses. We build predictable revenue systems — not just websites.",
  },
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutHero />
      <PositioningSection />
      <WhatWeBuildSection />
      <MissionSection />
      <WhoWeWorkWithSection />
      <AboutCTA />
      <Footer />
      <MobileCTABar />
    </main>
  )
}
