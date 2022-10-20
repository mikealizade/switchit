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

export const ProfileContainer = styled.main`
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
`

export const ProfileColumn = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  flex: 1;
`

export const ProfileTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--slate);
`

export const ProfileSummary = styled.ul`
  color: var(--sushi);
  display: flex;
  flex-direction: column;
  row-gap: 22px;
`

export const SummaryItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  h2 {
    font-family: 'Konsolev SemiBold', sans-serif;
    margin: 0;
    font-size: initial;
  }
`
