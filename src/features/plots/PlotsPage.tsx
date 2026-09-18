import { useMemo, useState } from 'react'
import type { PlotListing } from '@/types'
import { site } from '@/content'
import { CarouselArrows, CarouselDots, SectionShell } from '@/components/ui'
import { PlotsBanner } from './PlotsBanner'
import { PlotsFilters, type PlotsFilterState } from './PlotsFilters'
import { PlotsGrid } from './PlotsGrid'
import { PlotsIntro } from './PlotsIntro'

const DEFAULT_PLOTS_FILTERS: PlotsFilterState = {
  facing: 'all',
  sqft: 'all',
  price: 'all',
}

function matchesSqft(plot: PlotListing, band: string) {
  if (band === 'all') return true
  if (band === '1000-1500') return plot.sqft >= 1000 && plot.sqft <= 1500
  if (band === '1500-2000') return plot.sqft > 1500 && plot.sqft <= 2000
  if (band === '2000+') return plot.sqft > 2000
  return true
}

export function PlotsPage() {
  const { items, pageSize } = site.plots
  const all: readonly PlotListing[] = items

  const [filters, setFilters] = useState<PlotsFilterState>(DEFAULT_PLOTS_FILTERS)
  const [page, setPage] = useState(0)

  const filtered = useMemo(
    () =>
      all.filter((plot) => {
        if (filters.facing !== 'all' && plot.facing !== filters.facing) return false
        if (!matchesSqft(plot, filters.sqft)) return false
        if (filters.price !== 'all' && plot.priceBand !== filters.price) return false
        return true
      }),
    [all, filters],
  )

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const current = Math.min(page, pageCount - 1)
  const visible = filtered.slice(current * pageSize, current * pageSize + pageSize)

  const updateFilters = (next: PlotsFilterState) => {
    setFilters(next)
    setPage(0)
  }

  const resetFilters = () => {
    setFilters(DEFAULT_PLOTS_FILTERS)
    setPage(0)
  }

  return (
    <>
      <PlotsBanner />

      <section className="bg-paper text-ink">
        <SectionShell padding="compact">
          <PlotsIntro />

          <div className="flex flex-col gap-8">
            <PlotsFilters
              value={filters}
              onChange={updateFilters}
              onReset={resetFilters}
            />
            <PlotsGrid plots={visible} />
          </div>

          {pageCount > 1 ? (
            <div className="flex items-center justify-between gap-6">
              <CarouselDots
                count={pageCount}
                activeIndex={current}
                onSelect={setPage}
                label="Go to plots page"
              />
              <CarouselArrows
                label="plots page"
                onPrev={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
                onNext={() => setPage((p) => (p + 1) % pageCount)}
              />
            </div>
          ) : null}
        </SectionShell>
      </section>
    </>
  )
}
