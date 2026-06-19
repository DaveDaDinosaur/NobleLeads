import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { buildMetadata } from "../(shared)/seo-config"
import { getFAQPageSchema, getLocalBusinessSchema, getArticleSchema } from "../(shared)/schema"

const primaryKeyword = "lead generation for window cleaners UK"
const canonicalPath = "/window-cleaners"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you specialise in window cleaning businesses specifically?",
    answer:
      "Yes. Window cleaners were among our earliest clients, so the websites, ad copy, follow-up flows and CRM setups we use are built around how window cleaning work actually comes in — rounds, one-off jobs and commercial contracts. We know the difference between growing a domestic round and winning a commercial site.",
  },
  {
    question: "How long before I start getting more window cleaning enquiries?",
    answer:
      "With Google Ads running, most window cleaners start seeing new enquiries within 2–3 weeks of going live. Local SEO and Google Business Profile improvements take longer — typically 2–4 months before meaningful organic movement — but we run both together so you get quick results from ads while SEO builds in the background.",
  },
  {
    question: "Can you help me move away from Bark and lead-buying sites?",
    answer:
      "That's exactly what the NobleLeads system is designed to do. We build your own website, Google presence and automation so enquiries come directly to you — not through a marketplace where you're competing with five other cleaners for the same job. Most window cleaners reduce or eliminate their Bark spend within the first 3–6 months.",
  },
  {
    question: "Can you help me target commercial window cleaning clients?",
    answer:
      "Yes. Commercial window cleaning — offices, retail units, schools, housing associations — is high value and often recurring. We build dedicated landing pages and campaigns targeting commercial property managers and facilities contacts in your service area, separate from your domestic round campaigns.",
  },
  {
    question: "Can you help me expand my rounds into new areas?",
    answer:
      "Yes. We can focus campaigns on specific postcodes or towns you want to grow into, then use automation and review systems to turn new one-off jobs into long-term round customers. Route efficiency matters — we target areas that add density to your existing rounds, not random enquiries from the other side of the county.",
  },
  {
    question: "How important is Google Business Profile for window cleaners?",
    answer:
      "Very. Most people searching for a window cleaner near them will see Google Business Profile results before anything else. A properly optimised GBP with strong reviews, accurate categories and regular photos can generate consistent enquiries without any ad spend at all. We set this up and manage it as part of every package.",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period so we can build and tune the system properly, then move to a rolling arrangement. If we're not delivering value, we don't want you tied in.",
  },
  {
    question: "Do you work with sole traders as well as larger window cleaning teams?",
    answer:
      "We work with sole operators through to small teams with multiple vans on the road. What matters is that you deliver good work, have (or can get) solid reviews and want to grow in a controlled, sustainable way.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with window cleaners across the whole of the UK. Campaigns are targeted to your local service area so you're not paying for enquiries from areas you don't want to work in.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Window Cleaner Marketing Agency UK | Lead Generation & Growth",
  description:
    "NobleLeads delivers lead generation for window cleaners across the UK — conversion websites, Google Ads, local SEO and CRM automation to grow your rounds without buying leads from Bark or Checkatrade.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Window Cleaner Marketing Agency UK | Lead Generation & Growth",
  description:
    "How NobleLeads generates consistent leads for UK window cleaning businesses using conversion websites, Google Ads, local SEO and automation.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-01-01",
})

export default function WindowCleanersPage() {
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
                Window Cleaner Marketing · UK
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Lead Generation for Window Cleaners UK — Grow Your Rounds Without Buying Every Lead
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Most window cleaners in the UK get 80–90% of their work from
                referrals and word of mouth. That{"'"}s fine when it{"'"}s flowing — but
                it{"'"}s not a system. NobleLeads specialises in{" "}
                <span className="font-semibold text-foreground">
                  {primaryKeyword}
                </span>{" "}
                so you can grow your rounds on purpose, not just hope the phone keeps
                ringing.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A clear look at what{"'"}s possible for your
                  window cleaning business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Section 2: Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Window Cleaners Struggle to Get Consistent Work
              </h2>
              <p>
                On the surface, window cleaning looks simple: build a round, show up
                every few weeks and keep clients happy. But getting enough new
                customers at the right price — and in the right areas — is a lot
                harder than the work itself.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You{"'"}re on Bark, Checkatrade or similar platforms — paying for every
                  lead and competing with 10–20 other cleaners on the same job, often
                  ending up in a race to the bottom on price.
                </li>
                <li>
                  Your Google Business Profile has a handful of reviews while the
                  competitor down the road shows 150+ and wins every new estate that
                  comes up.
                </li>
                <li>
                  You{"'"}ve got solid rounds but expanding into new streets or areas feels
                  like guesswork — leaflets, Facebook posts and hoping someone calls.
                </li>
                <li>
                  When work quietens down, you realise there{"'"}s no reliable way to turn
                  enquiries back on — no website that ranks, no ads running, no system
                  capturing interest overnight.
                </li>
                <li>
                  You miss calls while you{"'"}re up a ladder and by the time you ring
                  back, they{"'"}ve already booked someone else.
                </li>
              </ul>
              <p>
                None of this is about how well you clean glass. It{"'"}s about having{" "}
                <span className="font-semibold text-foreground">
                  a predictable way for new customers to find you, trust you and book
                </span>{" "}
                — without buying every lead from a middleman.
              </p>
            </section>
          </SectionReveal>

          {/* Section 3: The System */}
          <SectionReveal delay={100}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Window Cleaners
              </h2>
              <p>
                We build one joined-up system that takes someone from{" "}
                <span className="font-semibold text-foreground">
                  "I need a window cleaner in my area"
                </span>{" "}
                to{" "}
                <span className="font-semibold text-foreground">
                  "I{"'"}ve booked this company and I{"'"}m staying with them."
                </span>
              </p>

              <p className="font-semibold text-foreground">
                Step 1 — A Website That Converts Visitors Into Enquiries
              </p>
              <p>
                Most window cleaning websites are digital business cards — they exist
                but they don{"'"}t do anything. Ours are built as{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-ready trade websites
                </Link>{" "}
                with clear service pages for domestic and commercial window cleaning,
                before-and-after photos, Google reviews pulled in automatically,
                click-to-call on mobile and simple quote forms that feed directly into
                your CRM pipeline. Every enquiry is captured, logged and responded to.
              </p>

              <p className="font-semibold text-foreground">
                Step 2 — Google Ads and Local SEO Targeting Your Rounds
              </p>
              <p>
                A good site is useless if no one sees it. We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for window cleaners
                </Link>{" "}
                targeting the postcodes and towns where you actually want to grow —
                so you{"'"}re adding density to your existing routes, not driving across
                the county for one-off jobs. Alongside paid traffic, we build your
                local SEO so you appear organically when people search "window cleaner
                near me" or "window cleaning [your town]" — traffic that costs nothing
                per click once it{"'"}s ranking.
              </p>

              <p className="font-semibold text-foreground">
                Step 3 — Automation That Captures Every Enquiry
              </p>
              <p>
                Most window cleaners lose work because they{"'"}re up a ladder when the
                phone rings. With our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM and automation system
                </Link>
                , every missed call triggers an automatic text-back within 60 seconds.
                Every form submission gets an instant reply. You have a simple
                pipeline showing who{"'"}s been quoted, who{"'"}s booked and who{"'"}s ready
                to add to the round — all visible on your phone while you{"'"}re working.
              </p>

              <p className="font-semibold text-foreground">
                Step 4 — Review Building That Compounds Over Time
              </p>
              <p>
                In window cleaning, Google reviews are one of your biggest competitive
                advantages. The company with 200 reviews wins the estate contract over
                the company with 12 — every time. We automate review requests after
                every completed job so your review count grows consistently without
                you having to remember to ask.
              </p>
            </section>
          </SectionReveal>

          {/* Section 4: Window Cleaning SEO */}
          <SectionReveal delay={110}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Window Cleaning SEO — Getting Found Without Paying Per Click
              </h2>
              <p>
                Most window cleaners either don{"'"}t think about SEO or assume it{"'"}s too
                complicated to be worth it. It{"'"}s neither. Done properly, window
                cleaning SEO means your website appears in Google search results when
                people in your area search for a cleaner — and unlike Google Ads,
                those clicks don{"'"}t cost you anything.
              </p>
              <p>
                The key areas we focus on for window cleaning SEO:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">
                    Google Business Profile optimisation
                  </span>{" "}
                  — correctly categorised, fully populated with services, real photos
                  and a consistent stream of fresh reviews. This drives the local map
                  pack results that appear above everything else.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Location-specific service pages
                  </span>{" "}
                  — pages built for the towns and areas you serve, targeting searches
                  like "window cleaner Cambridge" or "window cleaning Leeds" so you
                  rank for the searches that matter most to your business.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Commercial window cleaning pages
                  </span>{" "}
                  — separate pages targeting facilities managers, property managers and
                  business owners searching for commercial window cleaning contracts.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Technical SEO
                  </span>{" "}
                  — fast load times, mobile-first structure and clean code that Google
                  can index properly. Most trade websites fail on the basics here.
                </li>
              </ul>
              <p>
                SEO takes time — typically 3–6 months for meaningful movement — which
                is why we run Google Ads alongside it. Ads bring in leads from day one
                while SEO builds the long-term organic foundation.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Commercial */}
          <SectionReveal delay={120}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Growing Your Commercial Window Cleaning Work
              </h2>
              <p>
                Domestic rounds are the backbone of most window cleaning businesses —
                but commercial contracts are where the real step-change in revenue
                happens. A single commercial site — an office block, retail unit or
                housing association — can be worth more per month than 20 domestic
                customers, with none of the route-planning complexity.
              </p>
              <p>
                The challenge is that commercial clients don{"'"}t browse Facebook groups
                or call the first number they find. They Google specific terms, check
                the professional appearance of your website and often request a formal
                quote process. Without the right online presence, you{"'"}re invisible
                to them.
              </p>
              <p>
                We build dedicated commercial window cleaning campaigns — targeted at
                facilities managers, property management companies, schools, retail
                chains and housing associations in your area — with landing pages
                built specifically to convert commercial enquiries rather than
                domestic ones. The messaging, the proof points and the quote process
                are all different, and we build them accordingly.
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: ROI */}
          <SectionReveal delay={130}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                A typical domestic window cleaning round visit is around{" "}
                <span className="font-semibold text-foreground">£60–£90 every 4 weeks</span>.
                A loyal domestic customer is worth{" "}
                <span className="font-semibold text-foreground">
                  £720–£1,080 per year
                </span>{" "}
                in recurring revenue. A small commercial contract might be{" "}
                <span className="font-semibold text-foreground">£300–£600/month</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), if the system brings you:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>6 new regular domestic customers per month at £75/visit, and</li>
                <li>1 commercial contract at £400/month</li>
              </ul>
              <p>
                that{"'"}s{" "}
                <span className="font-semibold text-foreground">
                  £900/month in new domestic recurring revenue
                </span>{" "}
                plus £400/month commercial —{" "}
                <span className="font-semibold text-foreground">
                  £1,300/month in new recurring income
                </span>{" "}
                on a £495/month fee. Those customers stay for years. The lifetime
                value of 6 loyal domestic clients easily exceeds £5,000.
              </p>
              <p>
                And unlike Bark leads, these customers come to you — they{"'"}re not
                shared with four other window cleaners. They chose you specifically.
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: Bark comparison */}
          <SectionReveal delay={140}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Problem With Buying Window Cleaning Leads
              </h2>
              <p>
                Lead-buy sites like Bark and similar platforms generate a lot of
                volume — but volume isn{"'"}t the same as quality. When you pay for a
                lead on Bark, you{"'"}re one of several window cleaners who{"'"}ve paid to
                contact the same customer. You{"'"}re competing immediately on speed and
                price before the customer has seen any of your work or reviews.
              </p>
              <p>
                The deeper problem is structural:{" "}
                <span className="font-semibold text-foreground">
                  stop paying and the leads stop immediately
                </span>
                . You own nothing — no rankings, no reviews from those customers, no
                website traffic. Every pound you spend on bought leads builds the
                platform{"'"}s business, not yours.
              </p>
              <p>
                We{"'"}ve written a full breakdown of{" "}
                <Link
                  href="/blog/is-bark-worth-it-tradesmen"
                  className="font-semibold text-secondary hover:underline"
                >
                  whether Bark is worth it for tradesmen in 2026
                </Link>{" "}
                if you want the full picture. The short version: it can bridge early
                growth but it{"'"}s not a long-term strategy for a window cleaning
                business that wants to stop chasing work.
              </p>
            </section>
          </SectionReveal>

          {/* Section 8: Testimonial */}
          <SectionReveal delay={150}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Window Cleaners
              </h2>
              <div className="rounded-xl border border-secondary/20 bg-card/40 p-5 sm:p-6 space-y-3">
                <p className="text-sm leading-relaxed text-foreground/90 italic">
                  "We were losing commercial contracts to competitors who simply showed
                  up higher on Google. Within six weeks of launching the NobleLeads
                  system, we picked up two new shop fronts and a monthly office block —
                  and the round filled out faster than we'd managed in the previous two
                  years on Checkatrade."
                </p>
                <div>
                  <p className="text-xs font-semibold text-foreground">Marcus D.</p>
                  <p className="text-xs text-muted-foreground">
                    Domestic &amp; commercial window cleaning · Cambridge
                  </p>
                </div>
              </div>
              <p>
                Marcus{"'"}s experience is the pattern we see consistently: a window cleaner
                with strong work and good reviews, held back not by their service but
                by the lack of a system bringing new customers in. Once that system
                is in place, the growth compounds.
              </p>
            </section>
          </SectionReveal>

          {/* Section 9: Pricing */}
          <SectionReveal delay={160}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Window Cleaners
              </h2>
              <p>
                Every engagement starts with a conversation about your current rounds,
                pricing, target areas and goals. We then match you to the right level:
              </p>
              <ul className="ml-5 list-disc space-y-3">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a conversion-focused website, Google Business Profile setup, hosting
                  and CRM. Ideal if you{"'"}re ready to look professional online and
                  capture enquiries from local search without running paid ads yet.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus active Google Ads targeting your chosen areas,
                  missed call text-back, automated follow-up and review generation.
                  Best for window cleaners who want to grow rounds and reduce Bark
                  dependency.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  multi-area expansion, commercial window cleaning campaigns and
                  advanced automation for larger operations with multiple vans.
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Not sure which is right for you?{" "}
                <span className="font-semibold text-foreground">
                  Book a free 15-minute call and we{"'"}ll tell you honestly.
                </span>
              </p>
              <p className="text-xs text-muted-foreground/80">
                Full pricing on our{" "}
                <Link href="/pricing" className="font-semibold text-secondary hover:underline">
                  pricing page
                </Link>
                . Further reading:{" "}
                <Link
                  href="/blog/google-ads-for-tradesmen-uk"
                  className="font-semibold text-secondary hover:underline"
                >
                  Google Ads for tradesmen — what works and what to avoid
                </Link>
                .
              </p>
            </section>
          </SectionReveal>

          {/* Section 10: FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Window Cleaners Like You"
              items={faqItems}
            />
          </SectionReveal>

          {/* Section 11: Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Grow Your Rounds Without Buying Every Lead?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your window cleaning
                business — where your work comes from now and what a proper lead
                system could look like for you.
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
      <JsonLd data={[getLocalBusinessSchema(), articleSchema, faqSchema]} />
    </main>
  )
}
