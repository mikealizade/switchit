import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { Form } from '@styles/common.style'

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
  position: relative;

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
    gap: 20px;

    > section {
      flex: 1;
    }
  }
`

export const ProfileColumnUser = styled(ProfileColumn)`
  flex-direction: inherit;
`

export const ProfileTitle = styled.h2`
  font-size: var(--fsBase);
  color: var(--slate);
  position: relative;
`

export const ProfileForm = styled(Form)`
  fieldset {
    height: 500px;
    overflow-y: auto;
    border: 0;
  }
`
