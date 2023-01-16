import { useMediaQuery as useMQ } from 'react-responsive'

export const useMediaQuery = () => {
  // const useMobileMediaQuery = () => useMQ({ query: '(max-width: 768px)' })
  const isMobile = useMQ({ query: '(max-width: 768px)' })
  const isNotMobile = useMQ({ minWidth: 768 })
  // const isMobile = useMobileMediaQuery()

  return { isMobile, isNotMobile }
}
