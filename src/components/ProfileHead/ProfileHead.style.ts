import styled from '@emotion/styled'

export const ProfileHead = styled.header`
  display: flex;
  column-gap: 40px;
  flex-direction: column;
  row-gap: 160px;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    &:first-child {
      flex: 1;
      background-color: var(--sushi);
      border-radius: 15px;
      margin: -35px;
      position: relative;
    }

    &:last-child {
      flex: 2;
    }
  }

  img,
  span {
    border-radius: 50%;
    width: 140px !important;
    height: 140px !important;
    position: absolute;
    border: 1px solid var(--white) !important;
    left: 20px;
    bottom: -70px;
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
