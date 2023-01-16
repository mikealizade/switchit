import styled from '@emotion/styled'
import { Card } from '@components/Card/Card.style'
import { mediaQuery } from '@utils/functions'

export const NoJourneysTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  row-gap: 40px;
  flex: 1;
  min-height: 300px;
  justify-content: center;
`

export const NoJourneysText = styled.p`
  font-size: var(--fsBase);
  font-weight: bold;

  &:first-of-type {
    color: var(--pink);
  }
`

export const JourneyCard = styled(Card)<{ isJourneyComplete?: boolean }>`
  flex: 1;
  flex-wrap: wrap;
  column-gap: 25px;
  flex-direction: column;
  row-gap: 30px;
  padding: 0;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    padding: ${({ isJourneyComplete }) => (isJourneyComplete ? '60px 0 0' : '60px 30px')};
    padding: 60px 30px 30px;
  }
`

export const JourneySection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  border-radius: 15px;
  background-color: var(--alabaster);
  padding: 40px;
  flex: 2;
`

export const JourneySectionHeader = styled.h2`
  font-size: var(--fsLarge4);
`

export const JourneySectionContent = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`

export const StartJourney = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--pink);
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
`

export const NextStep = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  flex: 1.8;
`

export const DetailHeader = styled.h3`
  font-size: var(--fsSmall5);
  color: var(--grey);
`

export const DetailText = styled.p`
  font-weight: bold;
  padding-left: 10px;
`

// TODO  below s/b in common styles

export const SwitchingColumnContainer = styled.section`
  display: flex;
  column-gap: 25px;
  flex-wrap: wrap;
  row-gap: 25px;
  position: relative;
  flex-direction: column;
  flex: 1;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
  }

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const SwitchingColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  flex: 7;
  flex-wrap: wrap;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const Header = styled.h2`
  width: 100%;
  font-size: var(--fsLarge1);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsLarge9);
  }

  ${() => mediaQuery.laptop} {
    + section {
      width: 50%;
    }
  }
`

export const Container = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  padding: 0;
  border-radius: 30px;
  flex: 1;

  ${() => mediaQuery.tablet} {
    padding: 20px;
  }
`

export const Content = styled.div`
  background-color: var(--white);
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  border: 0;
  white-space: pre-wrap;
  min-height: 300px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  p {
    font-size: var(--fsBase) !important;
  }

  img {
    width: 100% !important;
  }
`

export const Buttons = styled.div<{ align?: string }>`
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
  row-gap: 10px;
  padding: 10px 0;
  flex-wrap: wrap;

  ${() => mediaQuery.tablet} {
    justify-content: ${({ align }) =>
      align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'space-between'};
    flex-direction: row;
    padding: 0;
  }
`
export const ButtonsAlign = styled.div`
  display: flex;
  column-gap: 20px;
`
