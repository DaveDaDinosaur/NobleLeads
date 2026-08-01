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
    slug: "how-to-get-roofing-leads-without-checkatrade",
    title: "How to Get Roofing Leads Without Checkatrade (2026)",
    description:
      "What Checkatrade, Bark and pay-per-lead platforms really cost roofers in 2026, and how to build a roofing lead system you own with a website, Google Ads, local SEO and follow-up.",
    readTime: "8 min read",
    category: "Lead Generation",
  },
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
    title: "Bark Credits Cost 2026: £1.20 Each, £7-£40 Per Lead",
    description:
      "Bark credits cost ~£1.20 + VAT each. Real lead prices by job type (£7-£40), the 3-month expiry rule, and what UK trades actually pay per job won.",
    readTime: "9 min read",
    category: "Platform Reviews",
  },
  {
    slug: "is-rated-people-worth-it",
    title: "Rated People Cost 2026: £35/Month + £15 Per Lead: Worth It?",
    description:
      "Rated People costs ~£35 + VAT/month plus ~£15 per lead. Real pricing, the 3-competitor cap, and whether it beats Checkatrade for UK trades.",
    readTime: "11 min read",
    category: "Platform Reviews",
  },
  {
    slug: "how-much-does-checkatrade-cost",
    title: "Checkatrade Cost 2026: Real Prices From £60-£500/Month",
    description:
      "Checkatrade doesn't publish prices. What UK trades actually pay: £60-£500+/month membership, £5-£40 per lead, and typical all-in monthly totals.",
    readTime: "11 min read",
    category: "Platform Reviews",
  },
  {
    slug: "bark-vs-checkatrade",
    title: "Bark vs Checkatrade 2026: Costs, Leads & Which Wins",
    description:
      "Bark: pay £9-£40 per lead, no monthly fee. Checkatrade: £60-£500+/month plus lead fees. Which suits your trade?",
    readTime: "12 min read",
    category: "Platform Reviews",
  },
  {
    slug: "mybuilder-vs-checkatrade",
    title: "MyBuilder vs Checkatrade 2026: Which Is Better (And Cheaper)?",
    description:
      "MyBuilder has no monthly fee. Checkatrade runs £100-£500+/month. Side-by-side costs, lead quality, and which platform suits your trade.",
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
    title: "Bark for Landscapers 2026: £16-£28 Leads: Worth It?",
    description:
      "Bark landscaping leads cost £16-£28 and are shared. Real credit maths, why maintenance rarely comes from Bark, and what works better.",
    readTime: "10 min read",
    category: "Platform Reviews",
  },
  {
    slug: "is-bark-worth-it-plumbers",
    title: "Bark for Plumbers 2026: £16-£36 Leads: Worth It?",
    description:
      "Bark plumbing leads cost £16-£36 and are shared. Gas Safe gaps, emergencies Bark misses, and what works better.",
    readTime: "11 min read",
    category: "Platform Reviews",
  },
  {
    slug: "is-bark-worth-it-electricians",
    title: "Bark for Electricians 2026: £13-£30 Leads: Worth It?",
    description:
      "Bark electrical leads cost £13-£30+ and go to up to 5 competitors. Real credit maths and what beats it.",
    readTime: "10 min read",
    category: "Platform Reviews",
  },
  {
    slug: "is-bark-worth-it-tradesmen",
    title: "Bark for Tradesmen 2026: £150-£400/Month: Worth It?",
    description:
      "Active Bark users often spend £150-£400/month. Real cost per job, lead quality problems, and when to stop.",
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
    title: "Checkatrade Worth It 2026? Real Cost £400-£1,000+/Month",
    description:
      "Membership plus leads often hits £400-£1,000+/month. When Checkatrade still works - and when to own your leads.",
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
