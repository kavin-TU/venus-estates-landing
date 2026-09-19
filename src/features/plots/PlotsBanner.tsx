import { site } from '@/content'
import { MosaicHeroSection } from '@/features/shared'

export function PlotsBanner() {
  const { banner } = site.plots
  return <MosaicHeroSection image={banner.image} heading={banner.heading} />
}
