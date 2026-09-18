import { Link } from 'react-router-dom'
import type { GalleryAlbum } from '@/types'
import { ArrowUpRight } from '@/components/ui'

function GalleryAlbumCard({ album }: { album: GalleryAlbum }) {
  return (
    <Link
      to={album.path}
      aria-label={`${album.name}, ${album.location}, ${album.imageCountLabel}`}
      className="group relative isolate block aspect-[608/404] overflow-hidden rounded-xl"
    >
      <img
        src={album.cover.src}
        alt={album.cover.alt}
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-ink/20" />

      <span className="absolute top-0 right-0 flex h-10 min-w-[211px] items-center justify-center bg-secondary px-4 text-[16px] font-semibold text-paper">
        {album.imageCountLabel}
      </span>

      <div className="absolute inset-x-[30px] bottom-[30px] flex items-end justify-between gap-4">
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-[20px] font-semibold uppercase text-paper lg:text-[24px]">
            {album.name}
          </span>
          <span className="truncate text-[16px] font-medium capitalize text-paper">
            {album.location}
          </span>
        </div>

        <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper backdrop-blur-[8px] transition-colors group-hover:bg-secondary">
          <ArrowUpRight className="size-6" />
        </span>
      </div>
    </Link>
  )
}

export function GalleryGrid({ albums }: { albums: readonly GalleryAlbum[] }) {
  if (albums.length === 0) {
    return (
      <p className="py-16 text-center text-[16px] font-medium text-ink/60">
        No gallery albums yet.
      </p>
    )
  }

  return (
    <div className="grid gap-2.5 lg:grid-cols-2">
      {albums.map((album) => (
        <GalleryAlbumCard key={album.slug} album={album} />
      ))}
    </div>
  )
}
