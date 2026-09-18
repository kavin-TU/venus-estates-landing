import { useState } from 'react'
import type { ConsentRun, EmphasisRun, EnquiryField, ImageAsset } from '@/types'
import {
  BackgroundEnquirySection,
  EnquiryContactAside,
  EnquiryFormFields,
  useEnquiryForm,
} from '@/features/shared/enquiry'

type PlotEnquiryContent = {
  background: ImageAsset
  heading: readonly EmphasisRun[]
  interestHeading: string
  interestBody: string
  fields: Record<string, EnquiryField>
  dialCode: string
  otpNotice: string
  consents: {
    policy: readonly ConsentRun[]
    contact: string
  }
  submitLabel: string
  contactLabels: { phone: string; email: string; office: string }
  officeAddress: string
}

export function PlotEnquirySection({ enquiry }: { enquiry: PlotEnquiryContent }) {
  const heading: readonly EmphasisRun[] = enquiry.heading
  const policyRuns: readonly ConsentRun[] = enquiry.consents.policy
  const { values, update, handleSubmit } = useEnquiryForm()
  const [acceptedPolicy, setAcceptedPolicy] = useState(false)
  const [authorizedContact, setAuthorizedContact] = useState(false)

  return (
    <BackgroundEnquirySection
      background={enquiry.background}
      padding="compact"
      asidePosition="end"
      onSubmit={handleSubmit}
      aside={
        <EnquiryContactAside
          title={enquiry.interestHeading}
          body={enquiry.interestBody}
          labels={enquiry.contactLabels}
          officeAddress={enquiry.officeAddress}
        />
      }
      form={
        <EnquiryFormFields
          heading={heading}
          fields={{
            firstName: enquiry.fields.firstName,
            lastName: enquiry.fields.lastName,
            email: enquiry.fields.email,
            phone: enquiry.fields.phone,
            desiredDate: enquiry.fields.desiredDate,
            additional: enquiry.fields.additional,
          }}
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
