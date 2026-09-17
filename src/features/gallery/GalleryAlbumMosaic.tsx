import type { ImageAsset } from '@/types'

type GalleryAlbumMosaicProps = {
  images: readonly ImageAsset[]
}

/**
 * Figma collage: two mirrored rows.
 * Row 1 — large square left, stacked tiles right.
 * Row 2 — stacked tiles left, large square right.
 */
export function GalleryAlbumMosaic({ images }: GalleryAlbumMosaicProps) {
  const [a, b, c, d] = [
    images[0],
    images[1] ?? images[0],
    images[2] ?? images[0],
    images[3] ?? images[0],
  ]

  return (
    <div className="flex flex-col gap-2.5">
      <div className="grid gap-2.5 lg:grid-cols-2">
        <Tile image={a} className="aspect-square" />
        <div className="grid gap-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            <Tile image={b} className="aspect-square" />
            <Tile image={c} className="aspect-square" />
          </div>
          <Tile image={d} className="aspect-[615/302.5]" />
        </div>
      </div>

      <div className="grid gap-2.5 lg:grid-cols-2">
        <div className="grid gap-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            <Tile image={b} className="aspect-square" />
            <Tile image={c} className="aspect-square" />
          </div>
          <Tile image={d} className="aspect-[615/302.5]" />
        </div>
        <Tile image={a} className="aspect-square" />
      </div>
    </div>
  )
}

function Tile({
  image,
  className,
}: {
  image: ImageAsset
  className: string
}) {
  return (
    <div className={`overflow-hidden rounded-xl bg-mist ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className="size-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
