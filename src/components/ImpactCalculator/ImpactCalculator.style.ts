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

  .react-select {
    width: 100%;
  }
`

export const QuantifyImpact = styled(Calculator)`
  padding: 40px;
  background-color: #ecf5e3;
  place-items: initial;
  opacity: 0;
  animation: fadeIn 0.5s forwards;

  button {
    align-self: flex-end;
  }
`

export const ImpactCardHeader = styled.header<{ isTablet?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 33px 40px 34px;
  color: ${({ isTablet }) => (isTablet ? 'initial' : 'var(--white)')};
  background-color: ${({ isTablet }) => (isTablet ? 'var(--white)' : 'var(--sushi)')};

  ${() => mediaQuery.tablet} {
    justify-content: flex-start;
    font-size: var(--fsBase);
    padding: 50px 40px 0;
  }

  > span {
    position: absolute !important;
    left: 20px;
  }
`

export const ImpactCardHeaderDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

export const ImpactCardHeaderMobile = styled(ImpactCardHeaderDesktop)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

export const ImpactCardHeaderText = styled.h2`
  font-family: 'Konsolev SemiBold';
  font-size: var(--fsLarge0);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsLarge4);
  }
`

export const CloseMenu = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${() => mediaQuery.xxlaptop} {
    display: none;
  }
`

export const ImpactContent = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  padding: 40px 40px 120px;
  flex: 1;

  ${() => mediaQuery.tablet} {
    padding: 20px 40px 40px;
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
  font-size: var(--fsSmall4);
  font-style: italic;
  cursor: pointer;
  text-decoration: underline;
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
