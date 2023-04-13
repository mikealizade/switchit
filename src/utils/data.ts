// shared config objects go here
import { badBanks } from '@utils/constants'
const textIntro = 'Currently, the best way to send a letter to '
const copyEmail = 'Copy Email Address'
const visitForm = 'Visit Online Form'
const feedbackForm = 'Visit Feedback Form'
const complaintsForm = 'Visit Complaints Form'

export const goodBanksConfig = {
  starling: {
    link: 'https://www.starlingbank.com',
    name: 'starling',
    fullName: 'Starling Bank',
    latestGreenProject: 'Carbon Removal',
  },
  monzo: {
    link: 'https://monzo.com',
    name: 'monzo',
    fullName: 'Monzo',
    latestGreenProject: 'Watershed',
  },
  triodos: {
    link: 'https://www.triodos.co.uk/current-accounts/current-account?utm_source=switchit&utm_medium=website&utm_campaign=pca&utm_content=switchit',
    name: 'triodos',
    fullName: 'Triodos Bank',
    latestGreenProject: 'Sea Lanes',
  },
  nationwide: {
    link: 'https://www.nationwide.co.uk',
    name: 'nationwide',
    fullName: 'Nationwide Building Society',
    latestGreenProject: 'Sustainable Housing',
  },
}

export const badBanksConfig = {
  [badBanks.barclays]: {
    trustPilot: 'www.barclays.co.uk',
    google: 'barclays',
    breakupText: `${textIntro} $ is to email Laura Barlow, the Group Head of Sustainability: laura.barlow@Barclays.com`,
    breakupLink: 'laura.barlow@Barclays.com',
    buttonText: copyEmail,
  },
  [badBanks.halifax]: {
    trustPilot: 'www.halifax.co.uk',
    google: 'halifax',
    breakupText: `${textIntro} $ is using the bank's online complaints form.`,
    breakupLink: 'https://www.halifax.co.uk/contactus/how-to-complain/complain-online.html',
    buttonText: complaintsForm,
  },
  [badBanks.lloyds]: {
    trustPilot: 'lloydsbank.com',
    google: 'lloyds+bank',
    breakupText: `${textIntro} $ is to email Dr Rebecca Heaton, the Director of Environmental Sustainability: rebecca.heaton@lloydsbanking.com`,
    breakupLink: 'rebecca.heaton@lloydsbanking.com',
    buttonText: copyEmail,
  },
  [badBanks.hsbc]: {
    trustPilot: 'www.hsbc.co.uk',
    google: 'hsbc',
    breakupText: `${textIntro} $ is to email Tim Lord, the Head of Climate Change at HSBC UK: tim.lord@hsbc.com`,
    breakupLink: 'tim.lord@hsbc.com',
    buttonText: copyEmail,
  },
  [badBanks.santander]: {
    trustPilot: 'www.santander.co.uk',
    google: 'santander',
    breakupText: `${textIntro} $ is to email the bank's complaints department: customerrelations@santanderconsumer.co.uk`,
    breakupLink: 'customerrelations@santanderconsumer.co.uk',
    buttonText: copyEmail,
  },
  [badBanks.natwest]: {
    trustPilot: 'www.natwest.com',
    google: 'natwest',
    breakupText: `${textIntro} $ is using the bank's online complaints form.`,
    breakupLink: 'https://www.natwest.com/support-centre/feedback-form.html?cq_ck=1481891972279&cq_ck=1588238907493',
    buttonText: complaintsForm,
  },
  [badBanks.bankOfScotland]: {
    trustPilot: 'www.bankofscotland.co.uk',
    google: 'bank+of+scotland',
    breakupText: `${textIntro} $ is using the bank's online complaints form.`,
    breakupLink: 'https://www.bankofscotland.co.uk/contactus/complain/make-a-complaint-online.html',
    buttonText: complaintsForm,
  },
  [badBanks.rbs]: {
    trustPilot: 'personal.rbs.co.uk',
    google: 'rbs',
    breakupText: `${textIntro} $ is using the bank's online complaints form.`,
    breakupLink: 'https://www.rbs.co.uk/support-centre/feedback-form.html?cq_ck=1588238907493&cq_ck=1481891380692',
    buttonText: complaintsForm,
  },
  [badBanks.coop]: {
    trustPilot: 'co-operativebank.co.uk',
    google: 'coop+bank',
    breakupText: `${textIntro} $ is to email the bank's complaints department: complaints@co-operativebank.co.uk`,
    breakupLink: 'complaints@co-operativebank.co.uk',
    buttonText: copyEmail,
  },
  [badBanks.virgin]: {
    trustPilot: 'uk.virginmoney.com',
    google: 'virgin+money',
    breakupText: `${textIntro} $  is to email the bankj's customer relations department: customerrelations@virginmoney.com`,
    breakupLink: 'customerrelations@virginmoney.com',
    buttonText: copyEmail,
  },
  [badBanks.allianceLeicester]: {
    trustPilot: '',
    google: '',
    breakupText: `Alliance and Leicester was completely absorbed into Santander in 2013. Currently, the best way to send a letter to Santander is to email the bank's customer relations department: customerrelations@santanderconsumer.co.uk`,
    breakupLink: 'customerrelations@santanderconsumer.co.uk',
    buttonText: copyEmail,
  },
  [badBanks.bankOfIreland]: {
    trustPilot: 'bankofirelanduk.com',
    google: 'bank+of+ireland',
    breakupText: `${textIntro} $ is to send an email to: contactus@boi.com`,
    breakupLink: 'contactus@boi.com',
    buttonText: copyEmail,
  },
  [badBanks.tsb]: {
    trustPilot: 'tsb.co.uk',
    google: 'tsb',
    breakupText: `${textIntro} $ is using the bank's online complaints form.`,
    breakupLink:
      'https://tsbbank.eu1.adobesign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDGygQ0-9r87-Ul-w6W-FCnvnBYGCk43YyTisTORHg8i3Fvs8cj0xTC4eeVWrlPfac*',
    buttonText: complaintsForm,
  },
  [badBanks.ulster]: {
    trustPilot: 'www.ulsterbank.co.uk',
    google: 'ulster+bank',
    breakupText: `${textIntro} $ is to email the bank's customer care department: customercare@bankulster.uk`,
    breakupLink: 'customercare@bankulster.uk',
    buttonText: copyEmail,
  },
  [badBanks.danske]: {
    trustPilot: 'danskebank.co.uk',
    google: 'danske+bank',
    breakupText: `${textIntro} $  is using the bank's online feedback form.`,
    breakupLink: 'https://danskebank.co.uk/personal/help/feedback',
    buttonText: feedbackForm,
  },
  [badBanks.firstDirect]: {
    trustPilot: 'www.firstdirect.com',
    google: '',
    breakupText: `${textIntro} $ is using the bank's online complaints form.`,
    breakupLink: 'https://www.firstdirect.com/legals/listening/complaints-form/',
    buttonText: complaintsForm,
  },
  [badBanks.marksSpencer]: {
    trustPilot: 'bank.marksandspencer.com',
    google: '',
    breakupText: `${textIntro} $ `,
    breakupLink: '',
    buttonText: '',
  },
  [badBanks.metro]: {
    trustPilot: 'www.metrobankonline.co.uk',
    google: 'metro+bank',
    breakupText: `${textIntro} $ `,
    breakupLink: '',
    buttonText: '',
  },
  [badBanks.revolut]: {
    trustPilot: 'www.revolut.com',
    google: '',
    breakupText: `${textIntro} $ is to email help@revolut.com`,
    breakupLink: 'help@revolut.com',
    buttonText: copyEmail,
  },
  [badBanks.kroo]: {
    trustPilot: 'kroo.com',
    google: '',
    breakupText: `${textIntro} $ `,
    breakupLink: '',
    buttonText: '',
  },
}

export const actionsConfig = [
  {
    text: `Write your 'breakup' letter`,
    icon: 'breakup',
    type: 'breakup',
    duration: '2',
    pointsEarned: '50',
    route: 'breakup-letter',
    actionTitle: 'Write Your Breakup Letter',
    actionText: `Banks don't want to lose customers. By sending thousands of letters to banks explaining why their customers are leaving, we can force them to improve their investment policies. We have drafted a breakup letter for you to edit and sign, which will be sent in batches with others’ for maximum impact.`,
  },
  {
    text: `Write your 'hello' letter`,
    icon: 'hello',
    type: 'hello',
    duration: '2',
    pointsEarned: '50',
    route: 'hello-letter',
    actionTitle: 'Write Your Hello Letter',
    actionText: `We love green banks and want everyone to be banking with them. Tell them why you joined and help them incentivise more people to make the switch.`,
  },
  {
    text: 'Post To Socials',
    icon: 'socials',
    type: 'socials',
    duration: '4',
    pointsEarned: '25',
    route: 'post-to-socials',
    actionTitle: 'Post To Socials',
    actionText: `Time to multiply your impact. For every 10 friends switched, over £10 million is taken out of fossil fuel support. We've drafted social posts for you to edit and share directly from our site.`,
  },
  {
    text: 'Tell Your Community',
    icon: 'community',
    type: 'tellcommunity',
    duration: '3',
    pointsEarned: '100',
    route: 'tell-your-community',
    actionTitle: 'Tell Your Community',
    actionText: `Imagine the impact if your whole class, team, or group chat made the switch. We've got drafted messages to help you spread the word and unique sharing codes to accurately track your impact as you get more people on board.`,
  },
  {
    text: 'Leave Reviews',
    icon: 'reviews',
    type: 'reviews',
    duration: '2',
    pointsEarned: '50',
    route: 'leave-reviews',
    actionTitle: 'Leave Reviews',
    actionText: `Educate, warn, defame. Banks want to protect their image. And we want to deter people from unknowingly supporting the fossil fuel industry. Leaving public Trustpilot and Google reviews is a powerful way to support the campaign.`,
  },
  {
    text: 'Share Your Switching Story',
    icon: 'tellus',
    type: 'tellUs',
    duration: '3',
    pointsEarned: '100',
    route: 'tell-us',
    actionTitle: 'Share Your Switching Story',
    actionText: `Genuine customer testimonies are a vital part of the campaign. From quotes for pitches and presentations, to high-performing social media content, your input will help convince hundreds of people of the importance of green banking. Tell us your switching story, or simply record yourself cutting up your old card. `,
  },
]

export const sanitiseConfig = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div', 'br'],
  allowedAttributes: { a: ['href'] },
}
