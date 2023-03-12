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

export const AppContent = styled.div<{ hasAside: boolean }>`
  display: flex;
  min-height: 100vh;
  flex: auto;
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
  border-radius: 0;

  ${() => mediaQuery.laptop} {
    border-radius: ${({ hasAside }) => (hasAside ? '0' : '0 16px 16px 0')};
    padding-bottom: 0;
  }
`

export const AppContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 3;
`

export const Aside = styled.aside<{ isImpactCardOpen?: boolean }>`
  display: flex;
  flex: 1;
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
  transform: ${({ isImpactCardOpen }) => (isImpactCardOpen ? 'translateX(0)' : `translateX(100vw)`)};
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  ${() => mediaQuery.tablet} {
    min-width: 400px;
    max-width: 400px;
    border-radius: 16px;
    box-shadow: -2px 4px 12px rgb(0 0 0 / 15%);
  }

  ${() => mediaQuery.laptop} {
    overflow: hidden;
    min-width: 400px;
    width: 400px;
    height: auto;
    top: 20px;
  }

  ${() => mediaQuery.xlaptop} {
    overflow: hidden;
    min-width: 400px;
    width: 400px;
    height: auto;
  }

  ${() => mediaQuery.xxlaptop} {
    position: relative;
    top: 0;
    border-radius: 0 16px 16px 0;
    box-shadow: none;
  }
`

export const AsideContent = styled.section`
  display: flex;
  background-color: var(--white);
  flex-direction: column;
  flex: 1;
  row-gap: 40px;
  overflow-y: auto;

  ${() => mediaQuery.laptop} {
    border-radius: 16px;
  }
`
