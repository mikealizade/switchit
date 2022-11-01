import styled from '@emotion/styled'

export const PointsChart = styled.ul`
  display: flex;
  width: 100%;
  height: 20px;
`

export const Item = styled.li`
  &:nth-of-type(1) {
    background-color: var(--dodgerBlue);
    border-radius: 20px 0 0 20px;
  }

  &:nth-of-type(2) {
    background-color: var(--aurora);
    border-radius: 0;
  }
  &:nth-of-type(3) {
    background-color: var(--mustard);
    border-radius: 0;
  }
  &:nth-of-type(4) {
    background-color: var(--vermilion);
    border-radius: 0 20px 20px 0;
  }
`

export const ItemEmpty = styled.li`
  background-color: var(--haze);
  border-radius: 20px;
`
