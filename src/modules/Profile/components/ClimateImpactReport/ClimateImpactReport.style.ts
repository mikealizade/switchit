import styled from '@emotion/styled'

export const ClimateImpactReport = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  flex: 1;

  /* .grey-card {
    padding: 28px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &:first-of-type {
      width: 100%;
    }

    &:not(:first-of-type) {
      flex: 1;
    }
  } */

  button {
    white-space: nowrap;
  }
`

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
`

export const Amount = styled.h3`
  font-size: var(--fsVLarge6);
`

export const Text = styled.p`
  line-height: 2rem;
  color: var(--juniper);
  text-align: center;
`

export const TextHighlight = styled.p`
  line-height: 2rem;
  position: relative;
  margin: 20px 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 1px;
    background-color: var(--gallery);
    left: -50px;
    top: 10px;
  }

  &:after {
    left: auto;
    right: -50px;
  }
`
