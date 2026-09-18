import { TestimonialsSection } from '@/features/home'
import { WhyUsCredentialsSection } from './WhyUsCredentialsSection'
import { WhyUsHeroSection } from './WhyUsHeroSection'
import { WhyUsProtectSection } from './WhyUsProtectSection'

export function WhyUsPage() {
  return (
    <>
      <WhyUsHeroSection />
      <WhyUsProtectSection />
      <TestimonialsSection />
      <WhyUsCredentialsSection />
    </>
  )
}
