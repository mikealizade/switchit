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
    projectLink: 'starlingProject',
    donation: 'No',
    features: ['app', 'savings', 'deposits'],
    meta: [
      `Starling Bank are co-founders of an industry initiative  called TechZero - designed to measure and help reduce tech companies' impact on the climate. They have also stated that they will not invest in, or take money from, the fossil fuel (or fossil fuel-related) industry.`,
      'High-Street Branches - No',
      'Desktop Banking - No',
      'Apple/Google Pay - Yes',
      'App Rating Android, Apple - 4.8',
      'Cash Deposit Facility - Yes, via the Post Office',
      'Savings Accounts - Yes',
      'Mortgages - No',
      'Positive Environmental Impact Investment Policy - No',
    ],
  },
  {
    accountTypes: ['personal'],
    route: 'monzo',
    icon: 'monzo',
    bank: 'Monzo',
    details: 'Best for in person banking',
    score: '',
    fee: '£0',
    project: 'Watershed',
    projectLink: 'monzoProject',
    donation: 'No',
    features: ['app', 'savings', 'deposits'],
    meta: [
      `Monzo do not invest in fossil fuels and advertise this on their website. However, Monzo have currently not committed to *****never***** invest in fossil fuels; which is a deciding factor for our 5/5 rating. We are hoping to work closely with Monzo to take their investment policy up a notch, and your support will help us achieve this.`,
      'High-Street Branches - No',
      'Desktop Banking - No',
      'Apple/Google Pay - Yes',
      'App Rating Android, Apple - 4.7',
      'Cash Deposit Facility - Yes, via PayPoint shops',
      'Savings Accounts - Yes, through third parties only',
      'Mortgages - No',
      'Positive Environmental Impact Investment Policy - No',
    ],
  },
  {
    accountTypes: ['personal'],
    route: 'triodos',
    icon: 'triodos',
    bank: 'Triodos Bank',
    details: 'Best current account',
    score: '',
    fee: '£3',
    project: 'Sea Lanes',
    projectLink: 'triodosProject',
    donation: 'Yes',
    features: ['app', 'savings', 'deposits'],
    meta: [
      'Triodos Bank are strongly committed to environmentally friendly banking and have a clear focus on sustainability. In fact, their entire business model is based on having a positive climate impact. They are a certified B-Corp and have totally transparent information on all the positive impact projects they currently invest in on their website. ',
      'High-Street Branches - No',
      'Desktop Banking - Yes',
      'Apple/Google Pay - No',
      'App Rating Android, Apple - 3.1',
      'Cash Deposit Facility - No',
      'Savings Accounts - Yes',
      'Mortgages - No',
      'Positive Environmental Impact Investment Policy - Yes',
    ],
  },
  {
    accountTypes: ['personal', 'student'],
    route: 'nationwide',
    icon: 'nationwide',
    bank: 'Nationwide',
    details: 'Best environmental policy overall',
    score: '',
    fee: '£0',
    project: 'Sustainable Housing',
    projectLink: 'nationwideProject',
    donation: 'No',
    features: ['branches', 'app', 'savings', 'deposits', 'mortgages'],
    meta: [
      'Nationwide do not invest money in the fossil fuel industry and have a stated commitment to not do so in the future. ',
      'High-Street Branches - Yes',
      'Desktop Banking - Yes',
      'Apple/Google Pay - Yes',
      'App Rating Android, Apple - 4.5',
      'Cash Deposit Facility - Yes',
      'Savings Accounts - Yes',
      'Mortgages - Yes',
      'Positive Environmental Impact Investment Policy - No',
    ],
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
