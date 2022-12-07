import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const AppContainer = styled.div<{ isHome: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ isHome }) => (isHome ? '0' : '20px')};
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
  position: relative;
  overflow: hidden;
  background-color: var(--pampas);
`

export const Aside = styled.aside`
  display: flex;
  min-width: 400px;
  width: 400px;
  background-color: var(--pampas);
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const AsideContent = styled.div`
  display: flex;
  background-color: var(--white);
  border-radius: 10px;
  flex-direction: column;
  flex: 1;
  padding: 40px;
`
