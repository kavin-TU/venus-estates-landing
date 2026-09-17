import type { EmphasisRun } from '@/types'
import { site } from '@/content'

export function ProjectsIntro() {
  const { intro } = site.projects
  const heading: readonly EmphasisRun[] = intro.heading

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
      <h2 className="text-[24px] font-bold uppercase leading-[1.3125] text-ink sm:text-[28px] lg:w-[292px] lg:shrink-0 lg:text-[32px]">
        {heading.map((run, index) => (
          <span key={index} className={run.accent ? 'text-secondary' : undefined}>
            {run.text}
          </span>
        ))}
      </h2>

      <p className="text-[16px] font-medium leading-[21px] text-ink lg:w-[598px] lg:text-justify">
        {intro.body}
      </p>
    </div>
  )
}
