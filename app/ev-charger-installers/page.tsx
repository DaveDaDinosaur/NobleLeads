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

const primaryKeyword = "EV charger installer marketing UK"
const canonicalPath = "/ev-charger-installers"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with EV charger installation companies?",
    answer:
      "Yes. We understand the EV charging market — the mix of domestic home charger installs, commercial car park charging and fleet depot solutions — and the importance of OZEV approval and NICEIC/NAPIT registration in winning customer trust.",
  },
  {
    question: "How long before I start getting EV charger installation enquiries?",
    answer:
      "With Google Ads running, most EV installer companies start seeing qualified leads within 2–3 weeks. EV charger searches are growing fast and competition is still relatively low compared to other electrical work — which means good opportunity right now.",
  },
  {
    question: "Can you help me win commercial EV charging contracts?",
    answer:
      "Absolutely. Commercial charging — car parks, workplaces, retail sites, housing developers — is where the high-volume, high-margin work is. We build dedicated campaigns and landing pages targeting commercial property managers and developers who are actively looking to install EV infrastructure.",
  },
  {
    question: "I'm an electrician who also does EV installs. Can you help me position this properly?",
    answer:
      "Yes. We can build a dedicated EV installation service within your existing electrical business — a separate landing page and campaign that captures EV-specific searches without replacing your general electrical marketing.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system, then move to rolling monthly.",
  },
  {
    question: "Do you work with new EV installer companies as well as established ones?",
    answer:
      "We work with both. If you're newer to the market, building credibility quickly through reviews and a strong online presence is even more important — and it's exactly what we focus on.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with EV charger installers across the UK. Campaigns are targeted to your service area, whether that's a single city or a wider regional radius.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "EV Charger Installer Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads delivers EV charger installer marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more home charger installs and commercial EV charging contracts.",
  canonicalPath,
})

export default function EvChargerInstallersPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · EV Charger Installers
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                EV Charger Installer Marketing Agency UK | More Leads — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                EV adoption in the UK is accelerating — and with it, demand for
                qualified home and commercial charger installers. The market is growing
                fast but so is the competition. The installers who build a strong online
                presence and lead system now will dominate their local markets for years.
                NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — putting you in front of the homeowners and commercial clients
                searching for OZEV-approved installers in your area before your
                competitors do.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Your Free Strategy Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A clear look at what{"'"}s possible for your
                  EV installation business.
                </p>
              </div>
            </header>
          </SectionReveal>

          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why EV Installers Struggle to Capture Their Share of a Growing Market
              </h2>
              <p>
                The EV charger installation market is one of the fastest-growing
                trade sectors in the UK — but demand alone doesn{"'"}t guarantee enquiries
                come to you.{" "}
                <span className="font-semibold text-foreground">
                  Most of the search traffic goes to national aggregators and comparison
                  sites
                </span>{" "}
                that take a cut of every lead, while local installers with better
                pricing and faster turnaround stay invisible.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Homeowners search for "EV charger installer near me" and find
                  OVO Energy or Pod Point comparison tools — not you — even though
                  you{"'"}re local, qualified and available.
                </li>
                <li>
                  Commercial enquiries — car parks, workplaces, housing developers —
                  are high value but require a credible online presence and fast
                  response to even get into the conversation.
                </li>
                <li>
                  Competition is increasing month by month as more electricians enter
                  the market.{" "}
                  <span className="font-semibold text-foreground">
                    The installers building their SEO and ad presence now are the ones
                    who will be hardest to displace later.
                  </span>
                </li>
                <li>
                  Without a system to capture and follow up enquiries, leads from
                  paid search go cold quickly — especially commercial prospects who
                  are comparing multiple suppliers.
                </li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for EV Charger Installers
              </h2>
              <p className="font-semibold text-foreground">
                Step 1 — A Website That Captures Domestic and Commercial Enquiries
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                for EV installers display your OZEV approval, NICEIC or NAPIT
                registration and completed installations prominently — with separate
                service pages for home chargers, commercial charging and fleet
                solutions, each built to rank locally and convert.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads Ahead of the Competition
              </p>
              <p>
                EV charger searches are growing but ad competition is still relatively
                low compared to general electrical work. We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for EV installers
                </Link>{" "}
                targeting high-intent local searches — capturing market share while
                the cost per lead is still favourable.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Fast Response and Commercial Lead Nurturing
              </p>
              <p>
                Domestic enquiries need to be responded to within minutes. Commercial
                enquiries need consistent follow-up over days or weeks. The{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM and automation system
                </Link>{" "}
                handles both — instant text-back for missed calls, automated follow-up
                sequences for commercial prospects and a clear pipeline so nothing
                falls through.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                A domestic home EV charger installation typically earns{" "}
                <span className="font-semibold text-foreground">£600–£1,200</span>{" "}
                including hardware. A commercial multi-bay installation can be{" "}
                <span className="font-semibold text-foreground">£5,000–£50,000+</span>{" "}
                depending on scale. Ongoing maintenance contracts add further recurring
                revenue.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), adding{" "}
                <span className="font-semibold text-foreground">
                  4 additional domestic installs per month at £850
                </span>{" "}
                gives you £3,400 in extra revenue on a £495 fee. One commercial
                installation on top changes the equation dramatically.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real EV Installers
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: An OZEV-approved EV installer in the South East was
                relying on OVO referrals and occasional word of mouth. Within 6 weeks
                of launching their NobleLeads system, they had 16 qualified domestic
                enquiries in the first month, converted 9 installs and received their
                first commercial enquiry from a logistics company looking to charge a
                10-vehicle fleet — their largest potential contract to date."
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for EV Charger Installers
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a credible website displaying your approvals and completed
                  installations, with every domestic and commercial enquiry tracked.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus Google Ads targeting local EV searches,
                  instant response automation and commercial lead follow-up sequences.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for EV companies targeting large commercial contracts, fleet clients
                  or expanding across multiple regions.
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
            <FAQAccordionSection title="Questions From EV Installers Like You" items={faqItems} />
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Own Your Local EV Market Before Everyone Else Does?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick conversation about your EV installation business
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
