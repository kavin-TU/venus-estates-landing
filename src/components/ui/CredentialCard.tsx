import type { NriCredentialCard } from '@/types'
import { cn } from '@/lib'

type CredentialCardProps = {
  card: NriCredentialCard
  className?: string
}

/** Shared Why Us / NRI credential commitment card. */
export function CredentialCard({ card, className }: CredentialCardProps) {
  return (
    <div
      className={cn(
        'relative isolate flex min-h-[140px] flex-col justify-between gap-3 overflow-hidden rounded-xl p-5',
        card.tone === 'primary' ? 'bg-footer text-paper' : 'bg-secondary text-paper',
        className,
      )}
    >
      {card.watermark ? (
        <img
          src={card.watermark.src}
          alt={card.watermark.alt}
          className="pointer-events-none absolute -right-2 -bottom-2 -z-10 h-28 w-auto opacity-15"
          aria-hidden="true"
        />
      ) : null}

      <img src={card.icon.src} alt={card.icon.alt} className="size-[30px]" width={30} height={30} />
      <h3 className="text-[18px] font-medium leading-snug lg:text-[20px]">{card.title}</h3>
    </div>
  )
}
