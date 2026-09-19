import { Link } from 'react-router-dom'
import { site } from '@/content'
import {
  ArrowUpRight,
  InlineMediaHeading,
  MediaImage,
  Reveal,
  StatRow,
  primaryCtaBaseClass,
} from '@/components/ui'
import { cn } from '@/lib'

export function AboutSection() {
  const { about } = site.home

  return (
    <section className="bg-paper text-ink">
      {/* 1340 of content: 760 image + 40 gap + 540 text, gutter on the right only */}
      <Reveal className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-start lg:gap-10 lg:py-[50px] lg:pr-[100px] lg:pl-0">
        {/* Wider than before so the blueprint sits flush left and reads larger;
            both columns still shrink between lg (1024) and 1440. */}
        <div className="relative w-full overflow-hidden lg:min-w-0 lg:w-[760px] lg:aspect-[760/600]">
          <MediaImage
            src={about.image.src}
            alt={about.image.alt}
            className="h-auto w-full origin-left scale-[1.06] object-contain object-left lg:absolute lg:inset-0 lg:h-full lg:w-full"
            width={760}
            height={600}
          />
          {/* Measure marks sitting on the drawing's baseline */}
          <span
            className="absolute bottom-0 left-[12%] hidden h-0.5 w-[13.87%] bg-ink lg:block"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-0 left-[72%] hidden h-0.5 w-[12.28%] bg-ink lg:block"
            aria-hidden="true"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-8 lg:w-[540px] lg:gap-[50px]">
          <InlineMediaHeading lines={about.heading.lines} className="text-ink" />

          <div className="flex flex-col items-start gap-6">
            <p className="text-justify text-[16px] font-medium leading-[21px] text-ink">
              {about.body}
            </p>
            <Link
              to={about.cta.path}
              className={cn(primaryCtaBaseClass, 'h-[45px] overflow-hidden')}
            >
              {about.cta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <StatRow items={about.stats} />
        </div>
      </Reveal>
    </section>
  )
}
