import type { EmphasisRun } from '@/types'
import { CredentialCard, MediaImage, SectionShell, SiteIcon } from '@/components/ui'
import { site } from '@/content'

export function WhyUsCredentialsSection() {
  const { credentials } = site.aboutPage.whyUs
  const heading: readonly EmphasisRun[] = credentials.heading
  const [paperwork, ethical, customer, quality] = credentials.cards

  return (
    <section className="bg-paper text-ink">
      <SectionShell>
        <div className="grid gap-4 lg:grid-cols-[1.45fr_0.75fr_0.75fr] lg:items-start">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:text-[32px]">
            {heading.map((run, index) => (
              <span key={index}>
                {index === 2 ? <br /> : null}
                <span className={run.accent ? 'text-accent' : 'text-ink'}>{run.text}</span>
              </span>
            ))}
          </h2>

          <p className="text-[16px] font-medium leading-[21px] text-ink lg:col-span-2 lg:pt-1">
            {credentials.body}
          </p>
        </div>

        <div className="grid gap-4 lg:h-[480px] lg:grid-cols-[1.45fr_0.75fr_0.75fr]">
          {/* Feature — full height */}
          <div className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl text-paper lg:h-full lg:min-h-0">
            <MediaImage
              src={credentials.feature.image.src}
              alt={credentials.feature.image.alt}
              fill
              wrapperClassName="-z-10"
            />
            <span
              className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-2 p-6">
              <SiteIcon name={credentials.feature.icon} className="size-6 text-paper" />
              <h3 className="text-[18px] font-medium lg:text-[20px]">{credentials.feature.label}</h3>
            </div>

            <p className="p-6 pt-0 text-[14px] font-medium leading-snug text-paper/85">
              {credentials.feature.caption}
            </p>
          </div>

          {/* Mid: tall paperwork / short customer */}
          <div className="flex flex-col gap-4">
            <CredentialCard card={paperwork} className="min-h-[160px] lg:flex-[1.55]" />
            <CredentialCard card={customer} className="min-h-[120px] lg:flex-1" />
          </div>

          {/* Right: short ethical / tall quality */}
          <div className="flex flex-col gap-4">
            <CredentialCard card={ethical} className="min-h-[120px] lg:flex-1" />
            <CredentialCard card={quality} className="min-h-[160px] lg:flex-[1.55]" />
          </div>
        </div>
      </SectionShell>
    </section>
  )
}
