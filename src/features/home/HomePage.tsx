import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/ui'
import { site } from '@/content'

export function HomePage() {
  const { nameUpper, home, cta } = site

  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(232,147,84,0.18),transparent_55%),linear-gradient(160deg,#0a0a0a_0%,#1a0f0c_45%,#000_100%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
        <p className="font-display text-sm font-bold tracking-[0.28em] text-accent">{nameUpper}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {home.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          {home.subcopy}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={cta.bookVisit.path}
            className="inline-flex items-center gap-2 rounded-full bg-accent-bright px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {cta.bookVisit.label}
            <ArrowUpRight className="size-3.5" />
          </Link>
          <Link
            to={cta.viewProjects.path}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
          >
            {cta.viewProjects.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
