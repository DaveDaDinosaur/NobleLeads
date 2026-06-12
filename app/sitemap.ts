import type { MetadataRoute } from "next"

import { getSiteUrl } from "./(shared)/seo-config"

type SitemapEntry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}

const lastModified = new Date("2026-06-13")

const routes: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies/focus-refurbishment", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog/is-bark-worth-it-tradesmen", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/google-ads-for-tradesmen-uk", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/is-checkatrade-worth-it-2025", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  // Trade landing pages
  { path: "/window-cleaners", changeFrequency: "monthly", priority: 0.9 },
  { path: "/roofers", changeFrequency: "monthly", priority: 0.9 },
  { path: "/electricians", changeFrequency: "monthly", priority: 0.9 },
  { path: "/plumbers", changeFrequency: "monthly", priority: 0.9 },
  { path: "/landscapers", changeFrequency: "monthly", priority: 0.9 },
  { path: "/painters-decorators", changeFrequency: "monthly", priority: 0.9 },
  { path: "/domestic-cleaners", changeFrequency: "monthly", priority: 0.9 },
  { path: "/driveway-paving", changeFrequency: "monthly", priority: 0.9 },
  { path: "/builders", changeFrequency: "monthly", priority: 0.9 },
  { path: "/bathroom-fitters", changeFrequency: "monthly", priority: 0.9 },
  { path: "/carpet-cleaners", changeFrequency: "monthly", priority: 0.9 },
  { path: "/tree-surgeons", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ev-charger-installers", changeFrequency: "monthly", priority: 0.9 },
  { path: "/end-of-tenancy-cleaners", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
