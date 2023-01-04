export const startJourneyConfig = (goodBank: string) => [
  {
    step: 'Step 1',
    text: 'Choose Your Current Bank',
    route: '/switching/select-bank',
  },
  {
    step: 'Step 2',
    text: 'Check Your Bank Score',
    route: '/switching/bank-score',
  },
  {
    step: 'Step 3',
    text: `Choose Your Green Bank`,
    route: '/switching/green-banks',
  },
  {
    step: 'Step 4',
    text: `Make The Switch`,
    route: `/switching/make-the-switch/${goodBank}`,
  },
  {
    step: 'Step 5',
    text: 'Confirm The Switch By Signing',
    route: '/switching/confirm-switch',
  },
]

export const startJourneyNoBankConfig = (goodBank: string) => [
  {
    step: 'Step 1',
    text: `Choose Your Green Bank`,
    route: '/switching/green-banks',
  },
  {
    step: 'Step 2',
    text: `Make The Switch`,
    route: `/switching/make-the-switch/${goodBank}`,
  },
  {
    step: 'Step 3',
    text: 'Confirm The Switch By Signing',
    route: '/switching/confirm-switch',
  },
]
