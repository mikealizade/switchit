import styled from '@emotion/styled'
import { Button } from '@components/Button/Button.style'

export const ShareButton = styled(Button)`
  background-color: var(--pink);
  padding: 13px 30px;
  align-self: center;
  width: 200px;
  border-radius: 20px;
  font-size: 2.7rem;
`

export const SentCodes = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Share = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
`
