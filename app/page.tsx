import type { Metadata } from "next"

import { HomePageClient } from "@/components/home/home-page-client"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata } from "./(shared)/seo-config"
import { getFAQPageSchema, getLocalBusinessSchema } from "./(shared)/schema"
import { homepageFAQs } from "@/components/home/faq-section"

export const metadata: Metadata = buildMetadata({
  title: "Lead Generation & Marketing for UK Trades",
  description:
    "NobleLeads is a marketing agency for tradesmen in the UK, helping cleaners, roofers, landscapers and more get consistent leads with conversion websites, Google Ads and CRM automation.",
  canonicalPath: "/",
})

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      <JsonLd data={[getLocalBusinessSchema(), getFAQPageSchema(homepageFAQs)]} />
    </>
  )
}

