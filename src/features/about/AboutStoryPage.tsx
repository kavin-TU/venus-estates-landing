import { AboutHeroSection } from './AboutHeroSection'
import { AboutLeadershipSection } from './AboutLeadershipSection'
import { AboutStatsSection } from './AboutStatsSection'
import { AboutStorySection } from './AboutStorySection'
import { AboutWhatWeDoSection } from './AboutWhatWeDoSection'

export function AboutStoryPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutWhatWeDoSection />
      <AboutStatsSection />
      <AboutLeadershipSection />
    </>
  )
}
