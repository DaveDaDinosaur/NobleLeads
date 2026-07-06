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
    telephone: "+441223679988",
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
  dateModified?: string
  authorName?: string
  authorType?: "Organization" | "Person"
  imageUrl?: string
}

export function getArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "NobleLeads",
  authorType = "Organization",
  imageUrl,
}: ArticleSchemaOptions) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": authorType,
      name: authorName,
      ...(authorType === "Organization" ? { url: BUSINESS_URL } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: BUSINESS_URL,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".quick-answer"],
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

type ServiceSchemaOptions = {
  name: string
  description: string
  url: string
  areaServed?: string
}

export function getServiceSchema({
  name,
  description,
  url,
  areaServed = "United Kingdom",
}: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    areaServed,
    provider: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: BUSINESS_URL,
    },
  }
}

type BreadcrumbItem = {
  name: string
  url: string
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

