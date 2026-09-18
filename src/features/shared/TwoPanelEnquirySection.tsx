import type { EmphasisRun, EnquiryField, ImageAsset } from '@/types'
import { MediaImage, Reveal } from '@/components/ui'
import {
  EnquiryFormFields,
  useEnquiryForm,
} from '@/features/shared/enquiry'

type TwoPanelEnquirySectionProps = {
  heading: readonly EmphasisRun[]
  subheading: string
  image: ImageAsset
  dialCode: string
  otpNotice: string
  fields: {
    firstName: EnquiryField
    lastName: EnquiryField
    email: EnquiryField
    phone: EnquiryField
    desiredDate: EnquiryField
  }
  submitLabel: string
}

/** The bordered form-panel + side-image enquiry layout shared by the NRI and Investor corner pages. */
export function TwoPanelEnquirySection({
  heading,
  subheading,
  image,
  dialCode,
  otpNotice,
  fields,
  submitLabel,
}: TwoPanelEnquirySectionProps) {
  const { values, update, handleSubmit } = useEnquiryForm()

  return (
    <section className="bg-paper">
      <Reveal className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-[100px] lg:py-[75px]">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 lg:flex-row">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-5 bg-paper p-6 lg:w-[550px] lg:p-8"
          >
            <EnquiryFormFields
              heading={heading}
              subheading={subheading}
              fields={fields}
              dialCode={dialCode}
              otpNotice={otpNotice}
              submitLabel={submitLabel}
              values={values}
              update={update}
              showAdditional={false}
              submitClassName="mt-1"
            />
          </form>

          <div className="relative min-h-[240px] flex-1">
            <MediaImage src={image.src} alt={image.alt} fill />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
