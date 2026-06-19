import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { BUSINESS_URL } from "@/app/(shared)/schema"

export type BreadcrumbItem = {
  label: string
  href: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const all = [{ label: "Home", href: "/" }, ...items]

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${BUSINESS_URL}${item.href}`,
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground/60">
          {all.map((item, index) => {
            const isLast = index === all.length - 1
            return (
              <li key={item.href} className="flex items-center gap-1">
                {index > 0 && (
                  <span aria-hidden className="select-none">
                    /
                  </span>
                )}
                {isLast ? (
                  <span className="text-muted-foreground/80" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
