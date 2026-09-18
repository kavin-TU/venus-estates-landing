import type { FormEvent } from 'react'
import { useState } from 'react'
import type { EmphasisRun } from '@/types'
import { site } from '@/content'
import { ArrowUpRight, Input, Textarea, primaryCtaClass } from '@/components/ui'

const EMPTY = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  desiredDate: '',
  additional: '',
}

export function ContactScheduleSection() {
  const { schedule } = site.contactPage
  const { contact, address } = site
  const heading: readonly EmphasisRun[] = schedule.heading
  const formHeading: readonly EmphasisRun[] = schedule.formHeading
  const { fields } = schedule

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
    <section className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-[100px] lg:py-[50px]">
        <div className="relative isolate overflow-hidden rounded-2xl">
          <img
            src={schedule.background.src}
            alt={schedule.background.alt}
            className="absolute inset-0 -z-10 size-full object-cover"
            loading="lazy"
          />
          <span className="absolute inset-0 -z-10 bg-ink/45" aria-hidden="true" />

          <div className="flex flex-col gap-8 p-4 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-[30px] lg:py-[30px]">
            <div className="flex w-full flex-col gap-8 text-paper lg:w-[465px]">
              <div>
                <h2 className="text-[28px] font-bold uppercase leading-tight sm:text-[32px]">
                  {heading.map((run, i) => (
                    <span key={i} className={run.accent ? 'text-secondary' : undefined}>
                      {run.text}
                    </span>
                  ))}
                </h2>
                <p className="mt-2 text-[16px] font-medium text-paper/85">{schedule.body}</p>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[16px] font-semibold text-secondary">
                    {schedule.contactLabels.phone}
                  </p>
                  <a href={contact.phoneHref} className="text-[16px] font-medium hover:underline">
                    {contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-secondary">
                    {schedule.contactLabels.email}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[16px] font-medium hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-secondary">
                    {schedule.contactLabels.address}
                  </p>
                  <p className="text-[16px] font-medium leading-[21px] text-paper/90">
                    {address.company}, {address.lines.join(' ')}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-secondary">
                    {schedule.contactLabels.hours}
                  </p>
                  {schedule.hoursLines.map((line) => (
                    <p key={line} className="text-[16px] font-medium text-paper/90">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-5 rounded-[10px] bg-paper p-6 text-ink lg:w-[550px]"
            >
              <h3 className="text-[18px] font-bold uppercase leading-none">
                {formHeading.map((run, i) => (
                  <span key={i} className={run.accent ? 'text-secondary' : undefined}>
                    {run.text}
                  </span>
                ))}
              </h3>

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
                  prefix={
                    <span className="text-[16px] font-medium text-secondary">
                      {schedule.dialCode}
                    </span>
                  }
                />
                <p className="text-[14px] font-medium leading-snug text-secondary">
                  {schedule.otpNotice}
                </p>
              </div>

              <Input
                label={fields.desiredDate.label}
                name={fields.desiredDate.name}
                type="date"
                placeholder={fields.desiredDate.placeholder}
                value={values.desiredDate}
                onChange={update('desiredDate')}
              />

              <Textarea
                label={fields.additional.label}
                name={fields.additional.name}
                placeholder={fields.additional.placeholder}
                rows={3}
                value={values.additional}
                onChange={update('additional')}
              />

              <button
                type="submit"
                className={primaryCtaClass}
              >
                {schedule.submitLabel}
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
