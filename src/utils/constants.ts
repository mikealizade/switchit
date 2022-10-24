export const regexConfig: Record<string, string> = {
  alpha: '(^[^0-9_!¡?÷¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]+)$',
  alphanumeric: '(^[^_!¡?÷¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]+)$',
  numeric: '^\\d+$',
  phone: '^[0-9 ()+]+$',
}

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
  {
    text: 'News & Blog',
    route: 'news',
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
  {
    text: 'Log Out',
    route: 'logout',
  },
]

const apiRoutes = {}
