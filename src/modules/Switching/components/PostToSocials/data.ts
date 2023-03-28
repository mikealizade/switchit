import { badBankLetterConfig } from '../Letters/data'

export type SocialPostConfig = {
  [key: string]: Array<Array<string>>
}

export const socialPostsConfig = (bankName = '[bank name]'): SocialPostConfig => {
  const bank = badBankLetterConfig[bankName as keyof typeof badBankLetterConfig]

  return {
    twitter: [
      [
        'I just switched £1.5 million out of fossil fuel support 🌍',
        'Find out how much money you are worth to your bank 🤑 ⬇️',
        'https://www.switchit.green',
        '#SwitchIt #ClimateAction #GreenBank #FossilFree',
        '',
      ],
      [
        `Did you know ${bank?.name} invested ${bank?.amount ? `${bank?.amount} ` : ''}in fossil fuels last year? 🤯`,
        'Join me by switching to a #GreenBank in 3 simple steps here ⬇️',
        'https://www.switchit.green',
        '#ClimateAction #FossilFree',
      ],
      [
        'The amount of money destined for NEW oil and gas by 2030 is more than the amount needed for a 1.5 degree green energy transition.',
        'Together, we can move over £7 billion out of fossil fuel support in 2023. Maximise the impact of switching to a #GreenBank ⬇️',
        'https://www.switchit.green',
      ],
    ],
    // instagramStories: [],
    instagramPosts: [
      [
        `Did you know that ${bank?.name} invested ${bank?.amount ? `${bank?.amount} ` : ''}in fossil fuels last year`,
        'Banks can use their customer base as leverage to secure loans and assets, allowing them to fund destructive and unjust projects.',
        'I decided to move my money out of fossil fuel supporting by switching from [insert bank] to [insert bank], who are totally fossil free.',
        'I used @switchit.green to find the right #GreenBank for me and followed their simple switching journey to maximise my impact.',
        'Together, in 2023, we can move over £7 billion out of fossil fuel support by switching to green banks 🌍 🥳',
      ],
      [
        'The amount of money destined for NEW oil and gas by 2030 is more than the amount needed for a 1.5 degree green energy transition.',
        'Together, in 2023, we can move over £7 billion out of fossil fuel support by switching to greener banks.',
        'Check out @switchit.green to see if your bank invests in fossil fuels & to maximise the impact of switching to a #GreenBank.',
        'Every 10 people switched means over £10 million of lifetime investments taken out of fossil fuel support 👯‍♀️👯',
      ],
    ],
  }
}
