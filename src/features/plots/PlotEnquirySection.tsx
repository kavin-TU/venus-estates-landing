import type { EmphasisRun, EnquiryField, ImageAsset } from '@/types'
import { EmphasisText } from '@/components/ui'
import {
  BackgroundEnquirySection,
  EnquiryContactAside,
  EnquiryFormFields,
  useEnquiryForm,
} from '@/features/shared/enquiry'

type PlotEnquiryContent = {
  background: ImageAsset
  heading: readonly EmphasisRun[]
  interestHeading: readonly EmphasisRun[]
  interestBody: string
  fields: Record<string, EnquiryField>
  dialCode: string
  otpNotice: string
  submitLabel: string
  contactLabels: { phone: string; email: string; office: string }
  officeAddress: string
}

export function PlotEnquirySection({ enquiry }: { enquiry: PlotEnquiryContent }) {
  const heading: readonly EmphasisRun[] = enquiry.heading
  const interestHeading: readonly EmphasisRun[] = enquiry.interestHeading
  const { values, update, handleSubmit } = useEnquiryForm()

  return (
    <BackgroundEnquirySection
      background={enquiry.background}
      padding="compact"
      asidePosition="start"
      onSubmit={handleSubmit}
      aside={
        <EnquiryContactAside
          title={<EmphasisText runs={interestHeading} />}
          titleClassName="uppercase"
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
        />
      }
    />
  )
}
