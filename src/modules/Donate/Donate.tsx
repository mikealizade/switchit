import Image from 'next/image'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { AnchorLink } from '@styles/common.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const Donate = (): JSX.Element => {
  return (
    <SignedOutLayout>
      <S.PageSection grey>
        <S.PageHeader>An Opportunity To Support</S.PageHeader>
        <S.Text>
          The vast majority of our work is funded by small grants and donations. We’ve got big plans
          to expand our work beyond the UK and into other financial providers. Help us end fossil
          fuel financing and encourage more people to Switch It Green.
        </S.Text>
        <S.Text>
          Your donation will allow us to continue our work towards creating a more liveable future
          for all.
        </S.Text>
        <S.Text>
          We are a small team. While we operate as a not-for-profit, we are not yet set up as a
          registered charity. This means that your donation is not eligible for tax relief, and we
          are unable to claim UK Gift Aid.
        </S.Text>
        <S.Text>Thank you! </S.Text>
        <S.Donorbox>
          <AnchorLink href='https://donorbox.org/switch-it-green' target='_blank' rel='noreferrer'>
            <Image
              src='/images/img_donorbox.png'
              alt='Donorbox logo'
              width={385}
              height={130}
              objectFit='contain'
            />
          </AnchorLink>
        </S.Donorbox>
      </S.PageSection>
    </SignedOutLayout>
  )
}

export default Donate
