import { useState } from 'react'
import type { BlogArticle } from '@/types'
import { site } from '@/content'
import { CarouselArrows, CarouselDots, SectionShell } from '@/components/ui'
import { BlogBanner } from './BlogBanner'
import { BlogGrid } from './BlogGrid'
import { BlogIntro } from './BlogIntro'

export function BlogPage() {
  const { posts, pageSize } = site.blog
  const all: readonly BlogArticle[] = posts

  const [page, setPage] = useState(0)
  const pageCount = Math.max(1, Math.ceil(all.length / pageSize))
  const current = Math.min(page, pageCount - 1)
  const visible = all.slice(current * pageSize, current * pageSize + pageSize)

  return (
    <>
      <BlogBanner />

      <section className="bg-paper text-ink">
        <SectionShell padding="compact">
          <BlogIntro />
          <BlogGrid posts={visible} />

          {pageCount > 1 ? (
            <div className="flex items-center justify-between gap-6">
              <CarouselDots
                count={pageCount}
                activeIndex={current}
                onSelect={setPage}
                label="Go to blog page"
              />
              <CarouselArrows
                label="blog page"
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
