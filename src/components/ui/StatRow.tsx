import type { StatItem } from '@/types'
import { cn } from '@/lib'

type StatRowProps = {
  items: readonly StatItem[]
  className?: string
}

export function StatRow({ items, className }: StatRowProps) {
  return (
    <ul
      className={cn(
        'grid w-full grid-cols-3 items-start gap-3 sm:gap-6',
        // The design lifts the middle stat clear of its neighbours on desktop.
        'lg:[&>li:nth-child(2)]:-translate-y-[30px]',
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item.label}
          className="flex flex-col items-center gap-2 pt-4 text-center"
        >
          <p className="font-stat text-[32px] font-semibold leading-10 text-ink sm:text-[40px]">
            {item.value}
            {item.suffix ? (
              <span className="text-secondary">{item.suffix}</span>
            ) : null}
          </p>
          <p className="text-[14px] font-medium leading-[21px] text-ink sm:text-[16px]">
            {item.label}
          </p>
        </li>
      ))}
    </ul>
  )
}
