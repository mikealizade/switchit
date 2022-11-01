import type { NextPage } from 'next'
import { createContext, useEffect, useState, useContext } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import { Navigation } from '@components/Navigation/Navigation'
import { User } from '@components/User/User'
import { Aside as AsideContent } from '@components/Aside/Aside'
import * as S from '@components/Layout/Layout.style'
import { ProfileDrawer } from '@components/ProfileDrawer/ProfileDrawer'

export const ProfileContext = createContext<{ isDrawerOpen: boolean; toggleDrawer: any }>({
  isDrawerOpen: false,
  toggleDrawer: undefined,
})

export const Layout: NextPage<{ children: any }> = ({ children }): JSX.Element => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  const isSignedOut = pathname === '/signedout'
  const isProfile = pathname === '/profile'
  const [isDrawerOpen, toggleDrawer] = useState(false)

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
              {isProfile ? (
                <>
                  <ProfileContext.Provider
                    value={{
                      isDrawerOpen,
                      toggleDrawer,
                    }}
                  >
                    <S.AppContent>
                      <User />
                      {children}
                      <ProfileDrawer />
                    </S.AppContent>
                  </ProfileContext.Provider>
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
        </>
      )}
    </S.AppContainer>
  )
}
