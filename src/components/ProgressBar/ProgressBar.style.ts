import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

// TODO fix progress bar for maobiles

export const ProgressBarContainer = styled.div`
  display: none;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;

  ${() => mediaQuery.laptop} {
    display: flex;
  }
`

export const Steps = styled.ul`
  display: flex;
`

export const Item = styled.li<{ isActive: boolean }>`
  display: flex;
  place-items: center;
  color: ${({ isActive }) => (isActive ? 'var(--sushi)' : 'var(--grey)')};
  width: 20%;
  font-size: var(--fsSmall5);
  font-family: 'Konsolev SemiBold';

  &:nth-of-type(4) {
    justify-content: center;
  }

  &:nth-of-type(5) {
    justify-content: flex-end;
  }
`
