export const BUSINESS_NAME = "NobleLeads"
export const BUSINESS_URL = "https://nobleleads.uk"

export type FAQItem = {
  question: string
  answer: string
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: BUSINESS_URL,
    telephone: "[INSERT PHONE]",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cambridge",
      addressRegion: "England",
      addressCountry: "GB",
    },
    areaServed: "United Kingdom",
    description:
      "Digital marketing agency for UK property service trades. Websites, Google Ads, CRM automation and lead generation for cleaners, roofers, landscapers and tradespeople.",
    priceRange: "££",
  }
}

type ArticleSchemaOptions = {
  headline: string
  description: string
  url: string
  datePublished: string
  authorName?: string
  imageUrl?: string
}

export function getArticleSchema({
  headline,
  description,
  url,
  datePublished,
  authorName = "NobleLeads",
  imageUrl,
}: ArticleSchemaOptions) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: url,
    datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: BUSINESS_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: BUSINESS_URL,
    },
  }

  if (imageUrl) {
    data.image = imageUrl
  }

  return data
}

export function getFAQPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

