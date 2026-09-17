import { Navigate, useParams } from 'react-router-dom'
import { site } from '@/content'
import { PlotDetailHero } from './PlotDetailHero'
import { PlotEnquirySection } from './PlotEnquirySection'
import { PlotGallerySection } from './PlotGallerySection'
import { PlotLocationSection } from './PlotLocationSection'

const FALLBACK_DETAIL_SLUG = 'marutham-south-1406'

export function PlotDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const listing = site.plots.items.find((item) => item.slug === slug)
  const details = site.plots.details
  const detail =
    (details as Record<string, (typeof details)[typeof FALLBACK_DETAIL_SLUG]>)[slug] ??
    details[FALLBACK_DETAIL_SLUG]

  if (!listing || !detail) {
    return <Navigate to="/plots" replace />
  }

  const stats = [
    {
      value: listing.sqftLabel,
      label: 'Square feet Plot',
    },
    {
      value: listing.facingLabel.toUpperCase(),
      label: 'Facing Property',
    },
    detail.hero.stats[2],
  ]

  return (
    <>
      <PlotDetailHero
        image={detail.hero.image}
        title={detail.hero.title}
        body={detail.hero.body}
        stats={stats}
      />
      <PlotGallerySection
        heading={detail.gallery.heading}
        body={detail.gallery.body}
        images={detail.gallery.images}
        pageSize={detail.gallery.pageSize}
      />
      <PlotLocationSection
        heading={detail.location.heading}
        body={detail.location.body}
        coordinates={detail.location.coordinates}
        label={detail.location.label}
        address={detail.location.address}
        reasonsHeading={detail.location.reasonsHeading}
        reasons={detail.location.reasons}
      />
      <PlotEnquirySection enquiry={detail.enquiry} />
    </>
  )
}
