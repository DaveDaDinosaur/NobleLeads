import type { MetadataRoute } from "next"

import { getSiteUrl } from "./(shared)/seo-config"

type SitemapEntry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
  lastModified: string
}

// lastModified reflects when each page's content was actually last changed,
// not a single blanket date for the whole site.
const routes: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: "2026-02-27" },
  { path: "/services", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-02-27" },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-02-27" },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-06" },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-06" },
  { path: "/case-studies/focus-refurbishment", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-06" },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8, lastModified: "2026-06-22" },
  { path: "/blog/is-bark-worth-it-tradesmen", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-13" },
  { path: "/blog/is-bark-worth-it-plumbers", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-19" },
  { path: "/blog/is-bark-worth-it-electricians", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-19" },
  { path: "/blog/is-bark-worth-it-landscapers", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-19" },
  { path: "/blog/google-ads-for-tradesmen-uk", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-04" },
  { path: "/blog/is-checkatrade-worth-it-2025", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-01-01" },
  { path: "/blog/how-to-get-more-google-reviews-tradesman", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-19" },
  { path: "/blog/mybuilder-vs-checkatrade", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-01" },
  { path: "/blog/bark-vs-checkatrade", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-01" },
  { path: "/blog/how-much-does-checkatrade-cost", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-01" },
  { path: "/blog/is-rated-people-worth-it", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-01" },
  { path: "/blog/how-much-do-bark-credits-cost", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-01" },
  { path: "/about", changeFrequency: "monthly", priority: 0.6, lastModified: "2026-07-06" },
  // Trade landing pages
  { path: "/window-cleaners", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/roofers", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/electricians", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/plumbers", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/landscapers", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/painters-decorators", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/domestic-cleaners", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/driveway-paving", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/builders", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/bathroom-fitters", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/carpet-cleaners", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/tree-surgeons", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/ev-charger-installers", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/end-of-tenancy-cleaners", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-07-06" },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4, lastModified: "2026-06-19" },
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
