import type { EmphasisRun, NriStat } from '@/types'
import { site } from '@/content'

export function NriWhySection() {
  const { why } = site.nriCorner
  const heading: readonly EmphasisRun[] = why.heading
  const stats: readonly NriStat[] = why.stats

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[75px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[420px] lg:shrink-0 lg:text-[32px]">
            {heading.map((run, index) => (
              <span key={index} className={run.accent ? 'text-secondary' : undefined}>
                {run.text}
              </span>
            ))}
          </h2>

          <p className="text-[16px] font-medium leading-[21px] text-ink lg:pt-1">
            {why.body}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <li key={stat.index} className="flex flex-col gap-3">
              <img
                src={why.icon.src}
                alt={why.icon.alt}
                className="size-10"
                width={40}
                height={40}
              />
              <span className="block h-px w-full bg-ink/20" aria-hidden="true" />
              <span className="font-stat text-[24px] font-semibold leading-none text-secondary">
                {stat.index}
              </span>
              <p className="text-[14px] font-medium leading-snug text-ink sm:text-[16px]">
                {stat.value}
                <br />
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
