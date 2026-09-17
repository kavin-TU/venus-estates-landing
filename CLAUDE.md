# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc -b (typecheck, noEmit) then vite build
npm run lint     # oxlint
npm run preview  # serve dist/
```

There is no test setup in this repo. `npm run build` is the typecheck gate — `tsconfig.app.json` runs with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, and `verbatimModuleSyntax` (so type-only imports must use `import type`).

## Project

Venus Estates — a marketing site for a Salem-based real estate developer. Vite + React 19 + TypeScript + Tailwind v4 + react-router-dom + `motion`. The package name is `venus-estates`; the repo folder is `venus-designs`. This is **not** "Crescent Designs".

## Architecture

```
src/
  app/           # Shell only: App → AppProviders (BrowserRouter) → AppRouter
  assets/images/ # Static images, imported as modules (not /public paths)
  components/    # layout/ (Layout, Navbar, Footer) + ui/ (primitives)
  config/        # App constants (APP_NAME, LAYOUT_MAX_WIDTH) — not marketing copy
  content/site.ts# ALL site copy, nav, CTAs, contact, per-feature blocks
  features/      # Feature modules, e.g. features/home
  lib/           # cn(), toRoutePath()
  pages/         # StubPage — placeholder for unbuilt routes
  styles/        # index.css: Tailwind v4 @theme tokens + base layer
  types/         # Content shape types
```

### Content is the single source of truth

`src/content/site.ts` holds every user-visible string, link, image import, and stat — closed with `as const`, with `satisfies` against the types in `src/types/site.ts`. Components read from `site`; they never hardcode copy, emails, phone numbers, or nav arrays. Images referenced by content are imported at the top of `site.ts` so Vite fingerprints them.

### Routing derives from content

`pageRoutes` in `site.ts` = `navLinks` (minus Home) + `legalLinks`. `src/app/router/index.tsx` maps it into `<Route>`s rendering `StubPage`, all nested under the `Layout` route (Navbar + `<Outlet />` + Footer), with `*` redirecting to `/`. `toRoutePath()` strips the leading slash since routes are relative to the layout route. To add a page: add its `{ label, path }` to `navLinks` (and `quickLinks` if it belongs in the footer) — it gets a stub route for free — then build `features/<name>/` and swap the element in the router.

### Barrels

Every folder exports through `index.ts`; import via the `@/` alias (`@/content`, `@/components/ui`, `@/lib`) rather than deep relative paths. The alias is declared twice — `vite.config.ts` and `tsconfig.app.json` `paths`.

## Styling

Tailwind v4 via `@tailwindcss/vite` — no `tailwind.config.js`. Design tokens are CSS variables inside `@theme` in `src/styles/index.css`, which is what makes `bg-ink`, `text-secondary`, `bg-glass`, `font-display`, `font-stat` valid utilities. Add a token there before using it; don't put one-off hex values in JSX.

Fonts (loaded from Google Fonts in `index.css`): DM Sans / Outfit for UI (`font-sans`), Syne for display (`font-display`), Sarpanch for stat numerals (`font-stat`). Never substitute Inter/Roboto/system stacks.

`max-w-[1440px]` is the recurring page container width.

### Responsive class strings live in layout modules

The hero's absolutely-positioned pieces are pixel-placed per breakpoint, so their class strings are extracted into `src/features/home/heroLayout.ts` as `cn(...)` constants grouped with `// mobile` / `// tablet` / `// desktop` comments. The breakpoint convention there is mobile-first base, `md:max-lg:` for tablet, `lg:` for desktop. Keep this pattern for any similarly position-heavy section rather than inlining 300-character `className` strings.

## Hero animation

`src/features/home/useHeroIntro.ts` owns the intro choreography as a timed phase machine (`idle → travel → colorize → done`) and returns booleans (`textSettled`, `colorize`, `showAbout`, `countActive`) that `HeroSection` and `HeroStatsCarousel` consume. It reads `prefers-reduced-motion` on mount *and* subscribes to changes; when reduced motion is on it jumps straight to `done` and every consumer passes `duration: 0`. Any new hero-timed element should hang off this hook, not its own timers.

Division of labor inside `HeroSection`: CSS/Tailwind owns the watermark's per-breakpoint Y transform (`heroWatermarkIntro` / `heroWatermarkSettled`); `motion` only animates opacity and the grayscale→color `filter` transition. `COLORIZE_EASE = [0.22, 1, 0.36, 1]` is the shared easing curve across hero components.

## Conventions

- Functional components, named exports (`export function HomePage`).
- `cn()` from `@/lib` for conditional classes (plain `filter(Boolean).join(' ')` — no clsx/tailwind-merge, so conflicting utilities won't be deduped).
- Decorative images get `alt=""` + `aria-hidden`; content images take their alt from `site.ts`.
