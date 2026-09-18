import type { ContactStep, EmphasisRun } from '@/types'
import { site } from '@/content'
import { EmphasisText, SectionShell } from '@/components/ui'

function StepCard({ step }: { step: ContactStep }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-secondary/40 bg-paper p-6">
      <span className="flex size-8 items-center justify-center rounded-md bg-secondary text-[14px] font-semibold text-paper">
        {step.index}
      </span>
      <h3 className="text-[18px] font-medium leading-snug text-ink lg:text-[20px]">
        {step.title}
      </h3>
      <p className="text-[14px] font-medium leading-snug text-ink/70 sm:text-[16px]">
        {step.body}
      </p>
    </div>
  )
}

export function ContactExpectSection() {
  const { expect } = site.contactPage
  const heading: readonly EmphasisRun[] = expect.heading

  return (
    <section className="bg-paper text-ink">
      <SectionShell>
        <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:text-[32px]">
          <EmphasisText runs={heading} />
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {expect.steps.map((step) => (
            <StepCard key={step.index} step={step} />
          ))}
        </div>
      </SectionShell>
    </section>
  )
}
