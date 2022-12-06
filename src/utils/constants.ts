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
  letters: {
    personal: {
      hello: '',
      breakup: '',
      isLetterSent: false,
    },
    business: {
      hello: '',
      breakup: '',
      isLetterSent: false,
    },
  },
  switchingJourneys: {
    personal: [
      {
        isStep1Complete: false,
      },
      {
        isStep2Complete: false,
      },
      {
        isStep3Complete: false,
      },
      {
        isStep4Complete: false,
      },
      {
        isStep5Complete: false,
      },
      {
        isStep6Complete: false,
      },
      {
        isStep7Complete: false,
      },
    ],
    business: [
      {
        isStep1Complete: false,
      },
      {
        isStep2Complete: false,
      },
      {
        isStep3Complete: false,
      },
      {
        isStep4Complete: false,
      },
      {
        isStep5Complete: false,
      },
      {
        isStep6Complete: false,
      },
      {
        isStep7Complete: false,
      },
    ],
  },
}

export const heroConfig: HeroConfig = {
  switching: {
    title: `What We're Switching`,
    text: 'We’re kicking off 2023 with current accounts and student accounts in the UK. But we’ve heard you! Information is coming soon on business banking, pensions, credit cards and we’re launching in the US in July. Follow us on socials and sign up for our newsletters to stay tuned on launches and more. We’re so excited that you’re switching with us!',
    icon: 'icon_switching_earth.svg',
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

export const actionsConfig = [
  {
    text: 'Switch To or Open A Green Bank Account',
    icon: 'hand',
    duration: '3',
    pointsEarned: '100',
    route: 'welcome-to-switching-journey',
    actionTitle: 'Choosing Your Green Bank',
    actionText: `Choose a green bank from our list of recommended providers. We'll make the selection process easy by providing all the information you need in order to make the best decision`,
  },
  {
    text: `Write your 'breakup' letter`,
    icon: 'brokenheart',
    duration: '2',
    pointsEarned: '50',
    route: 'breakup-letter',
    actionTitle: 'Writing Your Breakup Letter',
    actionText: `We've got an editable prewritten letter for your convienence. Tell your bank why you're leaving and we'll send it for you, along with others' letters, so we can max. the impact`,
  },
  {
    text: `Write your 'hello' letter`,
    icon: 'wave',
    duration: '2',
    pointsEarned: '50',
    route: 'hello-letter',
    actionTitle: 'Writing Your Hello Letter',
    actionText: `Want to tell your new green bank why you've switched over? Want to tell them that if they offer other services, you'll be switching over additional accounts as well? We've got a letter for that`,
  },
  {
    text: 'Post To Socials',
    icon: 'socialposts',
    duration: '4',
    pointsEarned: '25',
    route: 'post-to-socials',
    actionTitle: 'Posting To Socials',
    actionText: `Post directly from our web app to Twitter, Facebook and LinkedIn. We've got customisable, prewritten everything`,
  },
  {
    text: 'Tell Your Community',
    icon: 'speechbubbles',
    duration: '3',
    pointsEarned: '100',
    route: 'tell-your-community',
    actionTitle: 'Telling Your Community',
    actionText: `Want to text your girlfriend? Email your grandpa? Print out and send a letter to your aunt? We've got you covered with custom sharing codes to track your impact and letters for everyone`,
  },
  {
    text: 'Write Reviews',
    icon: 'reviews',
    duration: '2',
    pointsEarned: '50',
    route: 'write-reviews',
    actionTitle: 'Writing Reviews',
    actionText: `Lets defame! This is a great way to get the word out and maximise your impact. Post to Trustpilot and Google reviews`,
  },
  {
    text: 'Tell Us How It Went',
    icon: 'camera',
    duration: '3',
    pointsEarned: '100',
    route: 'how-it-went',
    actionTitle: 'Telling Us How it Went',
    actionText: `We want to know how it went. We also want other people to know how it went, why you switched, and anything else. Send a video of you cutting up your card, or your switching manifesto to help us out or to post publically`,
  },
]

export const startJourneyConfig = [
  {
    step: 'Step 1',
    text: 'Choose And Switch To or Open A Green Bank Account',
  },
  {
    step: 'Step 2',
    text: `Write your 'Breakup' letter`,
  },
  {
    step: 'Step 3',
    text: `Write your 'Hello' letter`,
  },
  {
    step: 'Step 4',
    text: 'Post to Socials',
  },
  {
    step: 'Step 5',
    text: 'Tell Your Community',
  },
  {
    step: 'Step 6',
    text: 'Write Reviews',
  },
  {
    step: 'Step 7',
    text: 'Tell Us How It Went',
  },
]

export const bankConfig = [
  {
    accountTypes: ['personal'],
    route: 'starling',
    icon: 'starling',
    bank: 'Starling Bank',
    details: 'Best current account',
    score: '5',
    fee: '0',
    project: '',
    features: ['app', 'savings', 'deposits', 'mortgages'],
    meta: {
      personal: ['High  Street', 'Desktop Banking'],
      student: ['High  Street', 'Desktop Banking'],
    },
  },
  {
    accountTypes: ['personal', 'student'],
    route: 'monzo',
    icon: 'monzo',
    bank: 'Monzo',
    details: '',
    score: '',
    fee: '',
    project: '',
    features: ['branches', 'app', 'savings', 'deposits', 'mortgages'],
    meta: {
      personal: ['High  Street', 'Desktop Banking'],
      student: ['High  Street', 'Desktop Banking'],
    },
  },
  {
    accountTypes: ['personal', 'student'],
    route: 'triodos',
    icon: 'triodos',
    bank: 'Triodos Bank',
    details: '',
    score: '',
    fee: '',
    project: '',
    features: ['branches', 'app', 'savings', 'mortgages'],
    meta: {
      personal: ['High  Street', 'Desktop Banking'],
      student: ['High  Street', 'Desktop Banking'],
    },
  },
  {
    accountTypes: ['student'],
    route: 'nationwide',
    icon: 'nationwide',
    bank: 'Nationwide',
    details: '',
    score: '',
    fee: '',
    project: '',
    features: ['branches', 'app', 'savings', 'deposits', 'mortgages'],
    meta: {
      personal: ['High  Street', 'Desktop Banking'],
      student: ['High  Street', 'Desktop Banking'],
    },
  },
]

export const accountTypes = ['personal', 'student']

export const accountFeatures = [
  {
    type: 'branches',
    text: 'Physical branches',
  },
  {
    type: 'app',
    text: 'Mobile app',
  },
  {
    type: 'savings',
    text: 'Savings account',
  },
  {
    type: 'deposits',
    text: 'International deposits',
  },
  {
    type: 'mortgages',
    text: 'Mortgages',
  },
]

export const actionText = {
  chooseBank: `Banks can't buy spaces on our site. We recommend banks based on our strict internal standards for reducing the investment in fossil fuels. Find out more here`,
  breakupLetter: `We've set you up for success with a prewritten letter below. Feel free to update, change, edit any of the text. We'll send it on the 1st of the month along with everyone else`,
  helloLetter: 'We all love a bit of positive reinforcement.',
  postToSocials:
    'One of the most impactful things you can do is to spread the word about the power of your money. We want banking with a green institution to be a no brainer, much like bringing your reusable bag to the grocery store',
  tellCommunity:
    'Use these prewritten letters to send to your community via email - or even snail mail! Your custom sharing code (which can also be found in your profile) will allow you to text friends on Whatsapp',
  leaveReviews:
    'One of the most impactful things you can do is to spread the word about the power of your money. We want banking with a green institution to be a no brainer, much like bringing your reusable bag to the grocery store',
  tellUs:
    'One of the most impactful things you can do is to spread the word about the power of your money. We want banking with a green institution to be a no brainer, much like bringing your reusable bag to the grocery store',
}
