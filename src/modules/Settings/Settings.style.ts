import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { Card } from '@components/Card/Card.style'

export const SettingsCard = styled(Card)`
  row-gap: 30px;
  flex-direction: column;
`

export const UpdateProfile = styled.header`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid var(--haze);
  padding-bottom: 40px;
  align-items: center;

  img,
  span {
    border-radius: 50%;
    width: 110px !important;
    height: 110px !important;
  }
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