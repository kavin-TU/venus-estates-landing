import { Link } from 'react-router-dom'
import { site } from '@/content'
import { ArrowUpRight, InlineMediaHeading, StatRow } from '@/components/ui'

export function AboutSection() {
  const { about } = site.home

  return (
    <section className="bg-white text-ink">
      {/* 1340 of content: 692 image + 50 gap + 598 text, gutter on the right only */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-start lg:gap-[50px] lg:py-[50px] lg:pr-[100px] lg:pl-0">
        {/* 692 and 598 are the 1440-frame widths; both shrink below that so the
            row never overflows between lg (1024) and 1440. */}
        <div className="relative w-full lg:min-w-0 lg:w-[692px] lg:aspect-[692/550]">
          <img
            src={about.image.src}
            alt={about.image.alt}
            className="h-auto w-full object-contain object-left lg:h-full"
            width={692}
            height={550}
          />
          {/* Measure marks sitting on the drawing's baseline */}
          <span
            className="absolute bottom-0 left-[15.75%] hidden h-0.5 w-[13.87%] bg-ink lg:block"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-0 left-[75.58%] hidden h-0.5 w-[12.28%] bg-ink lg:block"
            aria-hidden="true"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-8 lg:w-[598px] lg:gap-[50px]">
          <InlineMediaHeading lines={about.heading.lines} className="text-ink" />

          <div className="flex flex-col items-start gap-6">
            <p className="text-justify text-[16px] font-medium leading-[21px] text-ink">
              {about.body}
            </p>
            <Link
              to={about.cta.path}
              className="inline-flex h-[45px] items-center justify-center gap-1 overflow-hidden rounded-full bg-secondary px-[25px] text-[16px] font-semibold text-white transition hover:brightness-110"
            >
              {about.cta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <StatRow items={about.stats} />
        </div>
      </div>
    </section>
  )
}
