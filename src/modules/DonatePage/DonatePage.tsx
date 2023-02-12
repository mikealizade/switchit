import Image from 'next/image'
import { ErrorBoundary } from 'react-error-boundary'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { Hero } from '@components/Hero/Hero'
import { Donorbox } from '@modules/SignedOutLanding/SignedOutLanding.style'
import * as S from '@styles/common.style'
import { DonateContainer } from './DonatePage.style'

const DonatePage = (): JSX.Element => {
  return (
    <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
      <S.Content>
        <Hero type='donate' />
        <S.ColumnContainer>
          <S.Column flex={3}>
            <Card column padded rowGap={30} stretch>
              <DonateContainer>
                <S.Div rowGap={22}>
                  <S.Text>
                    Your donation will allow us to continue our work towards creating a more
                    liveable future for all.
                  </S.Text>

                  <S.Text>
                    We are a small team. While we operate as a not-for-profit, we are not yet set up
                    as a registered charity. This means that your donation is not eligible for tax
                    relief, and we are unable to claim UK Gift Aid.
                  </S.Text>
                  <S.Text>Thank you! </S.Text>
                </S.Div>
                <Donorbox>
                  <S.AnchorLink
                    href='https://donorbox.org/switch-it-green'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Image
                      src='/images/img_donorbox.png'
                      alt='Donorbox logo'
                      width={385}
                      height={130}
                      objectFit='contain'
                    />
                  </S.AnchorLink>
                </Donorbox>
              </DonateContainer>
            </Card>
          </S.Column>
        </S.ColumnContainer>
      </S.Content>
    </ErrorBoundary>
  )
}

export default DonatePage
