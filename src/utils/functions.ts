import { Fetcher } from 'swr'
import { impactCalculatorOptions, impacts } from '@components/ImpactCalculator/importCalculatorData'
import { journeyTypes, awsS3Uri } from '@utils/constants'

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

export const setTotalPoints = (switchItPoints = []) =>
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

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const getUsersValue = (userAge: string) => {
  const userValue =
    impactCalculatorOptions
      .find(({ value }) => value.split(':')[1] === userAge)
      ?.value.split(':')[0] || 0

  return userValue
}

export const formatNumber = (number: number): string =>
  new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(number)

export const calculateImpact = (impactTotal: number, index: number): string[] => {
  const { impact1, impact2, badUnitCost, goodUnitCost, badOp, goodOp } = impacts[index]
  const badCalc = badOp === '<' ? badUnitCost / impactTotal : impactTotal / badUnitCost
  const goodCalc = goodOp === '>' ? goodUnitCost / impactTotal : impactTotal / goodUnitCost

  return [
    impact1.replace('$', formatNumber(+badCalc.toFixed(2))),
    impact2.replace('$', formatNumber(+goodCalc.toFixed(2))),
  ]
}

export const getArticleImageUrl = (
  imageName: string,
  isDashboard = false,
  isThumbnail = false,
): string =>
  `${awsS3Uri}/assets/blog/${
    isThumbnail ? `thumb_${imageName}` : isDashboard ? `dashboard_${imageName}` : `img_${imageName}`
  }`

export const toDateString = (date: string) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' } as const

  return new Date(date).toLocaleDateString('en-GB', options)
}

export const formatDate = (date: Date) => {
  const dateString = date.toString()
  const options = { year: 'numeric', month: 'short', day: 'numeric' } as const

  return new Date(dateString).toLocaleDateString('en-GB', options)
}
