import styled from '@emotion/styled'

export const PointsChart = styled.ul`
  display: flex;
  width: 100%;
  height: 10px;
`

export const Item = styled.li`
  &:nth-child(1) {
    background-color: var(--dodgerBlue);
    border-radius: 20px 0 0 20px;
  }

  &:nth-child(2) {
    background-color: var(--aurora);
    border-radius: 0;
  }
  &:nth-child(3) {
    background-color: var(--mustard);
    border-radius: 0;
  }
  &:nth-child(4) {
    background-color: var(--vermilion);
    border-radius: 0 20px 20px 0;
  }
`
