import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Header = styled.h2`
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

export const BankFinder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

export const BankSelector = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  row-gap: 40px;
  margin-bottom: 100px;

  .react-select {
    min-width: 240px;

    ${() => mediaQuery.tablet} {
      min-width: 300px;
    }
  }
`

export const BankList = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
  flex-wrap: wrap;
  row-gap: 20px;
`

export const Buttons = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 40px;
  flex-wrap: wrap;
  row-gap: 20px;
`

export const BankInfo = styled.div`
  display: flex;
  column-gap: 70px;
`

export const BankScoreContainer = styled.div`
  width: 200px;
  flex: 1;
`
export const BankData = styled.div`
  flex: 4;
  line-height: 20px;
  padding-right: 100px;
`

export const ProgressText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fsHuge0);
  max-width: 150px;
  font-family: 'Konsolev Regular';
  margin-top: -15px;
`

export const ViewResearch = styled.div`
  padding: 100px 25px 25px;
  background: var(--sand) url('/icons/icon_magnify2.svg') no-repeat center 25px;
  background-size: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--fsMedium9);
  border-radius: 18px;

  ${() => mediaQuery.tablet} {
    background: var(--sand) url('/icons/icon_magnify2.svg') no-repeat 30px center;
    padding: 25px 25px 25px 110px;
  }
`

export const BankRating = styled.div`
  font-size: var(--fsMedium9);
  display: flex;
  flex-direction: row;
  row-gap: 30px;
`

export const Rating = styled.div`
  font-size: var(--fsMedium9);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 4;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  flex: 1;

  button {
    align-self: flex-end;
  }
`

export const RatingHeader = styled.div`
  font-size: var(--fsLarge0);
`

//choose journey

export const ChooseJourneyLink = styled.div<{ isActive?: boolean }>`
  font-size: var(--fsLarge4);
  color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--nileBlue)')};
  background-color: ${({ isActive }) => (isActive ? 'var(--nileBlue)' : 'var(--white)')};
  border: 1px solid ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--nileBlue)')};
  padding: 15px;
  border-radius: 10px;
  transition: all 0.1s linear;
  max-width: 560px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const HeaderContainer = styled(Section)`
  row-gap: 20px;
`

export const ActionSelector = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`

export const Item = styled.li`
  border: 2px solid var(--nileBlue);
  background-color: var(--white);
  border-radius: 10px;
  padding: 12px;
  flex: 1;
  min-width: 133px;
  max-width: 133px;
  transition: all 0.1s linear;
  display: flex;
  cursor: pointer;

  &:hover {
  }

  &:hover {
    transform: scale(1.15);
    background-color: var(--nileBlue);

    * {
      color: var(--white);
    }
  }

  h3 {
    text-align: center;
    font-size: var(--fsSmall4);
  }
`

export const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--fsSmall3);
  margin-top: auto;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
  flex: 1;
`
