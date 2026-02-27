import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nobleleads.uk"
const defaultOgImage = "/og-default.jpg"

type BuildMetadataOptions = {
  title: string
  description: string
  canonicalPath: string
  ogImage?: string
}

function normaliseDescription(description: string) {
  const trimmed = description.trim()
  if (trimmed.length <= 160) return trimmed
  return `${trimmed.slice(0, 157).trimEnd()}...`
}

export function buildMetadata({
  title,
  description,
  canonicalPath,
  ogImage,
}: BuildMetadataOptions): Metadata {
  const fullTitle = `${title} | NobleLeads`
  const finalDescription = normaliseDescription(description)
  const image = ogImage ?? defaultOgImage
  const canonical =
    canonicalPath.startsWith("http") || canonicalPath.startsWith("/")
      ? canonicalPath
      : `/${canonicalPath}`

  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${siteUrl}${canonical}`

  return {
    title: fullTitle,
    description: finalDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: finalDescription,
      url: canonicalUrl,
      type: "website",
      locale: "en_GB",
      siteName: "NobleLeads",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: finalDescription,
      images: [image],
    },
  }
}

