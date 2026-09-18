import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { ConsentRun, EmphasisRun, EnquiryField } from '@/types'
import {
  ArrowUpRight,
  Checkbox,
  EmphasisText,
  Input,
  primaryCtaClass,
  Textarea,
} from '@/components/ui'
import { cn } from '@/lib'
import type { EnquiryFormValues } from './useEnquiryForm'

type EnquiryFieldsConfig = {
  firstName: EnquiryField
  lastName: EnquiryField
  email: EnquiryField
  phone: EnquiryField
  desiredDate: EnquiryField
  additional?: EnquiryField
}

type EnquiryFormFieldsProps = {
  heading: readonly EmphasisRun[]
  subheading?: string
  fields: EnquiryFieldsConfig
  dialCode: string
  otpNotice: string
  submitLabel: string
  values: EnquiryFormValues
  update: (name: keyof EnquiryFormValues) => (event: { target: { value: string } }) => void
  showAdditional?: boolean
  consents?: {
    policy: readonly ConsentRun[]
    contact: string
    acceptedPolicy: boolean
    authorizedContact: boolean
    onAcceptedPolicy: (checked: boolean) => void
    onAuthorizedContact: (checked: boolean) => void
  }
  submitClassName?: string
  children?: ReactNode
}

export function EnquiryFormFields({
  heading,
  subheading,
  fields,
  dialCode,
  otpNotice,
  submitLabel,
  values,
  update,
  showAdditional = true,
  consents,
  submitClassName,
}: EnquiryFormFieldsProps) {
  return (
    <>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-[18px] font-bold uppercase leading-none text-ink">
          <EmphasisText runs={heading} />
        </h3>
        {subheading ? (
          <p className="text-[14px] font-medium leading-snug text-ink">{subheading}</p>
        ) : null}
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

      {showAdditional && fields.additional ? (
        <Textarea
          label={fields.additional.label}
          name={fields.additional.name}
          placeholder={fields.additional.placeholder}
          rows={3}
          value={values.additional}
          onChange={update('additional')}
        />
      ) : null}

      {consents ? (
        <div className="flex flex-col gap-3">
          <Checkbox
            name="acceptedPolicy"
            required
            checked={consents.acceptedPolicy}
            onChange={(event) => consents.onAcceptedPolicy(event.target.checked)}
          >
            {consents.policy.map((run, i) =>
              run.path ? (
                <Link
                  key={i}
                  to={run.path}
                  className="text-secondary underline underline-offset-2"
                >
                  {run.text}
                </Link>
              ) : (
                <span key={i}>{run.text}</span>
              ),
            )}
          </Checkbox>

          <Checkbox
            name="authorizedContact"
            checked={consents.authorizedContact}
            onChange={(event) => consents.onAuthorizedContact(event.target.checked)}
          >
            {consents.contact}
          </Checkbox>
        </div>
      ) : null}

      <button type="submit" className={cn(primaryCtaClass, submitClassName)}>
        {submitLabel}
        <ArrowUpRight className="size-4" />
      </button>
    </>
  )
}
