import type { EmphasisRun } from '@/types'
import { site } from '@/content'

export function ProjectsBanner() {
  const { banner } = site.projects
  const heading: readonly EmphasisRun[] = banner.heading

  return (
    <section className="relative isolate bg-paper">
      <div className="aspect-[1440/820] overflow-hidden lg:aspect-auto lg:h-[820px]">
        <img
          src={banner.image.src}
          alt={banner.image.alt}
          className="size-full object-cover"
          loading="eager"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[60px]">
          {/* Sits on the light sketch tile at row 2, column 1 — hence black */}
          <h1 className="text-[20px] font-bold uppercase leading-[1.3125] text-ink sm:text-[28px] lg:text-[32px]">
            {heading.map((run, index) => (
              <span
                key={index}
                className={run.accent ? 'text-secondary' : undefined}
              >
                {run.text}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  )
}
