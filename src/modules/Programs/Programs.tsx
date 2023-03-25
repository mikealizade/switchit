import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { Hero } from '@components/Hero/Hero'
import { ProgramsForm } from '@modules/Dashboard/components/Programs/ProgramsForm'
import * as S from '@styles/common.style'
import { Intro, BulletList, ListHeader, ProgramContent, Section } from './Programs.style'

const Programs = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | Programs</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <Hero type='programs' />
          <S.ColumnContainer>
            <S.Column flex={2}>
              <Card stretch>
                <S.Title>About Our Programs</S.Title>
                <ProgramContent>
                  <Intro>
                    Our programs deliver financial literacy and tangible climate education while moving £ billions out of fossil fuel
                    support.
                  </Intro>
                  <Section>
                    <ListHeader>What to expect from a Switch It Green program:</ListHeader>
                    <BulletList>
                      <li>A tailored program of events, training, and resources.</li>
                      <li>A bespoke portal with custom resources on our Green Banking Platform.</li>
                      <li>Impact tracking and data reporting for your organisation</li>
                    </BulletList>
                  </Section>
                  <Section>
                    <ListHeader>Why run a Switch It Green program?</ListHeader>
                    <BulletList>
                      <li>Demonstrate your commitment to sustainability.</li>
                      <li>Illustrate your dedication to student and/or employee development and welfare.</li>
                      <li>Champion the campaign against fossil fuel financing.</li>
                    </BulletList>
                  </Section>
                </ProgramContent>
              </Card>
            </S.Column>
            <S.Column flex={1}>
              <Card stretch>
                <ProgramsForm />
              </Card>
            </S.Column>
          </S.ColumnContainer>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}

export default Programs
