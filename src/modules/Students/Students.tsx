import Head from 'next/head'
import Link from 'next/link'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Div, BulletList, AnchorLink } from '@styles/common.style'
import { RegisterInterestForm } from './RegisterInterestForm'
import {
  RegisterInterestContainer,
  RegisterInterestIntro,
  RegisterInterestHeader,
} from './RegisterInterestForm.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const Students = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | Our Student Programs</title>
        <meta
          name='description'
          content='Study or work at a university? Engage students & staff in the campaign against fossil fuel financing. Register your interest in a Switch It Green Program here.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <SignedOutLayout>
        <S.PageSection grey>
          <S.PageHeader>Our Program Offerings</S.PageHeader>
          <S.Text>
            <em>
              Switch It Green is a campaign and platform which informs, empowers, and mobilises
              individuals to take impactful climate action at scale by switching en masse to greener
              financial providers.
            </em>
          </S.Text>
          <S.Text>
            Want your university to be part of the push against fossil fuel financing?
          </S.Text>
          <S.Text>
            Our programs deliver financial literacy and tangible climate education to students while
            moving £ billions out of fossil fuel support.
          </S.Text>
          <S.Text>
            Get access to bespoke resources, high-profile guest speaker events, exclusive workshops,
            tailored data reporting & impact tracking, and more. Select your institution below.
          </S.Text>
          <S.Text>
            <strong>
              Work or study at a school, sixth form, or college? Find out about our work with 16- to
              18-year-olds
            </strong>
          </S.Text>
        </S.PageSection>
        <S.PageSection grey rowGap={70} position='right 170px bottom'>
          <S.PageHeader>Why run a Switch It Green Program at your university?</S.PageHeader>
          <Div>
            <S.BoldText>
              Students are asking for financial literacy training and tangible climate education
              amid the ongoing cost of living and climate crises.
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
            <S.BoldText>
              Together, we can help end fossil fuel financing and move £ billions out of fossil fuel
              support.
            </S.BoldText>
            <BulletList fontsize={18}>
              <li>What to expect from a Switch It Green program:</li>
              <li>A tailored program of events, training, and resources.</li>
              <li>A bespoke university portal on our Switching Platform.</li>
              <li>Impact tracking and data reporting for your university.</li>
            </BulletList>
          </Div>
          <Div>
            <S.BoldText>
              Improve your {`institution's`} profile, performance, and student & staff recruitment.
            </S.BoldText>
            <BulletList fontsize={18}>
              <li>
                Demonstrate your {`institution's`} commitment to sustainability.
                <em>
                  Our programs are aligned with green league table criteria and can support your
                  sustainability targets and impact reporting.
                </em>
              </li>
              <li>
                Illustrate your dedication to student development and welfare by providing access to
                high-profile events and resources.
              </li>
              <li>Champion the campaign against fossil fuel financing.</li>
            </BulletList>
          </Div>
          <Div>
            <S.BoldText>
              Register your interest in bringing a Switch It Green Student Program to your
              university by completing the form below.
            </S.BoldText>
            <S.BlockButton margin='30px 0 0'>
              <Link href='/signup'>Check out our Bank Switching Platform </Link>
            </S.BlockButton>
          </Div>
          <RegisterInterestContainer>
            <RegisterInterestIntro>
              <RegisterInterestHeader>{`Let's`} Talk Programs!</RegisterInterestHeader>
              <p>Fill out the form to the right and {`we'll`} be in touch</p>
            </RegisterInterestIntro>
            <RegisterInterestForm />
          </RegisterInterestContainer>
        </S.PageSection>
      </SignedOutLayout>
    </>
  )
}

export default Students
