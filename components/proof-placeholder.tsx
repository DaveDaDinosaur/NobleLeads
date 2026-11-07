const showPlaceholders =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true"

export function ProofPlaceholder({
  label,
  note,
  className = "",
}: {
  label: string
  note?: string
  className?: string
}) {
  if (!showPlaceholders) return null

  return (
    <div
      className={`rounded-xl border-2 border-dashed border-amber-400/60 bg-amber-400/[0.06] p-5 text-left ${className}`}
      data-proof-placeholder
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300">
        Placeholder: {label}
      </p>
      {note ? (
        <p className="mt-2 text-xs leading-relaxed text-amber-100/80">{note}</p>
      ) : null}
      <p className="mt-2 text-[11px] text-amber-100/60">
        Hidden on the live site until filled in.
      </p>
    </div>
  )
}
