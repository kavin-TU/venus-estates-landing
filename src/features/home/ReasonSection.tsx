import type { JSX } from 'react'
import type { ReasonCard, ReasonIcon } from '@/types'
import { site } from '@/content'
import { cn } from '@/lib'
import {
  File,
  FlipHorizontal,
  HourglassLow,
  InlineMediaHeading,
  MapPinSimpleArea,
  Reveal,
  SealCheck,
} from '@/components/ui'

const ICONS: Record<ReasonIcon, (props: { className?: string }) => JSX.Element> =
  {
    transparent: FlipHorizontal,
    legal: File,
    approved: SealCheck,
    onTime: HourglassLow,
    location: MapPinSimpleArea,
  }

const CARD_BASE =
  'flex flex-col justify-between gap-2.5 rounded-xl border border-ink/20 p-5'

function PlainCard({ card, tinted }: { card: ReasonCard; tinted: boolean }) {
  const Icon = ICONS[card.icon]
  return (
    <div
      className={cn(
        CARD_BASE,
        'min-h-[200px] lg:min-h-0 lg:flex-1',
        tinted ? 'bg-mist' : 'bg-paper',
      )}
    >
      <div className="flex flex-col gap-2.5">
        <Icon className="h-[25px] w-[26px] text-secondary" />
        <h3 className="text-[20px] font-medium leading-snug text-ink lg:text-[24px]">
          {card.title}
        </h3>
      </div>
      <p className="text-[16px] font-medium leading-normal text-ink">
        {card.body}
      </p>
    </div>
  )
}

function FeaturedCard({ card }: { card: ReasonCard }) {
  const Icon = ICONS[card.icon]
  return (
    <div
      className={cn(
        CARD_BASE,
        'relative isolate h-full min-h-[280px] overflow-hidden text-paper lg:min-h-0',
      )}
    >
      {card.image ? (
        <img
          src={card.image.src}
          alt={card.image.alt}
          className="absolute inset-0 -z-10 size-full object-cover"
          loading="lazy"
        />
      ) : null}
      <span className="absolute inset-0 -z-10 bg-ink/20" />

      <div className="flex flex-col gap-2.5">
        <Icon className="size-[27px] text-paper" />
        <h3 className="text-[20px] font-medium leading-snug lg:text-[24px]">
          {card.title}
        </h3>
      </div>
      <p className="text-[16px] font-semibold leading-normal">{card.body}</p>
    </div>
  )
}

export function ReasonSection() {
  const { reasons } = site.home
  const cards: readonly ReasonCard[] = reasons.cards
  const [leftTop, leftBottom, featured, rightTop, rightBottom] = cards

  return (
    <section className="relative isolate bg-mist text-ink">
      <img
        src={reasons.background.src}
        alt={reasons.background.alt}
        className="absolute inset-0 -z-10 size-full object-cover opacity-10"
        loading="lazy"
      />

      <Reveal className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 sm:px-10 lg:gap-[32px] lg:px-[100px] lg:py-[100px]">
        <InlineMediaHeading lines={reasons.heading.lines} className="text-ink" />

        <div className="grid gap-4 md:grid-cols-2 lg:h-[494px] lg:grid-cols-[389fr_431fr_389fr]">
          <div className="flex flex-col gap-4">
            <PlainCard card={leftTop} tinted />
            <PlainCard card={leftBottom} tinted={false} />
          </div>

          <div className="md:col-span-2 lg:col-span-1 lg:h-full">
            <FeaturedCard card={featured} />
          </div>

          <div className="flex flex-col gap-4">
            <PlainCard card={rightTop} tinted={false} />
            <PlainCard card={rightBottom} tinted />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
