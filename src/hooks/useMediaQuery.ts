import { useMediaQuery as useMQ } from 'react-responsive'

export const useMediaQuery = () => {
  const isMobile = useMQ({ query: '(max-width: 768px)' })
  const isXXLaptop = useMQ({ query: '(max-width: 1439px)' })
  const isNotMobile = useMQ({ minWidth: 768 })

  return { isMobile, isNotMobile, isXXLaptop }
}
