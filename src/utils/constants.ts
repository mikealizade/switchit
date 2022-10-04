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
    route: '/profile',
  },
  {
    text: 'Dashboard',
    route: '/dashboard',
  },
  {
    text: 'Switching',
    route: '/wwitching',
  },
  {
    text: 'Impact',
    route: '/impact',
  },
  {
    text: 'Campaigns',
    route: '/campaigns',
  },
  {
    text: 'Academy',
    route: '/academy',
  },
  {
    text: 'Community',
    route: '/community',
  },
]

export const subNav = [
  {
    text: 'Donate',
    route: '/donate',
  },
  {
    text: 'Settings',
    route: '/settings',
  },
  {
    text: 'Help',
    route: '/help',
  },
  {
    text: 'Log Out',
    route: '/logout',
  },
]
