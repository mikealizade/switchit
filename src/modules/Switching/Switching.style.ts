import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Content = styled.main`
  background-color: #f2f0ed;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;
  row-gap: 50px;
`

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

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const SwitchingColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  flex: 2;
  flex-wrap: wrap;
`

export const Header = styled.h2`
  width: 100%;
  font-size: inherit;

  + section {
    width: 50%;
  }
`

export const StartJourneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  text-align: center;
  font-size: var(--fsMedium8);
`

export const StartJourney = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--pink);
  place-items: center;
  row-gap: 40px;
  cursor: pointer;
`
