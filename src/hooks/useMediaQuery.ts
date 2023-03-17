import { useMediaQuery as useMQ } from 'react-responsive'

export const useMediaQuery = () => {
  const isMobile = useMQ({ query: '(max-width: 768px)' })
  const isXMobile = useMQ({ query: '(min-width: 640px)' })
  const isTablet = useMQ({ query: '(min-width: 768px)' })
  const isLaptop = useMQ({ query: '(min-width: 1024px)' })
  const isXXLaptop = useMQ({ query: '(min-width: 1439px)' })
  const isMobileDevice = useMQ({ maxWidth: 1024 })

  return { isMobile, isXMobile, isTablet, isMobileDevice, isLaptop, isXXLaptop }
}
