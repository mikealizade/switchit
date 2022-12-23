import { Fetcher } from 'swr'
// import { journeyTypes } from '@utils/constants'
import { journeyTypes, noBankAccountSteps, steps } from '@utils/constants'

export const breakpoints: Record<string, number> = {
  mobile: 480,
  xmobile: 640,
  tablet: 768,
  laptop: 1024,
  xlaptop: 1300,
  xxlaptop: 1440,
  xxxlaptop: 1920,
}

export const sendRequest = async (url: string, { arg }: { arg: any }) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  })
}

export const mediaQuery = Object.entries(breakpoints)
  .map(([key, value]) => [key, value] as [string, number])
  .reduce((acc, [key, breakpoint]) => {
    acc[key] = `@media (min-width: ${breakpoint}px)`
    return acc
  }, {} as { [index: string]: string })

export const fetcher: Fetcher = (...args: any) => fetch.apply(null, args).then(res => res.json())

export const getTotalPoints = (switchItPoints = []) =>
  switchItPoints.reduce((acc: number, { points }: any) => acc + points, 0)

export const onCopy = (str: string) => () => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(str)
  }
  return Promise.reject('Unable to copy.')
}

export const filterActionType =
  (currentJourneyType: string) =>
  ({ type }: { type: string }) =>
    currentJourneyType === journeyTypes.noBankAccount
      ? type !== 'breakup' && type !== 'reviews'
      : currentJourneyType === journeyTypes.notReadyToSwitch
      ? type !== 'hello'
      : true

// export const filterSteps =
//   (currentJourneyType: string) =>
//   ({ step }: { step: string }) =>
//     currentJourneyType === journeyTypes.noBankAccount
//       ? step !== 'Step 1' && step !== 'Step 2'
//       : true

// export const getStepsByJourneyType = (currentJourneyType: string) => {
//   return currentJourneyType === journeyTypes.noBankAccount ? noBankAccountSteps : steps
// }

export const getDefaultLetterText = (
  bankName: string = '[bank name]',
  nickname: string,
): string => {
  return `
  <div>
    Dear ${bankName} - default hello letter
    <div>
      <br />
    </div>
    <div>I have had a ${bankName} bank account for 12 years.</div>
    <div>
      <br />
    </div>
    <div>I am writing to inform you that I am leaving you due to your continued investment in fossil fuels. And I am not alone, with 19% of the UK population planning on switching to a sustainable bank in the next 12 months.</div>
    <div>
      <br />
    </div>
    <div>Your claims of compassion in the climate crisis are trivialised by your unwavering financial support for fossil fuel companies. Your sustainability report means nothing until you immediately divest funds which are supporting climate breakdown.</div>
    <div>
      <br />
    </div>
    <div>I want my money to be invested with a bank who cares about our shared future - not just future profits. I will be moving to an alternative provider who has made genuine commitments to **not** be part of the problem. A bank which is aligned with customer values will also be better equipped to effectively serve their audience across the board.</div>
    <div>
      <br />
    </div>
    <div>With growing awareness of the fact that current policies do not account for ${bankName}’s ownership stakes in coal companies set to build 73 new coal plants, with a combined emission potential of 15 billion tonnes of CO2, you are undoubtedly experiencing high numbers of switchers moving to more ethical banks, and will continue to do so until you address your inadequate and detrimental policies. (source - market forces).</div>
    <div>
      <br />
    </div>
    <div>In the meantime, I hope you aren’t too eaten up with guilt from profiting off your remaining customers while sending the planet into climate breakdown.</div>
    <div>
      <br />
    </div>
    <div>Your sincerely</div>
    <div>
      <br />
    </div>
    <div>${nickname}</div>
  </div>
  `
}
