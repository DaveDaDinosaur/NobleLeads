import type { Metadata } from "next"

import { SectionReveal } from "@/components/section-reveal"
import { PageHero, PageSection, PageShell } from "@/components/growth/page-shell"
import { CaseStudyCards, Testimonials } from "@/components/growth/proof-section"
import { FinalCTA } from "@/components/growth/final-cta"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "Client Case Studies",
  description:
    "Real results for real UK trade businesses. What NobleLeads built, why, and what happened, with tracked numbers from real client accounts.",
  canonicalPath: "/case-studies",
})

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title="Real businesses. Real numbers."
        intro="Every case study here is a real client. What we built, why we built it and what happened, with numbers tracked from day one. No made-up stats."
        showCTA={false}
      />

      <PageSection>
        <SectionReveal>
          <CaseStudyCards />
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="mt-5">
            <Testimonials />
          </div>
        </SectionReveal>
      </PageSection>

      <FinalCTA title="Want results like these?" />
    </PageShell>
  )
}
