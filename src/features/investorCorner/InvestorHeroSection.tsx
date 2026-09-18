import { MediaImage, Reveal } from '@/components/ui'
import { site } from '@/content'

export function InvestorHeroSection() {
  const { hero } = site.investorCorner

  return (
    <Reveal as="section" fadeOnly className="relative isolate bg-ink">
      <div className="aspect-[1440/820] overflow-hidden lg:aspect-auto lg:h-[820px]">
        <MediaImage
          src={hero.image.src}
          alt={hero.image.alt}
          loading="eager"
          className="size-full object-cover"
        />
      </div>
    </Reveal>
  )
}
