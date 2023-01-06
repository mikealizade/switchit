import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const AppContainer = styled.div<{ isHome: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100vh;

  ${() => mediaQuery.laptop} {
    flex-direction: row;
    padding: ${({ isHome }) => (isHome ? '0' : '20px')};
  }
`

export const AppContent = styled.main<{ hasAside: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: auto;
  position: relative;
  overflow: hidden;
  background-color: var(--pampas);
  border-radius: ${({ hasAside }) => (hasAside ? '0' : '0 16px 16px 0')};
`

export const Aside = styled.aside`
  display: flex;
  width: 100%;
  background-color: var(--pampas);
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  overflow: hidden;

  ${() => mediaQuery.laptop} {
    min-width: 400px;
    width: 400px;
    border-radius: 0 10px 10px 0;
  }
`

export const AsideContent = styled.section`
  display: flex;
  background-color: var(--white);
  flex-direction: column;
  flex: 1;
  padding: 40px;
  row-gap: 40px;

  ${() => mediaQuery.laptop} {
    border-radius: 10px;
  }
`
