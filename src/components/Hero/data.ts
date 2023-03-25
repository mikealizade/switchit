export type HeroConfig = {
  [key: string]: {
    title?: string
    newUserTitle?: string
    activeUserTitle?: string
    text?: string
    newUserText?: string
    activeUserText?: string
    icon: string
    dimensions: any
  }
}

// dimensions: {
//   width: ,
//   height: ,
//   backgroundPositionY:
// }

export const heroConfig: HeroConfig = {
  switching: {
    title: 'Welcome to Switch It Green',
    text: `Find out if your bank funds fossil fuels, choose your new green bank, and maximise the power of your switch with our ready-to-go lobbying features.`,
    icon: 'img_hero_switching.png',
    dimensions: {
      width: 304,
      height: 234,
      mobileWidth: 138,
      mobileHeight: 135,
      alignSelf: 'flex-end',
    },
  },
  dashboard: {
    newUserTitle: 'Welcome to your Dashboard',
    activeUserTitle: 'Welcome to your Dashboard',
    newUserText: `Here you have speedy access to our latest resources, your unique sharing code, and your ongoing switching journeys. Time to explore.`,
    activeUserText: `In March 2023, we launched this platform to make taking part in effective climate action as simple and impactful as possible. There's more to come. Thanks for joining our campaign for a more liveable future.`,
    icon: 'img_hero_dashboard.png',
    dimensions: {
      width: 205,
      height: 224,
      mobileWidth: 138,
      mobileHeight: 135,
      alignSelf: 'center',
    },
  },
  programs: {
    title: 'Programs',
    text: `We are partnering with educational institutions and businesses to harness the power of switching en masse. Get access to bespoke resources, high-profile guest speaker events, exclusive workshops, tailored data reporting & impact tracking, and more.`,
    icon: 'img_hero_programs.png',
    dimensions: {
      width: 286,
      height: 192,
      mobileWidth: 138,
      mobileHeight: 135,
    },
  },
  resources: {
    title: 'Resources',
    text: 'The first step to taking impactful climate action is being informed. We are here to educate people on all things green finance and help you understand your power to contribute to positive change. Get clued up by checking out our resources.',
    icon: 'img_hero_resources.png',
    dimensions: {
      width: 286,
      height: 192,
      mobileWidth: 138,
      mobileHeight: 135,
      alignSelf: 'flex-end',
    },
  },
  community: {
    title: 'Community',
    text: 'Mollit ipsum quis sunt culpa irure laboris.',
    icon: 'icon_mortar.svg',
    dimensions: {
      width: 286,
      height: 192,
      mobileWidth: 138,
      mobileHeight: 135,
    },
  },
  help: {
    title: 'Help',
    text: `Got some burning questions? Want a deep dive into our research? Unsure about the switching process? We've got you covered. Check out our FAQs and if you're still itching to know more you'll be referred to one of our team.`,
    icon: 'img_hero_help.png',
    dimensions: {
      width: 241,
      height: 181,
      mobileWidth: 138,
      mobileHeight: 135,
      alignSelf: 'center',
    },
  },
  donate: {
    title: 'Donate',
    text: `The vast majority of our work is funded by small grants and donations. We've got big plans to expand our work beyond the UK and into other financial providers. Help us end fossil fuel financing and encourage more people to Switch It Green.`,
    icon: 'img_hero_donate.png',
    dimensions: {
      width: 274,
      height: 213,
      mobileWidth: 138,
      mobileHeight: 135,
      alignSelf: 'flex-end',
    },
  },
}

export const heroTips = [
  {
    number: 'Switching Tip #13: Close Unused Accounts',
    tip: 'Even if you have £0 in your account, you are still worth a hefty sum to your bank, which leverages its customer base to secure loans and assets, allowing it to continue pumping money into fossil fuel companies. Make sure to close old and unused accounts when you switch your main current account to your new green provider.',
  },
  {
    number: `Switching Tip #4: What We're Switching`,
    tip: 'We are kicking off with current accounts; pretty much everyone has one, so it’s a good place to start. Keep your eyes peeled for information coming soon on business banking, credit cards, pensions, and more. We are also expanding beyond the UK this year - next stop: the US.',
  },
  {
    number: 'Switching Tip #47: Multiply Your Impact',
    tip: `Want to multiply your impact? Make 'Post to Socials' and 'Tell Your Community' part of your switching journey to get the most out of your switch - you can do this once your switch is official. Every 10 people switched means over £10 million of lifetime investments taken out of fossil fuel support. (Psst - we have unique sharing codes to accurately track your impact has you spread the word.)`,
  },
  {
    number: `Switching Tip #18: Help Improve Banks' Policies`,
    tip: `Between 2015 and 2021, big banks invested over £3.8 trillion in fossil fuels. We want banks to shift their investment policies towards those which support a more liveable future. Add a 'Breakup Letter' to your switching journey to tell your bank why you're leaving - we've got it drafted and ready to go for you to hit 'send'.`,
  },
  {
    number: 'Switching Tip #34: Defame Dirty Banks',
    tip: `Don't let others be fooled by dirty banks' greenwashing attempts. Add 'Leave Reviews' to your switching journey to help spread the message to future unsuspecting customers - we've put some templates together to help you out. `,
  },
  {
    number: 'Switching Tip #6: Tell Your Boss',
    tip: `The Current Account Switch Service will handle the switching process for you. All your direct debits, payee details, balance, and incoming payments will be smoothly transferred over on the switch day you agree with your new bank. While future incoming payments (including your salary) will be transferred across either way, you might want to let your employer know about your updated payment details - and while you're there, why not tell them why you've switched?`,
  },
  {
    number: 'Switching Tip #21: Your Credit Score',
    tip: `Simply switching your current account won't affect your credit score. However, your new bank might conduct a credit check which will show up on your credit report. Check out our 'Resources' section to find out more about what this might mean for you.`,
  },
  {
    number: 'Switching Tip #29: Perfect Your Pitch',
    tip: `Having trouble convincing friends and family to make the switch? Check out the 'Tell Your Community' stage of your switching journey. Or, get up to speed with some case studies from our blog and 'Resources' section to add some flavour to your pitch.`,
  },
  {
    number: `Switching Tip #11: Finding 'The One'`,
    tip: 'When choosing a green bank, think about your needs as well as your values. Some of our recommended providers have great app features, while others have local branches, and some offer student banking. You can compare all the options in our handy comparison table when selecting your new provider.',
  },
  {
    number: 'Switching Tip #43: The 7-day Rule',
    tip: `Once you've scheduled in your switch, avoid setting up new standing orders or direct debits with your old account details within seven days of your switch date. Any new recurring payments set up during this time won't automatically make the switch to your new account, while all existing ones will be guaranteed through the Current Account Switch Service.`,
  },
  {
    number: 'Switching Tip #26 - The Switch Guarantee',
    tip: 'In the unlikely event that anything goes wrong with your switch, your new bank will refund any interest and charges you incur. This is part of the Current Account Switch guarantee. Get in touch with your new bank to sort out any unexpected hiccups.',
  },
  {
    number: 'Switching Tip #1 - The Essentials',
    tip: `Ready to make the switch today? You'll need some photo ID to hand - and while you're up, grab some proof of address such as a driver's licence, bank statement, or utility bill. Got it? You're good to go.`,
  },
]
