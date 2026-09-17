import { site } from '@/content'
import { GrowthStatsSection } from '@/features/shared'

export function InvestorWhySection() {
  const { why } = site.investorCorner
  const { growthStats } = site.shared

  return (
    <GrowthStatsSection
      heading={why.heading}
      body={why.body}
      icon={growthStats.icon}
      stats={growthStats.stats}
    />
  )
}
