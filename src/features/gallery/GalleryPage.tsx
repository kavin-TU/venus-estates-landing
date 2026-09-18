import { useState } from 'react'
import type { GalleryAlbum } from '@/types'
import { site } from '@/content'
import { CarouselArrows, CarouselDots, SectionShell } from '@/components/ui'
import { GalleryBanner } from './GalleryBanner'
import { GalleryGrid } from './GalleryGrid'
import { GalleryIntro } from './GalleryIntro'

export function GalleryPage() {
  const { albums, pageSize } = site.gallery
  const all: readonly GalleryAlbum[] = albums

  const [page, setPage] = useState(0)
  const pageCount = Math.max(1, Math.ceil(all.length / pageSize))
  const current = Math.min(page, pageCount - 1)
  const visible = all.slice(current * pageSize, current * pageSize + pageSize)

  return (
    <>
      <GalleryBanner />

      <section className="bg-paper text-ink">
        <SectionShell padding="compact">
          <GalleryIntro />
          <GalleryGrid albums={visible} />

          {pageCount > 1 ? (
            <div className="flex items-center justify-between gap-6">
              <CarouselDots
                count={pageCount}
                activeIndex={current}
                onSelect={setPage}
                label="Go to gallery page"
              />
              <CarouselArrows
                label="gallery page"
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
