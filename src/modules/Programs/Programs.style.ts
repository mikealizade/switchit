import styled from '@emotion/styled'
import { BulletList as List } from '@styles/common.style'
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

export const ProgramContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 25px;
  position: relative;
  column-gap: 20px;

  ${() => mediaQuery.tablet} {
    column-gap: 20px;
  }

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const ProgramContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  flex: 1;
  align-self: center;

  ${() => mediaQuery.tablet} {
    width: 80%;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`

export const Intro = styled.div`
  font-weight: bold;
  font-size: var(--fsLarge0);
`

export const BulletList = styled(List)`
  font-size: var(--fsLarge0);
`

export const ListHeader = styled.h2`
  font-size: var(--fsLarge0);
`
