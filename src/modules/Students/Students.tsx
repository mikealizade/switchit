import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Div, BulletList, AnchorLink } from '@styles/common.style'
import { RegisterInterestForm } from './RegisterInterestForm'
import { RegisterInterestContainer, RegisterInterestIntro, RegisterInterestHeader } from './RegisterInterestForm.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const Students = (): JSX.Element => {
  const [isSubmitted, setSubmitted] = useState(false)

  const onSendSuccess = () => {
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Our Student Programs | Switch It Green</title>
        <meta
          name='description'
          content='Study or work at a university? Engage students & staff in the campaign against fossil fuel financing. Register your interest in a Switch It Green Program here.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <SignedOutLayout>
        <S.PageSection rowGap={100}>
          <S.ContentContainer>
            <S.PageHeaderMono>Our Program Offerings</S.PageHeaderMono>
            <Div>
              <S.Text>
                <em>
                  Switch It Green is a campaign and platform which informs, empowers, and mobilises individuals to take impactful climate
                  action at scale by switching en masse to greener financial providers.
                </em>
              </S.Text>
              <S.Text>Want your university to be part of the push against fossil fuel financing?</S.Text>
              <S.Text>
                Our programs deliver financial literacy and tangible climate education to students while moving £ billions out of fossil
                fuel support.
              </S.Text>
              <S.Text>
                Get access to bespoke resources, high-profile guest speaker events, exclusive workshops, tailored data reporting & impact
                tracking, and more. Select your institution below.
              </S.Text>
              <S.Text>
                <strong>
                  Work or study at a school, sixth form, or college? Get in touch to find out more about our work with 16 to 18 year olds.
                </strong>
              </S.Text>
            </Div>
          </S.ContentContainer>
        </S.PageSection>
        <S.PageSection position='right 170px bottom'>
          <S.ContentContainer>
            <S.PageHeaderMono>Why run a Switch It Green Program at your university?</S.PageHeaderMono>
            <Div>
              <S.BoldText>
                Students are asking for financial literacy training and tangible climate education amid the ongoing cost of living and
                climate crises.
              </S.BoldText>
              <BulletList fontsize={18}>
                <li>
                  <AnchorLink href='https://www.forceofnature.xyz/' target='_blank' rel='noreferrer'>
                    74% of young people
                  </AnchorLink>{' '}
                  {`don't`} know how to contribute to positive climate action.
                </li>
                <li>
                  <AnchorLink
                    href='https://www.savethestudent.org/money/surveys/student-money-survey-2022-results.html'
                    target='_blank'
                    rel='noreferrer'
                  >
                    82% of students
                  </AnchorLink>{' '}
                  worry about making ends meet, with 15% never having budgeted.
                </li>
                <li>
                  <AnchorLink
                    href='https://www.savethestudent.org/money/surveys/student-money-survey-2022-results.html'
                    target='_blank'
                    rel='noreferrer'
                  >
                    74% of students
                  </AnchorLink>{' '}
                  are asking for better financial education.
                </li>
              </BulletList>
            </Div>
            <Div>
              <S.BoldText>Together, we can help end fossil fuel financing and move £ billions out of fossil fuel support.</S.BoldText>
              <S.Text>What to expect from a Switch It Green program:</S.Text>
              <BulletList fontsize={18}>
                <li>A tailored program of events, training, and resources.</li>
                <li>A bespoke university portal on our Switching Platform.</li>
                <li>Impact tracking and data reporting for your university.</li>
              </BulletList>
            </Div>
            <Div>
              <S.BoldText>Improve your {`institution's`} profile, performance, and student & staff recruitment.</S.BoldText>
              <BulletList fontsize={18}>
                <li>
                  Demonstrate your {`institution's`} commitment to sustainability.
                  <em>
                    Our programs are aligned with green league table criteria and can support your sustainability targets and impact
                    reporting.
                  </em>
                </li>
                <li>
                  Illustrate your dedication to student development and welfare by providing access to high-profile events and resources.
                </li>
                <li>Champion the campaign against fossil fuel financing.</li>
              </BulletList>
            </Div>
            <Div>
              <S.BoldText>
                Register your interest in bringing a Switch It Green Student Program to your university by completing the form below.
              </S.BoldText>
              <S.BlockButton margin='30px 0 0'>
                <Link href='/api/auth/signup'>Check out our Green Banking Platform</Link>
              </S.BlockButton>
            </Div>
          </S.ContentContainer>
        </S.PageSection>
        <S.PageSection>
          <S.ContentContainer>
            <RegisterInterestContainer>
              {isSubmitted ? (
                <>
                  <RegisterInterestHeader>Thanks for your interest</RegisterInterestHeader>
                  <p>{`We'll`} be in touch soon</p>
                </>
              ) : (
                <>
                  <RegisterInterestIntro>
                    <RegisterInterestHeader>{`Let's`} Talk Programs!</RegisterInterestHeader>
                    <p>Fill out the form and {`we'll`} be in touch.</p>
                  </RegisterInterestIntro>
                  <RegisterInterestForm onSendSuccess={onSendSuccess} />
                </>
              )}
            </RegisterInterestContainer>
          </S.ContentContainer>
        </S.PageSection>
      </SignedOutLayout>
    </>
  )
}

export default Students
