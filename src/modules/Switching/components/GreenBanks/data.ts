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
