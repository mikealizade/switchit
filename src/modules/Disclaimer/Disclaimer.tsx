import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const Disclaimer = (): JSX.Element => {
  return (
    <SignedOutLayout>
      <S.MainSection>Disclaimer content here</S.MainSection>
    </SignedOutLayout>
  )
}

export default Disclaimer
