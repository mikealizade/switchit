export const regexConfig: Record<string, string> = {
  alpha: '(^[^0-9_!¡?÷¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]+)$',
  alphanumeric: '(^[^_!¡?÷¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]+)$',
  numeric: '^\\d+$',
  phone: '^[0-9 ()+]+$',
}

const dev = process.env.NODE_ENV !== 'production'

export const baseUrl = dev ? 'http://localhost:3000' : 'https://switchit-weld.vercel.app'

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
