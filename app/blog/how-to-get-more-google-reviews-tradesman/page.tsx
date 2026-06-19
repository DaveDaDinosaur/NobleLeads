import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { buildMetadata } from "../../(shared)/seo-config"
import { getArticleSchema, getFAQPageSchema, type FAQItem } from "../../(shared)/schema"

const canonicalPath = "/blog/how-to-get-more-google-reviews-tradesman"

export const metadata: Metadata = buildMetadata({
  title: "How to Get More Google Reviews as a Tradesman UK (2026 Guide)",
  description:
    "A practical guide for UK tradesmen on getting more Google reviews consistently — when to ask, what to say, QR cards, automated follow-up and how reviews directly impact your local ranking.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "How to Get More Google Reviews as a Tradesman UK (2026 Guide)",
  description:
    "Practical strategies for UK tradesmen to get more Google reviews consistently — timing, phrasing, QR cards, automated SMS follow-up and the direct link between review count and local search ranking.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  authorType: "Organization",
})

const faqItems: FAQItem[] = [
  {
    question: "How many Google reviews does a tradesman need to rank in the local 3-pack?",
    answer:
      "There's no fixed number, but in most local markets, 20–40 reviews with a 4.8+ rating is enough to compete for the Google Maps 3-pack. In more competitive areas (major cities, high-demand trades), you may need 60–100+ to hold a top-three position. The key is consistent velocity — a regular flow of new reviews signals to Google that your business is active.",
  },
  {
    question: "Is it against Google's rules to ask customers for reviews?",
    answer:
      "No. Asking customers to leave a review is explicitly permitted by Google. What's not allowed is offering incentives (discounts, cash, gifts) in exchange for reviews, or asking employees and friends to leave fake reviews. A genuine ask after a completed job — in person, by text or by email — is perfectly fine.",
  },
  {
    question: "What's the best way to send a review request to a customer?",
    answer:
      "SMS outperforms email significantly for review requests — open rates are typically 90%+ vs 20–30% for email. A short, personalised message sent within a few hours of job completion, with a direct link to your Google review page, converts best. Keep it brief: 'Hi [name], really glad we could sort that for you today — would you mind leaving us a quick Google review? It really helps. [link]'",
  },
  {
    question: "What if I get a bad Google review?",
    answer:
      "Respond professionally within 24 hours. Acknowledge the issue, apologise if appropriate, and offer to resolve it offline. A well-handled negative review can actually build trust — it shows prospective customers that you take complaints seriously. Never argue or get defensive in a public reply. If the review is fake or violates Google's policies, you can flag it for removal.",
  },
  {
    question: "Does responding to Google reviews help my ranking?",
    answer:
      "Yes. Google's documentation explicitly states that responding to reviews improves your local ranking. It also signals to potential customers that you're active and engaged. Responding to every review — positive and negative — is one of the simplest, highest-ROI activities on your Google Business Profile.",
  },
  {
    question: "Can I get Google reviews removed if I don't like them?",
    answer:
      "You can flag reviews that violate Google's policies — fake reviews, reviews from people who weren't customers, reviews containing spam or inappropriate content. Google doesn't always act quickly, and genuine negative reviews can't be removed simply because you disagree with them. The better strategy is to respond professionally and outpace negative reviews with a high volume of positive ones.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function HowToGetMoreGoogleReviewsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "How to Get More Google Reviews", href: canonicalPath },
            ]}
          />

          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · 12 min read
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                How to Get More Google Reviews as a Tradesman UK (2026 Guide)
              </h1>
              <p className="mt-4 text-sm text-muted-foreground">Published June 2026 · By NobleLeads</p>

              {/* Quick Answer */}
              <div className="quick-answer mt-6 rounded-xl border border-secondary/30 bg-secondary/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick Answer</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Ask within two hours of finishing a job, send via SMS with a direct link, keep the message short and personal. Consistency matters more than volume — five reviews a month every month beats fifty in January and none the rest of the year. Automated follow-up removes the need to remember to ask.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Intro */}
          <SectionReveal delay={60}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Google reviews are the single most underused asset in a tradesman{"'"}s business. Most tradespeople know they should have more. Most don{"'"}t have a system for getting them. So they rely on the occasional customer who bothers to leave one unprompted — which might be one every few months.
              </p>
              <p>
                The result: a Google Business Profile sitting at 11 reviews and 4.6 stars, while a competitor with 73 reviews and 4.9 stars appears above them in the Maps results for every local search.
              </p>
              <p>
                Reviews directly affect your local ranking. They affect whether a customer calls you or the next plumber down the list. And unlike paid ads, they compound — every review you earn this month is still working for you in three years.
              </p>
              <p>
                This guide covers how to get more Google reviews consistently, what to say, when to ask, and how to automate the follow-up so you never forget.
              </p>
            </section>
          </SectionReveal>

          {/* Section 1: Why reviews matter for local ranking */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Google Reviews Directly Affect Where You Rank
              </h2>
              <p>
                Google{"'"}s local ranking algorithm uses three main signals: relevance (does your listing match the search?), distance (how close are you to the searcher?) and prominence (how well-known and trusted is your business?).
              </p>
              <p>
                Reviews feed directly into prominence. A higher review count, a higher average rating and consistent recent reviews all improve your prominence score. This is why a plumber with 80 reviews can appear in the Maps 3-pack above a plumber who{"'"}s been trading longer but has only 8 reviews.
              </p>
              <p>
                The relationship isn{"'"}t just about quantity. Google also weights:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Review velocity — a steady flow of new reviews signals an active business. Ten reviews a month beats a hundred reviews from two years ago.",
                  "Review recency — older reviews carry less weight over time. Recent reviews (last 90 days) have the strongest ranking signal.",
                  "Response rate — Google explicitly says responding to reviews improves local ranking. Unanswered reviews are a missed signal.",
                  "Keywords in reviews — when customers mention your trade, your town or specific services in their review text, it reinforces your relevance for those terms.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The practical implication: five reviews a month every month is more powerful than fifty reviews in a single campaign push.
              </p>
            </section>
          </SectionReveal>

          {/* Section 2: Timing */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Timing Is Everything — Ask Within Two Hours of Finishing
              </h2>
              <p>
                The single biggest mistake tradesmen make with review requests is asking too late. A customer who was delighted with your work at 3pm on Tuesday is still pleased on Wednesday — but they{"'"}re busy, distracted and the emotional high of a job well done has faded. By Friday, leaving a review is something they meant to do.
              </p>
              <p>
                The optimal window is within one to two hours of completing the job. The customer is still at home or has just returned. The outcome is fresh. The relief of having the problem solved is still tangible. That{"'"}s when the motivation to leave a review is highest.
              </p>
              <p>
                If you ask in person before you leave — and then send a text with the link thirty minutes later — conversion rates are significantly higher than a follow-up sent the next day.
              </p>
              <p>
                The in-person ask also matters. Something as simple as: &ldquo;Really glad we got that sorted for you. If you{"'"}re happy with the work, a quick Google review helps us a lot — I{"'"}ll text you the link.&rdquo; Most customers will say yes. Once they{"'"}ve said yes in person, they{"'"}re far more likely to follow through when the text arrives.
              </p>
            </section>
          </SectionReveal>

          {/* Section 3: How to ask */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What to Say — Templates That Actually Convert
              </h2>
              <p>
                The message needs to be short, personal and contain a direct link. Every extra word and every extra step between the customer and the review page loses you conversions.
              </p>

              <h3 className="mt-5 text-base font-semibold text-foreground">SMS (best channel — 90%+ open rate)</h3>
              <div className="mt-3 rounded-lg border border-border/40 bg-card/40 p-4 font-mono text-xs sm:text-sm text-muted-foreground">
                Hi [first name], thanks for having us today — really glad we could get that sorted. If you{"'"}re happy with the work, would you mind leaving us a quick Google review? It only takes a minute and it really helps: [link]
              </div>

              <h3 className="mt-5 text-base font-semibold text-foreground">Shorter variation</h3>
              <div className="mt-3 rounded-lg border border-border/40 bg-card/40 p-4 font-mono text-xs sm:text-sm text-muted-foreground">
                Hi [name] — hope you{"'"}re pleased with the work today. A Google review would mean a lot if you get a moment: [link] Thanks, [your name]
              </div>

              <h3 className="mt-5 text-base font-semibold text-foreground">WhatsApp (works well for existing customers)</h3>
              <div className="mt-3 rounded-lg border border-border/40 bg-card/40 p-4 font-mono text-xs sm:text-sm text-muted-foreground">
                Hi [name] — great to see you today. If you{"'"}re happy with how the [job] turned out, a quick Google review would help us loads. Here{"'"}s the link: [link] No worries if not! 👍
              </div>

              <p className="mt-4">
                A few things that hurt conversion rates:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Asking for a '5-star review' — this can be flagged by Google as incentivised and risks removal.",
                  "Sending from a business number the customer doesn't recognise — use your personal number if possible.",
                  "Sending a day or more after the job — by then the motivation has faded significantly.",
                  "Sending a link that goes to your Google Business Profile homepage rather than directly to the review form.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </SectionReveal>

          {/* Section 4: Get your review link */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How to Get Your Direct Google Review Link
              </h2>
              <p>
                The link in your SMS needs to take the customer directly to the review form — not your Google Maps listing where they have to find the review button themselves. Every extra click loses you reviews.
              </p>
              <p>
                To get your direct review link:
              </p>
              <ol className="mt-3 space-y-2 pl-4 list-decimal list-inside text-muted-foreground">
                {[
                  "Search for your business name on Google.",
                  "Click on your business listing to open the info panel.",
                  "Scroll down to find 'Get more reviews' or click the star rating.",
                  "Copy the short link Google provides — it looks like: g.page/your-business-name/review",
                ].map((step) => (
                  <li key={step} className="leading-relaxed">{step}</li>
                ))}
              </ol>
              <p>
                Save that link in your phone{"'"}s notes app so you can paste it into every review request message within seconds.
              </p>
              <p>
                Alternatively, use Google Business Profile manager (business.google.com) → click your listing → &lsquo;Get more reviews&rsquo; → copy the link shown. This gives you a clean, short URL.
              </p>
            </section>
          </SectionReveal>

          {/* Mid-article CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Want review requests automated so you never forget to ask again?
            </p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20"
            >
              Free 15-min discovery call →
            </Link>
          </div>

          {/* Section 5: QR cards */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                QR Code Review Cards — Worth Having, Not Worth Relying On
              </h2>
              <p>
                Review cards are small printed cards — business-card sized or slightly larger — with your logo, a short message (&ldquo;Enjoyed the work? Leave us a review&rdquo;) and a QR code that links directly to your review form. You leave one on the kitchen counter or hand it to the customer when you pack up.
              </p>
              <p>
                They work well as a physical prompt, especially for customers who aren{"'"}t going to remember to act on a text message later. For older customers in particular, a physical card can perform better than an SMS link.
              </p>
              <p>
                The limitation: most people won{"'"}t scan the QR code unless you{"'"}ve also made the ask in person. The card reinforces the ask — it doesn{"'"}t replace it.
              </p>
              <p>
                Canva has free templates for review cards. Print 100 from Vistaprint for under £20. Keep a stack in your van. Worth doing once — but don{"'"}t rely on them as your only review-generation method.
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: Automated follow-up */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Automated Follow-Up — How to Never Forget to Ask Again
              </h2>
              <p>
                The biggest barrier to consistent review generation isn{"'"}t knowing what to say — it{"'"}s remembering to ask when you{"'"}re tired after a long day on the tools. Automation removes that dependency.
              </p>
              <p>
                A well-built CRM and automation system can trigger a review request SMS automatically when a job is marked as completed. The customer receives it within minutes, while the experience is still fresh, with no manual action required from you.
              </p>
              <p>
                The flow looks like this:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Job completed → marked as done in your CRM.",
                  "Automation triggers SMS to customer: personal message + review link.",
                  "If no review within 48 hours: optional polite follow-up (once only).",
                  "Review received → notification to you, logged against the customer record.",
                ].map((step) => (
                  <li key={step} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p>
                Tradesmen who move from manually asking to automated follow-up typically see their monthly review count triple — not because the ask is better, but because it happens every single time without relying on memory.
              </p>
              <p>
                This is part of the NobleLeads system — review requests are built into the post-job automation so every completed job triggers the ask.{" "}
                <Link href="/contact" className="text-secondary hover:underline">
                  See how it works →
                </Link>
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: Responding to reviews */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Responding to Reviews — the Easiest Ranking Signal You{"'"}re Probably Ignoring
              </h2>
              <p>
                Google says responding to reviews improves local ranking. It also signals to prospective customers that there{"'"}s a real person behind the business who values feedback.
              </p>
              <p>
                Responding to positive reviews doesn{"'"}t need to be long. A few lines is enough:
              </p>
              <div className="mt-3 rounded-lg border border-border/40 bg-card/40 p-4 font-mono text-xs sm:text-sm text-muted-foreground">
                Thanks so much [name] — really glad we could get your boiler sorted before the cold snap. It was a pleasure, and we{"'"}re here whenever you need us. — [Your name], [Business name]
              </div>
              <p className="mt-4">
                Personalise where you can. Mention the job type, the customer{"'"}s name, something specific. Generic &ldquo;Thanks for your review!&rdquo; responses don{"'"}t do much for trust.
              </p>
              <p>
                For negative reviews, the approach is different but equally important:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Respond within 24 hours — don't leave it sitting.",
                  "Acknowledge the customer's experience without being defensive.",
                  "Apologise if appropriate, even if you disagree with the details.",
                  "Offer to resolve it privately: 'Please give us a call and we'll make this right.'",
                  "Never argue publicly — the audience isn't just the reviewer, it's every future customer reading the thread.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                A well-handled negative review — where you respond professionally and offer resolution — can actually convert undecided customers. It demonstrates character in a way that a wall of five-star reviews doesn{"'"}t.
              </p>
            </section>
          </SectionReveal>

          {/* Section 8: Review velocity strategy */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Building Review Velocity — the Long Game That Compounds
              </h2>
              <p>
                Google{"'"}s local ranking algorithm treats review velocity — the rate at which new reviews arrive — as an active signal of business health. A business receiving five reviews a month looks more active than one that received fifty reviews two years ago and hasn{"'"}t had one since.
              </p>
              <p>
                The target for most local trades is 3–5 new reviews per month, consistently. At that rate:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "6 months: 18–30 reviews (enough to compete in most local markets)",
                  "12 months: 36–60 reviews (top-3 contender in most UK towns)",
                  "24 months: 72–120 reviews (dominant local position, very hard to displace)",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The compounding effect is real. More reviews → higher GBP ranking → more impressions → more calls → more jobs → more reviews. It{"'"}s one of the few genuinely self-reinforcing loops in local marketing.
              </p>
              <p>
                The tradesmen who hit 100+ reviews aren{"'"}t doing anything radically different from those with 10. They just have a system — and they never stop asking.
              </p>
            </section>
          </SectionReveal>

          {/* Section 9: Existing customer backfill */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Don{"'"}t Forget Your Existing Customers
              </h2>
              <p>
                If you{"'"}ve been trading for a few years and have hundreds of happy customers but only a handful of reviews, there{"'"}s a backfill opportunity most tradesmen don{"'"}t use.
              </p>
              <p>
                Go through your job history — invoices, WhatsApp threads, previous texts — and identify customers who gave you positive verbal feedback, repeat customers, referrers. Message them directly:
              </p>
              <div className="mt-3 rounded-lg border border-border/40 bg-card/40 p-4 font-mono text-xs sm:text-sm text-muted-foreground">
                Hi [name], hope you{"'"}re well. We{"'"}re trying to build up our Google reviews — would you mind leaving us one if you were happy with the work we did? Here{"'"}s the link: [link] Really appreciate it.
              </div>
              <p className="mt-4">
                A personal message from a number they recognise, referencing work you actually did for them, converts well. Don{"'"}t blast everyone at once — spread it over a few weeks to maintain natural review velocity. Twenty to thirty personal messages to past happy customers can generate a significant uplift in review count quickly.
              </p>
              <p>
                Do this once, then put the automated ongoing system in place so you never need to do a backfill campaign again.
              </p>
            </section>
          </SectionReveal>

          {/* Section 10: Internal links to trade pages */}
          <SectionReveal delay={80}>
            <section className="mt-12 rounded-xl border border-border/40 bg-card/30 p-5 sm:p-6">
              <h2 className="text-base font-semibold text-foreground sm:text-lg">
                Review Building Is Built Into the NobleLeads System
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Automated review requests, two-way SMS follow-up and a CRM that tracks every customer interaction — all included. See how it works for your trade:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: "Electricians", href: "/electricians" },
                  { label: "Plumbers", href: "/plumbers" },
                  { label: "Landscapers", href: "/landscapers" },
                  { label: "Window Cleaners", href: "/window-cleaners" },
                  { label: "Builders", href: "/builders" },
                  { label: "Painters & Decorators", href: "/painters-decorators" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex items-center rounded-lg border border-border/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-secondary/40 hover:text-secondary"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={80}>
            <section className="mt-14">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-6">
                <FAQAccordionSection items={faqItems} />
              </div>
            </section>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal delay={80}>
            <section className="mt-14 rounded-2xl border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Stop Relying on Memory to Get Reviews
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                NobleLeads builds automated review request sequences into every client system — so every completed job triggers the ask, every time, without you having to think about it. Book a discovery call to see how the full system works.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <Link
                  href="/blog/google-ads-for-tradesmen-uk"
                  className="inline-flex items-center justify-center rounded-lg border border-secondary/40 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-secondary/70 hover:bg-secondary/10"
                >
                  Google Ads guide for tradesmen →
                </Link>
              </div>
            </section>
          </SectionReveal>

        </div>
      </article>

      <Footer />
      <MobileCTABar />
    </main>
  )
}
