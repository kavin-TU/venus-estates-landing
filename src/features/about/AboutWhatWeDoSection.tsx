import type { AboutFocusCard, EmphasisRun } from '@/types'
import { site } from '@/content'
import { MediaImage, SectionShell, SiteIcon } from '@/components/ui'

function FocusCard({ card }: { card: AboutFocusCard }) {
  return (
    <div className="flex h-fit flex-col gap-3 rounded-xl bg-footer p-6 text-paper">
      <SiteIcon name={card.icon} className="size-6 text-paper" />
      <h3 className="text-[18px] font-bold uppercase leading-snug lg:text-[20px]">{card.title}</h3>
      <p className="text-[14px] font-medium leading-snug text-paper/85 sm:text-[16px]">
        {card.body}
      </p>
    </div>
  )
}

/** Section-only heading colors: ink body + accent highlight (not shared EmphasisText). */
function WhatWeDoHeading({ runs }: { runs: readonly EmphasisRun[] }) {
  return (
    <>
      {runs.map((run, index) => (
        <span key={index} className={run.accent ? 'text-accent' : 'text-ink'}>
          {run.text}
        </span>
      ))}
    </>
  )
}

export function AboutWhatWeDoSection() {
  const { whatWeDo } = site.aboutPage
  const heading: readonly EmphasisRun[] = whatWeDo.heading
  const [visionCard, missionCard] = whatWeDo.cards

  return (
    <section className="bg-paper">
      <SectionShell>
        <div className="grid gap-4 sm:grid-cols-3 sm:items-stretch sm:gap-6 lg:gap-8">
          {/* Col 1: heading at image top + vision card on shared bottom baseline */}
          <div className="relative flex flex-col justify-end sm:min-h-0">
            <h2 className="mb-6 text-[24px] font-bold uppercase leading-[1.3125] sm:absolute sm:inset-x-0 sm:top-0 sm:mb-0 sm:text-[28px] lg:text-[32px]">
              <WhatWeDoHeading runs={heading} />
            </h2>
            <FocusCard card={visionCard} />
          </div>

          {/* Col 2: taller image — bottom-aligned with cards */}
          <div className="relative aspect-[5/4] min-h-[180px] overflow-hidden rounded-xl sm:min-h-[240px]">
            <MediaImage
              src={whatWeDo.image.src}
              alt={whatWeDo.image.alt}
              className="size-full object-cover"
            />
          </div>

          {/* Col 3: mission card on shared bottom baseline */}
          <div className="flex flex-col justify-end">
            <FocusCard card={missionCard} />
          </div>
        </div>
      </SectionShell>
    </section>
  )
}
