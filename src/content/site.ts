import type {
  BlogPost,
  ConsentRun,
  CtaLink,
  EmphasisRun,
  EnquiryField,
  FaqItem,
  GalleryAlbum,
  ImageAsset,
  InlineMediaHeadingSegment,
  NavLink,
  PlotFilterOption,
  PlotListing,
  ProjectCard,
  ProjectFilter,
  ProjectListing,
  ReasonCard,
  SocialLink,
  StatItem,
  Testimonial,
} from '@/types'
import heroSlide1 from '@/assets/images/hero/slides/slide-1.png'
import heroSlide2 from '@/assets/images/hero/slides/slide-2.png'
import heroSlide3 from '@/assets/images/hero/slides/slide-3.png'
import heroSlide4 from '@/assets/images/hero/slides/slide-4.png'
import heroSlide5 from '@/assets/images/hero/slides/slide-5.png'
import aboutHeadingImg1 from '@/assets/images/about/heading-pill-1.png'
import aboutHeadingImg2 from '@/assets/images/about/heading-pill-2.png'
import aboutBlueprint from '@/assets/images/about/blueprint-house.png'
import headingPill from '@/assets/images/shared/heading-pill.jpg'
import metroCitySketch from '@/assets/images/shared/metro-city-sketch.jpg'
import venusAvenueGate from '@/assets/images/shared/venus-avenue-gate.jpg'
import projectMetroCity from '@/assets/images/projects/metro-city.jpg'
import projectPrestige from '@/assets/images/projects/prestige.jpg'
import projectCrown from '@/assets/images/projects/crown.jpg'
import projectCrystalAvenue from '@/assets/images/projects/crystal-avenue.jpg'
import reasonsBlueprint from '@/assets/images/reasons/blueprint-bg.jpg'
import reasonsDtcpRera from '@/assets/images/reasons/dtcp-rera.jpg'
import mosaicRoadCrossing from '@/assets/images/mosaic/road-crossing.jpg'
import mosaicStreetDusk from '@/assets/images/mosaic/street-dusk.jpg'
import mosaicOpenPlot from '@/assets/images/mosaic/open-plot.jpg'
import mosaicLabelBg from '@/assets/images/mosaic/label-bg.jpg'
import mosaicPlotMarkers from '@/assets/images/mosaic/plot-markers.jpg'
import testimonialAvatar from '@/assets/images/testimonials/avatar.jpg'
import blogPost1 from '@/assets/images/blogs/post-1.jpg'
import blogPost2 from '@/assets/images/blogs/post-2.jpg'
import projectsBanner from '@/assets/images/projects/banner.jpg'
import plotCard from '@/assets/images/plots/card.jpg'
import plotDetailHero from '@/assets/images/plots/detail-hero.jpg'
import plotGallery1 from '@/assets/images/plots/gallery-1.jpg'
import plotGallery2 from '@/assets/images/plots/gallery-2.jpg'
import plotGallery3 from '@/assets/images/plots/gallery-3.jpg'
import plotGallery4 from '@/assets/images/plots/gallery-4.jpg'
import plotEnquiryBg from '@/assets/images/plots/enquiry-bg.jpg'
import galleryCoverJk from '@/assets/images/gallery/cover-jk-garden.jpg'
import galleryJk1 from '@/assets/images/gallery/jk-1.jpg'
import galleryJk2 from '@/assets/images/gallery/jk-2.jpg'
import galleryJk3 from '@/assets/images/gallery/jk-3.jpg'
import galleryJk4 from '@/assets/images/gallery/jk-4.jpg'

/** Stand-in review text repeated across the testimonial carousel in the design. */
const placeholderReview =
  'Booking a site visit is simple. Fill out the site visit form on this page or select your preferred project and fill in the enquiry form. Our team will call you within 24 hours to confirm a time. We also offer pick up and drop from 10 locations in Salem to your preferred project site.'

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
        src: aboutBlueprint,
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

    projects: {
      heading: {
        lines: [
          [
            { type: 'text', text: 'WE' },
            {
              type: 'image',
              src: metroCitySketch,
              alt: 'Pencil sketch of The Metro City gateway',
            },
            { type: 'text', text: 'BUILD' },
          ],
          [
            { type: 'text', text: 'PLACES' },
            {
              type: 'image',
              src: headingPill,
              alt: 'Landscaped plots at a Venus Estates development',
            },
            { type: 'text', text: 'FOR ' },
            { type: 'text', text: 'YOUR', accent: true },
            { type: 'text', text: ' FUTURE' },
          ],
        ] as const satisfies readonly (readonly InlineMediaHeadingSegment[])[],
      },
      cta: { label: 'View All Projects', path: '/projects' } satisfies CtaLink,
      intro: [
        {
          text: 'We are creating thoughtfully planned real-estate communities designed for ',
        },
        { text: 'modern living', accent: true },
        { text: ', ' },
        { text: 'smart investment', accent: true },
        { text: ' and ' },
        { text: 'lasting value', accent: true },
        {
          text: '. Explore our growing portfolio of projects, each built with quality, connectivity, and your future in mind. From well-connected locations to thoughtfully designed layouts and essential infrastructure, every project is planned to offer a better way to live.',
        },
      ] as const satisfies readonly EmphasisRun[],
      cards: [
        {
          index: '01',
          name: 'THE METRO CITY',
          plots: '50+ Plots',
          image: {
            src: projectMetroCity,
            alt: 'The Metro City entrance gate lit at dusk',
          },
          path: '/projects',
        },
        {
          index: '02',
          name: 'THE PRESTIGE',
          plots: '50+ Plots',
          image: {
            src: projectPrestige,
            alt: 'The Prestige gateway with palm-lined avenue',
          },
          path: '/projects',
        },
        {
          index: '03',
          name: 'THE CROWN',
          plots: '50+ Plots',
          image: {
            src: projectCrown,
            alt: 'The Crown gateway with crown and horse sculptures',
          },
          path: '/projects',
        },
        {
          index: '04',
          name: 'CRYSTAL AVENUE',
          plots: '50+ Plots',
          image: {
            src: projectCrystalAvenue,
            alt: 'Crystal Avenue entrance arch at sunset',
          },
          path: '/projects',
        },
      ] as const satisfies readonly ProjectCard[],
    },

    reasons: {
      background: {
        src: reasonsBlueprint,
        alt: '',
      } satisfies ImageAsset,
      heading: {
        lines: [
          [{ type: 'text', text: 'REASON TO' }],
          [
            { type: 'text', text: 'CHOOSE' },
            {
              type: 'image',
              src: headingPill,
              alt: 'Landscaped plots at a Venus Estates development',
            },
            { type: 'text', text: 'VENUS', accent: true },
            { type: 'text', text: ' ESTATES' },
          ],
        ] as const satisfies readonly (readonly InlineMediaHeadingSegment[])[],
      },
      /** Order is column-major: [left-top, left-bottom, featured, right-top, right-bottom] */
      cards: [
        {
          icon: 'transparent',
          title: 'Transparent Processes',
          body: 'The price you see is the price you pay. No hidden charges at the time of the registration.',
        },
        {
          icon: 'legal',
          title: 'Legally Secure Ownership',
          body: 'Every plot is legally verified and has clear documentation before the development starts',
        },
        {
          icon: 'approved',
          title: 'DTCP & RERA Approved',
          body: 'All projects are developed with DTCP approvals and RERA registration. No shortcuts, no risks.',
          image: {
            src: reasonsDtcpRera,
            alt: 'Aerial view of an approved Venus Estates layout',
          },
        },
        {
          icon: 'onTime',
          title: 'On-Time Delivered',
          body: 'We deliver our promises on time so you can start building your home immediately.',
        },
        {
          icon: 'location',
          title: 'Strategic Location Selection',
          body: 'We only pick locations that has the potential for growth, where land value appreciates faster.',
        },
      ] as const satisfies readonly ReasonCard[],
    },

    statement: [
      { text: 'Founded in 2023, Venus Estates is a ' },
      {
        text: 'fast-growing lifestyle real estate company focused on',
        muted: true,
      },
      { text: ' creating thoughtfully ' },
      { text: 'planned communities ', muted: true },
      {
        text: 'across Tamil Nadu’s Kongu Belt. With 10+ completed projects and 1M+ sq. ft.',
      },
    ] as const satisfies readonly EmphasisRun[],

    mosaic: {
      label: [
        { type: 'text', text: 'VENUS', accent: true },
        { type: 'text', text: ' ESTATES' },
      ] as const satisfies readonly InlineMediaHeadingSegment[],
      tiles: {
        tall: {
          src: venusAvenueGate,
          alt: 'Venus Avenue entrance gate with palm-lined drive',
        },
        left: [
          {
            src: mosaicRoadCrossing,
            alt: 'Newly laid road and pedestrian crossing inside a layout',
          },
          {
            src: mosaicStreetDusk,
            alt: 'Street lighting along a layout road at dusk',
          },
        ],
        center: [
          { src: mosaicOpenPlot, alt: 'Open plot with hills in the distance' },
          {
            src: mosaicPlotMarkers,
            alt: 'Marked plot boundaries with footpath',
          },
        ],
        labelBackground: {
          src: mosaicLabelBg,
          alt: '',
        } satisfies ImageAsset,
      },
    },

    testimonials: {
      heading: {
        lines: [
          [
            { type: 'text', text: 'WHAT ' },
            { type: 'text', text: 'OUR', accent: true },
            { type: 'text', text: ' CLIENTS SAY' },
          ],
        ] as const satisfies readonly (readonly InlineMediaHeadingSegment[])[],
      },
      // Placeholder copy mirrors the Figma design, which repeats one review.
      // Replace each entry as real reviews arrive.
      items: [
        {
          quote: placeholderReview,
          name: 'Arun Kumar',
          rating: 5,
          avatar: { src: testimonialAvatar, alt: 'Arun Kumar' },
        },
        {
          quote: placeholderReview,
          name: 'John Doe',
          rating: 5,
          avatar: { src: testimonialAvatar, alt: 'Arun Kumar' },
        },
        {
          quote: placeholderReview,
          name: 'John mohan',
          rating: 5,
          avatar: { src: testimonialAvatar, alt: 'Arun Kumar' },
        },
        {
          quote: placeholderReview,
          name: 'John kumar',
          rating: 5,
          avatar: { src: testimonialAvatar, alt: 'Arun Kumar' },
        },
      ] as const satisfies readonly Testimonial[],
    },

    faq: {
      heading: {
        lines: [
          [
            { type: 'text', text: 'FREQUENTLY ' },
            { type: 'text', text: 'ASKED', accent: true },
            { type: 'text', text: ' QUESTIONS' },
          ],
        ] as const satisfies readonly (readonly InlineMediaHeadingSegment[])[],
      },
      subheading: 'Find answers to common questions about Venus Estates',
      image: {
        src: metroCitySketch,
        alt: 'Pencil sketch of The Metro City gateway',
      } satisfies ImageAsset,
      items: [
        {
          question: 'How do i schedule a site visit?',
          answer:
            'Booking a site visit is simple. Fill out the site visit form on this page or select your preferred project and fill in the enquiry form. Our team will call you within 24 hours to confirm a time. We also offer pick up and drop from 10 locations in Salem to your preferred project site.',
        },
        {
          question: 'Do you help with bank loans for plot purchase?',
          answer:
            'Yes. Every Venus Estates project is approved by leading financial institutions, making your home-buying journey seamless. With loan facilities of up to 80% available through our trusted banking partners, our dedicated team will assist you in selecting the right lender and ensure all documentation is completed',
        },
        {
          question:
            'Are Venus Estates projects DTCP-approved and RERA-registered?',
          answer:
            'Every Venus Estates project is fully DTCP-approved and RERA-registered. You can verify the RERA number for any project directly on the Tamil Nadu RERA portal.',
        },
        {
          question: 'Can I visit the site during weekends?',
          answer:
            'Yes. Weekend site visits are available with prior confirmation to ensure that dedicated expert is available to guide you.',
        },
        {
          question:
            'Are facilities like EB and water connection provided for each plot?',
          answer:
            'Yes. Every plot in our layout comes with individual water pipe connection and access to electricity. This is a ready-to-build plot with 50+ amenities.',
        },
      ] as const satisfies readonly FaqItem[],
    },

    blogs: {
      heading: {
        lines: [
          [
            { type: 'text', text: 'STAY INFORMED ABOUT THE ' },
            { type: 'text', text: 'SALEM REAL', accent: true },
          ],
          [
            { type: 'text', text: 'ESTATE', accent: true },
            { type: 'text', text: ' MARKET THROUGH OUR BLOGS' },
          ],
        ] as const satisfies readonly (readonly InlineMediaHeadingSegment[])[],
      },
      cta: { label: 'View All Blogs', path: '/blog' } satisfies CtaLink,
      // Placeholder copy mirrors the Figma design, which repeats one post.
      posts: [
        {
          date: 'Jul 28, 2026',
          title:
            '10 Things to Check Before Buying a Plot in Salem: A Complete Buyer’s Guide (2026)',
          image: { src: blogPost1, alt: 'Pricing guide for homebuyers' },
          path: '/blog',
        },
        {
          date: 'Jul 28, 2026',
          title:
            '10 Things to Check Before Buying a Plot in Salem: A Complete Buyer’s Guide (2026)',
          image: {
            src: blogPost2,
            alt: 'A location-wise investment guide for Salem',
          },
          path: '/blog',
        },
        {
          date: 'Jul 28, 2026',
          title:
            '10 Things to Check Before Buying a Plot in Salem: A Complete Buyer’s Guide (2026)',
          image: { src: blogPost1, alt: 'Pricing guide for homebuyers' },
          path: '/blog',
        },
      ] as const satisfies readonly BlogPost[],
    },

    enquiry: {
      background: {
        src: venusAvenueGate,
        alt: '',
      } satisfies ImageAsset,
      heading: [
        { text: 'Find Your Ideal Plot in ' },
        { text: 'Salem', accent: true },
      ] as const satisfies readonly EmphasisRun[],
      subheading:
        'Explore prime plots in Salem, designed for comfortable living, smart investment, and lasting value.',
      fields: {
        firstName: {
          name: 'firstName',
          label: 'First Name',
          placeholder: 'Enter your first name',
        },
        lastName: {
          name: 'lastName',
          label: 'Last Name',
          placeholder: 'Enter your last name',
        },
        email: {
          name: 'email',
          label: 'Email',
          placeholder: 'Enter your email',
        },
        phone: {
          name: 'phone',
          label: 'Phone No',
          placeholder: 'Enter phone number',
        },
        desiredDate: {
          name: 'desiredDate',
          label: 'Desired Date',
          placeholder: 'dd/mm/yyyy',
        },
        additional: {
          name: 'additional',
          label: 'Additional Information',
          placeholder: 'Enter additional information if you want to tell',
        },
      } satisfies Record<string, EnquiryField>,
      dialCode: '+91',
      otpNotice:
        'To Ensure The Security Of Your Account. An OTP Will Be Sent To The Mobile Number You Provided.',
      consents: {
        policy: [
          { text: 'By selecting this, you agree to our ' },
          { text: 'Privacy Policy', path: '/privacy' },
          { text: ', ' },
          { text: 'Terms and Conditions', path: '/terms' },
          { text: ' and ' },
          { text: 'Cookie Policy', path: '/privacy' },
          { text: '.' },
        ] as const satisfies readonly ConsentRun[],
        contact:
          'I authorize the Venusestates team to contact me. This will override the registry with DNC / NDNC',
      },
      submitLabel: 'Submit Enquiry',
    },
  },

  projects: {
    banner: {
      heading: [
        { text: 'OUR', accent: true },
        { text: ' PROJECTS' },
      ] as const satisfies readonly EmphasisRun[],
      image: {
        src: projectsBanner,
        alt: 'Venus Avenue entrance gate, alternating photo and pencil-study tiles',
      } satisfies ImageAsset,
    },

    intro: {
      heading: [
        { text: 'From ' },
        { text: 'Idea To', accent: true },
        { text: ' Final Projects' },
      ] as const satisfies readonly EmphasisRun[],
      body: 'We are creating thoughtfully planned real-estate communities designed for modern living, smart investment, and lasting value. Explore our growing portfolio of projects, each built with quality, connectivity, and your future in mind.',
    },

    filters: [
      { id: 'all', label: 'All projects' },
      { id: 'upcoming', label: 'Upcoming' },
      { id: 'ongoing', label: 'Ongoing' },
      { id: 'completed', label: 'Completed' },
    ] as const satisfies readonly ProjectFilter[],

    /** How many cards fill one page of the grid (3 rows x 2 columns). */
    pageSize: 6,

    // Placeholder listings mirror the Figma frame, which repeats one card.
    // Statuses are spread so the filters visibly do something; replace with
    // real projects when they are ready.
    items: [
      'ongoing',
      'ongoing',
      'upcoming',
      'completed',
      'ongoing',
      'completed',
      'upcoming',
      'ongoing',
    ].map((status, index) => ({
      name: 'THE METRO CITY PHASE 2',
      location: 'vadachennai, tamilnadu',
      status,
      statusLabel:
        status === 'ongoing'
          ? 'On Going'
          : status === 'upcoming'
            ? 'Upcoming'
            : 'Completed',
      image: {
        src: projectMetroCity,
        alt: `The Metro City Phase 2 entrance gate, listing ${index + 1}`,
      },
      path: '/plots',
    })) as ProjectListing[],
  },

  plots: {
    banner: {
      image: {
        src: projectsBanner,
        alt: 'Venus Avenue entrance gate, alternating photo and pencil-study tiles',
      } satisfies ImageAsset,
    },

    intro: {
      heading: [{ text: 'Marutham Garden' }] as const satisfies readonly EmphasisRun[],
      body: 'Discover Marutham Garden, a thoughtfully planned plot development in Salem, designed for comfortable living and smart investment. With well-planned layouts, quality infrastructure, and convenient connectivity, every plot offers the right foundation to build your dream home and create lasting value.',
    },

    filters: {
      facing: [
        { id: 'all', label: 'All Facing' },
        { id: 'north', label: 'North' },
        { id: 'south', label: 'South' },
        { id: 'east', label: 'East' },
        { id: 'west', label: 'West' },
      ] as const satisfies readonly PlotFilterOption[],
      sqft: [
        { id: 'all', label: 'All Sq.ft' },
        { id: '1000-1500', label: '1,000 – 1,500' },
        { id: '1500-2000', label: '1,500 – 2,000' },
        { id: '2000+', label: '2,000+' },
      ] as const satisfies readonly PlotFilterOption[],
      price: [
        { id: 'all', label: 'All Price' },
        { id: 'under-15l', label: 'Under 15L' },
        { id: '15l-25l', label: '15L – 25L' },
        { id: '25l+', label: '25L+' },
      ] as const satisfies readonly PlotFilterOption[],
      facingLabel: 'Facing',
      sqftLabel: 'Sq.ft Range',
      priceLabel: 'Price Range',
      resetLabel: 'Reset Filters',
    },

    pageSize: 6,

    // Placeholder plots mirror the Figma frame; facing/sqft/price vary so filters work.
    items: (
      [
        { facing: 'south', sqft: 1406, priceBand: 'under-15l', slug: 'marutham-south-1406' },
        { facing: 'north', sqft: 1620, priceBand: '15l-25l', slug: 'marutham-north-1620' },
        { facing: 'east', sqft: 2264, priceBand: '15l-25l', slug: 'marutham-east-2264' },
        { facing: 'west', sqft: 1180, priceBand: 'under-15l', slug: 'marutham-west-1180' },
        { facing: 'south', sqft: 1850, priceBand: '15l-25l', slug: 'marutham-south-1850' },
        { facing: 'north', sqft: 2400, priceBand: '25l+', slug: 'marutham-north-2400' },
        { facing: 'east', sqft: 1406, priceBand: 'under-15l', slug: 'marutham-east-1406' },
        { facing: 'south', sqft: 2100, priceBand: '25l+', slug: 'marutham-south-2100' },
      ] as const
    ).map((plot) => ({
      slug: plot.slug,
      name: 'Marutham Garden',
      location: 'K.R. Thoppur, Salem, Tamil Nadu, India',
      facing: plot.facing,
      facingLabel: plot.facing.charAt(0).toUpperCase() + plot.facing.slice(1),
      sqft: plot.sqft,
      sqftLabel: plot.sqft.toLocaleString('en-IN'),
      priceBand: plot.priceBand,
      image: {
        src: plotCard,
        alt: `Marutham Garden plot, ${plot.facing} facing, ${plot.sqft} sq.ft`,
      },
      path: `/plots/${plot.slug}`,
    })) as PlotListing[],

    details: {
      'marutham-south-1406': {
        hero: {
          image: {
            src: plotDetailHero,
            alt: 'Marutham Garden entrance and landscaped drive',
          } satisfies ImageAsset,
          title: 'Marutham Garden',
          body: 'Own a premium residential plot in a rapidly developing neighborhood, perfect for your dream home or a valuable long-term investment.',
          stats: [
            { value: '2,264', label: 'Square feet Plot' },
            { value: 'SOUTH', label: 'Facing Property' },
            { value: '14.2L', label: 'Rupees' },
          ],
        },
        gallery: {
          heading: [
            { text: 'image', accent: true },
            { text: ' gallery' },
          ] as const satisfies readonly EmphasisRun[],
          body: 'Step into the world of Venus Estates through our image gallery and experience our projects before you visit. Explore thoughtfully planned layouts, well-developed infrastructure, beautiful surroundings, key amenities, and the progress of our developments.',
          images: [
            { src: plotGallery1, alt: 'Marutham Garden landscaped entrance' },
            { src: plotGallery2, alt: 'Marutham Garden plot roadway' },
            { src: plotGallery3, alt: 'Marutham Garden development overview' },
            { src: plotGallery4, alt: 'Marutham Garden site progress' },
          ] as const satisfies readonly ImageAsset[],
          pageSize: 2,
        },
        location: {
          heading: [
            { text: 'Location And Neighbourhoods' },
          ] as const satisfies readonly EmphasisRun[],
          body: 'Marutham Garden is thoughtfully located in Salem, offering convenient access to key roads, essential amenities, educational institutions, healthcare facilities, and everyday conveniences. Its well-connected surroundings make it an ideal choice for building your dream home and a promising long-term investment.',
          coordinates: {
            lat: 11.6761,
            lng: 78.0067,
            zoom: 15,
            markerLabel: 'Marutham Garden',
          },
          label: 'Location',
          address: 'MARUTHAM GARDEN, K.R. Thoppur, Salem, Tamil Nadu, India',
          reasonsHeading: 'why this location ?',
          reasons: [
            'Close proximity to Avinashi Road',
            'Easy access to schools, colleges & hospitals',
            'Surrounded by fast developing residential hubs',
            'High appreciation potential',
            'Peaceful environment with great connectivity',
          ],
        },
        enquiry: {
          background: {
            src: plotEnquiryBg,
            alt: '',
          } satisfies ImageAsset,
          heading: [
            { text: 'enquiry form' },
          ] as const satisfies readonly EmphasisRun[],
          interestHeading: 'Interested in the project?',
          interestBody: 'Book the site visit and team get you in touch',
          fields: {
            firstName: {
              name: 'firstName',
              label: 'first name',
              placeholder: 'Enter  your first name',
            },
            lastName: {
              name: 'lastName',
              label: 'last name',
              placeholder: 'Enter  your last name',
            },
            email: {
              name: 'email',
              label: 'email',
              placeholder: 'Enter  your email',
            },
            phone: {
              name: 'phone',
              label: 'Phone No',
              placeholder: 'Enter phone number',
            },
            desiredDate: {
              name: 'desiredDate',
              label: 'Desired date',
              placeholder: 'dd/mm/yyyy',
            },
            additional: {
              name: 'additional',
              label: 'additional information',
              placeholder: 'Enter  additional information if you want to tell',
            },
          } satisfies Record<string, EnquiryField>,
          dialCode: '+91',
          otpNotice:
            'To Ensure The Security Of Your Account. An OTP Will Be Sent To The Mobile Number You Provided.',
          consents: {
            policy: [
              { text: 'By selecting this, you agree to our ' },
              { text: 'Privacy Policy', path: '/privacy' },
              { text: ', ' },
              { text: 'Terms and Conditions', path: '/terms' },
              { text: ' and ' },
              { text: 'Cookie Policy', path: '/privacy' },
              { text: '.' },
            ] as const satisfies readonly ConsentRun[],
            contact:
              'I authorize the Venusestates team to contact me. This will override the registry with DNC / NDNC',
          },
          submitLabel: 'Submit Enquiry',
          contactLabels: {
            phone: 'phone',
            email: 'email',
            office: 'phone',
          },
          officeAddress:
            'Our Corporate Office, Venus Estates Private Limited, 3rd Floor, Ganesh Towers, SKS Hospital Road, Kaaliya Pillai Thoppu, Fairlands, Salem – 636004 Tamil Nadu',
        },
      },
    },
  },

  gallery: {
    banner: {
      image: {
        src: projectsBanner,
        alt: 'Venus Avenue entrance gate, alternating photo and pencil-study tiles',
      } satisfies ImageAsset,
    },

    intro: {
      heading: [
        { text: 'image', accent: true },
        { text: ' gallery' },
      ] as const satisfies readonly EmphasisRun[],
      body: 'Step into the world of Venus Estates through our image gallery and experience our projects before you visit. Explore thoughtfully planned layouts, well-developed infrastructure, beautiful surroundings, key amenities, and the progress of our developments.',
    },

    /** Detail page title for the shared JK Garden album placeholders. */
    albumHeading: 'jk gardens',

    pageSize: 6,

    // Placeholder albums mirror the Figma frame, which repeats JK Garden.
    albums: (
      [
        'jk-garden',
        'jk-garden-2',
        'jk-garden-3',
        'jk-garden-4',
        'jk-garden-5',
        'jk-garden-6',
        'jk-garden-7',
        'jk-garden-8',
      ] as const
    ).map((slug) => ({
      slug,
      name: 'JK GARDEN',
      location: 'vadachennai, tamilnadu',
      imageCountLabel: '50+ Images',
      cover: {
        src: galleryCoverJk,
        alt: 'JK Garden project gallery cover',
      },
      path: `/gallery/${slug}`,
      images: [
        { src: galleryJk1, alt: 'JK Garden landscape view' },
        { src: galleryJk2, alt: 'JK Garden site roadway' },
        { src: galleryJk3, alt: 'JK Garden development overview' },
        { src: galleryJk4, alt: 'JK Garden entrance avenue' },
      ],
    })) as GalleryAlbum[],
  },
} as const

/** Content pages derived from nav + legal (excludes Home). */
export const pageRoutes: NavLink[] = [
  ...site.navLinks.filter((link) => link.path !== '/'),
  ...site.legalLinks,
]
