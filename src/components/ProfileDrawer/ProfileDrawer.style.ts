import styled from '@emotion/styled'

export const ProfileHead = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 170px;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    &:first-child {
      background-color: var(--sushi);
      flex: 1;
      border-radius: 15px;
      position: relative;
      margin: -35px;

      span {
        position: absolute;
        left: 30px;
        bottom: -70px;
      }
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
    border: 2px solid var(--white) !important;
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
