import type { CapitalGrowthCard, EmphasisRun } from '@/types'
import { site } from '@/content'

function Card({ card }: { card: CapitalGrowthCard }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-secondary/40 bg-mist p-6">
      <img src={card.icon.src} alt={card.icon.alt} className="size-6" width={24} height={24} />
      <h3 className="text-[18px] font-medium leading-snug text-ink lg:text-[20px]">
        {card.title}
      </h3>
      <p className="text-[14px] font-medium leading-snug text-ink/70 sm:text-[16px]">
        {card.body}
      </p>
    </div>
  )
}

export function InvestorCapitalGrowthSection() {
  const { capitalGrowth } = site.investorCorner
  const heading: readonly EmphasisRun[] = capitalGrowth.heading

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[75px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[420px] lg:shrink-0 lg:text-[32px]">
            {heading.map((run, index) => (
              <span key={index} className={run.accent ? 'text-secondary' : undefined}>
                {run.text}
              </span>
            ))}
          </h2>

          <p className="text-[16px] font-medium leading-[21px] text-ink lg:pt-1">
            {capitalGrowth.body}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {capitalGrowth.cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
