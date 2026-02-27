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
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "About NobleLeads",
  description:
    "UK performance partner for property service trades. We build predictable revenue systems for cleaners, roofers, landscapers and more — not just websites.",
  canonicalPath: "/about",
})

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
