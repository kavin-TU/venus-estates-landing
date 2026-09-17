import { site } from '@/content'
import { cn } from '@/lib'

export type PlotsFilterState = {
  facing: string
  sqft: string
  price: string
}

type PlotsFiltersProps = {
  value: PlotsFilterState
  onChange: (next: PlotsFilterState) => void
  onReset: () => void
}

function CaretDown({ className = 'size-[18px]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowClockwise({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.65 2.35A7.96 7.96 0 0 0 8 0C3.58 0 0 3.58 0 8s3.58 8 8 8a7.95 7.95 0 0 0 6.5-3.35l-1.7-1.3A5.96 5.96 0 0 1 8 14a6 6 0 1 1 5.45-8.55L11 8h5V3l-2.35-.65Z" />
    </svg>
  )
}

function FilterSelect({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string
  name: string
  options: readonly { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
}) {
  return (
    <label className="relative flex min-w-[128px] flex-col gap-1.5">
      <span className="text-[14px] font-medium text-ink/70">{label}</span>
      <span className="relative flex items-center">
        <select
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            'h-[21px] w-full appearance-none bg-transparent pr-6 text-[16px] font-semibold text-ink',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
          )}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <CaretDown className="pointer-events-none absolute right-0 size-[18px] text-ink" />
      </span>
    </label>
  )
}

export function PlotsFilters({ value, onChange, onReset }: PlotsFiltersProps) {
  const { filters } = site.plots

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div
        role="group"
        aria-label="Filter plots"
        className="flex flex-wrap items-end gap-x-6 gap-y-4"
      >
        <FilterSelect
          label={filters.facingLabel}
          name="facing"
          options={filters.facing}
          value={value.facing}
          onChange={(facing) => onChange({ ...value, facing })}
        />
        <span className="hidden h-9 w-px bg-line sm:block" aria-hidden="true" />
        <FilterSelect
          label={filters.sqftLabel}
          name="sqft"
          options={filters.sqft}
          value={value.sqft}
          onChange={(sqft) => onChange({ ...value, sqft })}
        />
        <span className="hidden h-9 w-px bg-line sm:block" aria-hidden="true" />
        <FilterSelect
          label={filters.priceLabel}
          name="price"
          options={filters.price}
          value={value.price}
          onChange={(price) => onChange({ ...value, price })}
        />
      </div>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex h-[45px] shrink-0 items-center justify-center gap-2 rounded-full border border-secondary px-5 text-[16px] font-semibold text-secondary transition hover:bg-secondary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      >
        {filters.resetLabel}
        <ArrowClockwise />
      </button>
    </div>
  )
}
