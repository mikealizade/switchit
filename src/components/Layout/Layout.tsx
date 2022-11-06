import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Navigation } from '@components/Navigation/Navigation'
import { User } from '@components/User/User'
import { Aside as AsideContent } from '@components/Aside/Aside'
import * as S from '@components/Layout/Layout.style'
import { ProfileDrawer } from '@components/ProfileDrawer/ProfileDrawer'
import { ProfileProvider } from '@utils/ProfileDrawerContext'

export const Layout: NextPage<{ children: any }> = ({ children }): JSX.Element => {
  const { pathname, replace } = useRouter()
  const isHome = pathname === '/'
  const isSignedOut = pathname === '/signedout'
  const isSigningUp = pathname === '/signup'
  const isProfile = pathname === '/profile'

  const onSignUp = () => {
    replace('/signup')
  }

  if (isHome || isSigningUp) {
    return <>{children}</>
  }

  return (
    <S.AppContainer isHome={isHome}>
      {isSignedOut ? (
        <div>
          You are signed out
          <br />
          <Link href='/api/auth/login'>Sign in</Link>
          <br />
          <p onClick={onSignUp}>Sign up</p>
        </div>
      ) : (
        <>
          <Navigation />
          {isProfile ? (
            <>
              <ProfileProvider>
                <S.AppContent>
                  <User />
                  {children}
                  <ProfileDrawer />
                </S.AppContent>
              </ProfileProvider>
            </>
          ) : (
            <>
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
