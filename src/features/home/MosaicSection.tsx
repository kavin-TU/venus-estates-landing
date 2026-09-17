import type { ImageAsset, InlineMediaHeadingSegment } from '@/types'
import { site } from '@/content'
import { cn } from '@/lib'

function Tile({ image, className }: { image: ImageAsset; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-lg', className)}>
      <img
        src={image.src}
        alt={image.alt}
        className="size-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

export function MosaicSection() {
  const { tiles } = site.home.mosaic
  const label: readonly InlineMediaHeadingSegment[] = site.home.mosaic.label

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-12 lg:py-[75px]">
        <div className="grid gap-3.5 md:grid-cols-2 lg:h-[684px] lg:grid-cols-[511fr_350fr_511fr]">
          {/* Left column — two equal tiles */}
          <div className="flex flex-col gap-3.5">
            {tiles.left.map((tile) => (
              <Tile
                key={tile.src}
                image={tile}
                className="aspect-[511/335] lg:aspect-auto lg:flex-1"
              />
            ))}
          </div>

          {/* Center column — tile, wordmark band, tile */}
          <div className="flex flex-col gap-3.5">
            <Tile
              image={tiles.center[0]}
              className="aspect-[350/288] lg:aspect-auto lg:flex-1"
            />
            <div className="relative h-20 shrink-0 overflow-hidden rounded-lg">
              <img
                src={tiles.labelBackground.src}
                alt={tiles.labelBackground.alt}
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-ink/45" />
              <p className="relative flex h-full items-center justify-center gap-2 text-[24px] font-bold uppercase leading-none text-white lg:text-[32px]">
                {label.map((segment, index) =>
                  segment.type === 'text' ? (
                    <span
                      key={index}
                      className={segment.accent ? 'text-secondary' : undefined}
                    >
                      {segment.text}
                    </span>
                  ) : null,
                )}
              </p>
            </div>
            <Tile
              image={tiles.center[1]}
              className="aspect-[350/288] lg:aspect-auto lg:flex-1"
            />
          </div>

          {/* Right column — single full-height tile */}
          <Tile
            image={tiles.tall}
            className="aspect-[511/684] md:col-span-2 lg:col-span-1 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </section>
  )
}
