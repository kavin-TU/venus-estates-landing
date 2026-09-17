import type { FormEvent } from 'react'
import { useState } from 'react'
import type { EmphasisRun, EnquiryField, ImageAsset } from '@/types'
import { ArrowUpRight, Input } from '@/components/ui'

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

const EMPTY = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  desiredDate: '',
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
  const [values, setValues] = useState(EMPTY)

  const update =
    (name: keyof typeof EMPTY) =>
    (event: { target: { value: string } }) => {
      setValues((current) => ({ ...current, [name]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: no enquiry endpoint exists yet — wire this up when the backend lands.
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-[100px] lg:py-[75px]">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 lg:flex-row">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-5 bg-white p-6 lg:w-[550px] lg:p-8"
          >
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[18px] font-bold uppercase leading-none text-ink">
                {heading.map((run, i) => (
                  <span key={i} className={run.accent ? 'text-secondary' : undefined}>
                    {run.text}
                  </span>
                ))}
              </h3>
              <p className="text-[14px] font-medium leading-snug text-ink">{subheading}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label={fields.firstName.label}
                name={fields.firstName.name}
                placeholder={fields.firstName.placeholder}
                autoComplete="given-name"
                required
                value={values.firstName}
                onChange={update('firstName')}
              />
              <Input
                label={fields.lastName.label}
                name={fields.lastName.name}
                placeholder={fields.lastName.placeholder}
                autoComplete="family-name"
                required
                value={values.lastName}
                onChange={update('lastName')}
              />
            </div>

            <Input
              label={fields.email.label}
              name={fields.email.name}
              type="email"
              placeholder={fields.email.placeholder}
              autoComplete="email"
              required
              value={values.email}
              onChange={update('email')}
            />

            <div className="flex flex-col gap-2">
              <Input
                label={fields.phone.label}
                name={fields.phone.name}
                type="tel"
                inputMode="tel"
                pattern="[0-9 ]{10,14}"
                placeholder={fields.phone.placeholder}
                autoComplete="tel-national"
                required
                value={values.phone}
                onChange={update('phone')}
                prefix={<span className="text-[16px] font-medium text-secondary">{dialCode}</span>}
              />
              <p className="text-[14px] font-medium leading-snug text-secondary">{otpNotice}</p>
            </div>

            <Input
              label={fields.desiredDate.label}
              name={fields.desiredDate.name}
              type="date"
              placeholder={fields.desiredDate.placeholder}
              value={values.desiredDate}
              onChange={update('desiredDate')}
            />

            <button
              type="submit"
              className="mt-1 inline-flex h-12 items-center justify-center gap-1 rounded-full bg-secondary px-[25px] text-[16px] font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {submitLabel}
              <ArrowUpRight className="size-4" />
            </button>
          </form>

          <div className="min-h-[240px] flex-1">
            <img src={image.src} alt={image.alt} className="size-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
