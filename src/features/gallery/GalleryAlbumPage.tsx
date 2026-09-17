import { Navigate, useParams } from 'react-router-dom'
import { site } from '@/content'
import { GalleryAlbumMosaic } from './GalleryAlbumMosaic'

export function GalleryAlbumPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const album = site.gallery.albums.find((item) => item.slug === slug)

  if (!album) {
    return <Navigate to="/gallery" replace />
  }

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:pb-[75px] lg:pt-[140px]">
        <h1 className="text-[24px] font-bold lowercase leading-[1.3125] sm:text-[28px] lg:text-[32px]">
          {site.gallery.albumHeading}
        </h1>

        <GalleryAlbumMosaic images={album.images} />
      </div>
    </section>
  )
}
