import type {
  CtaLink,
  InlineMediaHeadingSegment,
  NavLink,
  SocialLink,
  StatItem,
} from '@/types'
import heroSlide1 from '@/assets/images/hero/slides/slide-1.png'
import heroSlide2 from '@/assets/images/hero/slides/slide-2.png'
import heroSlide3 from '@/assets/images/hero/slides/slide-3.png'
import heroSlide4 from '@/assets/images/hero/slides/slide-4.png'
import heroSlide5 from '@/assets/images/hero/slides/slide-5.png'
import aboutHeadingImg1 from '@/assets/images/section-2/about-heading-img1.png'
import aboutHeadingImg2 from '@/assets/images/section-2/about-heading-img2.png'
import section2Img from '@/assets/images/section-2/section-2.png'

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
        mobileLabel: 'Starting Price',
      },
      slides: [
        {
          src: heroSlide1,
          alt: 'The Metro City entrance at dusk',
        },
        {
          src: heroSlide2,
          alt: 'Horse statue at The Metro City gateway',
        },
        {
          src: heroSlide3,
          alt: 'The Metro City gate night lighting',
        },
        {
          src: heroSlide4,
          alt: 'The Metro City site overview',
        },
        {
          src: heroSlide5,
          alt: 'The Metro City gateway in full color',
        },
      ],
      imageAlt: 'The Metro City entrance gate at Venus Estates',
    },
    about: {
      image: {
        src: section2Img,
        alt: 'Architectural line drawing of a Venus Estates home over a floor plan',
      },
      heading: {
        lines: [
          [
            { type: 'text', text: 'ABOUT' },
            {
              type: 'image',
              src: aboutHeadingImg1,
              alt: 'Planned community at golden hour',
            },
          ],
          [
            { type: 'text', text: 'VENUS', accent: true },
            { type: 'text', text: ' ESTATES' },
            {
              type: 'image',
              src: aboutHeadingImg2,
              alt: 'Tree-lined road through a development',
            },
            { type: 'text', text: 'CREATING' },
          ],
          [{ type: 'text', text: 'VALUE BEYOND LAND' }],
        ] as const satisfies readonly (readonly InlineMediaHeadingSegment[])[],
      },
      body: 'Buying land is one of life’s biggest decisions. Whether you’re searching for land in Salem, a residential plot to build your home or a property with long-term investment potential, the developer you choose matters. At Venus Estates, every project begins with a vision to create enduring value, not merely sell land. We meticulously identify high-growth locations with exceptional appreciation potential, secure 100% legal and statutory approvals, and ensure every step of the registration process is seamless, transparent, and hassle-free.',
      cta: { label: 'More About Us', path: '/about' } satisfies CtaLink,
      stats: [
        {
          value: '10',
          suffix: '+',
          label: "Years of Founders' Real Estate Experience",
        },
        {
          value: '10',
          suffix: '+',
          label: 'Projects Successfully Delivered',
        },
        {
          value: '05',
          suffix: '+',
          label: 'Ongoing Premium Projects',
        },
      ] as const satisfies readonly StatItem[],
    },
  },
} as const

/** Content pages derived from nav + legal (excludes Home). */
export const pageRoutes: NavLink[] = [
  ...site.navLinks.filter((link) => link.path !== '/'),
  ...site.legalLinks,
]
