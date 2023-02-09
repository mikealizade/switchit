import styled from '@emotion/styled'

export const PointsChart = styled.ul`
  display: flex;
  width: 100%;
  height: 20px;
`

export const Item = styled.li`
  &:first-of-type {
    border-radius: 20px 0 0 20px;
    min-width: 8px;
  }

  &:last-of-type {
    border-radius: 0 20px 20px 0;
  }

  &:only-child {
    border-radius: 20px;
  }

  &.sharingcodes {
    background-color: var(--dodgerBlue);
  }

  &.resourcesread {
    background-color: var(--aurora);
  }

  &.switchingcampaigns {
    background-color: var(--mustard);
  }

  &.switchingactions {
    background-color: var(--vermilion);
  }
`

export const ItemEmpty = styled.li`
  background-color: var(--haze);
  border-radius: 20px;
`
