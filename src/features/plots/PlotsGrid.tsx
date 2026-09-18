import type { PlotListing } from '@/types'
import { MediaListingCard } from '@/components/ui'

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
        <MediaListingCard
          key={plot.path}
          to={plot.path}
          image={plot.image}
          title={plot.name}
          subtitle={plot.location}
          ariaLabel={`${plot.name}, ${plot.facingLabel} facing, ${plot.sqftLabel} sq.ft`}
          badge={
            <>
              <span>Facing : {plot.facingLabel}</span>
              <span aria-hidden="true">|</span>
              <span>Sqft : {plot.sqftLabel}</span>
            </>
          }
        />
      ))}
    </div>
  )
}
