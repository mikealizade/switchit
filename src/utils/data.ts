// shared config objects go here

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
    link: 'https://www.triodos.co.uk',
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

export const actionsConfig = [
  {
    text: `Write your 'breakup' letter`,
    icon: 'brokenheart',
    type: 'breakup',
    duration: '2',
    pointsEarned: '50',
    route: 'breakup-letter',
    actionTitle: 'Writing Your Breakup Letter',
    actionText: `Banks don’t want to lose customers. By sending thousands of letters to banks explaining why their customers are leaving, we can force them to improve their investment policies. We have drafted a breakup letter for you to edit and sign, which will be sent in batches with others’ for maximum impact.`,
  },
  {
    text: `Write your 'hello' letter`,
    icon: 'wave',
    type: 'hello',
    duration: '2',
    pointsEarned: '50',
    route: 'hello-letter',
    actionTitle: 'Writing Your Hello Letter',
    actionText: `We love green banks and want everyone to be banking with them. Tell them why you joined and help them incentivise more people to make the switch.`,
  },
  {
    text: 'Post To Socials',
    icon: 'socialposts',
    type: 'socials',
    duration: '4',
    pointsEarned: '25',
    route: 'post-to-socials',
    actionTitle: 'Posting To Socials',
    actionText: `Time to multiply your impact. For every 10 friends switched over £10 million is taken out of fossil fuel support. We’ve drafted social posts for you to edit and share directly from our site, with unique sharing codes to accurately track your impact.`,
  },
  {
    text: 'Tell Your Community',
    icon: 'speechbubbles',
    type: 'tellcommunity',
    duration: '3',
    pointsEarned: '100',
    route: 'tell-your-community',
    actionTitle: 'Telling Your Community',
    actionText: `Imagine the impact if your whole class, team, or group chat made the switch. We’ve got drafted messages to help you spread the word and unique sharing codes to accurately track your impact as you get more people on board.`,
  },
  {
    text: 'Write Reviews',
    icon: 'reviews',
    type: 'reviews',
    duration: '2',
    pointsEarned: '50',
    route: 'leave-reviews',
    actionTitle: 'Writing Reviews',
    actionText: `Educate, warn, defame. Banks want to protect their image. And we want to deter people from unknowingly supporting the fossil fuel industry. Leaving public Trustpilot and Google reviews is a powerful way to support the campaign.`,
  },
  {
    text: 'Share Your Switching Story',
    icon: 'tellus',
    type: 'tellUs',
    duration: '3',
    pointsEarned: '100',
    route: 'tell-us',
    actionTitle: 'Telling Us How it Went',
    actionText: `Genuine customer testimonies are a vital part of the campaign. From quotes for pitches and presentations, to high-performing social media content, your input will help convince hundreds of people on the importance of green banking. Tell us your switching story, or simply record yourself cutting up your old card. `,
  },
]

export const sanitiseConfig = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div', 'br'],
  allowedAttributes: { a: ['href'] },
}
