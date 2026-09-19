import type { ReactNode } from 'react'
import type { FormEvent } from 'react'
import type { ImageAsset } from '@/types'
import { MediaImage, Reveal } from '@/components/ui'
import { cn } from '@/lib'

type BackgroundEnquirySectionProps = {
  background: ImageAsset
  /** Overlay strength / variant */
  overlayClassName?: string
  /** Outer vertical padding */
  padding?: 'default' | 'compact'
  aside?: ReactNode
  asidePosition?: 'start' | 'end'
  form: ReactNode
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  formClassName?: string
}

/** Rounded panel with cover image + optional aside + paper form column. */
export function BackgroundEnquirySection({
  background,
  overlayClassName = 'bg-ink/40',
  padding = 'default',
  aside,
  asidePosition = 'end',
  form,
  onSubmit,
  formClassName,
}: BackgroundEnquirySectionProps) {
  const formEl = (
    <form
      onSubmit={onSubmit}
      className={cn(
        'flex w-full flex-col gap-5 rounded-[10px] bg-paper p-6 text-ink lg:w-[550px]',
        formClassName,
      )}
    >
      {form}
    </form>
  )

  const hasAside = Boolean(aside)

  return (
    <section className="bg-paper">
      <Reveal
        className={cn(
          'mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-[100px]',
          padding === 'compact' ? 'lg:py-[50px]' : 'lg:py-[75px]',
        )}
      >
        <div className="relative isolate overflow-hidden rounded-2xl">
          <MediaImage
            src={background.src}
            alt={background.alt}
            fill
            wrapperClassName="-z-10"
          />
          <span className={cn('absolute inset-0 -z-10', overlayClassName)} aria-hidden="true" />

          <div
            className={cn(
              'p-4 sm:p-8 lg:px-[30px] lg:py-[30px]',
              hasAside &&
                'flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between',
            )}
          >
            {hasAside && asidePosition === 'start' ? aside : null}
            {formEl}
            {hasAside && asidePosition === 'end' ? aside : null}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
