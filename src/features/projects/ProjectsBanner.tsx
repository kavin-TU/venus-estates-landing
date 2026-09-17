import type { EmphasisRun } from '@/types'
import { site } from '@/content'

const COLS = 4
const ROWS = 3

/**
 * One continuous scene sliced across a 4x3 grid with 2px gutters: every tile
 * windows onto the same picture, and individual tiles swap the photograph for
 * its pencil study so the mural reads as a photo/sketch patchwork.
 *
 * The frame draws the source at 2016x820 inside a 1440x820 banner, offset
 * -430px — i.e. 1.4x the banner width, panned left. Expressed in tile widths
 * that is 5.6 wide, 3 tall, starting 1.194 tiles left of column 0, which keeps
 * the framing identical at any viewport size.
 */
const TILES = [
  'photo', 'photo', 'photo', 'sketch',
  'sketch', 'photo', 'sketch', 'photo',
  'photo', 'sketch', 'photo', 'photo',
] as const

const ZOOM = 2016 / 1440
const IMAGE_WIDTH = COLS * ZOOM * 100
const IMAGE_HEIGHT = ROWS * 100
const PAN = (430 / 1440) * COLS * 100

export function ProjectsBanner() {
  const { banner } = site.projects
  const heading: readonly EmphasisRun[] = banner.heading

  return (
    <section className="relative isolate bg-white">
      <div className="grid aspect-[1440/820] grid-cols-4 grid-rows-3 gap-0.5 lg:aspect-auto lg:h-[820px]">
        {TILES.map((kind, index) => {
          const col = index % COLS
          const row = Math.floor(index / COLS)
          return (
            <div key={index} className="relative overflow-hidden bg-white">
              <img
                src={banner.tiles[kind].src}
                alt=""
                aria-hidden="true"
                className="absolute max-w-none"
                style={{
                  width: `${IMAGE_WIDTH}%`,
                  height: `${IMAGE_HEIGHT}%`,
                  left: `${-(PAN + col * 100)}%`,
                  top: `${-(row * 100)}%`,
                }}
                loading={row === 0 ? 'eager' : 'lazy'}
              />
            </div>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[60px]">
          {/* Sits on the light sketch tile at row 2, column 1 — hence black */}
          <h1 className="text-[20px] font-bold uppercase leading-[1.3125] text-ink sm:text-[28px] lg:text-[32px]">
            {heading.map((run, index) => (
              <span
                key={index}
                className={run.accent ? 'text-secondary' : undefined}
              >
                {run.text}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  )
}
