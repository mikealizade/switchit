import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { Navigation } from '@components/Navigation/Navigation'
import { User } from '@components/User/User'
import { Aside as AsideContent } from '@components/Aside/Aside'

const AppContainer = styled.div<{ isSignUp: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ isSignUp }) => (isSignUp ? '0' : '20px')};
  min-height: 100vh;

  ${() => mediaQuery.laptop} {
    flex-direction: row;
  }
`

const AppContent = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: auto;
`

export const Aside = styled.aside`
  padding: 30px;
  min-width: 400px;
  width: 400px;
  background-color: var(--white);
  border-radius: 0 8px 8px 0;
`

export const Layout: NextPage<{ children: any }> = ({ children }): JSX.Element => {
  const { pathname } = useRouter()
  const isSignUp = pathname === '/'

  return (
    <AppContainer isSignUp={isSignUp}>
      {!isSignUp && <Navigation />}
      <AppContent>
        <User />
        {children}
      </AppContent>
      <Aside>
        <AsideContent />
      </Aside>
    </AppContainer>
  )
}
