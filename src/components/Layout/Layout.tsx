import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Navigation } from '@components/Navigation/Navigation'
import { User } from '@components/User/User'
import { Aside as AsideContent } from '@components/Aside/Aside'
import { ProfileDrawer } from '@components/ProfileDrawer/ProfileDrawer'
import * as S from '@components/Layout/Layout.style'

export const Layout: NextPage<{ children: any }> = ({ children }): JSX.Element => {
  const { pathname, replace } = useRouter()
  const isHome = pathname === '/'
  const isSignedOut = pathname === '/signedout'
  const isSigningUp = pathname === '/signup'
  const isProfile = pathname === '/profile'
  const isDashboard = pathname === '/dashboard'
  const showUser = pathname !== '/settings'

  const onSignUp = () => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('referralCode')
    const route = code ? `/signup?referralCode=${code}` : '/signup'
    replace(route)
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
          {/* {isProfile || isDashboard ? ( */}
          <>
            <S.AppContent>
              {showUser && <User />}
              {children}
              <ProfileDrawer />
            </S.AppContent>
          </>
          {/* ) 
          : (
            <>
              <S.AppContent>
                <User />
                {children}
              </S.AppContent>
              <S.Aside>
                <AsideContent />
              </S.Aside>
            </>
          )
          } */}
        </>
      )}
    </S.AppContainer>
  )
}
