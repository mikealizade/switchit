export type HeroConfig = {
  [key: string]: {
    title: string
    text: string
    icon: string
  }
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
