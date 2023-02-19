import styled from '@emotion/styled'
import { PlainInput } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const ImpactCalculator = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: auto; */
  row-gap: 40px;
`

export const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  row-gap: 30px;
  background-color: #fef4fa;
  padding: 30px;
  border-radius: 10px;
  /* margin-top: auto; */

  .react-select {
    width: 100%;
  }
`

export const QuantifyImpact = styled(Calculator)`
  padding: 40px;
  background-color: #ecf5e3;
  /* margin-top: auto; */
  place-items: initial;
  opacity: 0;
  animation: fadeIn 0.5s forwards;

  button {
    align-self: flex-end;
  }
`

export const ImpactCardHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;

  ${() => mediaQuery.tablet} {
    justify-content: flex-start;
    font-size: var(--fsBase);
  }

  > span {
    position: absolute !important;
    left: 0;
  }
`

export const ImpactCardHeaderText = styled.h2`
  font-family: 'Konsolev SemiBold';
  font-size: var(--fsLarge0);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsLarge4);
  }
`

export const BackLink = styled.div`
  font-size: var(--fsLarge0);
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  position: relative;
  justify-content: center;
  flex: 1;
`

export const Header = styled.h3`
  font-size: var(--fsMedium6);
  font-weight: normal;
  justify-content: space-between;
  display: flex;
`

export const CalcFooter = styled.p`
  font-size: var(--fsSmall5);
  font-style: italic;
  cursor: pointer;
`

export const Bank = styled(PlainInput)`
  background-color: var(--pampas);
  font-weight: bold;
  min-height: 40px;
  border: 0;

  &::placeholder {
    color: var(--overcast);
    font-weight: normal;
  }
`

export const ImpactTotal = styled(PlainInput)`
  border: 0;
  font-size: var(--fsMedium7);
  padding: 0;

  &::placeholder {
    color: var(--gallery);
  }
`

export const MoneyDivested = styled.div`
  font-size: var(--fsSmall3);
  font-style: italic;
  color: var(--grey);
`

export const Effect = styled.div`
  font-weight: bold;
  padding: 0 12px;

  strong {
    display: block;
    margin-top: 22px;
  }
`

export const MoreInfo = styled.span`
  cursor: pointer;
`
