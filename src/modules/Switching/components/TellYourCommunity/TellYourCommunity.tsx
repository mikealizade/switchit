import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import Image from 'next/image'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Actions } from './Actions'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { Tabs } from '@components/Tabs/Tabs'
import { actionText } from '@utils/constants'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useNextStep } from '@hooks/useNextStep'
import { useRoute } from '@hooks/useRoute'
import { useShareCode } from '@hooks/useShareCode'
import { Content, ShareButton, TabsContainer } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'
import { ShareCodeInfo } from './TellYourCommunity.style'

const letterActions = [
  { text: 'Colleagues', copy: 'this is copy' },
  { text: 'Family', copy: 'this is copy2' },
  { text: 'Parents', copy: 'this is copy3' },
  { text: 'Friends', copy: 'this is copy4' },
  { text: 'School / Uni  Mates', copy: 'this is copy5' },
]

const tabs: string[] = ['Letters', 'Talking Points', 'Sharing Code']

export const TellYourCommunity: NextPage = () => {
  const nextStep = useNextStep()
  const shareCode = useShareCode()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const route = useRoute(steps.tellCommunity)

  const panels: [React.ReactNode, React.ReactNode, React.ReactNode] = [
    <Actions key='letter' actions={letterActions} type='letter' />,
    <Actions key='talkingPoints' actions={letterActions} type='talkingPoints' />,
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

            <S.Buttons>
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
