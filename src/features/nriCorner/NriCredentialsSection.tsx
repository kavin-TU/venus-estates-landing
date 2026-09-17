import type { EmphasisRun, NriCredentialCard } from '@/types'
import { site } from '@/content'
import { cn } from '@/lib'

const CARD_BASE =
  'relative isolate flex min-h-[160px] flex-col justify-between gap-3 overflow-hidden rounded-xl p-5 lg:flex-1'

function CredentialCard({ card }: { card: NriCredentialCard }) {
  return (
    <div
      className={cn(
        CARD_BASE,
        card.tone === 'primary' ? 'bg-footer text-white' : 'bg-secondary text-white',
      )}
    >
      {card.watermark ? (
        <img
          src={card.watermark.src}
          alt={card.watermark.alt}
          className="pointer-events-none absolute -right-2 -bottom-2 -z-10 h-28 w-auto opacity-15"
          aria-hidden="true"
        />
      ) : null}

      <img
        src={card.icon.src}
        alt={card.icon.alt}
        className="size-[30px]"
        width={30}
        height={30}
      />
      <h3 className="text-[18px] font-medium leading-snug lg:text-[20px]">{card.title}</h3>
    </div>
  )
}

export function NriCredentialsSection() {
  const { credentials } = site.nriCorner
  const heading: readonly EmphasisRun[] = credentials.heading
  const [leftTop, leftBottom, rightTop, rightBottom] = credentials.cards

  return (
    <section className="bg-white text-ink">
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
            {credentials.body}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:h-[420px] lg:grid-cols-[280fr_680fr_280fr]">
          <div className="flex flex-col gap-4">
            <CredentialCard card={leftTop} />
            <CredentialCard card={leftBottom} />
          </div>

          <div className="md:col-span-2 lg:col-span-1 lg:h-full">
            <img
              src={credentials.image.src}
              alt={credentials.image.alt}
              className="h-full w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-4">
            <CredentialCard card={rightTop} />
            <CredentialCard card={rightBottom} />
          </div>
        </div>
      </div>
    </section>
  )
}
