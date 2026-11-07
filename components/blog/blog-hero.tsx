export function BlogHero({ postCount }: { postCount: number }) {
  return (
    <section className="pb-14 pt-32 sm:pb-16 sm:pt-40 lg:pb-20 lg:pt-52">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <p className="label-mono text-muted-foreground">
          Trade marketing guides · {postCount} articles
        </p>
        <h1 className="display mt-5 max-w-5xl text-balance text-5xl text-foreground sm:text-6xl lg:text-7xl xl:text-[6rem]">
          Marketing that makes sense <span className="accent-mono text-secondary">for UK trades.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          No fluff, no jargon, just honest guidance on how to get more of the right enquiries
          coming direct to your business, without being dependent on Checkatrade, Bark or
          Facebook groups.
        </p>
      </div>
    </section>
  )
}
