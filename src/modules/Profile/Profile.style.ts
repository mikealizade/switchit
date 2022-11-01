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
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 20px;

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const ProfileColumn = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  /* flex: 2; */

  + section {
    flex: 4;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;

    > section {
      flex: 1;
    }
    > div {
      transition: all 1s linear;
      display: flex;
      align-self: flex-start;
    }
  }
`

export const ProfileColumnUser = styled(ProfileColumn)`
  flex-direction: inherit;
`

export const ProfileTitle = styled.h2`
  font-size: var(--fsBase);
  color: var(--slate);
`
