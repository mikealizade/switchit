import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const SelectActionContainer = styled.div`
  position: relative;
  min-height: 400px;
`

export const SelectActionCard = styled.aside`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  row-gap: 30px;
  border-radius: 10px;
  background-color: var(--white);
  padding: 30px;
  height: auto;
  opacity: 0;
  transition: opacity 0.5s linear;
  position: absolute;
  left: 0;
  top: 0;

  ${() => mediaQuery.tablet} {
    height: 332px;
  }

  ${() => mediaQuery.laptop} {
    height: auto;
  }

  ${() => mediaQuery.xxlaptop} {
    height: 332px;
  }

  &.isActive {
    opacity: 1;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  column-gap: 30px;
  align-items: center;
`

export const Header = styled.h3`
  font-size: var(--fsMedium9);
  font-family: 'Konsolev SemiBold';
`

export const Text = styled.p`
  font-size: var(--fsMedium9);
`
