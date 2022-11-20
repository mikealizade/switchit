import useSWR, { Key, Fetcher } from 'swr'

export const breakpoints: Record<string, number> = {
  mobile: 480,
  xmobile: 640,
  tablet: 768,
  laptop: 1024,
  xlaptop: 1300,
  xxlaptop: 1440,
  xxxlaptop: 1920,
}

export const mediaQuery = Object.entries(breakpoints)
  .map(([key, value]) => [key, value] as [string, number])
  .reduce((acc, [key, breakpoint]) => {
    acc[key] = `@media (min-width: ${breakpoint}px)`
    return acc
  }, {} as { [index: string]: string })

export const fetcher: Fetcher = (...args: any) => fetch.apply(null, args).then(res => res.json())

export const getPostBody = (body: any) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
}

export const getTotalPoints = (switchItPoints = []) =>
  switchItPoints.reduce((acc: number, { points }: any) => acc + points, 0)
