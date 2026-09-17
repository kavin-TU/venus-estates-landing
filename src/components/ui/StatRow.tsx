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
        'grid w-full grid-cols-3 gap-3 sm:gap-6',
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item.label}
          className="flex flex-col items-center gap-2 py-4 text-center"
        >
          <p className="font-stat text-[32px] font-semibold leading-10 text-ink sm:text-[40px]">
            {item.value}
            {item.suffix ? (
              <span className="text-secondary">{item.suffix}</span>
            ) : null}
          </p>
          <p className="text-[13px] font-medium leading-snug text-ink sm:text-[16px]">
            {item.label}
          </p>
        </li>
      ))}
    </ul>
  )
}
