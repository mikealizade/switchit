import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

// TODO fix progress bar for maobiles

export const ProgressBarContainer = styled.div`
  display: none;
  flex-direction: column;
  row-gap: 30px;
  /* flex: 1; */

  ${() => mediaQuery.laptop} {
    display: flex;
    padding-top: 20px;
  }
`

export const Header = styled.h3`
  font-size: var(--fsMedium6);
  font-weight: normal;
  justify-content: space-between;
  display: flex;
`

export const Steps = styled.ul`
  display: flex;
`

export const Item = styled.li<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-end;
  color: ${({ isActive }) => (isActive ? 'var(--sushi)' : 'var(--grey)')};
  width: 20%;
  font-size: var(--fsSmall4);
  font-family: 'Konsolev SemiBold';
`
