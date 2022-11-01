import styled from '@emotion/styled'

export const ProfileSummary = styled.ul`
  color: var(--sushi);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
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
