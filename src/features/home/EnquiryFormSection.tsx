import { useState } from 'react'
import type { ConsentRun, EmphasisRun } from '@/types'
import { site } from '@/content'
import {
  BackgroundEnquirySection,
  EnquiryFormFields,
  useEnquiryForm,
} from '@/features/shared/enquiry'

export function EnquiryFormSection() {
  const { enquiry } = site.home
  const heading: readonly EmphasisRun[] = enquiry.heading
  const policyRuns: readonly ConsentRun[] = enquiry.consents.policy
  const { values, update, handleSubmit } = useEnquiryForm()
  const [acceptedPolicy, setAcceptedPolicy] = useState(false)
  const [authorizedContact, setAuthorizedContact] = useState(false)

  return (
    <BackgroundEnquirySection
      background={enquiry.background}
      overlayClassName="bg-ink/25 lg:hidden"
      onSubmit={handleSubmit}
      form={
        <EnquiryFormFields
          heading={heading}
          subheading={enquiry.subheading}
          fields={enquiry.fields}
          dialCode={enquiry.dialCode}
          otpNotice={enquiry.otpNotice}
          submitLabel={enquiry.submitLabel}
          values={values}
          update={update}
          consents={{
            policy: policyRuns,
            contact: enquiry.consents.contact,
            acceptedPolicy,
            authorizedContact,
            onAcceptedPolicy: setAcceptedPolicy,
            onAuthorizedContact: setAuthorizedContact,
          }}
        />
      }
    />
  )
}
