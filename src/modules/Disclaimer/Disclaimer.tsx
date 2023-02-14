import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Text } from '@styles/common.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const Disclaimer = (): JSX.Element => {
  return (
    <SignedOutLayout>
      <S.PageSection>
        <S.PageHeader>Disclaimer</S.PageHeader>
        <Text>
          Any Content provided on this Site or by any third-party (including our green partners) in
          connection with this Site is given for your general information purposes only and to
          inform you about us and our services, news, features, and other websites that may be of
          interest, but has not been tailored to your specific requirements or circumstances. It
          does not constitute technical, financial or legal advice or any other type of advice and
          should not be relied on for any purposes. You should always use your own independent
          judgment when using our Site and its Content.
        </Text>
        <Text>
          We aim to ensure that the material on the Site (excluding, if applicable, any User
          Content) is accurate. We also try to correct any errors or omissions as soon as we can
          after being notified of them. However, we are not able to guarantee that the material on
          the Site is accurate and free from errors or omissions at all times.
        </Text>
      </S.PageSection>
    </SignedOutLayout>
  )
}

export default Disclaimer
