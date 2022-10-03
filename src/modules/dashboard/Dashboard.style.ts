import styled from 'styled-components'

export const Dashboard = styled.div`
  display: flex;
  padding: 20px;

  > div {
    min-height: calc(100vh - 40px);
  }
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
