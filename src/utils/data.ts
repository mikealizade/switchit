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
    actionText: `We've got an editable prewritten letter for your convienence. Tell your bank why you're leaving and we'll send it for you, along with others' letters, so we can max. the impact`,
  },
  {
    text: `Write your 'hello' letter`,
    icon: 'wave',
    type: 'hello',
    duration: '2',
    pointsEarned: '50',
    route: 'hello-letter',
    actionTitle: 'Writing Your Hello Letter',
    actionText: `Want to tell your new green bank why you've switched over? Want to tell them that if they offer other services, you'll be switching over additional accounts as well? We've got a letter for that`,
  },
  {
    text: 'Post To Socials',
    icon: 'socialposts',
    type: 'socials',
    duration: '4',
    pointsEarned: '25',
    route: 'post-to-socials',
    actionTitle: 'Posting To Socials',
    actionText: `Post directly from our web app to Twitter, Facebook and LinkedIn. We've got customisable, prewritten everything`,
  },
  {
    text: 'Tell Your Community',
    icon: 'speechbubbles',
    type: 'tellcommunity',
    duration: '3',
    pointsEarned: '100',
    route: 'tell-your-community',
    actionTitle: 'Telling Your Community',
    actionText: `Want to text your girlfriend? Email your grandpa? Print out and send a letter to your aunt? We've got you covered with custom sharing codes to track your impact and letters for everyone`,
  },
  {
    text: 'Write Reviews',
    icon: 'reviews',
    type: 'reviews',
    duration: '2',
    pointsEarned: '50',
    route: 'leave-reviews',
    actionTitle: 'Writing Reviews',
    actionText: `Lets defame! This is a great way to get the word out and maximise your impact. Post to Trustpilot and Google reviews`,
  },
  {
    text: 'Tell Us How It Went',
    icon: 'tellus',
    type: 'tellUs',
    duration: '3',
    pointsEarned: '100',
    route: 'tell-us',
    actionTitle: 'Telling Us How it Went',
    actionText: `We want to know how it went. We also want other people to know how it went, why you switched, and anything else. Send a video of you cutting up your card, or your switching manifesto to help us out or to post publically`,
  },
]

export const sanitiseConfig = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div', 'br'],
  allowedAttributes: { a: ['href'] },
}
