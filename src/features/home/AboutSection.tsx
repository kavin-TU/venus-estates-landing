import { Link } from 'react-router-dom'
import { site } from '@/content'
import { ArrowUpRight, InlineMediaHeading, StatRow } from '@/components/ui'

export function AboutSection() {
  const { about } = site.home

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-stretch lg:gap-[50px] lg:py-[100px] lg:pl-0 lg:pr-[100px]">
        <div className="w-full shrink-0 self-start lg:w-[min(54%,760px)]">
          <img
            src={about.image.src}
            alt={about.image.alt}
            className="h-auto w-full object-contain object-left lg:h-[600px] lg:w-full lg:max-w-none"
            width={692}
            height={550}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-8 lg:max-w-[598px]">
          <InlineMediaHeading lines={about.heading.lines} />

          <div className="flex flex-col items-start gap-6">
            <p className="text-justify text-[16px] font-medium leading-normal text-ink">
              {about.body}
            </p>
            <Link
              to={about.cta.path}
              className="inline-flex items-center justify-center gap-1 overflow-hidden rounded-full bg-secondary px-[25px] py-3 text-[16px] font-semibold text-white transition hover:brightness-110"
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
