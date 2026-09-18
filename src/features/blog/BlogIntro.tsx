import { PageIntro } from '@/components/ui'
import { site } from '@/content'

export function BlogIntro() {
  const { intro } = site.blog
  return <PageIntro heading={intro.heading} body={intro.body} />
}
