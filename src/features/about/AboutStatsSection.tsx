import { CountUp, MediaImage, Reveal } from '@/components/ui'
import { site } from '@/content'

export function AboutStatsSection() {
  const { stats } = site.aboutPage

  return (
    <Reveal as="section" className="relative isolate overflow-hidden bg-ink">
      <MediaImage
        src={stats.background.src}
        alt={stats.background.alt}
        fill
        wrapperClassName="-z-10"
      />
      <span className="absolute inset-0 -z-10 bg-ink/45" aria-hidden="true" />

      <div className="mx-auto grid max-w-[1440px] grid-cols-3 divide-x divide-white/30 px-6 py-10 sm:px-10 lg:px-[100px] lg:py-[60px]">
        {stats.items.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-2 text-center">
            <span className="font-stat text-[28px] font-bold text-paper sm:text-[36px] lg:text-[44px]">
              <CountUp
                value={Number.parseInt(stat.value, 10) || 0}
                pad={stat.value.length}
                suffix={stat.suffix}
              />
            </span>
            <span className="text-[12px] font-medium text-paper/90 sm:text-[14px] lg:text-[16px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
