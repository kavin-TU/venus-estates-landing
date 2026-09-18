import { PageIntro } from '@/components/ui'
import { site } from '@/content'

export function ProjectsIntro() {
  const { intro } = site.projects
  return <PageIntro heading={intro.heading} body={intro.body} as="h2" />
}
