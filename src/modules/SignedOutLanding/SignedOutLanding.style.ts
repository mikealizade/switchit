import styled from '@emotion/styled'

export const Nav = styled.nav`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  padding: 20px 170px;
  border-bottom: 1px solid var(--gallery);
`

export const Navigation = styled.ul`
  display: flex;
  column-gap: 25px;
  align-items: center;
`

export const NavItem = styled.li`
  a {
    font-size: var(--fsBase);
  }
`

export const Content = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const BlockButton = styled.div`
  position: relative;
  align-self: flex-start;

  a {
    display: inline-flex;
    background-color: var(--white);
    justify-content: center;
    align-items: center;
    color: var(--pink);
    border: 3px solid var(--pink);
    padding: 15px 20px;
    border-radius: px;
    font-size: var(--fsMedium7);
    z-index: 2;
    align-self: flex-start;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Konsolev SemiBold';
    z-index: 2;
    position: relative;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 12px;
    top: 8px;
    background-color: var(--pink);
    border-radius: 3px;
    z-index: 1;
  }
`
