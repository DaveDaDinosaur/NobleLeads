import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { BlogGrid, type BlogPostMeta } from "@/components/blog/blog-grid"
import { buildMetadata } from "../(shared)/seo-config"

const posts: BlogPostMeta[] = [
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
      "Credit costs per job type, Gas Safe verification gaps, emergency callouts Bark misses entirely — and what actually produces better ROI for UK plumbers.",
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
    title: "Google Ads for Tradesmen UK — What Works and What to Avoid",
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
  title: "Trade Marketing Blog — Tips, Guides & Insights",
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

      {/* Header */}
      <section className="relative pt-28 sm:pt-32 pb-10 lg:pt-36 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Marketing Blog · {posts.length} articles
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Marketing That Makes Sense for UK Trades.
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
                No fluff, no jargon — just honest guidance on how to get more of the
                right enquiries coming direct to your business, without being
                dependent on Checkatrade, Bark or Facebook groups.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

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
              {/* GHL form embed goes here */}
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <div className="w-full max-w-sm rounded-lg border border-border/40 bg-background/50 px-4 py-3 text-sm text-muted-foreground/50">
                  {/* Replace this div with your GHL embed snippet */}
                  GHL form embed
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <MobileCTABar />
    </main>
  )
}
