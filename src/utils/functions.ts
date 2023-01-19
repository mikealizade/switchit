import { Fetcher } from 'swr'
// import { journeyTypes } from '@utils/constants'
import { journeyTypes, steps } from '@utils/constants'

const breakpoints: Record<string, number> = {
  mobile: 480,
  xmobile: 640,
  tablet: 768,
  laptop: 1024,
  xlaptop: 1300,
  xxlaptop: 1440,
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

export const filterSteps = (step: number) => step <= steps.confirmSwitch

// export const getStepsByJourneyType = (currentJourneyType: string) => {
//   return currentJourneyType === journeyTypes.noBankAccount ? noBankAccountSteps : steps
// }

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)
