import type { EmphasisRun, ProtectCard } from '@/types'
import { site } from '@/content'
import { MediaImage, SectionShell, SiteIcon } from '@/components/ui'

function TwoLineTitle({ title }: { title: string }) {
  const splitAt = title.indexOf(': ')
  if (splitAt === -1) {
    return title
  }

  return (
    <>
      {title.slice(0, splitAt + 1)}
      <br />
      {title.slice(splitAt + 2)}
    </>
  )
}

function Card({ card }: { card: ProtectCard }) {
  return (
    <div className="relative isolate flex h-full min-h-[260px] flex-col overflow-hidden rounded-xl border border-ink/15 p-6 text-paper sm:min-h-[280px]">
      <MediaImage
        src={card.background.src}
        alt={card.background.alt}
        fill
        className="object-cover"
        wrapperClassName="-z-10"
      />
      {/* Light overlay — keep photo readable, text still legible */}
      <span
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/55 via-ink/25 to-ink/10"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <SiteIcon name={card.icon} className="size-7 text-accent" />
        <span className="font-stat text-[32px] font-bold leading-none text-paper/30">
          {card.index}
        </span>
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-8">
        <h3 className="min-h-[2.6em] text-[18px] font-bold leading-snug lg:text-[20px]">
          <TwoLineTitle title={card.title} />
        </h3>
        <ul className="flex flex-col gap-1.5">
          {card.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-[14px] font-medium text-paper/90">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function WhyUsProtectSection() {
  const { protect } = site.aboutPage.whyUs
  const heading: readonly EmphasisRun[] = protect.heading

  return (
    <section className="bg-paper text-ink">
      <SectionShell>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:max-w-[560px] lg:shrink-0 lg:text-[32px]">
            {heading.map((run, index) => (
              <span key={index} className={run.accent ? 'text-accent' : 'text-ink'}>
                {run.text}
              </span>
            ))}
          </h2>

          <p className="text-[16px] font-medium leading-[21px] text-ink lg:max-w-[480px] lg:pt-1 lg:text-left">
            {protect.body}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch">
          {protect.cards.map((card) => (
            <Card key={card.index} card={card} />
          ))}
        </div>
      </SectionShell>
    </section>
  )
}
