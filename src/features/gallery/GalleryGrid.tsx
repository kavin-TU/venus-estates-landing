import type { GalleryAlbum } from '@/types'
import { MediaListingCard } from '@/components/ui'

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
        <MediaListingCard
          key={album.path}
          to={album.path}
          image={album.cover}
          title={album.name}
          subtitle={album.location}
          ariaLabel={`${album.name}, ${album.location}, ${album.imageCountLabel}`}
          badge={album.imageCountLabel}
        />
      ))}
    </div>
  )
}
