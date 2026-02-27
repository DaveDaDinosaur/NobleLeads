import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nobleleads.uk"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date("2026-02-27")

  const toUrl = (path: string) => `${siteUrl}${path}`

  return [
    {
      url: toUrl("/"),
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: toUrl("/contact"),
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toUrl("/pricing"),
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toUrl("/about"),
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: toUrl("/services"),
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // P1 trade pages
    {
      url: toUrl("/window-cleaners"),
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toUrl("/roofers"),
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Blog index + P1 post
    {
      url: toUrl("/blog"),
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: toUrl("/blog/is-checkatrade-worth-it-2025"),
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}

