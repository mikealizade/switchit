import type { NextPage } from 'next'
import Image from 'next/image'
import { ErrorBoundary } from 'react-error-boundary'
import { Accordion } from '@components/Accordion/Accordion'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useNextStep } from '@hooks/useNextStep'
import { useRoute } from '@hooks/useRoute'
import { useShareCode } from '@hooks/useShareCode'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import * as S from '@modules/Switching/Switching.style'
import { Content, Div, ShareButton, TabsContainer } from '@styles/common.style'
import { actionHeaderSubText } from '@utils/constants'
import { ShareCodeInfo } from './TellYourCommunity.style'
import { data } from './data'

const tabs: string[] = ['Letters', 'Sharing Code']

export const TellYourCommunity: NextPage = () => {
  const nextStep = useNextStep()
  const shareCode = useShareCode()
  const getSteps = useStepsByJourneyType()
  const { addPoints } = useUpdatePoints('actions')
  const steps = getSteps()
  const route = useRoute(steps.tellCommunity)

  const panels: [React.ReactNode, React.ReactNode] = [
    <Accordion key='accordion' data={data} hasCopyIcon />,
    <Div rowGap={50} key='share'>
      <ShareCodeInfo>
        Effective climate action just entered the chat. Use this code for fast sharing action. A
        unique code just for you means you can watch your impact multiply as more friends make the
        switch.
      </ShareCodeInfo>
      <ShareButton type='button' onClick={() => shareCode(5, 'add')} size='normal' bold>
        Share
        <Image src={`/icons/icon_airplane.svg`} alt='' width={34} height={29} />
      </ShareButton>
    </Div>,
  ]

  const onNext = (): void => {
    nextStep(steps.tellCommunity, route)
    addPoints(100, true)
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded>
            <ActionHeader
              header='Tell Your Community'
              subHeader={actionHeaderSubText.tellCommunity}
            />

            <TabsContainer>
              <StyledTabs>
                <Tabs tabs={tabs} panels={panels}></Tabs>
              </StyledTabs>
            </TabsContainer>

            <S.Buttons align='right'>
              <Button type='button' size='small' onClick={onNext}>
                Next Impact Action
              </Button>
            </S.Buttons>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}
