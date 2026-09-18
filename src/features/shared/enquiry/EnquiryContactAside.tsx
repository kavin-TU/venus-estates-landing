import type { ReactNode } from 'react'
import { site } from '@/content'
import { cn } from '@/lib'

type EnquiryContactAsideProps = {
  title: ReactNode
  body: string
  labels: {
    phone: string
    email: string
    office: string
    hours?: string
  }
  officeAddress?: string
  hoursLines?: readonly string[]
  /** Extra classes on the title wrapper (e.g. uppercase for contact). */
  titleClassName?: string
}

/** Phone / email / office (+ optional hours) block used beside enquiry forms. */
export function EnquiryContactAside({
  title,
  body,
  labels,
  officeAddress,
  hoursLines,
  titleClassName,
}: EnquiryContactAsideProps) {
  const { contact, address } = site
  const resolvedOffice =
    officeAddress || `${address.company}, ${address.lines.join(' ')}`

  return (
    <div className="flex w-full flex-col gap-8 text-paper lg:w-[465px]">
      <div>
        <div
          className={cn(
            'text-[28px] font-bold leading-tight sm:text-[32px]',
            titleClassName,
          )}
        >
          {title}
        </div>
        <p className="mt-2 text-[16px] font-medium text-paper/85">{body}</p>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <p className="text-[16px] font-semibold capitalize text-secondary">{labels.phone}</p>
          <a href={contact.phoneHref} className="text-[16px] font-medium hover:underline">
            {contact.phoneDisplay}
          </a>
        </div>
        <div>
          <p className="text-[16px] font-semibold capitalize text-secondary">{labels.email}</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-[16px] font-medium hover:underline"
          >
            {contact.email}
          </a>
        </div>
        <div>
          <p className="text-[16px] font-semibold capitalize text-secondary">{labels.office}</p>
          <p className="text-[16px] font-medium leading-[21px] text-paper/90">{resolvedOffice}</p>
        </div>
        {labels.hours && hoursLines ? (
          <div>
            <p className="text-[16px] font-semibold capitalize text-secondary">{labels.hours}</p>
            {hoursLines.map((line) => (
              <p key={line} className="text-[16px] font-medium text-paper/90">
                {line}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
