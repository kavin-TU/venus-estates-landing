import { InvestorAssetComparisonSection } from './InvestorAssetComparisonSection'
import { InvestorCapitalGrowthSection } from './InvestorCapitalGrowthSection'
import { InvestorEnquirySection } from './InvestorEnquirySection'
import { InvestorHeroSection } from './InvestorHeroSection'
import { InvestorWhySection } from './InvestorWhySection'

export function InvestorCornerPage() {
  return (
    <>
      <InvestorHeroSection />
      <InvestorAssetComparisonSection />
      <InvestorWhySection />
      <InvestorCapitalGrowthSection />
      <InvestorEnquirySection />
    </>
  )
}
