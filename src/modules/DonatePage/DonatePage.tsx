import Head from 'next/head'
import Image from 'next/image'
import { ErrorBoundary } from 'react-error-boundary'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { Hero } from '@components/Hero/Hero'
import * as S from '@styles/common.style'

const DonatePage = (): JSX.Element => {
  return (
    <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
      <S.Content>
        <Hero type='donate' />
        <S.ColumnContainer>
          <S.Column flex={3}>
            <Card column padded rowGap={30}>
              {/* <ActionHeader header='FAQs' /> */}
              <S.Title>An Opportunity To Support</S.Title>
              <S.Text>
                The vast majority of our work is funded by small grants and donations. {`We've`} got
                big plans to expand our work beyond the UK and into other financial providers. Help
                us end fossil fuel financing and encourage more people to Switch It Green.
              </S.Text>
              <S.Text>
                Your donation will allow us to continue our work towards creating a more liveable
                future for all.
              </S.Text>
              <S.Text>
                We are a small team. While we operate as a not-for-profit, we are not yet set up as
                a registered charity. This means that your donation is not eligible for tax relief,
                and we are unable to claim UK Gift Aid.
              </S.Text>
              <S.Text>Thank you! </S.Text>
              <S.PaypalContainer>
                <S.AnchorLink href='https://www.paypal.com/' target='_blank' rel='noreferrer'>
                  <Image
                    src='/images/img_paypal.png'
                    alt='Paypal logo'
                    width={269}
                    height={241}
                    objectFit='contain'
                  />
                </S.AnchorLink>
              </S.PaypalContainer>
            </Card>
          </S.Column>
          {/* <S.Column flex={1}>
          <Card stretch rowGap={30}>
            <HelpForm />
          </Card>
        </S.Column> */}
        </S.ColumnContainer>
      </S.Content>
    </ErrorBoundary>
  )
}

export default DonatePage
