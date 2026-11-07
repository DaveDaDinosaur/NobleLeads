"use client"

import { useState } from "react"
import Link from "next/link"

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
            className={`min-touch rounded-full border px-4 py-1.5 text-xs transition-colors ${
              active === cat
                ? "border-secondary/70 text-secondary"
                : "border-foreground/15 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List */}
      <ul className="border-t border-border">
        {filtered.map((post) => (
          <li key={post.slug} className="border-b border-border">
            <Link
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-1 gap-3 py-7 lg:grid-cols-12 lg:gap-8"
            >
              <p className="label-mono pt-1 text-muted-foreground lg:col-span-3">
                {post.category} · {post.readTime}
              </p>
              <h2 className="text-xl font-medium leading-snug text-foreground transition-colors duration-500 group-hover:text-secondary sm:text-2xl lg:col-span-5">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-4">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
