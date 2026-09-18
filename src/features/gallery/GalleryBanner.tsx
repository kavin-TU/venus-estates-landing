import { FullBleedBanner } from '@/components/ui'
import { site } from '@/content'

export function GalleryBanner() {
  return <FullBleedBanner image={site.gallery.banner.image} />
}
