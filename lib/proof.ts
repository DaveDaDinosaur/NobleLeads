export type Testimonial = {
  quote: string
  name: string
  business: string
  trade: string
}

// Only add testimonials you have in writing from the client.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Chuffed to bits with the leads that are coming through. The boys are shocked at how many we're getting and we've closed tons of them. Ads are all paying for itself and the website, socials and app they put in place is all pucker. Saved us a lot of time and hassle plus it's growing the business, so I'm well happy.",
    name: "Craig",
    business: "Focus Refurbishment",
    trade: "Fire doors and refurbishment",
  },
]

export type CaseStudySummary = {
  slug: string
  client: string
  sector: string
  location: string
  headline: string
  result: string
  href: string
  externalHref: string
  image: string
  imageAlt: string
  imagePosition: string
}

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "focus-refurbishment",
    client: "Focus Refurbishment",
    sector: "Fire doors and refurbishment",
    location: "Sidcup, South East London and Kent",
    headline: "From referrals and a broken website to a full lead system.",
    result: "24 leads in a fortnight. Fire door ads at a 9.49% click-through rate and around £21 per website lead.",
    href: "/case-studies/focus-refurbishment",
    externalHref: "https://focusrefurbishmentltd.com",
    image: "/images/case-studies/focus-refurbishment-website.png",
    imageAlt: "Focus Refurbishment website",
    imagePosition: "object-[70%_center]",
  },
  {
    slug: "thermal-render-specialists",
    client: "Thermal Render Specialists",
    sector: "EWI and render",
    location: "Gravesend and South East London",
    headline: "From no website at all to page one for render searches.",
    result: "Top three for dozens of render searches within weeks of launch, with ads and tracking live from day one.",
    href: "/case-studies/thermal-render-specialists",
    externalHref: "https://thermalrenderspecialists.co.uk",
    image: "/images/case-studies/thermal-render-specialists-website.png",
    imageAlt: "Thermal Render Specialists website",
    imagePosition: "object-top",
  },
]
