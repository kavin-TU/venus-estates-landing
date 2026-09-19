import { site } from '@/content'
import { MosaicHeroSection } from '@/features/shared'

export function ProjectsBanner() {
  const { banner } = site.projects
  return <MosaicHeroSection image={banner.image} heading={banner.heading} />
}
