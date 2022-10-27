import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const AppContainer = styled.div<{ isSignUp: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ isSignUp }) => (isSignUp ? '0' : '20px')};
  min-height: 100vh;

  ${() => mediaQuery.laptop} {
    flex-direction: row;
  }
`

export const AppContent = styled.main`
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
