import type { MetadataRoute } from "next"

import { tradeHref, trades } from "@/lib/trades"
import { getSiteUrl } from "./(shared)/seo-config"

type SitemapEntry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
  lastModified: string
}

const REBUILD_DATE = "2026-10-26"

// lastModified reflects when each page's content was actually last changed,
// not a single blanket date for the whole site.
const routes: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: REBUILD_DATE },
  { path: "/growth-system", changeFrequency: "monthly", priority: 0.9, lastModified: REBUILD_DATE },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.8, lastModified: REBUILD_DATE },
  { path: "/survey", changeFrequency: "monthly", priority: 0.8, lastModified: REBUILD_DATE },
  { path: "/trades", changeFrequency: "monthly", priority: 0.8, lastModified: REBUILD_DATE },
  ...trades.map((trade) => ({
    path: tradeHref(trade),
    changeFrequency: "monthly" as const,
    priority: 0.9,
    lastModified: REBUILD_DATE,
  })),
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8, lastModified: REBUILD_DATE },
  { path: "/case-studies/thermal-render-specialists", changeFrequency: "monthly", priority: 0.8, lastModified: REBUILD_DATE },
  { path: "/case-studies/focus-refurbishment", changeFrequency: "monthly", priority: 0.8, lastModified: REBUILD_DATE },
  { path: "/about", changeFrequency: "monthly", priority: 0.6, lastModified: REBUILD_DATE },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7, lastModified: "2026-07-26" },
  { path: "/blog/best-checkatrade-alternative", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/how-to-get-roofing-leads-without-checkatrade", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/is-bark-worth-it-tradesmen", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/is-bark-worth-it-plumbers", changeFrequency: "monthly", priority: 0.6, lastModified: REBUILD_DATE },
  { path: "/blog/is-bark-worth-it-electricians", changeFrequency: "monthly", priority: 0.6, lastModified: REBUILD_DATE },
  { path: "/blog/is-bark-worth-it-landscapers", changeFrequency: "monthly", priority: 0.6, lastModified: REBUILD_DATE },
  { path: "/blog/google-ads-for-tradesmen-uk", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/is-checkatrade-worth-it-2025", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/how-to-get-more-google-reviews-tradesman", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/mybuilder-vs-checkatrade", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/bark-vs-checkatrade", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/how-much-does-checkatrade-cost", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/is-rated-people-worth-it", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/blog/how-much-do-bark-credits-cost", changeFrequency: "monthly", priority: 0.7, lastModified: REBUILD_DATE },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4, lastModified: REBUILD_DATE },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.4, lastModified: "2026-06-02" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))
}
