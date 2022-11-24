export type HeroConfig = {
  [key: string]: {
    title: string
    text: string
    icon: string
  }
}

export type SocialPostConfig = {
  [key: string]: {
    [key: string]: Array<Array<string>>
  }
}

export const regexConfig: Record<string, string> = {
  alpha: '(^[^0-9_!¡?÷¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]+)$',
  alphanumeric: '(^[^_!¡?÷¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]+)$',
  numeric: '^\\d+$',
  phone: '^[0-9 ()+]+$',
}

const dev = process.env.NODE_ENV !== 'production'

export const baseUrl = dev ? 'http://localhost:3000' : 'https://switchit-weld.vercel.app'

export const awsS3Uri = 'https://switchit-green.s3.eu-west-2.amazonaws.com'

export const whatsAppUrl =
  'https://wa.me/?text=Hey%20there!%20Use%20this%20referral%20code%20to%20switch%20banks%20'

export const emailRegex =
  /^(([^<>()[\].,;:\s@£"]+(\.[^<>()[\].,;:\s@£"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([^\-<>()[\].,;:\s@"]([^<>()[\].,;:\s@"]*[^\-<>()[\].,;:\s@"])?)(\.[^\-<>()[\].,;:\s@"]([^<>()[\].,;:\s@"]*[^\-<>()[\].,;:\s@"])?)*(\.[^\-<>()[\].,;:\s@"]([^<>()[\].,;:\s@"]*[^\-<>()[\].,;:\s@"]))))$/

export const navigation = [
  {
    text: 'Profile',
    route: 'profile',
    icon: '/icons/icon_profile',
  },
  {
    text: 'Dashboard',
    route: 'dashboard',
    icon: '/icons/icon_dashboard',
  },
  {
    text: 'Switching',
    route: 'switching',
    icon: '/icons/icon_switching',
  },
  {
    text: 'Impact',
    route: 'impact',
    icon: '/icons/icon_impact',
  },
  {
    text: 'Programs',
    route: 'programs',
    icon: '/icons/icon_programs',
  },
  // {
  //   text: 'News & Blog',
  //   route: 'news',
  //   icon: '/icons/icon_news',
  // },
  {
    text: 'Resources',
    route: 'resources',
    icon: '/icons/icon_news',
  },
  {
    text: 'Community',
    route: 'community',
    icon: '/icons/icon_community',
  },
]

export const subNav = [
  {
    text: 'Donate',
    route: 'donate',
  },
  {
    text: 'Settings',
    route: 'settings',
  },
  {
    text: 'Help',
    route: 'help',
  },
]

const apiRoutes = {}

export const defaultProfile = {
  isProfilePublic: true,
  totalPoints: 0,
  friends: [],
  profile: {
    summary: {
      switchingStatement: '',
      campaigns: '',
      proudActions: '',
    },
    sharingCodes: [],
    badges: [
      {
        badge: 'Providers Switched',
        total: 0,
      },
      {
        badge: 'Campaigns  Completed',
        total: 0,
      },
      {
        badge: 'Academy Articles Read',
        total: 0,
      },
      {
        badge: 'People I helped Switch',
        total: 0,
      },
    ],
    climateImpactReport: {
      carbonRemoved: 0,
      trashRemoved: 0,
    },
    switchItPoints: [
      { type: 'Sharing Codes', points: 0 },
      { type: 'Media Posted', points: 0 },
      { type: 'Switching Campaigns', points: 0 },
      { type: 'Provider Switching Actions', points: 0 },
    ],
  },
}

export const heroConfig: HeroConfig = {
  switching: {
    title: 'Switching',
    text: 'Mollit ipsum quis sunt culpa irure laboris.',
    icon: 'icon_mortar.svg',
  },
  impact: {
    title: 'Impact',
    text: 'Mollit ipsum quis sunt culpa irure laboris.',
    icon: 'icon_mortar.svg',
  },
  programs: {
    title: 'Social Posts',
    text: 'We’ve created custom social posts for LSE students. Come back to see the post of the week and share to keep your fellow students engaged and to spread the word to your community and beyond.',
    icon: 'icon_socialposts.svg',
  },
  resources: {
    title: 'Resources',
    text: 'Mollit ipsum quis sunt culpa irure laborit.',
    icon: 'icon_mortar.svg',
  },
  community: {
    title: 'Community',
    text: 'Mollit ipsum quis sunt culpa irure laboris.',
    icon: 'icon_mortar.svg',
  },
}

export const socialPostsConfig: SocialPostConfig = {
  lse: {
    twitter: [
      [
        'Exercitation Lorem in esse magna. Pariatur commodo eu non id est cupidatat occaecat etpariatur deserunt deserunt nulla laborum.',
        'Elit consectetur id esse deserunt eiusmod in cupidatat duis reprehenderit occaecat ipsum velit. Aliquip mollit duis officia laboris. Do ut nisi elit culpa ex nulla eiusmod qui mollit.',
      ],
      [
        'xxxExercitation Lorem in esse magna. Pariatur commodo eu non id est cupidatat occaecat etpariatur deserunt deserunt nulla laborum.',
        'xxxElit consectetur id esse deserunt eiusmod in cupidatat duis reprehenderit occaecat ipsum velit. Aliquip mollit duis officia laboris. Do ut nisi elit culpa ex nulla eiusmod qui mollit.',
      ],
    ],
    facebook: [
      [
        'Exercitation Lorem in esse magna. Pariatur commodo eu non id est cupidatat occaecat etpariatur deserunt deserunt nulla laborum.',
        'Ea eu aliqua culpa commodo nostrud. Consequat tempor ullamco ipsum minim cillum cupidatat irure proident. Aliqua consequat tempor esse labore velit irure culpa eiusmod elit in.',
      ],
      [
        'xxxExercitation Lorem in esse magna. Pariatur commodo eu non id est cupidatat occaecat etpariatur deserunt deserunt nulla laborum.',
        'xxxEa eu aliqua culpa commodo nostrud. Consequat tempor ullamco ipsum minim cillum cupidatat irure proident. Aliqua consequat tempor esse labore velit irure culpa eiusmod elit in.',
      ],
    ],
    instagram: [
      [
        'Elit consectetur id esse deserunt eiusmod in cupidatat duis reprehenderit occaecat ipsum velit. Aliquip mollit duis officia laboris. Do ut nisi elit culpa ex nulla eiusmod qui mollit.',
        'Ea eu aliqua culpa commodo nostrud. Consequat tempor ullamco ipsum minim cillum cupidatat irure proident. Aliqua consequat tempor esse labore velit irure culpa eiusmod elit in.',
      ],
      [
        'xxxElit consectetur id esse deserunt eiusmod in cupidatat duis reprehenderit occaecat ipsum velit. Aliquip mollit duis officia laboris. Do ut nisi elit culpa ex nulla eiusmod qui mollit.',
        'xxxEa eu aliqua culpa commodo nostrud. Consequat tempor ullamco ipsum minim cillum cupidatat irure proident. Aliqua consequat tempor esse labore velit irure culpa eiusmod elit in.',
      ],
    ],
  },
}
