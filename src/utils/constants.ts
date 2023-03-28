export const regexConfig: Record<string, string> = {
  alpha: '(^[^0-9_!¡?÷¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]+)$',
  alphanumeric: '(^[^\\s\\._!¡?÷¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]+)$',
  numeric: '^\\d+$',
  phone: '^[0-9 ()+]+$',
}

const dev = process.env.NODE_ENV !== 'production'

export const baseUrl = dev ? 'http://localhost:3000' : 'https://switchit-weld.vercel.app' // nned a test stage post live on vercel

export const awsS3Uri = 'https://switchit-green.s3.eu-west-2.amazonaws.com'

export const whatsAppUrl =
  'https://wa.me/?text=Want%20to%20move%20£1.5%20million%20out%20of%20fossil%20fuel%20support%20for%20free?%20Join%20me%20and%20thousands%20of%20others%20in%20switching%20to%20a%20green%20bank%20to%20help%20end%20fossil%20fuel%20financing%20'

export const emailRegex =
  /^(([^<>()[\].,;:\s@£"]+(\.[^<>()[\].,;:\s@£"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([^\-<>()[\].,;:\s@"]([^<>()[\].,;:\s@"]*[^\-<>()[\].,;:\s@"])?)(\.[^\-<>()[\].,;:\s@"]([^<>()[\].,;:\s@"]*[^\-<>()[\].,;:\s@"])?)*(\.[^\-<>()[\].,;:\s@"]([^<>()[\].,;:\s@"]*[^\-<>()[\].,;:\s@"]))))$/

// const apiRoutes = {}

export const actionHeaderSubText = {
  greenBanks: ``,
  breakupLetter: `Banks don't want to lose customers. By sending thousands of letters to banks explaining why their customers are leaving, we can force them to improve their investment policies. We have drafted a breakup letter for you to edit and sign, which will be sent in batches with others' for maximum impact.`,
  helloLetter:
    'We love green banks and want everyone to be banking with them. Tell them why you joined and help them incentivise more people to make the switch.',
  postToSocials: `Time to multiply your impact. For every 10 friends switched over £10 million is taken out of fossil fuel support. We've drafted social posts for you to edit and share directly from our site.`,
  tellCommunity: `Imagine the impact if your whole class, team, or group chat made the switch. We've got drafted messages to help you spread the word and unique sharing codes to accurately track your impact as you get more people on board.`,
  leaveReviews:
    'Educate, warn, defame. Banks want to protect their image. And we want to deter people from unknowingly supporting the fossil fuel industry. Leaving public Trustpilot and Google reviews is a powerful way to support the campaign.',
  tellUs: '',
  confirmSwitch: `We are harnessing the power of switching en masse. Signing this agreement helps us accurately track our progress as we head towards our goal of moving £7 billion worth of lifetime investments out of fossil fuel support this year.`,
  bankNotListed: ``,
}

export const actionText = {
  selectBank: '',
  greenBanks: `Banks can't pay us to recommend them. We only recommend banks that meet our stringent criteria against fossil fuel investments.  Find out more about our `,
  breakupLetter: '',
  helloLetter: '',
  postToSocials: '',
  tellCommunity: '',
  leaveReviews: '',
  tellUs:
    'Genuine customer testimonies are a vital part of the campaign. From quotes for pitches and presentations, to high-performing social media content, your input will help convince hundreds of people of the importance of green banking. Write or record your switching story, or simply film yourself cutting up your old card.',
  confirmSwitch: '',
  bankNotListed: `It looks like we haven't got all the data on your bank yet. Adding it to our database tells our research team to keep searching for more information.`,
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
