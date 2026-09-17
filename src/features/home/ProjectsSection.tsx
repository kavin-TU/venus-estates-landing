import { Link } from 'react-router-dom'
import type { EmphasisRun, ProjectCard } from '@/types'
import { site } from '@/content'
import { cn } from '@/lib'
import { ArrowUpRight, InlineMediaHeading } from '@/components/ui'
import {
  projectsCard,
  projectsCardRatio,
  projectsPlots,
  projectsRail,
} from './projectsLayout'

function ProjectTile({ card }: { card: ProjectCard }) {
  return (
    <Link to={card.path} className={projectsCard} aria-label={card.name}>
      <div className={projectsCardRatio}>
        <img
          src={card.image.src}
          alt={card.image.alt}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Legibility wash behind the top and bottom labels */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/55" />

      <div className="absolute inset-x-5 top-5 z-10 flex flex-col gap-1">
        <span className="font-stat text-[16px] font-semibold leading-none text-secondary">
          {card.index}
        </span>
        <span className="text-[16px] font-bold leading-none text-white">
          {card.name}
        </span>
      </div>

      <span className={projectsPlots}>{card.plots}</span>

      <span className="absolute right-5 bottom-5 z-10 flex size-10 items-center justify-center rounded-full bg-glass text-white backdrop-blur-[8px] transition-colors group-hover:bg-secondary">
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  )
}

export function ProjectsSection() {
  const { projects } = site.home
  const intro: readonly EmphasisRun[] = projects.intro
  const cards: readonly ProjectCard[] = projects.cards

  return (
    <section className="bg-mist text-ink">
      {/* Header keeps the 1440 container; the card rail below is full-bleed. */}
      <div className="mx-auto max-w-[1440px] pt-12 lg:pt-[50px]">
        <div className="flex flex-col gap-8 px-6 pb-10 sm:px-10 lg:flex-row lg:items-start lg:gap-[50px] lg:px-[100px] lg:pb-[50px]">
          <div className="flex flex-col items-start gap-2 lg:w-[501px] lg:shrink-0">
            <InlineMediaHeading
              lines={projects.heading.lines}
              className="text-ink"
            />
            <Link
              to={projects.cta.path}
              className="inline-flex items-center gap-1 text-[16px] font-semibold text-secondary underline underline-offset-4 hover:brightness-110"
            >
              {projects.cta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <p className="text-[16px] font-semibold leading-normal lg:flex-1 lg:text-justify">
            {intro.map((run, index) => (
              <span
                key={index}
                className={cn(run.accent && 'text-secondary')}
              >
                {run.text}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className={projectsRail}>
        {cards.map((card) => (
          <ProjectTile key={card.name} card={card} />
        ))}
      </div>
    </section>
  )
}
