import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '@/assets/images/logo.png'
import arrowUpRight from '@/assets/images/icons/arrow-up-right.svg'
import { site } from '@/content'
import { cn } from '@/lib'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const overlay = pathname === '/'
  const { navLinks, cta, logoAlt } = site

  return (
    <header
      className={cn(
        'pointer-events-none inset-x-0 top-0 z-50',
        overlay ? 'absolute' : 'sticky bg-ink',
      )}
    >
      <div className="pointer-events-auto mx-auto flex h-[100px] max-w-[1440px] items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-20">
        <NavLink to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt={logoAlt}
            className="h-[50px] w-[63px] object-contain"
            width={63}
            height={50}
          />
        </NavLink>

        <nav
          className="hidden h-[52px] w-full max-w-[868px] items-center justify-between rounded-full bg-nav-pill px-[50px] backdrop-blur-[10px] lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'group relative flex flex-col items-center whitespace-nowrap text-[16px] font-medium leading-normal tracking-wide',
                  isActive ? 'text-secondary' : 'text-white hover:text-secondary',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  <span
                    className={cn(
                      'mt-0 h-[2px] w-full transition-colors',
                      isActive ? 'bg-secondary' : 'bg-transparent group-hover:bg-secondary/40',
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={cta.bookVisit.path}
            className="inline-flex items-center justify-center gap-1 overflow-hidden rounded-full bg-secondary px-[25px] py-3 text-[16px] font-semibold text-white transition hover:brightness-110"
          >
            {cta.bookVisit.label}
            <img src={arrowUpRight} alt="" className="size-4" width={16} height={16} />
          </Link>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
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
          className="pointer-events-auto border-t border-white/10 bg-ink/95 px-4 py-4 backdrop-blur-md lg:hidden"
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
                      isActive ? 'bg-white/5 text-secondary' : 'text-white/90 hover:bg-white/5',
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
