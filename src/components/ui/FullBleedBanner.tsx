import type { ImageAsset } from '@/types'
import { MediaImage } from './MediaImage'
import { Reveal } from './Reveal'

type FullBleedBannerProps = {
  image: ImageAsset
}

/** Full-bleed page banner image (plots / gallery / blog). */
export function FullBleedBanner({ image }: FullBleedBannerProps) {
  return (
    <Reveal as="section" fadeOnly className="relative isolate bg-paper">
      <div className="aspect-[1440/820] overflow-hidden lg:aspect-auto lg:h-[820px]">
        <MediaImage
          src={image.src}
          alt={image.alt}
          loading="eager"
          className="size-full object-cover"
        />
      </div>
    </Reveal>
  )
}
