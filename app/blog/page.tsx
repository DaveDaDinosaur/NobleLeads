import type { Metadata } from "next"
import Script from "next/script"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { BlogGrid, type BlogPostMeta } from "@/components/blog/blog-grid"
import { BlogHero } from "@/components/blog/blog-hero"
import { buildMetadata } from "../(shared)/seo-config"

const posts: BlogPostMeta[] = [
  {
    slug: "best-checkatrade-alternative",
    title: "Best Checkatrade Alternative for UK Trades in 2026",
    description:
      "How TrustaTrader, Rated People, MyBuilder and Bark compare as Checkatrade alternatives, and why the real fix most trades need isn't another directory at all.",
    readTime: "9 min read",
    category: "Platform Reviews",
  },
  {
    slug: "how-much-do-bark-credits-cost",
    title: "How Much Do Bark Credits Cost? Full 2026 Pricing Breakdown",
    description:
      "Exactly what Bark credits cost, the 3-month expiry rule, real cost per lead by job type, and how to work out if the spend is actually worth it for your trade.",
    readTime: "9 min read",
    category: "Platform Reviews",
  },
  {
    slug: "is-rated-people-worth-it",
    title: "Is Rated People Worth It for Tradespeople? Honest 2026 Review",
    description:
      "Real costs, the three-competitor cap advantage, what tradespeople actually say, and whether it beats Checkatrade for UK trades in 2026.",
    readTime: "11 min read",
    category: "Platform Reviews",
  },
  {
    slug: "how-much-does-checkatrade-cost",
    title: "How Much Does Checkatrade Cost Per Month? Full 2026 Breakdown",
    description:
      "Membership fees, per-lead costs, real-world monthly totals and the one metric that actually tells you whether Checkatrade is worth the money.",
    readTime: "11 min read",
    category: "Platform Reviews",
  },
  {
    slug: "bark-vs-checkatrade",
    title: "Bark vs Checkatrade: Which Is Better for UK Tradesmen? (2026)",
    description:
      "Honest comparison of costs, lead quality and which platform delivers better ROI, plus what actually works better than both for long-term lead generation.",
    readTime: "12 min read",
    category: "Platform Reviews",
  },
  {
    slug: "mybuilder-vs-checkatrade",
    title: "MyBuilder vs Checkatrade: Which Is Worth It for UK Trades? (2026)",
    description:
      "An honest head-to-head on costs, lead quality and which trades each platform actually suits, plus what the best UK tradespeople do instead.",
    readTime: "13 min read",
    category: "Platform Reviews",
  },
  {
    slug: "how-to-get-more-google-reviews-tradesman",
    title: "How to Get More Google Reviews as a Tradesman UK (2026 Guide)",
    description:
      "When to ask, what to say, QR cards, automated SMS follow-up and how review velocity directly impacts your Google Maps ranking as a UK tradesman.",
    readTime: "12 min read",
    category: "Reviews & Reputation",
  },
  {
    slug: "is-bark-worth-it-landscapers",
    title: "Is Bark Worth It for Landscapers in 2026? Honest Answer",
    description:
      "Lead costs, the rogue trader reputation problem, why maintenance contracts rarely come from Bark, and why landscaping is a visual trade that needs its own platform.",
    readTime: "10 min read",
    category: "Platform Reviews",
  },
  {
    slug: "is-bark-worth-it-plumbers",
    title: "Is Bark Worth It for Plumbers in 2026? Honest Answer",
    description:
      "Credit costs per job type, Gas Safe verification gaps, emergency callouts Bark misses entirely, and what actually produces better ROI for UK plumbers.",
    readTime: "11 min read",
    category: "Platform Reviews",
  },
  {
    slug: "is-bark-worth-it-electricians",
    title: "Is Bark Worth It for Electricians in 2026? Honest Answer",
    description:
      "Credit costs, shared leads, unverified certifications and emergency callouts that bypass Bark entirely. We break down whether UK electricians are better off without it.",
    readTime: "10 min read",
    category: "Platform Reviews",
  },
  {
    slug: "is-bark-worth-it-tradesmen",
    title: "Is Bark Worth It for Tradesmen in 2026? Honest Answer",
    description:
      "Is Bark.com worth it for UK tradesmen in 2026? We break down the real cost per lead, the quality problem, what tradesmen actually say and what to do instead.",
    readTime: "11 min read",
    category: "Platform Reviews",
  },
  {
    slug: "google-ads-for-tradesmen-uk",
    title: "Google Ads for Tradesmen UK, What Works and What to Avoid",
    description:
      "A straight guide to Google Ads for UK tradesmen. What works, what wastes money, how much to spend and how to tell if your campaigns are actually generating profitable jobs.",
    readTime: "14 min read",
    category: "Paid Ads",
  },
  {
    slug: "is-checkatrade-worth-it-2025",
    title: "Is Checkatrade Worth It in 2026? Honest Answer for UK Trades",
    description:
      "Thinking about joining or staying on Checkatrade? We break down what it really costs in 2026, when it makes sense and when you should own your own lead flow instead.",
    readTime: "12 min read",
    category: "Platform Reviews",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Trade Marketing Blog, Tips, Guides & Insights",
  description:
    "Practical trade marketing advice for UK tradespeople on getting more leads, building a website that works and growing without relying only on referrals or lead-buying sites.",
  canonicalPath: "/blog",
})

const featuredPost = posts[0]
const remainingPosts = posts.slice(1)

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <BlogHero postCount={posts.length} />

      {/* Featured post */}
      <section className="pb-8 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <a
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-2xl border border-secondary/30 bg-card/40 p-6 sm:p-8 transition-all duration-300 hover:border-secondary/60 hover:bg-card/70 hover:shadow-xl hover:shadow-secondary/10"
            >
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary/80">
                Featured · {featuredPost.category} · {featuredPost.readTime}
              </p>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl group-hover:text-secondary transition-colors duration-200">
                {featuredPost.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {featuredPost.description}
              </p>
              <p className="mt-5 text-xs font-semibold text-secondary">
                Read article →
              </p>
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Filtered grid */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogGrid posts={remainingPosts} />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-2xl border border-border/40 bg-card/30 px-6 py-10 sm:px-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Stay Sharp
              </p>
              <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
                Get articles like this straight to your inbox.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Practical trade marketing. No spam. Unsubscribe any time.
              </p>
              <div className="mt-6 w-full max-w-md mx-auto">
                <iframe
                  src="https://app.nobleleads.uk/widget/form/fPjPUS0bUZnvi86Nua0m"
                  style={{ width: "100%", height: "220px", border: "none", borderRadius: "8px" }}
                  id="inline-fPjPUS0bUZnvi86Nua0m"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-activation-type="alwaysActivated"
                  data-deactivation-type="neverDeactivate"
                  data-form-name="Mail List Form"
                  data-form-id="fPjPUS0bUZnvi86Nua0m"
                  data-layout-iframe-id="inline-fPjPUS0bUZnvi86Nua0m"
                  title="Mail List Form"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <MobileCTABar />
      <Script src="https://app.nobleleads.uk/js/form_embed.js" strategy="lazyOnload" />
    </main>
  )
}
