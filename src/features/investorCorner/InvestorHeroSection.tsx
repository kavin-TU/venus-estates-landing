import { site } from '@/content'

export function InvestorHeroSection() {
  const { hero } = site.investorCorner

  return (
    <section className="relative isolate bg-ink">
      <div className="aspect-[1440/820] overflow-hidden lg:aspect-auto lg:h-[820px]">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="size-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  )
}
