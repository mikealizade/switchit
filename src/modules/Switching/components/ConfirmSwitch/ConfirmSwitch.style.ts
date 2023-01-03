import styled from '@emotion/styled'
import { PlainInput } from '@modules/Switching/Switching.style'

export const Signature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  fieldset {
    padding: 0 50px;
  }
`

export const Agreement = styled.p`
  font-size: var(--fsMedium9);
  line-height: 23px;
  padding: 0 50px;
`

export const SignatureInput = styled(PlainInput)`
  height: 100px;
  padding: 30px;
  font-size: var(--fsLarge2);
  background-color: var(--concrete);
`

export const Label = styled.label`
  font-size: var(--fsSmall3);
  color: var(--slate);
`

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  padding: 10px 35px 10px 15px;
  border: 1px solid var(--gallery);
  border-radius: 10px;
  align-self: flex-start;
`
