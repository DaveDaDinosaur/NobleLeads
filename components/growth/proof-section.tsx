import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProofPlaceholder } from "@/components/proof-placeholder"
import { caseStudies, testimonials } from "@/lib/proof"

export function CaseStudyCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {caseStudies.map((cs) => (
        <article
          key={cs.slug}
          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-500 hover:border-secondary/40"
        >
          <Link href={cs.href} className="relative block aspect-[16/10] overflow-hidden">
            <Image
              src={cs.image}
              alt={cs.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04] ${cs.imagePosition}`}
            />
          </Link>
          <div className="flex flex-1 flex-col p-6 sm:p-9">
            <p className="label-mono text-muted-foreground">
              {cs.sector}
            </p>
            <h3 className="display mt-4 text-3xl text-foreground sm:text-4xl">
              <Link href={cs.href} className="transition-colors hover:text-secondary">
                {cs.client}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{cs.headline}</p>
            <div className="mt-6 border-l-2 border-secondary pl-4">
              <p className="text-base text-foreground">{cs.result}</p>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground/70">{cs.location}</p>
            <Link
              href={cs.href}
              className="label-mono mt-8 inline-flex items-center gap-2 text-secondary"
            >
              Read the case study
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <ProofPlaceholder
            key={n}
            label={`Client testimonial ${n}`}
            note="Add a real quote with the client's written permission in lib/proof.ts: quote, name, business and trade."
          />
        ))}
      </div>
    )
  }

  const single = testimonials.length === 1

  return (
    <div className={single ? "max-w-4xl" : "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"}>
      {testimonials.map((t) => (
        <figure
          key={`${t.name}-${t.business}`}
          className="flex h-full flex-col border-l-2 border-secondary pl-6 sm:pl-8"
        >
          <blockquote className={`flex-1 text-foreground ${single ? "text-xl leading-snug sm:text-2xl" : "text-base leading-relaxed"}`}>
            {`"${t.quote}"`}
          </blockquote>
          <figcaption className="mt-6">
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">
              {t.business} · {t.trade}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
