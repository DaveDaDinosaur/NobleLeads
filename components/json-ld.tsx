type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item, index) => (
          <script
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </>
    )
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}


