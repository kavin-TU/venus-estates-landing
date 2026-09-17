import { site } from '@/content'

export function BlogBanner() {
  const { banner } = site.blog

  return (
    <section className="relative isolate bg-white">
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
