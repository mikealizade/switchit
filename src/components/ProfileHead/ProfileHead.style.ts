import styled from '@emotion/styled'

export const ProfileHead = styled.header`
  display: flex;
  column-gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    &:first-child {
      flex: 1;
    }
    &:last-child {
      flex: 2;
    }
  }

  img,
  span {
    border-radius: 50%;
    width: 132px !important;
    height: 132px !important;
    max-width: none !important;
  }
`

export const Name = styled.h1`
  margin: 0;
  font-size: var(--fsLarge4);
  font-weight: bold;
  text-transform: capitalize;
`

export const Location = styled.p`
  font-size: inherit;
`

export const Points = styled.p`
  font-size: var(--fsmall4);
  color: grey;
  display: flex;
  align-items: center;
  column-gap: 10px;

  svg {
    width: 20px;
    color: var(--pink);
  }
`
