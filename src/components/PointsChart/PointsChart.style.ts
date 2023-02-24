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

  &.friendsengaged {
    background-color: var(--dodgerBlue);
  }

  &.greenfinanceknowledge {
    background-color: var(--mustard);
  }

  &.switchingcampaigns {
    background-color: var(--vermilion);
  }

  &.switchingactions {
    background-color: var(--aurora);
  }
`

export const ItemEmpty = styled.div`
  background-color: var(--haze);
  border-radius: 20px;
  height: 20px;
  width: 100%;
`
