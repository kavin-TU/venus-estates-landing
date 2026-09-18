import { PageIntro } from '@/components/ui'
import { site } from '@/content'

export function GalleryIntro() {
  const { intro } = site.gallery
  return <PageIntro heading={intro.heading} body={intro.body} />
}
