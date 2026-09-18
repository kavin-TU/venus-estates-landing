import { MediaImage, Reveal } from '@/components/ui'

type PlotDetailHeroProps = {
  image: { src: string; alt: string }
  title: string
  body: string
  stats: readonly { value: string; label: string }[]
}

export function PlotDetailHero({ image, title, body, stats }: PlotDetailHeroProps) {
  return (
    <Reveal as="section" fadeOnly className="relative isolate min-h-[520px] overflow-hidden bg-ink lg:h-[820px]">
      <MediaImage
        src={image.src}
        alt={image.alt}
        fill
        loading="eager"
      />
      <span className="absolute inset-0 bg-ink/35" aria-hidden="true" />

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end gap-8 px-6 pb-12 pt-28 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-[60px] lg:pb-[60px] lg:pt-0">
        <div className="max-w-[432px] text-paper">
          <h1 className="text-[36px] font-bold uppercase leading-[1.15] sm:text-[48px] lg:text-[56px]">
            {title}
          </h1>
          <p className="mt-3 text-[16px] font-medium leading-[21px] text-paper/90">
            {body}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:w-[602px]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex h-[90px] flex-col justify-center rounded-[10px] bg-paper/15 px-3 backdrop-blur-[8px] sm:h-[110px] sm:px-4"
            >
              <span className="font-stat text-[28px] font-bold uppercase leading-none text-paper sm:text-[40px] lg:text-[50px]">
                {stat.value}
              </span>
              <span className="mt-1 text-[12px] font-medium uppercase tracking-wide text-paper/85 sm:text-[14px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
