import type { AboutFocusCard, EmphasisRun } from '@/types'
import { site } from '@/content'

function FocusCard({ card }: { card: AboutFocusCard }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-xl bg-footer p-6 text-paper">
      <img
        src={card.icon.src}
        alt={card.icon.alt}
        className="size-6 mix-blend-screen"
        width={24}
        height={24}
      />
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
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[75px]">
        <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:text-[32px]">
          {heading.map((run, index) => (
            <span key={index} className={run.accent ? 'text-secondary' : undefined}>
              {run.text}
            </span>
          ))}
        </h2>

        <div className="grid gap-4 sm:grid-cols-3 sm:items-stretch">
          <FocusCard card={visionCard} />
          <img
            src={whatWeDo.image.src}
            alt={whatWeDo.image.alt}
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
          />
          <FocusCard card={missionCard} />
        </div>
      </div>
    </section>
  )
}
