import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { buildMetadata } from "../(shared)/seo-config"
import { getFAQPageSchema, getLocalBusinessSchema } from "../(shared)/schema"

const primaryKeyword = "bathroom fitter marketing UK"
const canonicalPath = "/bathroom-fitters"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with bathroom fitting companies?",
    answer:
      "Yes. We understand the bathroom installation market — the considered purchase cycle, the importance of showing finished work and the difference between budget-conscious domestic clients and premium renovation customers.",
  },
  {
    question: "How long before I start getting bathroom enquiries?",
    answer:
      "With Google Ads running, most bathroom fitters start seeing qualified leads within 2–4 weeks. Bathroom installations are a considered purchase, so we also build follow-up sequences for prospects who are in the planning and budgeting phase.",
  },
  {
    question: "Can you help me attract higher-end bathroom renovation clients?",
    answer:
      "Yes. Premium clients exist in every area — they just need to find you and trust that you can deliver. We build the website, reviews and positioning to attract customers who have a real budget and want quality, not just the lowest price.",
  },
  {
    question: "I lose a lot of quotes to cheaper fitters. Can that be fixed?",
    answer:
      "Often the issue is that customers can't differentiate quality before the job starts — so they go on price. We fix that by making your completed work, reviews and credentials impossible to ignore online. When clients trust you before they meet you, price becomes less of the deciding factor.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system, then move to rolling monthly.",
  },
  {
    question: "Do you work with sole traders or only larger companies?",
    answer:
      "We work with both. Whether you're a sole trader doing one bathroom at a time or a team handling multiple installations simultaneously, we'll match the right package to your capacity.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with bathroom fitters across the UK. Campaigns are always targeted to your service area.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Bathroom Fitter Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads delivers bathroom fitter marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more bathroom installations and renovation projects consistently.",
  canonicalPath,
})

export default function BathroomFittersPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · Bathroom Fitters
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Bathroom Fitter Marketing Agency UK | More Leads — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Bathroom fitting is high-ticket, high-trust work. Customers spend weeks
                or months planning their renovation, get multiple quotes and choose the
                fitter they feel most confident in — not necessarily the cheapest.
                NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                so you{"'"}re the fitter they find first, trust most and choose — without
                needing to be the lowest price in the room.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Your Free Strategy Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A straightforward look at what{"'"}s possible
                  for your bathroom fitting business.
                </p>
              </div>
            </header>
          </SectionReveal>

          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Bathroom Fitters Struggle to Win Consistently at Their Price
              </h2>
              <p>
                Bathroom renovations are one of the most searched home improvement
                projects in the UK — but the competition is fierce and customers are
                cautious.{" "}
                <span className="font-semibold text-foreground">
                  When they can{"'"}t tell quality apart online, they default to price
                </span>{" "}
                — and you end up in a race to the bottom you didn{"'"}t need to be in.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You have strong completed projects but your online portfolio doesn{"'"}t
                  show them — so customers compare you against fitters with glossy
                  websites and 80+ reviews.
                </li>
                <li>
                  You{"'"}re not ranking on Google for bathroom fitting searches in your
                  area, which means paying for leads on directories or relying solely
                  on referrals.
                </li>
                <li>
                  Enquiries often take weeks to convert — and without a follow-up
                  system, prospects who were genuinely interested{" "}
                  <span className="font-semibold text-foreground">
                    go cold and book someone who stayed in touch
                  </span>
                  .
                </li>
                <li>
                  You{"'"}re getting enquiries but too many are poorly scoped or
                  unrealistic — time-wasters who have no real budget or intent.
                </li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Bathroom Fitters
              </h2>
              <p className="font-semibold text-foreground">
                Step 1 — A Portfolio Website That Sells Your Work Before You Quote
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                for bathroom fitters lead with high-quality finished project photography,
                detailed before-and-after galleries, verified customer reviews and
                clear service descriptions — with quote forms that pre-qualify
                enquiries so you spend time on serious prospects.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads Reaching Homeowners Ready to Renovate
              </p>
              <p>
                We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for bathroom fitters
                </Link>{" "}
                targeting searches like "bathroom installation quote [your area]" and
                "bathroom renovation company near me" — capturing homeowners who are
                past the browsing phase and ready to book someone.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Follow-Up That Wins the Long Decision
              </p>
              <p>
                Bathroom customers take time. The{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM and automation system
                </Link>{" "}
                sends timed follow-up messages after every quote — keeping you in
                front of the customer without chasing manually. Missed calls get a
                text-back within 60 seconds so you never lose a warm lead mid-planning.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                A mid-range bathroom renovation typically runs{" "}
                <span className="font-semibold text-foreground">£4,000–£8,000</span>.
                A premium bathroom transformation can be{" "}
                <span className="font-semibold text-foreground">£10,000–£25,000+</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), winning just{" "}
                <span className="font-semibold text-foreground">
                  one additional bathroom installation per month at £5,500
                </span>{" "}
                delivers an 11x return on your fee. Most bathroom fitters on the system
                convert two to four additional jobs per month.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Bathroom Fitters
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A bathroom fitting company in the South East was
                winning work almost entirely through referrals and had no consistent
                online presence. Within 6 weeks of launching their NobleLeads system,
                they had 11 qualified bathroom enquiries in the first month, converted
                5 and raised their average job value by 20% because the website
                positioned them as a premium fitter rather than a general tradesman."
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Bathroom Fitters
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a portfolio-led website showcasing your best projects, CRM and
                  enquiry capture set up properly.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus Google Ads, automated follow-up and missed
                  call text-back to close more of the enquiries you{"'"}re already getting.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for bathroom companies expanding into kitchen fitting, full
                  refurbishments or commercial contracts.
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/80">
                Full pricing on our{" "}
                <Link href="/pricing" className="font-semibold text-secondary hover:underline">
                  pricing page
                </Link>
                .
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={180}>
            <FAQAccordionSection title="Questions From Bathroom Fitters Like You" items={faqItems} />
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Win More Bathrooms at Your Price?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick conversation about your bathroom fitting business
                — what you{"'"}re winning now and what a proper lead system could look
                like for you.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Your Free Strategy Call
                </Link>
              </div>
            </section>
          </SectionReveal>
        </div>
      </article>

      <Footer />
      <MobileCTABar />
      <JsonLd data={[getLocalBusinessSchema(), faqSchema]} />
    </main>
  )
}
