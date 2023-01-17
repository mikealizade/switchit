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
import * as S from '@modules/Switching/Switching.style'
import { Content, ShareButton, TabsContainer } from '@styles/common.style'
import { actionText } from '@utils/constants'
import { ShareCodeInfo } from './TellYourCommunity.style'
import { data } from './data'

const tabs: string[] = ['Letters', 'Sharing Code']

export const TellYourCommunity: NextPage = () => {
  const nextStep = useNextStep()
  const shareCode = useShareCode()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const route = useRoute(steps.tellCommunity)

  const panels: [React.ReactNode, React.ReactNode] = [
    // <Actions key='letter' actions={letterActions} type='letter' />,
    <Accordion key='accordion' data={data} hasCopyIcon />,
    // <Actions key='talkingPoints' actions={letterActions} type='talkingPoints' />,
    <>
      <ShareButton key='share' type='button' onClick={() => shareCode()} small>
        Share
        <Image src={`/icons/icon_airplane.svg`} alt='' width={34} height={29} />
      </ShareButton>
      <ShareCodeInfo>
        Use this sharing code for fast sharing action. A unique sharing code just for you means
        points every time you share, opportunites to connect with fellow switchers, etc
      </ShareCodeInfo>
    </>,
  ]

  const onNext = (): void => {
    nextStep(steps.tellCommunity, route)
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded>
            <ActionHeader
              header='Action: Tell Your Community'
              subHeader='Aunts and uncles not on Instagram?'
              text={actionText.tellCommunity}
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
