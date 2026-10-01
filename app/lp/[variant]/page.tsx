import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Check, Star, ClipboardList, PhoneCall, Rocket } from "lucide-react"

import { SectionReveal } from "@/components/section-reveal"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { GHL_BOOKING_URL } from "@/components/contact/booking-embed"
import { LpEmbed } from "@/components/lp/lp-embed"
import { LpFooter, LpHeader } from "@/components/lp/lp-shell"
import { LpCallButton } from "@/components/lp/lp-tracking"
import { buildMetadata } from "../../(shared)/seo-config"

// GHL multi-step survey embed URL. Until it's set, the page falls back to the
// booking calendar so it's launchable either way.
const FORM_EMBED_URL = ""
// Founder video embed URL (Vimeo/Loom). Shown under the hero copy when set.
const VIDEO_URL = ""

type Stat = { value: string; label: string; sub: string }

type Variant = {
  eyebrow: string
  headline: string
  sub: string
  bullets: string[]
  stats: Stat[]
  metaTitle: string
}

const CLIENT_STATS: Record<string, Stat> = {
  ctr: { value: "9.49%", label: "Fire door ad click-through", sub: "2-3x the search benchmark" },
  cpl: { value: "~£21", label: "Per website lead", sub: "Fire door campaign, about a third of the market average" },
  fortnight: { value: "24", label: "Leads in one fortnight", sub: "Refurbishment client, 14 web + 10 phone" },
  pageOne: { value: "Weeks", label: "To page one on Google", sub: "Render specialist with no previous website" },
}

const VARIANTS: Record<string, Variant> = {
  trades: {
    eyebrow: "Lead generation for UK trades",
    headline: "More Jobs From Leads You Own, Not Rented From Bark or Checkatrade",
    sub: "We build UK trade businesses a complete lead system: a website that converts, Google Ads in front of people searching right now, and instant follow-up so no enquiry goes cold.",
    bullets: [
      "Leads come straight to you, never shared with competitors",
      "Google Ads live and bringing enquiries within weeks",
      "Missed-call text-back and automatic quote follow-up",
      "Everything tracked, so you know exactly what each lead costs",
    ],
    stats: [CLIENT_STATS.fortnight, CLIENT_STATS.cpl, CLIENT_STATS.pageOne],
    metaTitle: "Lead Generation for UK Trades",
  },
  roofers: {
    eyebrow: "Roofing lead generation",
    headline: "Roofing Leads That Come Straight to You, Not Shared on Bark",
    sub: "We put your roofing business in front of homeowners searching for a roofer in your area right now, with a website that turns those searches into booked surveys and follow-up that wins the job.",
    bullets: [
      "Exclusive roofing leads, never sold to four other roofers",
      "Campaigns for repairs, re-roofs and storm damage in your area",
      "Instant reply to every enquiry, even while you're up on a roof",
      "A steady pipeline that doesn't depend on the weather",
    ],
    stats: [CLIENT_STATS.fortnight, CLIENT_STATS.cpl, CLIENT_STATS.pageOne],
    metaTitle: "Roofing Lead Generation",
  },
  "fire-doors": {
    eyebrow: "Lead generation for fire door installers",
    headline: "More Fire Door Installation Leads, Sent Straight to You",
    sub: "We built the campaign behind one London fire door contractor's results: a 9.49% ad click-through rate and website leads at around £21 each, roughly a third of the market average.",
    bullets: [
      "Google Ads targeting commercial and residential fire door searches",
      "Landing pages built for FD30 and FD60 installs, surveys and compliance",
      "Leads go straight to you, not a shared directory",
      "Every enquiry tracked so you know your true cost per lead",
    ],
    stats: [CLIENT_STATS.ctr, CLIENT_STATS.cpl, CLIENT_STATS.fortnight],
    metaTitle: "Fire Door Installer Lead Generation",
  },
}

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us about your business",
    body: "Answer four quick questions about your trade, area and goals. It takes about a minute.",
  },
  {
    icon: PhoneCall,
    title: "Free 15-minute growth call",
    body: "We show you exactly how we'd get you more of the work you want, whether you work with us or not.",
  },
  {
    icon: Rocket,
    title: "We build it, you get the leads",
    body: "Website, Google Ads and follow-up built and launched for you. Enquiries usually start within weeks.",
  },
]

const caseStudies = [
  {
    client: "Focus Refurbishment",
    sector: "Fire doors & refurbishment · Kent",
    result: "24 leads in a fortnight, fire door leads at ~£21 each",
    href: "/case-studies/focus-refurbishment",
  },
  {
    client: "Thermal Render Specialists",
    sector: "EWI & render · South East London",
    result: "From no website to page one for render searches in weeks",
    href: "/case-studies/thermal-render-specialists",
  },
]

const faqItems = [
  {
    question: "How much does it cost?",
    answer:
      "It depends on your goals and how many areas you want to cover. We have three packages, and on the free call we'll recommend the right starting point for your budget, with no hard sell.",
  },
  {
    question: "Am I tied into a long contract?",
    answer:
      "Our Core package is month-to-month. Growth and Dominate have a short initial optimisation period so we can build and refine the system properly, then move to a rolling arrangement.",
  },
  {
    question: "How quickly will I get leads?",
    answer:
      "With Google Ads running, most businesses see enquiries within the first two to three weeks. SEO builds more slowly underneath and lowers your cost per lead over time.",
  },
  {
    question: "Are the leads exclusive to me?",
    answer:
      "Yes. Leads come from your own website and ads, so they're yours alone. Nobody else is sent the same enquiry, unlike Bark or Checkatrade.",
  },
  {
    question: "Do I have to stop using Checkatrade or Bark?",
    answer:
      "No. Most clients run both while their own system builds, then scale the directories back once their own leads are coming in reliably.",
  },
]

export function generateStaticParams() {
  return Object.keys(VARIANTS).map((variant) => ({ variant }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>
}): Promise<Metadata> {
  const { variant } = await params
  const v = VARIANTS[variant]
  if (!v) return {}
  return {
    ...buildMetadata({ title: v.metaTitle, description: v.sub, canonicalPath: `/lp/${variant}` }),
    robots: { index: false, follow: false },
  }
}

function FormCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#form"
      className={`group inline-flex min-touch items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98] ${className}`}
    >
      Get my free growth plan
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ variant: string }>
}) {
  const { variant } = await params
  const v = VARIANTS[variant]
  if (!v) notFound()

  const hasForm = Boolean(FORM_EMBED_URL)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <LpHeader />

      {/* Hero: copy + form above the fold */}
      <section className="pt-8 sm:pt-12 lg:pt-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
              {v.eyebrow}
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {v.headline}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {v.sub}
            </p>
            <ul className="mt-6 space-y-2.5">
              {v.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                  {b}
                </li>
              ))}
            </ul>

            {VIDEO_URL ? (
              <div className="mt-7 overflow-hidden rounded-xl border border-border/40" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  src={VIDEO_URL}
                  className="h-full w-full"
                  loading="lazy"
                  allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="How Noble Leads gets trades more work"
                />
              </div>
            ) : null}

            <div className="mt-7 grid grid-cols-3 border-y border-border/40">
              {v.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-2 py-4 text-center ${i > 0 ? "border-l border-border/30" : ""}`}
                >
                  <p className="text-lg font-bold tabular-nums text-secondary sm:text-xl">{s.value}</p>
                  <p className="mt-0.5 text-[11px] font-medium leading-snug text-foreground">{s.label}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="form" className="scroll-mt-20">
            <div className="rounded-2xl border border-secondary/30 bg-card/50 p-4 shadow-xl shadow-black/20 sm:p-6">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                {hasForm ? "See how many more jobs we could get you" : "Book your free 15-minute growth call"}
              </h2>
              <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                {hasForm
                  ? "Four quick questions, about a minute. Free and no obligation."
                  : "Pick a time that suits you. Free and no obligation."}
              </p>
              <div className="mt-4">
                <LpEmbed
                  src={hasForm ? FORM_EMBED_URL : GHL_BOOKING_URL}
                  title={hasForm ? "Free growth plan form" : "Book a free growth call"}
                  minHeight={hasForm ? 560 : 680}
                  extraParams={{ lp: variant }}
                />
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Prefer to talk?{" "}
                <LpCallButton className="inline-flex items-center gap-1 font-semibold text-secondary hover:underline" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        {/* How it works */}
        <SectionReveal>
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">How it works</h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="rounded-xl border border-border/50 bg-card/40 p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 text-xs font-bold text-secondary">
                      {i + 1}
                    </span>
                    <Icon className="h-4 w-4 text-secondary" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">{title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* Proof */}
        <SectionReveal>
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Real results from real trades</h2>
            <figure className="mt-5 rounded-xl border border-border/40 bg-card/40 p-5 sm:p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
                &ldquo;The missed call text-back alone paid for the first month. Missed calls get a reply
                within seconds, quotes are followed up automatically and I can see exactly what came
                from which campaign, no more guessing.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-foreground">Craig H.</span>{" "}
                <span className="text-muted-foreground">· Owner, Focus Refurbishment, Kent</span>
              </figcaption>
            </figure>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {caseStudies.map((c) => (
                <Link
                  key={c.client}
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className="group rounded-xl border border-border/40 bg-card/30 p-5 transition-colors hover:border-secondary/40"
                >
                  <p className="text-[11px] uppercase tracking-[0.15em] text-secondary/80">{c.sector}</p>
                  <p className="mt-1.5 text-sm font-semibold text-foreground">{c.client}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.result}</p>
                  <p className="mt-3 text-xs font-semibold text-secondary">Read the case study ↗</p>
                </Link>
              ))}
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <FAQAccordionSection title="Common questions" items={faqItems} />
        </SectionReveal>

        <SectionReveal>
          <section className="mt-14 rounded-2xl border border-secondary/30 bg-card/40 p-6 text-center sm:p-8">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              Ready to stop renting your leads?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Takes about a minute. Free, with no obligation.
            </p>
            <div className="mt-5">
              <FormCta />
            </div>
          </section>
        </SectionReveal>
      </div>

      <LpFooter />

      {/* Sticky mobile actions */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden pb-safe">
        <div className="grid grid-cols-2 gap-2 px-4 py-3">
          <LpCallButton
            label="Call us"
            className="flex min-touch items-center justify-center gap-2 rounded-lg border border-secondary/40 text-sm font-semibold text-secondary"
          />
          <Link
            href="#form"
            className="flex min-touch items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-secondary-foreground"
          >
            Get started
          </Link>
        </div>
      </div>
    </main>
  )
}
