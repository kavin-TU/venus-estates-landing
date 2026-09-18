import { site } from '@/content'

export function PlotsBanner() {
  const { banner } = site.plots

  return (
    <section className="relative isolate bg-paper">
      <div className="aspect-[1440/820] overflow-hidden lg:aspect-auto lg:h-[820px]">
        <img
          src={banner.image.src}
          alt={banner.image.alt}
          className="size-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  )
}
