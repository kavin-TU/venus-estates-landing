import { PageIntro } from '@/components/ui'
import { site } from '@/content'

export function PlotsIntro() {
  const { intro } = site.plots
  return <PageIntro heading={intro.heading} body={intro.body} />
}
