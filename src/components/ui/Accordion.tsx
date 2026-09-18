import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { FaqItem } from '@/types'
import { cn, useReducedMotion } from '@/lib'
import { REVEAL_EASE } from './Reveal'
import { ArrowUpRight } from './ArrowUpRight'

type AccordionProps = {
  items: readonly FaqItem[]
  /** Index open on first render; -1 opens none. */
  defaultOpen?: number
  className?: string
}

export function Accordion({ items, defaultOpen = 0, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)
  const baseId = useId()
  const reducedMotion = useReducedMotion()
  const duration = reducedMotion ? 0 : 0.35

  return (
    <div className={cn('flex flex-col gap-3.5', className)}>
      {items.map((item, index) => {
        const open = index === openIndex
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div
            key={item.question}
            className="flex flex-col rounded-lg border border-line bg-paper p-4"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left text-[16px] font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                {item.question}
                <ArrowUpRight
                  className={cn(
                    'size-6 shrink-0 text-secondary transition-transform duration-300',
                    open && 'rotate-90',
                  )}
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration, ease: REVEAL_EASE }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-[16px] font-medium leading-relaxed text-ink/80">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
