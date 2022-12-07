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
  /* border-radius: 0 8px 8px 0; */

  display: flex;
  flex-direction: column;
  /* border-radius: 10px; */
  /* background-color: var(--white); */
  /* padding: 30px; */
  flex: 1;
`
