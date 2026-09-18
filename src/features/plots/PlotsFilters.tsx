import { site } from '@/content'
import { ArrowClockwise, CaretDown } from '@/components/ui'
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
        <ArrowClockwise className="size-4" />
      </button>
    </div>
  )
}
