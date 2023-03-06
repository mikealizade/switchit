import styled from '@emotion/styled'

export const Awards = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
`

export const AwardsList = styled.ul<{ noPoints: boolean }>`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 20px;
  justify-content: ${({ noPoints }) => (noPoints ? 'space-evenly' : 'flex-start')};
`

export const Item = styled.li<{ noPoints: boolean }>`
  display: flex;
  column-gap: 10px;
  row-gap: 12px;
  font-family: 'Konsolev SemiBold';
  font-size: var(--fsSmall5);
  background: transparent 14px center no-repeat;
  width: ${({ noPoints }) => (noPoints ? 'auto' : 'calc(50% - 20px)')};
  align-items: center;

  > span {
    flex: 1;
  }
`

export const AwardData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex: 1;
`

export const Total = styled.span`
  font-family: 'Konsolev SemiBold';
  font-size: var(--fsSmall5);
`

export const Label = styled.span`
  color: var(--juniper);
  font-size: var(--fsSmall3);
`

export const NoPoints = styled.p`
  text-align: center;
  font-size: var(--fsSmall4);
`
