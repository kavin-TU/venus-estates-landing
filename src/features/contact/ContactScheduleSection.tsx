import type { EmphasisRun } from '@/types'
import { EmphasisText } from '@/components/ui'
import { site } from '@/content'
import {
  BackgroundEnquirySection,
  EnquiryContactAside,
  EnquiryFormFields,
  useEnquiryForm,
} from '@/features/shared/enquiry'

export function ContactScheduleSection() {
  const { schedule } = site.contactPage
  const heading: readonly EmphasisRun[] = schedule.heading
  const formHeading: readonly EmphasisRun[] = schedule.formHeading
  const { values, update, handleSubmit } = useEnquiryForm()

  return (
    <BackgroundEnquirySection
      background={schedule.background}
      overlayClassName="bg-ink/45"
      padding="compact"
      asidePosition="start"
      onSubmit={handleSubmit}
      aside={
        <EnquiryContactAside
          title={<EmphasisText runs={heading} />}
          titleClassName="uppercase"
          body={schedule.body}
          labels={{
            phone: schedule.contactLabels.phone,
            email: schedule.contactLabels.email,
            office: schedule.contactLabels.address,
            hours: schedule.contactLabels.hours,
          }}
          hoursLines={schedule.hoursLines}
        />
      }
      form={
        <EnquiryFormFields
          heading={formHeading}
          fields={schedule.fields}
          dialCode={schedule.dialCode}
          otpNotice={schedule.otpNotice}
          submitLabel={schedule.submitLabel}
          values={values}
          update={update}
        />
      }
    />
  )
}
