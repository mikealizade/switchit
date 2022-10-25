import styled from '@emotion/styled'

export const SharingCodes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  row-gap: 20px;
  flex: 1;

  svg {
    width: 20px;
    color: var(--sushi);
    width: 40px;

    &:last-child {
      color: var(--pink);
      width: 30px;
      margin-left: auto;
    }
  }
`

export const TotalShared = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 30px;
  align-items: center;
  font-size: var(--fsHuge0);
  font-family: 'Konsolev SemiBold';
`
