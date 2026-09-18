import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { useState } from 'react'
import logo from '@/assets/images/logo.png'
import { site } from '@/content'
import { ArrowUpRight, primaryCtaBaseClass } from '@/components/ui'
import { cn } from '@/lib'

type NavChrome = 'overlay' | 'light' | 'dark'

/** overlay: floats over a full-bleed hero; light: white bar on white pages; dark: default sticky ink. */
function getNavChrome(pathname: string): NavChrome {
  if (
    pathname === '/' ||
    pathname === '/projects' ||
    pathname === '/gallery' ||
    pathname === '/blog' ||
    pathname === '/nri-corner' ||
    pathname === '/investor-corner' ||
    pathname === '/contact' ||
    pathname === '/about/our-story' ||
    pathname === '/about/why-us' ||
    pathname.startsWith('/plots')
  ) {
    return 'overlay'
  }
  if (pathname.startsWith('/gallery/') || pathname.startsWith('/blog/')) {
    return 'light'
  }
  return 'dark'
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const chrome = getNavChrome(pathname)
  const light = chrome === 'light'
  const { navLinks, cta, logoAlt } = site

  return (
    <header
      className={cn(
        'pointer-events-none inset-x-0 top-0 z-50',
        chrome === 'overlay' && 'absolute',
        chrome === 'light' && 'sticky bg-paper',
        chrome === 'dark' && 'sticky bg-ink',
      )}
    >
      <div className="pointer-events-auto mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:h-[100px] lg:px-20 lg:py-6">
        <NavLink to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt={logoAlt}
            className="h-10 w-auto object-contain lg:h-[50px] lg:w-[63px]"
            width={63}
            height={50}
          />
        </NavLink>

        <nav
          className="hidden h-[52px] w-full max-w-[868px] items-center justify-between rounded-full bg-transparent px-[50px] lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <div key={link.path} className="group/dropdown relative flex flex-col items-center">
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'group relative flex flex-col items-center whitespace-nowrap text-[16px] font-medium leading-normal tracking-wide transition-colors duration-300',
                    isActive
                      ? 'text-secondary'
                      : light
                        ? 'text-ink hover:text-secondary'
                        : 'text-paper hover:text-secondary',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span className="relative mt-0 h-[2px] w-full" aria-hidden="true">
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 bg-secondary"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      ) : (
                        <span className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-secondary/40" />
                      )}
                    </span>
                  </>
                )}
              </NavLink>

              {link.children ? (
                <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-200 group-hover/dropdown:visible group-hover/dropdown:opacity-100">
                  <ul className="flex min-w-[160px] flex-col gap-0.5 rounded-xl border border-ink/10 bg-paper p-1.5 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-lg px-3 py-2 text-[14px] font-medium whitespace-nowrap transition-colors duration-200',
                              isActive
                                ? 'bg-mist text-secondary'
                                : 'text-ink hover:bg-mist hover:text-secondary',
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={cta.bookVisit.path}
            className={cn(
              primaryCtaBaseClass,
              'hidden overflow-hidden py-3 lg:inline-flex',
            )}
          >
            {cta.bookVisit.label}
            <ArrowUpRight className="size-4" />
          </Link>

          <button
            type="button"
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-full lg:hidden',
              light
                ? 'border border-ink/15 text-ink'
                : 'border border-paper/20 text-paper',
            )}
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
          className={cn(
            'pointer-events-auto border-t px-4 py-4 lg:hidden',
            light
              ? 'border-ink/10 bg-paper'
              : 'border-paper/10 bg-ink',
          )}
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
                      'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300',
                      isActive
                        ? light
                          ? 'bg-ink/5 text-secondary'
                          : 'bg-paper/5 text-secondary'
                        : light
                          ? 'text-ink/90 hover:bg-ink/5'
                          : 'text-paper/90 hover:bg-paper/5',
                    )
                  }
                >
                  {link.label}
                </NavLink>

                {link.children ? (
                  <ul className="mt-1 flex flex-col gap-1 border-l border-current/10 pl-3">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          onClick={() => setMenuOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300',
                              isActive
                                ? light
                                  ? 'bg-ink/5 text-secondary'
                                  : 'bg-paper/5 text-secondary'
                                : light
                                  ? 'text-ink/80 hover:bg-ink/5'
                                  : 'text-paper/80 hover:bg-paper/5',
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
