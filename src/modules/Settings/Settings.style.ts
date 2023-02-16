import styled from '@emotion/styled'
import { Card } from '@components/Card/Card.style'
import { mediaQuery } from '@utils/functions'

export const SettingsCard = styled(Card)`
  row-gap: 30px;
  flex-direction: column;
`

export const UpdateProfile = styled.header`
  display: flex;
  column-gap: 20px;
  row-gap: 40px;
  border-bottom: 1px solid var(--haze);
  padding: 20px 0 30px;
  align-items: center;
  flex-direction: column;

  ${() => mediaQuery.tablet} {
    padding: 40px 0;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
  }

  img,
  span {
    border-radius: 50%;
    width: 95px !important;
    min-width: 95px !important;
    height: 95px !important;

    ${() => mediaQuery.tablet} {
      width: 110px !important;
      min-width: 110px !important;
      height: 110px !important;
    }
  }
`

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  flex: 1;

  /* ${() => mediaQuery.tablet} {
    flex-direction: row;
  } */
`

export const ButtonContainer = styled.div`
  justify-content: flex-end;

  /* ${() => mediaQuery.tablet} {
    flex-direction: row;
  } */
`

export const NameEmail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-right: auto;
`

export const Name = styled.h2`
  text-transform: capitalize;
`

export const Email = styled.p`
  color: var(--grey);
`
