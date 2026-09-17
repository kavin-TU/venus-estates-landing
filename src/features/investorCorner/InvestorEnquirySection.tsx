import { site } from '@/content'
import { TwoPanelEnquirySection } from '@/features/shared'

export function InvestorEnquirySection() {
  const { enquiry } = site.investorCorner

  return (
    <TwoPanelEnquirySection
      heading={enquiry.heading}
      subheading={enquiry.subheading}
      image={enquiry.image}
      dialCode={enquiry.dialCode}
      otpNotice={enquiry.otpNotice}
      fields={enquiry.fields}
      submitLabel={enquiry.submitLabel}
    />
  )
}
