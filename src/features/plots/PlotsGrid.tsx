import { Link } from 'react-router-dom'
import type { PlotListing } from '@/types'
import { ArrowUpRight } from '@/components/ui'

function PlotListingCard({ plot }: { plot: PlotListing }) {
  return (
    <Link
      to={plot.path}
      aria-label={`${plot.name}, ${plot.facingLabel} facing, ${plot.sqftLabel} sq.ft`}
      className="group relative isolate block aspect-[608/404] overflow-hidden rounded-xl"
    >
      <img
        src={plot.image.src}
        alt={plot.image.alt}
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-ink/20" />

      <div className="absolute top-0 right-0 flex h-10 min-w-[211px] items-center justify-center gap-3 bg-secondary px-4 text-[14px] font-semibold text-paper sm:text-[16px]">
        <span>Facing : {plot.facingLabel}</span>
        <span aria-hidden="true">|</span>
        <span>Sqft : {plot.sqftLabel}</span>
      </div>

      <div className="absolute inset-x-[30px] bottom-[30px] flex items-end justify-between gap-4">
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-[20px] font-semibold uppercase text-paper lg:text-[24px]">
            {plot.name}
          </span>
          <span className="truncate text-[16px] font-medium capitalize text-paper">
            {plot.location}
          </span>
        </div>

        <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper backdrop-blur-[8px] transition-colors group-hover:bg-secondary">
          <ArrowUpRight className="size-6" />
        </span>
      </div>
    </Link>
  )
}

export function PlotsGrid({ plots }: { plots: readonly PlotListing[] }) {
  if (plots.length === 0) {
    return (
      <p className="py-16 text-center text-[16px] font-medium text-ink/60">
        No plots match these filters.
      </p>
    )
  }

  return (
    <div className="grid gap-2.5 lg:grid-cols-2">
      {plots.map((plot) => (
        <PlotListingCard key={plot.slug} plot={plot} />
      ))}
    </div>
  )
}
