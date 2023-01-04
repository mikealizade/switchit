import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { Card } from '@components/Card/Card.style'
import { Div } from '@styles/common.style'

export const ProfileContainer = styled.section`
  display: flex;
  column-gap: 30px;
  flex-wrap: wrap;
  row-gap: 30px;

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const ProfileColumn = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 5;

  + section {
    flex: 4;
  }
`

export const ProfileTitle = styled.h2`
  font-size: var(--fsBase);
  color: var(--slate);
`

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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
`

export const Header = styled.h2`
  width: 100%;
  font-size: var(--fsLarge9);

  ${() => mediaQuery.laptop} {
    + section {
      width: 50%;
    }
  }
`

export const StartJourneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  text-align: center;
  font-size: var(--fsMedium8);
  position: relative;
`

export const PlainInput = styled.input`
  padding: 5px 10px;
  border: 1px solid var(--gallery);
  border-radius: 10px;
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

// export const StartJourney = styled.div<{ isActive: boolean }>`
//   display: flex;
//   flex-direction: column;
//   color: ${({ isActive }) => (isActive ? 'var(--pink)' : 'var(--grey)')};
//   place-items: center;
//   row-gap: 40px;
//   cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
//   pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
// `

export const Container = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  padding: 10px;
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

export const Buttons = styled.div<{ single?: boolean }>`
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 10px;
  padding: 10px 0;
  flex-wrap: wrap;
  /* flex: 1; */

  ${() => mediaQuery.tablet} {
    justify-content: ${({ single }) => (single ? 'flex-end' : 'flex-start')};
    flex-direction: row;
    /* padding: 20px 0; */
    padding: 0;
  }

  button:first-of-type:not(:only-child) {
    margin-right: auto;
  }

  button:only-child {
    margin-left: auto;
  }
`

//make the switch page

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const Text = styled.p`
  font-size: var(--fsLarge2);
`

//confirm switch

// switch landing page

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

  ${() => mediaQuery.tablet} {
    padding: ${({ isJourneyComplete }) => (isJourneyComplete ? '60px 0 0' : '60px 30px')};
  }
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

// export const DetailName = styled(DetailText)`
//   text-transform: capitalize;
// `

export const NextStep = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;
`

export const Steps = styled(Detail)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  flex: 2.5;
`

export const Step = styled.li<{ isIncomplete: boolean }>`
  background-color: ${({ isIncomplete }) => (isIncomplete ? 'var(--pampas)' : 'var(--white)')};
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px;
  border-radius: 3px;
  border-radius: 8px;

  > span {
    min-width: 25px;
  }

  button {
    margin-left: auto;
  }
`

// export const StepDetail = styled.div`
//   display: flex;
//   flex-direction: column;
//   column-gap: 10px;
//   font-size: var(--fsSmall5);
//   row-gap: 4px;
//   letter-spacing: 1px;
// `
// tell community

// export const Community = styled.div`
//   display: flex;
//   column-gap: 50px;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   row-gap: 50px;
// `

// export const CommunityActions = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: var(--fsLarge1);
//   row-gap: 30px;
//   flex: 1;
// `

export const TabsContainer = styled(Div)`
  width: 55%;
  align-self: center;
`

export const ShareCodeInfo = styled.p`
  font-size: var(--fsMedium8);
`

export const Actions = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  flex: 1;
`

export const Action = styled.li`
  display: flex;
  font-size: var(--fsMedium7);
  row-gap: 20px;
  column-gap: 20px;
  align-items: center;
  height: 32px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;

    span {
      display: inline-block;
    }
  }
`

// export const ActionsHeader = styled.h3`
//   font-style: italic;
//   font-family: 'Konsolev SemiBold';
// `

export const CopyIconHover = styled.span`
  display: none;
`

//tell us

export const Header2 = styled.h2`
  font-size: var(--fsLarge9);

  strong {
    font-family: 'Konsolev SemiBold';
  }
`

export const Subheader = styled.h3`
  font-size: var(--fsLarge4);
  font-family: 'Konsolev Regular';
  font-weight: normal;
`

export const HeaderContainer = styled(Section)`
  row-gap: 20px;
`

export const StepItem = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  column-gap: 30px;

  > span {
    min-width: 35px;
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
