import type { EmphasisRun, NriCredentialCard } from '@/types'
import { site } from '@/content'
import { cn } from '@/lib'

function CredentialCard({ card }: { card: NriCredentialCard }) {
  return (
    <div
      className={cn(
        'relative isolate flex min-h-[140px] flex-col justify-between gap-3 overflow-hidden rounded-xl p-5',
        card.tone === 'primary' ? 'bg-footer text-paper' : 'bg-secondary text-paper',
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

      <img src={card.icon.src} alt={card.icon.alt} className="size-[30px]" width={30} height={30} />
      <h3 className="text-[18px] font-medium leading-snug lg:text-[20px]">{card.title}</h3>
    </div>
  )
}

export function WhyUsCredentialsSection() {
  const { credentials } = site.aboutPage.whyUs
  const heading: readonly EmphasisRun[] = credentials.heading

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
            {credentials.body}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl text-paper sm:min-h-[420px]">
            <img
              src={credentials.feature.image.src}
              alt={credentials.feature.image.alt}
              className="absolute inset-0 -z-10 size-full object-cover"
              loading="lazy"
            />
            <span
              className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-2 p-6">
              <img
                src={credentials.feature.icon.src}
                alt=""
                className="size-6"
                aria-hidden="true"
              />
              <h3 className="text-[18px] font-medium lg:text-[20px]">{credentials.feature.label}</h3>
              <p className="text-[14px] font-medium leading-snug text-paper/85">
                {credentials.feature.caption}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {credentials.cards.map((card, index) => (
              <CredentialCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
