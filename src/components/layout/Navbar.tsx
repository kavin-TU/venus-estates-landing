import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '@/assets/images/logo.png'
import { site } from '@/content'
import { cn } from '@/lib'
import { ArrowUpRight } from '@/components/ui'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { navLinks, cta, logoAlt } = site

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt={logoAlt} className="h-14 w-auto object-contain sm:h-16" />
        </NavLink>

        <nav
          className="hidden items-center rounded-full bg-nav-pill px-2 py-2 backdrop-blur-md xl:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium tracking-wide transition-colors',
                  isActive
                    ? 'text-accent underline decoration-accent decoration-2 underline-offset-8'
                    : 'text-white/90 hover:text-accent',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={cta.bookVisit.path}
            className="inline-flex items-center gap-2 rounded-full bg-accent-bright px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:px-5"
          >
            {cta.bookVisit.label}
            <ArrowUpRight className="size-3.5" />
          </Link>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-ink px-4 py-4 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto flex max-w-[1440px] flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg px-3 py-2.5 text-sm font-medium',
                      isActive ? 'bg-white/5 text-accent' : 'text-white/90 hover:bg-white/5',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
