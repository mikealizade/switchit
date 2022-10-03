import styled from 'styled-components'

export const Nav = styled.nav`
  min-width: 270px;
  background-color: var(--white);
  border-radius: 8px 0 0 8px;
  padding: 30px;
  row-gap: 100px;
  display: flex;
  flex-direction: column;
`

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  &:last-of-type {
    margin-top: auto;
  }

  li {
    padding: 4px 18px;
    border-radius: 8px;
    background-color: var(--white);

    &:hover {
      background-color: var(--pink);
      color: var(--white);
    }
  }
`

export const Logo = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
  font-size: 1.8rem;
`
