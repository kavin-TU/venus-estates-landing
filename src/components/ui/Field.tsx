import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { useId } from 'react'
import { cn } from '@/lib'

const CONTROL =
  'w-full rounded-lg border border-ink/15 bg-paper px-4 text-[14px] font-medium text-ink placeholder:text-ink/40 transition-colors focus:border-secondary focus:outline-none'

const LABEL = 'text-[16px] font-semibold capitalize text-ink'

type FieldShellProps = {
  label: string
  htmlFor: string
  children: ReactNode
  className?: string
}

function FieldShell({ label, htmlFor, children, className }: FieldShellProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={htmlFor} className={LABEL}>
        {label}
      </label>
      {children}
    </div>
  )
}

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
  label: string
  /** Rendered inside the control, before the input — e.g. a dial code. */
  prefix?: ReactNode
  wrapperClassName?: string
}

export function Input({
  label,
  prefix,
  wrapperClassName,
  className,
  id,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  if (prefix) {
    return (
      <FieldShell label={label} htmlFor={inputId} className={wrapperClassName}>
        <div className={cn(CONTROL, 'flex h-12 items-center gap-2 px-3')}>
          {prefix}
          <input
            id={inputId}
            className="h-full min-w-0 flex-1 bg-transparent text-[16px] font-medium text-ink placeholder:text-ink/40 focus:outline-none"
            {...props}
          />
        </div>
      </FieldShell>
    )
  }

  return (
    <FieldShell label={label} htmlFor={inputId} className={wrapperClassName}>
      <input id={inputId} className={cn(CONTROL, 'h-12', className)} {...props} />
    </FieldShell>
  )
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  wrapperClassName?: string
}

export function Textarea({
  label,
  wrapperClassName,
  className,
  id,
  ...props
}: TextareaProps) {
  const generatedId = useId()
  const textareaId = id ?? generatedId

  return (
    <FieldShell label={label} htmlFor={textareaId} className={wrapperClassName}>
      <textarea
        id={textareaId}
        className={cn(CONTROL, 'min-h-[88px] resize-y py-3', className)}
        {...props}
      />
    </FieldShell>
  )
}

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  children: ReactNode
}

export function Checkbox({ children, className, id, ...props }: CheckboxProps) {
  const generatedId = useId()
  const checkboxId = id ?? generatedId

  return (
    <div className="flex items-start gap-2.5">
      <input
        id={checkboxId}
        type="checkbox"
        className={cn(
          'mt-0.5 size-4 shrink-0 accent-secondary',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
          className,
        )}
        {...props}
      />
      <label
        htmlFor={checkboxId}
        className="text-[14px] font-medium leading-snug text-ink"
      >
        {children}
      </label>
    </div>
  )
}
