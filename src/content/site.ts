import type { CtaLink, NavLink, SocialLink } from '@/types'

export const site = {
  name: 'Venus Estates',
  nameUpper: 'VENUS ESTATES',
  logoAlt: 'Venus Estates',

  about:
    'Transforming aspirations into valuable real estate assets through thoughtfully planned communities, trusted developments, and a commitment to quality and transparency.',

  address: {
    company: 'Venus Estates Private Limited',
    lines: [
      '3rd Floor, Ganesh Towers, SKS Hospital Road, Kaaliya Pillai Thoppu, Fairlands,',
      'Salem–636004, Tamil Nadu, India',
    ],
  },

  contact: {
    phoneDisplay: '(+91) 97863 66666',
    phoneHref: 'tel:+919786366666',
    email: 'Info@Venusestates.In',
  },

  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About Us', path: '/about' },
    { label: 'Store', path: '/store' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'NRI Corner', path: '/nri-corner' },
    { label: 'Investor Corner', path: '/investor-corner' },
    { label: 'Contact Us', path: '/contact' },
  ] as const satisfies readonly NavLink[],

  quickLinks: [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
  ] as const satisfies readonly NavLink[],

  legalLinks: [
    { label: 'Privacy & Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
  ] as const satisfies readonly NavLink[],

  socialLinks: [
    { id: 'youtube', label: 'YouTube', href: 'https://youtube.com' },
    { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
    { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  ] as const satisfies readonly SocialLink[],

  cta: {
    bookVisit: { label: 'Book a Site Visit', path: '/contact' } satisfies CtaLink,
    connect: { label: 'Let’s Connect', path: '/contact' } satisfies CtaLink,
    viewProjects: { label: 'View Projects', path: '/projects' } satisfies CtaLink,
  },

  footer: {
    quickLinksHeading: 'QUICK LINK',
    addressHeading: 'ADDRESS',
    contactHeading: 'CONTACT US',
    assistancePrompt: 'HAVE A QUESTION OR NEED ASSISTANCE?',
  },

  home: {
    headline: 'Thoughtfully planned communities for lasting value',
    subcopy:
      'Trusted developments across Salem — quality, transparency, and spaces built for how you live.',
    hero: {
      watermark: 'VENUS',
      projectName: 'THE METRO CITY',
      projectBlurb:
        'A premium plotted development in Sarvoy, Attur, with two successful phases offering thoughtfully planned residential plots',
      exploreLabel: 'Explore',
      explorePath: '/projects',
      plotsReady: {
        value: 80,
        suffix: '+',
        label: 'Plots Ready to Own',
      },
      startingPrice: {
        value: 15,
        suffix: 'K',
        label: 'Starting Price for Plots',
      },
      imageAlt: 'The Metro City entrance gate at Venus Estates',
    },
  },
} as const

/** Content pages derived from nav + legal (excludes Home). */
export const pageRoutes: NavLink[] = [
  ...site.navLinks.filter((link) => link.path !== '/'),
  ...site.legalLinks,
]
