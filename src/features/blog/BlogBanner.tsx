import { FullBleedBanner } from '@/components/ui'
import { site } from '@/content'

export function BlogBanner() {
  return <FullBleedBanner image={site.blog.banner.image} />
}
