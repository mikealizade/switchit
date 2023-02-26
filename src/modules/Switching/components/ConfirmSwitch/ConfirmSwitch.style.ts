import styled from '@emotion/styled'
import { PlainInput } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const Signature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  fieldset {
    padding: 0;

    ${() => mediaQuery.tablet} {
      padding: 0 50px;
    }
  }
`
export const SignatureFieldset = styled.fieldset`
  padding: 0;

  ${() => mediaQuery.tablet} {
    padding: 0 50px;
  }
`

export const Agreement = styled.p`
  font-size: var(--fsMedium9);
  line-height: 23px;
  padding: 0;
  font-size: initial;

  ${() => mediaQuery.tablet} {
    padding: 0 50px;
  }
`

export const Label = styled.label`
  font-size: var(--fsSmall3);
  color: var(--slate);
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    justify-content: space-between;
  }

  ${() => mediaQuery.tablet} {
    span {
      display: none;
    }
  }
`

export const SignatureInput = styled(PlainInput)`
  height: 50px;
  padding: 10px 20px;
  font-size: var(--fsLarge2);
  background-color: var(--concrete);
  font-family: 'BamBang';

  ${() => mediaQuery.tablet} {
    padding: 30px;
    width: 280px;
    height: 100px;
  }
`

export const Date = styled.div`
  display: none;

  ${() => mediaQuery.tablet} {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    padding: 10px 35px 10px 15px;
    /* border: 1px solid var(--gallery);
    border-radius: 10px; */
    align-self: flex-start;
    font-size: initial;
  }
`
