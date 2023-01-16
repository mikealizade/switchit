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

const apiRoutes = {}

export const actionText = {
  greenBanks: `<p>Banks can't buy space on our site. We have researched all UK current account offerings and only recommend those banks which score 4/5 or above against our stringent investment policy criteria. Our recommended banks are displayed in alphabetical order, alongside all the information you need to make an informed decision on which is the best green bank for you. </p><p>We work with our recommended providers to keep up to date on their work and to pass on feedback on their services from our switchers (like you).</p><p>Some of our recommended providers pay us a small commission for each customer we send their way. This support helps ramp up our work and allows us to educate more people on the power of their money.</p><p>For each commission we receive, we donate 2% of the money to environmental justice projects. So, if you select a bank which is part of our donation scheme, you know your switch is having even more of a positive environmental impact.</p>`,
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
  confirmSwitch:
    'Part of what keeps our lights on is cash incentives from our recommended providers.',
  bankNotListed: `We'll get our research team digging into your current bank ASAP but you don't need to wait for them to make the switch! If we don't have the research on your bank yet, it usually means one of two things: either they don't have an environmental policy at all (meaning they would automatically score a 2/5 or below); or, they are not a registered bank (they can offer banking services but will store your money somewhere else - most likely a with bank who is investing in fossil fuels). Switching to your new bank will work just the same, so you can continue your switching journey now. Next step: choose a new provider.`,
}

export enum journeyTypes {
  readyToSwitch = 'readyToSwitch',
  notReadyToSwitch = 'notReadyToSwitch',
  noBankAccount = 'noBankAccount',
}

export enum steps {
  selectBank = 1,
  checkBankScore = 2,
  chooseGreenBank = 3,
  makeSwitch = 4,
  confirmSwitch = 5,
  breakupLetter = 6,
  helloLetter = 7,
  postSocials = 8,
  tellCommunity = 9,
  leaveReviews = 10,
  tellUs = 11,
}

export enum noBankAccountSteps {
  chooseGreenBank = 1,
  makeSwitch = 2,
  confirmSwitch = 3,
  helloLetter = 4,
  postSocials = 5,
  tellCommunity = 6,
  tellUs = 7,
}

export enum badBanks {
  barclays = 'Barclays',
  halifax = 'Halifax',
  lloyds = 'Lloyds Bank',
  hsbc = 'HSBC Bank',
  santander = 'Santander',
  natwest = 'Natwest',
  bankOfScotland = 'Bank of Scotland',
  rbs = 'RBS',
  coop = 'The Co-operative Bank',
  virgin = 'Virgin Money',
  allianceLeicester = 'Alliance & Leicester',
  bankOfIreland = 'Bank Of Ireland',
  tsb = 'TSB',
  ulster = 'Ulster Bank',
  danske = 'Danske',
  firstDirect = 'First Direct',
  marksSpencer = 'M&S Bank',
  metro = 'Metro Bank',
  revolut = 'Revolut',
  kroo = 'Kroo',
}
