import type { ProjectFilter } from '@/types'
import { site } from '@/content'
import { cn } from '@/lib'

type ProjectsFiltersProps = {
  active: ProjectFilter['id']
  onChange: (id: ProjectFilter['id']) => void
}

export function ProjectsFilters({ active, onChange }: ProjectsFiltersProps) {
  const filters: readonly ProjectFilter[] = site.projects.filters

  return (
    <div
      role="group"
      aria-label="Filter projects by status"
      className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
    >
      {filters.map((filter) => {
        const selected = filter.id === active
        return (
          <button
            key={filter.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(filter.id)}
            className={cn(
              'h-[39px] shrink-0 rounded-full border border-secondary px-5 text-[16px] font-semibold capitalize transition-colors',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
              selected
                ? 'bg-secondary text-paper'
                : 'text-secondary hover:bg-secondary/10',
            )}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
