import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const SelectActionContainer = styled.div`
  position: relative;
  min-height: 400px;
  flex: 1;
`

export const SelectActionCard = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  border-radius: 10px;
  background-color: var(--porcelain);
  padding: 30px;
  height: auto;
  opacity: 0;
  transition: opacity 0.5s linear;
  position: absolute;
  left: 0;
  bottom: 0;

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

  p {
    font-size: var(--fsBase);
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
