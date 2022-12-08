import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

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
  font-size: inherit;

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
`

export const StartJourney = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--pink);
  place-items: center;
  row-gap: 40px;
  cursor: pointer;
`

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

  [contenteditable='true'] {
    border: 2px solid var(--sushi);
    border-radius: 10px;
    outline: 2px;
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 10px;
  padding: 10px 0;
  flex-wrap: wrap;
  flex: 1;

  ${() => mediaQuery.tablet} {
    justify-content: flex-end;
    flex-direction: row;
    padding: 20px 0;
  }

  button:nth-child(3) {
    margin-left: auto;
  }
`
