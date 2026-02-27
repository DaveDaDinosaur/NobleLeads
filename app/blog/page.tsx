import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { buildMetadata } from "../(shared)/seo-config"

type BlogPostMeta = {
  slug: string
  title: string
  description: string
  primaryKeyword: string
  readTime: string
}

const posts: BlogPostMeta[] = [
  {
    slug: "is-checkatrade-worth-it-2025",
    title: "Is Checkatrade Worth It in 2025? Honest Answer for UK Trades",
    description:
      "Thinking about joining or staying on Checkatrade? We break down what it really costs in 2025, when it makes sense and when you should own your own lead flow instead.",
    primaryKeyword: "is checkatrade worth it 2025 UK",
    readTime: "12 min read",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Trade Marketing Blog — Tips, Guides & Insights",
  description:
    "Practical trade marketing advice for UK tradespeople on getting more leads, building a website that works and growing without relying only on referrals or lead-buying sites.",
  canonicalPath: "/blog",
})

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative pt-28 sm:pt-32 pb-10 lg:pt-36 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Marketing Blog
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Marketing That Makes Sense for UK Trades.
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
                No fluff, no jargon—just honest guidance on how to get more of the
                right enquiries coming direct to your business, without being
                dependent on Checkatrade, Bark or Facebook groups.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <SectionReveal key={post.slug} direction="up" delay={60}>
                <article className="flex h-full flex-col rounded-xl border border-border/40 bg-card/40 p-5 sm:p-6 transition-all duration-300 hover:border-secondary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-secondary/10">
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary/80">
                    Blog · {post.readTime}
                  </p>
                  <h2 className="mt-3 text-base sm:text-lg font-semibold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <p className="mt-4 text-[11px] text-muted-foreground/80">
                    Primary keyword:{" "}
                    <span className="font-medium text-foreground">
                      {post.primaryKeyword}
                    </span>
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center font-semibold text-secondary hover:underline"
                    >
                      Read article
                      <span aria-hidden className="ml-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTABar />
    </main>
  )
}

