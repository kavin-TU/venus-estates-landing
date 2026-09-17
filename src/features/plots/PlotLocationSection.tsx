import type { EmphasisRun } from '@/types'

type MapCoordinates = {
  lat: number
  lng: number
  zoom: number
  markerLabel: string
}

type PlotLocationSectionProps = {
  heading: readonly EmphasisRun[]
  body: string
  coordinates: MapCoordinates
  label: string
  address: string
  reasonsHeading: string
  reasons: readonly string[]
}

function googleMapsEmbedSrc({ lat, lng, zoom, markerLabel }: MapCoordinates) {
  const query = encodeURIComponent(`${markerLabel}@${lat},${lng}`)
  return `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`
}

export function PlotLocationSection({
  heading,
  body,
  coordinates,
  label,
  address,
  reasonsHeading,
  reasons,
}: PlotLocationSectionProps) {
  const mapSrc = googleMapsEmbedSrc(coordinates)

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[320px] lg:shrink-0 lg:text-[32px]">
            {heading.map((run, index) => (
              <span key={index} className={run.accent ? 'text-secondary' : undefined}>
                {run.text}
              </span>
            ))}
          </h2>
          <p className="text-[16px] font-medium leading-[21px] lg:w-[598px] lg:text-justify">
            {body}
          </p>
        </div>
      </div>

      <div className="relative isolate min-h-[420px] overflow-hidden lg:h-[800px]">
        <iframe
          title={`Map showing ${coordinates.markerLabel}`}
          src={mapSrc}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="pointer-events-none relative mx-auto flex h-full max-w-[1440px] items-center px-6 py-12 sm:px-10 lg:px-[100px]">
          <aside className="pointer-events-auto w-full max-w-[408px] rounded-[10px] bg-ink/70 p-6 text-white backdrop-blur-[10px] sm:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-bold uppercase leading-none">{label}</h3>
              <p className="text-[16px] font-medium leading-[21px] text-white/90">
                {address}
              </p>
            </div>

            <hr className="my-5 border-white/20" />

            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-semibold capitalize text-secondary">
                {reasonsHeading}
              </p>
              <ul className="flex flex-col gap-3">
                {reasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex gap-3 text-[16px] font-medium leading-[21px] text-white/90"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
