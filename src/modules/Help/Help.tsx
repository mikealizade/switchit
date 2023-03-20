import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'
import { Accordion } from '@components/Accordion/Accordion'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { Hero } from '@components/Hero/Hero'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs, HelpContainer } from '@components/Tabs/Tabs.style'
import * as S from '@styles/common.style'
import { HelpForm } from './HelpForm'
import { research, general, programs, switching, legal } from './data'

const panels: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode] = [
  <Accordion key='accordion' data={general} />,
  <Accordion key='accordion' data={switching} />,
  <Accordion key='accordion' data={research} />,
  <Accordion key='accordion' data={programs} />,
  <Accordion key='accordion' data={legal} />,
]

const tabs: string[] = ['General', 'Switching', 'Our Research', 'Programs', 'Legal']

const Faqs = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | Help</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <Hero type='help' />
          <S.HelpColumnContainer>
            <S.Column flex={3}>
              <Card column padded>
                <ActionHeader header='FAQs' />
                <HelpContainer>
                  <S.TabsContainer>
                    <StyledTabs>
                      <Tabs tabs={tabs} panels={panels}></Tabs>
                    </StyledTabs>
                  </S.TabsContainer>
                </HelpContainer>
              </Card>
            </S.Column>
            <S.Column flex={1}>
              <Card stretch rowGap={30}>
                <HelpForm />
              </Card>
            </S.Column>
          </S.HelpColumnContainer>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}

export default Faqs
