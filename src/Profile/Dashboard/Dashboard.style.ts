import styled from '@emotion/styled'

export const Dashboard = styled.div`
  display: flex;
  padding: 20px;
  min-height: 100vh;
`

export const Content = styled.main`
  background-color: #f2f0ed;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;
  row-gap: 50px;
`

export const Aside = styled.aside`
  padding: 30px;
  min-width: 350px;
  background-color: var(--white);
  border-radius: 0 8px 8px 0;
`

export const SwitchingJourney = styled.div`
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
`

export const Header = styled.h2`
  font-size: inherit;
  font-weight: normal;
  width: 100%;
`
