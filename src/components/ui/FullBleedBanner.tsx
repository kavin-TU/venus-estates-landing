import type { ImageAsset } from '@/types'

type FullBleedBannerProps = {
  image: ImageAsset
}

/** Full-bleed page banner image (plots / gallery / blog). */
export function FullBleedBanner({ image }: FullBleedBannerProps) {
  return (
    <section className="relative isolate bg-paper">
      <div className="aspect-[1440/820] overflow-hidden lg:aspect-auto lg:h-[820px]">
        <img
          src={image.src}
          alt={image.alt}
          className="size-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  )
}
