"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionReveal } from "@/components/section-reveal"

export type BlogPostMeta = {
  slug: string
  title: string
  description: string
  readTime: string
  category: string
}

const ALL = "All"

export function BlogGrid({ posts }: { posts: BlogPostMeta[] }) {
  const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))]
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
              active === cat
                ? "border-secondary bg-secondary/10 text-secondary"
                : "border-border/40 text-muted-foreground hover:border-secondary/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <SectionReveal key={post.slug} direction="up" delay={60}>
            <article className="flex h-full flex-col rounded-xl border border-border/40 bg-card/40 p-5 sm:p-6 transition-all duration-300 hover:border-secondary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-secondary/10">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary/80">
                {post.category} · {post.readTime}
              </p>
              <h2 className="mt-3 text-base sm:text-lg font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-secondary hover:underline"
                >
                  Read article
                  <span aria-hidden className="ml-1">→</span>
                </Link>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </>
  )
}
