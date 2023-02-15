import type { NextPage } from 'next'
// import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { Footer } from './Footer'
import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navigation'
import * as S from './SignedOutLanding.style'

export const SignedOutLayout: NextPage<any> = ({ children }): JSX.Element => {
  const { isMobile } = useMediaQuery()

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          {isMobile ? <MobileNavigation /> : <Navigation />}
          {children}
          <Footer />
        </S.Content>
      </ErrorBoundary>
    </>
  )
}
