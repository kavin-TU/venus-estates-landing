import { useState } from 'react'
import type { EmphasisRun, ImageAsset } from '@/types'
import { CarouselArrows, CarouselDots } from '@/components/ui'

type PlotGallerySectionProps = {
  heading: readonly EmphasisRun[]
  body: string
  images: readonly ImageAsset[]
  pageSize: number
}

export function PlotGallerySection({
  heading,
  body,
  images,
  pageSize,
}: PlotGallerySectionProps) {
  const [page, setPage] = useState(0)
  const pageCount = Math.max(1, Math.ceil(images.length / pageSize))
  const current = Math.min(page, pageCount - 1)
  const visible = images.slice(current * pageSize, current * pageSize + pageSize)

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[292px] lg:shrink-0 lg:text-[32px]">
            {heading.map((run, index) => (
              <span key={index} className={run.accent ? 'text-secondary' : undefined}>
                {run.text}
              </span>
            ))}
          </h2>
          <p className="text-[16px] font-medium leading-[21px] lg:w-[598px] lg:text-justify">
            {body}
          </p>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {visible.map((image) => (
            <div
              key={image.src}
              className="aspect-square overflow-hidden rounded-xl bg-mist"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

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
      </div>
    </section>
  )
}
