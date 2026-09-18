import { site } from '@/content'
import { MosaicHeroSection } from '@/features/shared'

export function WhyUsHeroSection() {
  const { hero } = site.aboutPage.whyUs
  return <MosaicHeroSection image={hero.image} heading={hero.heading} />
}
