import { Link } from 'react-router-dom'
import type { EmphasisRun } from '@/types'
import { site } from '@/content'
import { ArrowUpRight, primaryCtaClass } from '@/components/ui'
import { cn } from '@/lib'

export function NriHeroSection() {
  const { hero } = site.nriCorner
  const heading: readonly EmphasisRun[] = hero.heading

  return (
    <section className="relative isolate flex min-h-[600px] flex-col items-center justify-center overflow-hidden bg-ink text-center text-paper lg:h-[780px]">
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        className="absolute inset-0 -z-10 size-full object-cover"
        loading="eager"
      />
      <span className="absolute inset-0 -z-10 bg-ink/40" aria-hidden="true" />

      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-6 pt-20 lg:pt-16">
        <h1 className="text-[24px] font-bold uppercase leading-[1.3] sm:text-[32px] lg:text-[40px]">
          {heading.map((run, index) => (
            <span key={index} className={run.accent ? 'text-secondary' : undefined}>
              {run.text}
            </span>
          ))}
        </h1>

        <p className="max-w-[640px] text-[16px] font-semibold leading-normal text-paper/90">
          {hero.body}
        </p>

        <p className="text-[14px] font-medium leading-snug text-paper/80">
          {hero.complianceLine}
        </p>

        <Link
          to={hero.cta.path}
          className={cn(primaryCtaClass, 'mt-2 overflow-hidden')}
        >
          {hero.cta.label}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
