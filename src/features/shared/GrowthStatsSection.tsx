import type { EmphasisRun, GrowthStat, ImageAsset } from '@/types'
import { EmphasisText } from '@/components/ui'

type GrowthStatsSectionProps = {
  heading: readonly EmphasisRun[]
  body: string
  icon: ImageAsset
  stats: readonly GrowthStat[]
}

/** The "why Salem" 6-stat row shared by the NRI and Investor corner pages. */
export function GrowthStatsSection({ heading, body, icon, stats }: GrowthStatsSectionProps) {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[75px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[420px] lg:shrink-0 lg:text-[32px]">
            <EmphasisText runs={heading} />
          </h2>

          <p className="text-[16px] font-medium leading-[21px] text-ink lg:pt-1">{body}</p>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <li key={stat.index} className="flex flex-col gap-3">
              <img src={icon.src} alt={icon.alt} className="size-10" width={40} height={40} />
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
