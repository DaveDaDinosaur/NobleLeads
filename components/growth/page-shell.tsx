import type { ReactNode } from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionHeading } from "@/components/growth/section-heading"
import { SurveyCTA } from "@/components/growth/survey-cta"

export function PageShell({
  children,
  showMobileCTA = true,
}: {
  children: ReactNode
  showMobileCTA?: boolean
}) {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      {children}
      <Footer />
      {showMobileCTA ? <MobileCTABar /> : null}
    </main>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  showCTA = true,
  children,
}: {
  eyebrow: string
  title: ReactNode
  intro: ReactNode
  showCTA?: boolean
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-28 lg:pt-52">
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
          {showCTA ? <SurveyCTA className="mt-10" /> : null}
          {children}
      </div>
    </section>
  )
}

export function PageSection({
  id,
  children,
  narrow = false,
}: {
  id?: string
  children: ReactNode
  narrow?: boolean
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-20 border-t border-border py-16 sm:py-24 lg:py-28"
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-10 ${narrow ? "max-w-4xl" : "max-w-[1440px]"}`}>
        {children}
      </div>
    </section>
  )
}
