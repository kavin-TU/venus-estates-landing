import { NriCredentialsSection } from './NriCredentialsSection'
import { NriEnquirySection } from './NriEnquirySection'
import { NriHeroSection } from './NriHeroSection'
import { NriWhySection } from './NriWhySection'

export function NriCornerPage() {
  return (
    <>
      <NriHeroSection />
      <NriWhySection />
      <NriCredentialsSection />
      <NriEnquirySection />
    </>
  )
}
