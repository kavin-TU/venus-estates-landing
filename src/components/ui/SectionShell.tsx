import type { ReactNode } from 'react'
import { cn } from '@/lib'
import { Reveal } from './Reveal'

type SectionShellProps = {
  children: ReactNode
  /** default = lg:py-[75px]; compact = lg:py-[50px] */
  padding?: 'default' | 'compact'
  className?: string
  /** Scroll reveal (default on). */
  reveal?: boolean
}

/** Standard max-width page section inner container. */
export function SectionShell({
  children,
  padding = 'default',
  className,
  reveal = true,
}: SectionShellProps) {
  const inner = (
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

  return reveal ? <Reveal>{inner}</Reveal> : inner
}
