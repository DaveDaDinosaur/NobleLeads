import type { Metadata } from "next"

import { HomePageClient } from "@/components/home/home-page-client"
import { JsonLd } from "@/components/json-ld"
import { coreFAQs } from "@/lib/offer"
import { buildMetadata } from "./(shared)/seo-config"
import {
  getFAQPageSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebsiteSchema,
} from "./(shared)/schema"

export const metadata: Metadata = buildMetadata({
  title: "Lead Generation for High-Value UK Trades",
  description:
    "Own your leads, don't rent them. NobleLeads builds and runs your website, Google Ads and automatic follow-up. More enquiries, more booked jobs, all of them yours.",
  canonicalPath: "/",
})

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      <JsonLd
        data={[
          getOrganizationSchema(),
          getWebsiteSchema(),
          getLocalBusinessSchema(),
          getFAQPageSchema(coreFAQs),
        ]}
      />
    </>
  )
}
