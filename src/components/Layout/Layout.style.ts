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
  padding-bottom: 80px;
  border-radius: 0;

  ${() => mediaQuery.tablet} {
    border-radius: ${({ hasAside }) => (hasAside ? '0' : '0 16px 16px 0')};
    padding-bottom: 0;
  }
`

export const Aside = styled.aside<{ isImpactCardOpen?: boolean }>`
  display: flex;
  min-width: 400px;
  max-width: 400px;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--pampas);
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  z-index: 1;
  bottom: 0;
  transform: ${({ isImpactCardOpen }) => (isImpactCardOpen ? 'translateX(0)' : `translateX(90vh)`)};
  transition: all 0.2s ease-in-out;

  ${() => mediaQuery.xlaptop} {
    overflow: hidden;
    position: relative;
    min-width: 400px;
    width: 400px;
    border-radius: 0 10px 10px 0;
    height: auto;
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
