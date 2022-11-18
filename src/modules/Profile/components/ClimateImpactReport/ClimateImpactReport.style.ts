import styled from '@emotion/styled'

export const ClimateImpactReport = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex: 1;

  .grey-card {
    padding: 28px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &:first-child {
      width: 100%;
    }

    &:not(:first-child) {
      flex: 1;
    }
  }
`

export const ReportContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  gap: 20px;
`

export const MainTotal = styled.h3`
  font-size: var(--fsVLarge6);
`

export const Total = styled.h3`
  font-size: var(--fsLarge4);
`

export const Text = styled.p`
  line-height: 2rem;
`
