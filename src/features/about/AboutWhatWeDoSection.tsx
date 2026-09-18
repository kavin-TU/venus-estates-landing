import type { AboutFocusCard, EmphasisRun } from '@/types'
import { site } from '@/content'
import { EmphasisText, MediaImage, SectionShell, SiteIcon } from '@/components/ui'

function FocusCard({ card }: { card: AboutFocusCard }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-xl bg-footer p-6 text-paper">
      <SiteIcon name={card.icon} className="size-6 text-paper" />
      <h3 className="text-[18px] font-bold uppercase leading-snug lg:text-[20px]">{card.title}</h3>
      <p className="text-[14px] font-medium leading-snug text-paper/85 sm:text-[16px]">
        {card.body}
      </p>
    </div>
  )
}

export function AboutWhatWeDoSection() {
  const { whatWeDo } = site.aboutPage
  const heading: readonly EmphasisRun[] = whatWeDo.heading
  const [visionCard, missionCard] = whatWeDo.cards

  return (
    <section className="bg-paper text-ink">
      <SectionShell>
        <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:text-[32px]">
          <EmphasisText runs={heading} />
        </h2>

        <div className="grid gap-4 sm:grid-cols-3 sm:items-stretch">
          <FocusCard card={visionCard} />
          <div className="relative min-h-[220px] overflow-hidden rounded-xl sm:min-h-0">
            <MediaImage
              src={whatWeDo.image.src}
              alt={whatWeDo.image.alt}
              className="size-full object-cover"
            />
          </div>
          <FocusCard card={missionCard} />
        </div>
      </SectionShell>
    </section>
  )
}
