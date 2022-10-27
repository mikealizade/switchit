import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Navigation } from '@components/Navigation/Navigation'
import { User } from '@components/User/User'
import { Aside as AsideContent } from '@components/Aside/Aside'
import * as S from '@components/Layout/Layout.style'

export const Layout: NextPage<{ children: any }> = ({ children }): JSX.Element => {
  const { pathname } = useRouter()
  const isSignUp = pathname === '/'

  return (
    <S.AppContainer isSignUp={isSignUp}>
      {!isSignUp && <Navigation />}
      <S.AppContent>
        <User />
        {children}
      </S.AppContent>
      <S.Aside>
        <AsideContent />
      </S.Aside>
    </S.AppContainer>
  )
}
