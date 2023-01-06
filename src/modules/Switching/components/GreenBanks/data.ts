export const bankConfig = [
  {
    accountTypes: ['personal'],
    route: 'starling',
    icon: 'starling',
    bank: 'Starling Bank',
    details: 'Best current account',
    score: '5',
    fee: '£0',
    project: 'Carbon Removal',
    projectLink:
      'https://www.starlingbank.com/blog/green-projects-we-support-to-reduce-climate-change/',
    donation: 'No',
    features: ['app', 'savings', 'deposits', 'mortgages'],
    meta: ['High  Street', 'Desktop Banking'],
  },
  {
    accountTypes: ['personal', 'student'],
    route: 'monzo',
    icon: 'monzo',
    bank: 'Monzo',
    details: 'Best for in person banking',
    score: '',
    fee: '£0',
    project: 'Watershed',
    projectLink: 'https://monzo.com/i/protecting-the-environment',
    donation: 'No',
    features: ['branches', 'app', 'savings', 'deposits', 'mortgages'],
    meta: ['High  Street', 'Desktop Banking'],
  },
  {
    accountTypes: ['personal', 'student'],
    route: 'triodos',
    icon: 'triodos',
    bank: 'Triodos Bank',
    details: 'Best current account',
    score: '',
    fee: '£0',
    project: 'Sea Lanes',
    projectLink: 'https://www.triodos.co.uk/articles/2022/brighton-sea-swimming-pool-new-lending',
    donation: 'Yes',
    features: ['branches', 'app', 'savings', 'mortgages'],
    meta: ['High  Street', 'Desktop Banking'],
  },
  {
    accountTypes: ['student'],
    route: 'nationwide',
    icon: 'nationwide',
    bank: 'Nationwide',
    details: 'Best environmental policy overall',
    score: '',
    fee: '£0',
    project: 'Sustainable Housing',
    projectLink: 'https://www.nationwide.co.uk/about-us/building-a-better-society/oakfield/',
    donation: 'No',
    features: ['branches', 'app', 'savings', 'deposits', 'mortgages'],
    meta: ['High  Street', 'Desktop Banking'],
  },
]

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

export const accountTypes = ['personal', 'student']
