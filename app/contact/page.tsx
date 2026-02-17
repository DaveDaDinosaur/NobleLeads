import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { BookingEmbed } from "@/components/contact/booking-embed"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a Growth & Enquiry Strategy Call with Noble Leads. A quick look at your online presence and how we can turn it into a consistent enquiry system.",
  openGraph: {
    title: "Contact | Noble Leads",
    description:
      "Book a Growth & Enquiry Strategy Call. A quick look at your online presence and how we can turn it into a consistent enquiry system.",
  },
}

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
