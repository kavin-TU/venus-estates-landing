import type { EmphasisRun } from '@/types'
import { CredentialCard, EmphasisText, MediaImage, SectionShell } from '@/components/ui'
import { site } from '@/content'

export function NriCredentialsSection() {
  const { credentials } = site.nriCorner
  const heading: readonly EmphasisRun[] = credentials.heading
  const [leftTop, leftBottom, rightTop, rightBottom] = credentials.cards

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

        <div className="grid gap-4 md:grid-cols-2 lg:h-[420px] lg:grid-cols-[280fr_680fr_280fr]">
          <div className="flex flex-col gap-4">
            <CredentialCard card={leftTop} className="min-h-[160px] lg:flex-1" />
            <CredentialCard card={leftBottom} className="min-h-[160px] lg:flex-1" />
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-xl md:col-span-2 lg:col-span-1 lg:h-full lg:min-h-0">
            <MediaImage
              src={credentials.image.src}
              alt={credentials.image.alt}
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <CredentialCard card={rightTop} className="min-h-[160px] lg:flex-1" />
            <CredentialCard card={rightBottom} className="min-h-[160px] lg:flex-1" />
          </div>
        </div>
      </SectionShell>
    </section>
  )
}
