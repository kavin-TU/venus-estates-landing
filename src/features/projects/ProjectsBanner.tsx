import type { EmphasisRun } from '@/types'
import { site } from '@/content'
import { EmphasisText, MediaImage, Reveal } from '@/components/ui'

export function ProjectsBanner() {
  const { banner } = site.projects
  const heading: readonly EmphasisRun[] = banner.heading

  return (
    <Reveal as="section" fadeOnly className="relative isolate bg-paper">
      <div className="aspect-[1440/820] overflow-hidden lg:aspect-auto lg:h-[820px]">
        <MediaImage
          src={banner.image.src}
          alt={banner.image.alt}
          loading="eager"
          className="size-full object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[60px]">
          <h1 className="text-[20px] font-bold uppercase leading-[1.3125] text-ink sm:text-[28px] lg:text-[32px]">
            <EmphasisText runs={heading} />
          </h1>
        </div>
      </div>
    </Reveal>
  )
}
