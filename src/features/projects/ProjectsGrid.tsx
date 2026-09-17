import { Link } from 'react-router-dom'
import type { ProjectListing } from '@/types'
import { ArrowUpRight } from '@/components/ui'

function ProjectListingCard({ project }: { project: ProjectListing }) {
  return (
    <Link
      to={project.path}
      aria-label={`${project.name}, ${project.location}`}
      className="group relative isolate block aspect-[608/404] overflow-hidden rounded-xl"
    >
      <img
        src={project.image.src}
        alt={project.image.alt}
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Legibility wash: transparent at the top, black at 20% by the bottom */}
      <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-ink/20" />

      <span className="absolute top-0 right-0 flex h-10 min-w-[211px] items-center justify-center bg-secondary px-4 text-[16px] font-semibold text-white">
        {project.statusLabel}
      </span>

      <div className="absolute inset-x-[30px] bottom-[30px] flex items-end justify-between gap-4">
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-[20px] font-semibold uppercase text-white lg:text-[24px]">
            {project.name}
          </span>
          <span className="truncate text-[16px] font-medium capitalize text-white">
            {project.location}
          </span>
        </div>

        <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-[8px] transition-colors group-hover:bg-secondary">
          <ArrowUpRight className="size-6" />
        </span>
      </div>
    </Link>
  )
}

export function ProjectsGrid({ projects }: { projects: readonly ProjectListing[] }) {
  if (projects.length === 0) {
    return (
      <p className="py-16 text-center text-[16px] font-medium text-ink/60">
        No projects in this category yet.
      </p>
    )
  }

  return (
    <div className="grid gap-2.5 lg:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectListingCard key={`${project.name}-${index}`} project={project} />
      ))}
    </div>
  )
}
