import { CountUp, MediaImage, Reveal } from '@/components/ui'
import { site } from '@/content'
import { cn } from '@/lib'

export function AboutStatsSection() {
  const { stats } = site.aboutPage

  return (
    <Reveal
      as="section"
      className="relative isolate min-h-[280px] overflow-hidden bg-ink lg:min-h-[320px]"
    >
      <MediaImage
        src={stats.background.src}
        alt={stats.background.alt}
        fill
        className="object-cover object-[center_22%]"
        wrapperClassName="-z-10"
      />
      <span className="absolute inset-0 -z-10 bg-ink/5" aria-hidden="true" />

      <div className="relative mx-auto grid h-full min-h-[280px] max-w-[1440px] grid-cols-3 px-6 sm:px-10 lg:min-h-[320px] lg:px-[100px]">
        {stats.items.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              'flex flex-col items-center justify-center gap-1 px-2 py-16 text-center sm:py-20 lg:py-[100px]',
              index > 0 && 'border-l border-paper',
            )}
          >
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
