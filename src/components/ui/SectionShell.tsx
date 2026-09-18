import type { ReactNode } from 'react'
import { cn } from '@/lib'

type SectionShellProps = {
  children: ReactNode
  /** default = lg:py-[75px]; compact = lg:py-[50px] */
  padding?: 'default' | 'compact'
  className?: string
}

/** Standard max-width page section inner container. */
export function SectionShell({
  children,
  padding = 'default',
  className,
}: SectionShellProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px]',
        padding === 'compact' ? 'lg:py-[50px]' : 'lg:py-[75px]',
        className,
      )}
    >
      {children}
    </div>
  )
}
