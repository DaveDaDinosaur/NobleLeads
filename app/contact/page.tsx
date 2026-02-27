import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { BookingEmbed } from "@/components/contact/booking-embed"

import type { Metadata } from "next"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "Book a Strategy Call",
  description:
    "Book a Growth & Enquiry Strategy Call with NobleLeads. We review your online presence and show you how to turn it into a consistent lead system.",
  canonicalPath: "/contact",
})

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactHero />
      <BookingEmbed />
      <Footer />
    </main>
  )
}
