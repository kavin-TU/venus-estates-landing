import type { EmphasisRun } from '@/types'
import { CredentialCard, EmphasisText, SectionShell } from '@/components/ui'
import { site } from '@/content'

export function WhyUsCredentialsSection() {
  const { credentials } = site.aboutPage.whyUs
  const heading: readonly EmphasisRun[] = credentials.heading

  return (
    <section className="bg-paper text-ink">
      <SectionShell>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[420px] lg:shrink-0 lg:text-[32px]">
            <EmphasisText runs={heading} />
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
      </SectionShell>
    </section>
  )
}
