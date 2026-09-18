import type { EmphasisRun, ProtectCard } from '@/types'
import { site } from '@/content'
import { EmphasisText, MediaImage, SectionShell, SiteIcon } from '@/components/ui'

function Card({ card }: { card: ProtectCard }) {
  return (
    <div className="relative isolate flex min-h-[220px] flex-col justify-between overflow-hidden rounded-xl p-6 text-paper">
      <MediaImage
        src={card.background.src}
        alt={card.background.alt}
        fill
        wrapperClassName="-z-10"
      />
      <span className="absolute inset-0 -z-10 bg-ink/50" aria-hidden="true" />

      <div className="flex items-start justify-between gap-4">
        <SiteIcon name={card.icon} className="size-7 text-paper" />
        <span className="font-stat text-[32px] font-bold leading-none text-paper/30">
          {card.index}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[18px] font-bold leading-snug lg:text-[20px]">{card.title}</h3>
        <ul className="flex flex-col gap-1.5">
          {card.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-[14px] font-medium text-paper/90">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[420px] lg:shrink-0 lg:text-[32px]">
            <EmphasisText runs={heading} />
          </h2>

          <p className="text-[16px] font-medium leading-[21px] text-ink lg:pt-1">{protect.body}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {protect.cards.map((card) => (
            <Card key={card.index} card={card} />
          ))}
        </div>
      </SectionShell>
    </section>
  )
}
