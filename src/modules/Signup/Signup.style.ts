import styled from '@emotion/styled'
import { Button } from '@components/Button/Button.style'
import { Div } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const Logo = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
  font-size: var(--fsMedium8);
`

export const SignUpContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  min-width: 100vw;
  min-height: 100vh;
  background: #f2f0ed url('/images/img_onboarding.png') no-repeat right bottom;
  background-size: 50%;

  ${() => mediaQuery.xlaptop} {
    background-position: right -50px;
  }
`

export const Content = styled.div`
  background-color: var(--white);
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;

  ${() => mediaQuery.laptop} {
    width: 50%;
  }
`

export const SignupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 50px;
  padding: 50px 0 20px;
  margin: auto;

  ${() => mediaQuery.tablet} {
    padding: 0 0 20px;
    width: 80%;
  }
`

export const SignupCopy = styled(Div)`
  row-gap: 30px;
  p {
    font-size: var(--fsMedium8);
  }
`

export const SignupHeader = styled.h1`
  margin: 0;
  font-family: 'Konsolev SemiBold';
  font-size: var(--fsVLarge6);
`

export const SignInButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const SignInButton = styled(Button)`
  display: flex;
  justify-content: center;
  background-color: var(--pink);
  padding: 18px 30px;
  align-self: center;
  align-items: center;
  border-radius: 8px;
  font-size: var(--fsLarge0);
  font-weight: bold;
  color: var(--white);
  border: 0;
  width: 100%;
  align-self: flex-start;

  ${() => mediaQuery.xmobile} {
    width: auto;
  }

  ${() => mediaQuery.laptop} {
    width: 100%;
  }
  ${() => mediaQuery.xlaptop} {
    width: 460px;
  }
`

export const SignIn = styled.p`
  color: var(--grey);
  font-size: var(--fsMedium8);
`

export const SignInLink = styled.span`
  color: var(--pink);
  font-weight: bold;
`
