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

const primaryKeyword = "electrician marketing UK"
const canonicalPath = "/electricians"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you specialise in electricians specifically?",
    answer:
      "Yes. We understand the difference between domestic one-off jobs, rewires, EICRs and commercial contracts — and we build campaigns and copy around how electrical work actually gets sold and trusted.",
  },
  {
    question: "How long before I start getting electrical enquiries?",
    answer:
      "With Google Ads running, most electricians start seeing new leads within 2–3 weeks. Local SEO and Google Business Profile work takes longer, but both are built together from day one so you get quick and long-term results.",
  },
  {
    question: "Can you help me win more landlord and letting agent work?",
    answer:
      "Absolutely. We can target landlord compliance work — EICRs, installation certificates and periodic inspections — with dedicated landing pages and follow-up sequences designed for repeat commercial clients.",
  },
  {
    question: "My business relies on emergency call-outs. Can you help with that?",
    answer:
      "Yes. We build fast-loading, mobile-first pages for emergency electrical searches and use Google Ads to put you at the top for those high-intent searches in your area — the ones where speed of response wins the job.",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period so the system can be built and tuned properly, then roll monthly from there.",
  },
  {
    question: "Do you work with sole trader electricians as well as larger firms?",
    answer:
      "We work with sole traders and small teams. The key is that you have solid work quality, good (or buildable) reviews and want to grow in a controlled, sustainable way.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with electricians across the whole of the UK. All campaigns are targeted to your actual service area so you're not getting enquiries from the other side of the country.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Electrician Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads delivers electrician marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more rewires, EICRs and commercial contracts consistently.",
  canonicalPath,
})

export default function ElectriciansPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          {/* Section 1: Hero */}
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · Electricians
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Electrician Marketing Agency UK | More Leads — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Most electricians in the UK win work through word of mouth, a handful
                of referrals and the odd job from a lead-buy site. That keeps you busy
                enough — but it never gives you control. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                so you can build a steady flow of higher-value jobs — rewires, full
                installs, commercial contracts and EICRs — without depending on
                directories or whoever happens to recommend you this month.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A straightforward look at what{"'"}s possible
                  for your electrical business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Section 2: Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Electricians Struggle to Get Consistent Work
              </h2>
              <p>
                The electrical trade has a visibility problem. Homeowners and
                landlords need qualified, trustworthy electricians — but{" "}
                <span className="font-semibold text-foreground">
                  finding you on Google is harder than it should be
                </span>
                , and when they do find someone first, that{"'"}s who gets the call.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You{"'"}re paying for leads on Checkatrade or similar platforms and
                  competing with five other electricians on every job — often on price
                  alone.
                </li>
                <li>
                  Your Google Business Profile is underdeveloped, so the firm with 80
                  reviews ranks above you even if your work is better.
                </li>
                <li>
                  Emergency call-outs come in at random hours but{" "}
                  <span className="font-semibold text-foreground">
                    planned, higher-value work — rewires, consumer units, commercial
                    contracts
                  </span>{" "}
                  — never comes in consistently.
                </li>
                <li>
                  Enquiries arrive by phone while you{"'"}re on a job, you miss the call,
                  and by the time you ring back they{"'"}ve already booked someone else.
                </li>
              </ul>
              <p>
                None of this is a reflection of your qualifications or the quality of
                your work.{" "}
                <span className="font-semibold text-foreground">
                  It{"'"}s a marketing and systems problem — and it{"'"}s fixable.
                </span>
              </p>
            </section>
          </SectionReveal>

          {/* Section 3: The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Electricians
              </h2>
              <p>
                We build one joined-up system that takes someone from{" "}
                <span className="font-semibold text-foreground">
                  "I need an electrician near me"
                </span>{" "}
                to{" "}
                <span className="font-semibold text-foreground">
                  "I{"'"}ve booked this company and I{"'"}m recommending them."
                </span>
              </p>
              <p className="font-semibold text-foreground">
                Step 1 — A Website That Builds Trust and Converts
              </p>
              <p>
                In the electrical trade, trust is everything. Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                are built to display your NICEIC or NAPIT registration prominently,
                showcase completed projects, pull in Google reviews and make it
                effortless to request a quote or call you directly on mobile.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads and Local SEO That Target the Right Jobs
              </p>
              <p>
                We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for electricians
                </Link>{" "}
                targeting the searches that signal intent and value — consumer unit
                replacements, full rewires, EICR certificates and commercial
                installations. You{"'"}re shown to people who are actively looking, in
                the postcodes you want to work in.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Automation That Captures Every Enquiry
              </p>
              <p>
                Miss a call while you{"'"}re on site? The system sends an instant text
                back within 60 seconds. Every form submission, every missed call and
                every quote request is tracked in your{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM pipeline
                </Link>{" "}
                — so nothing falls through the cracks and you can see exactly where
                your work is coming from.
              </p>
            </section>
          </SectionReveal>

          {/* Section 4: ROI Example */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                Electrical job values vary widely. A small fault or consumer unit
                swap might be{" "}
                <span className="font-semibold text-foreground">£150–£400</span>. A
                full rewire can be{" "}
                <span className="font-semibold text-foreground">£3,000–£6,000+</span>.
                An ongoing landlord EICR contract could be worth{" "}
                <span className="font-semibold text-foreground">
                  £500–£2,000 per month
                </span>{" "}
                in recurring work.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), even a conservative outcome
                of:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>4 additional domestic jobs at £280 average, and</li>
                <li>1 additional rewire at £3,500</li>
              </ul>
              <p>
                gives you{" "}
                <span className="font-semibold text-foreground">
                  £4,620 in extra revenue on a £495/month fee
                </span>
                . Win one landlord compliance contract on top of that, and the maths
                becomes very straightforward.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Electricians
              </h2>
              <p>
                Here{"'"}s the pattern we see when an electrician moves from scattered
                referrals to a structured NobleLeads system.
              </p>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A domestic electrician in the East Midlands was
                relying on Checkatrade and word of mouth. Within 6 weeks of launching
                their NobleLeads system, they were receiving 10–15 qualified enquiries
                per month, closed two consumer unit jobs in the first week and landed
                an ongoing EICR contract with a local letting agent."
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: Pricing */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Electricians
              </h2>
              <p>
                We{"'"}ll match you to the right level based on where your business is
                now and the kind of work you want more of:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a professional, conversion-ready website with your certifications
                  displayed correctly, CRM set up and every enquiry captured and logged.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus active Google Ads targeting your highest-value
                  jobs, plus automation so missed calls are responded to instantly.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for electricians ready to expand territory, target commercial
                  contracts or position for housing developer and facilities
                  management work.
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/80">
                Full pricing is on our{" "}
                <Link href="/pricing" className="font-semibold text-secondary hover:underline">
                  pricing page
                </Link>
                .
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Electricians Like You"
              items={faqItems}
            />
          </SectionReveal>

          {/* Section 8: Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Win More Electrical Work Without Buying Every Lead?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your electrical
                business — what{"'"}s working, what{"'"}s not and what a proper lead system
                could look like for you.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
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
