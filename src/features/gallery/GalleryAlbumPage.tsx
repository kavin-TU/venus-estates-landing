import { Navigate, useParams } from 'react-router-dom'
import { site } from '@/content'
import { InlineMediaHeading } from '@/components/ui'
import { GalleryAlbumMosaic } from './GalleryAlbumMosaic'

export function GalleryAlbumPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const album = site.gallery.albums.find((item) => item.slug === slug)

  if (!album) {
    return <Navigate to="/gallery" replace />
  }

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:pb-[75px] lg:pt-10">
        <InlineMediaHeading
          as="h1"
          lines={site.gallery.albumHeading.lines}
          className="text-ink"
        />

        <GalleryAlbumMosaic images={album.images} />
      </div>
    </section>
  )
}
