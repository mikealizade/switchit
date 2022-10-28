import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Navigation } from '@components/Navigation/Navigation'
import { User } from '@components/User/User'
import { Aside as AsideContent } from '@components/Aside/Aside'
import * as S from '@components/Layout/Layout.style'

export const Layout: NextPage<{ children: any }> = ({ children }): JSX.Element => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  const isSignedOut = pathname === '/signedout'

  return (
    <S.AppContainer isHome={isHome}>
      {isSignedOut ? (
        <div>
          You are signed out
          <br />
          <Link href='/api/auth/login'>Log in</Link>
        </div>
      ) : (
        <>
          {isHome ? (
            <>{children}</>
          ) : (
            <>
              <Navigation />
              <S.AppContent>
                <User />
                {children}
              </S.AppContent>
              <S.Aside>
                <AsideContent />
              </S.Aside>
            </>
          )}
        </>
      )}
    </S.AppContainer>
  )
}
