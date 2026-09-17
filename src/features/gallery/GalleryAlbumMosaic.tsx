import type { ImageAsset } from '@/types'
import { cn } from '@/lib'

type GalleryAlbumMosaicProps = {
  images: readonly ImageAsset[]
}

/**
 * Figma collage 419:4664 (1240×1240): two mirrored 615-tall rows.
 * Row 1 — large square left, stacked half-tiles + wide tile right.
 * Row 2 — mirrored (stack left, large right).
 * Uses images[0..3] with varied pairing so the two rows don’t mirror the same shots.
 */
export function GalleryAlbumMosaic({ images }: GalleryAlbumMosaicProps) {
  const a = images[0]
  const b = images[1] ?? a
  const c = images[2] ?? a
  const d = images[3] ?? a

  return (
    <div className="flex flex-col gap-2.5">
      <div className="grid gap-2.5 lg:grid-cols-2 lg:items-stretch">
        <Tile image={a} className="aspect-square min-h-0" />
        <StackColumn topLeft={b} topRight={c} bottom={d} />
      </div>

      <div className="grid gap-2.5 lg:grid-cols-2 lg:items-stretch">
        <StackColumn topLeft={c} topRight={d} bottom={b} />
        <Tile image={a} className="aspect-square min-h-0" />
      </div>
    </div>
  )
}

function StackColumn({
  topLeft,
  topRight,
  bottom,
}: {
  topLeft: ImageAsset
  topRight: ImageAsset
  bottom: ImageAsset
}) {
  return (
    <div className="grid aspect-square min-h-0 grid-rows-2 gap-2.5">
      <div className="grid min-h-0 grid-cols-2 gap-2.5">
        <Tile image={topLeft} className="min-h-0" />
        <Tile image={topRight} className="min-h-0" />
      </div>
      <Tile image={bottom} className="min-h-0" />
    </div>
  )
}

function Tile({
  image,
  className,
}: {
  image: ImageAsset
  className?: string
}) {
  return (
    <div className={cn('overflow-hidden rounded-[10px] bg-mist', className)}>
      <img
        src={image.src}
        alt={image.alt}
        className="size-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
