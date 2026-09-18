import type { CapitalGrowthCard, EmphasisRun } from '@/types'
import { site } from '@/content'
import { EmphasisText, SectionShell, SiteIcon } from '@/components/ui'

function Card({ card }: { card: CapitalGrowthCard }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-secondary/40 bg-mist p-6">
      <SiteIcon name={card.icon} className="size-6 text-secondary" />
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
      <SectionShell>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[420px] lg:shrink-0 lg:text-[32px]">
            <EmphasisText runs={heading} />
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
      </SectionShell>
    </section>
  )
}
