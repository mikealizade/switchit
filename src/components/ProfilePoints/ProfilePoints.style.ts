import styled from '@emotion/styled'

export const SentCodes = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Header = styled.h2`
  font-size: var(--fsBase);
`

export const Scoring = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const TotalPoints = styled.p`
  font-size: var(--fsMedium9);
  display: flex;
  align-items: center;
  color: var(--cadetBlue);
  column-gap: 10px;
  justify-content: center;

  svg {
    width: 40px;
  }
`

export const PointTypes = styled.ul`
  margin: 0;
  font-size: var(--fsBase);
  font-weight: bold;
  row-gap: 20px;
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  display: flex;
  padding-left: 20px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 0;
    top: 2px;
    border-radius: 50%;
    background-color: var(--dodgerBlue);
  }
  &:nth-of-type(2) {
    &:before {
      background-color: var(--aurora);
    }
  }
  &:nth-of-type(3) {
    &:before {
      background-color: var(--mustard);
    }
  }
  &:nth-of-type(4) {
    &:before {
      background-color: var(--vermilion);
    }
  }
`

export const PointType = styled.p`
  font-size: var(--fsSmall4);
  color: var(--slate);
  font-weight: initial;
`

export const Points = styled.em`
  font-weight: initial;
  margin-left: auto;
  font-style: normal;
`
