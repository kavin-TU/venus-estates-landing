import type { ProjectListing } from '@/types'
import { MediaListingCard } from '@/components/ui'

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
        <MediaListingCard
          key={`${project.name}-${index}`}
          to={project.path}
          image={project.image}
          title={project.name}
          subtitle={project.location}
          ariaLabel={`${project.name}, ${project.location}`}
          badge={project.statusLabel}
        />
      ))}
    </div>
  )
}
