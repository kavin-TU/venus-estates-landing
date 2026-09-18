import { useMemo, useState } from 'react'
import type { ProjectFilter, ProjectListing } from '@/types'
import { site } from '@/content'
import { CarouselArrows, CarouselDots } from '@/components/ui'
import { ProjectsBanner } from './ProjectsBanner'
import { ProjectsFilters } from './ProjectsFilters'
import { ProjectsGrid } from './ProjectsGrid'
import { ProjectsIntro } from './ProjectsIntro'

export function ProjectsPage() {
  const { items, pageSize } = site.projects
  const all: readonly ProjectListing[] = items

  const [filter, setFilter] = useState<ProjectFilter['id']>('all')
  const [page, setPage] = useState(0)

  const filtered = useMemo(
    () => (filter === 'all' ? all : all.filter((p) => p.status === filter)),
    [all, filter],
  )

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  // A filter change can leave the index past the end; clamp during render.
  const current = Math.min(page, pageCount - 1)
  const visible = filtered.slice(current * pageSize, current * pageSize + pageSize)

  const selectFilter = (id: ProjectFilter['id']) => {
    setFilter(id)
    setPage(0)
  }

  return (
    <>
      <ProjectsBanner />

      <section className="bg-paper text-ink">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[50px]">
          <ProjectsIntro />

          <div className="flex flex-col gap-8">
            <ProjectsFilters active={filter} onChange={selectFilter} />
            <ProjectsGrid projects={visible} />
          </div>

          {pageCount > 1 ? (
            <div className="flex items-center justify-between gap-6">
              <CarouselDots
                count={pageCount}
                activeIndex={current}
                onSelect={setPage}
                label="Go to projects page"
              />
              <CarouselArrows
                label="projects page"
                onPrev={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
                onNext={() => setPage((p) => (p + 1) % pageCount)}
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}
