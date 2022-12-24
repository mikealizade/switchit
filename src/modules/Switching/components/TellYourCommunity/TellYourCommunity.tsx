import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import Image from 'next/image'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Actions } from './Actions'
import { actionText } from '@utils/constants'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useNextStep } from '@hooks/useNextStep'
import { useRoute } from '@hooks/useRoute'
import { useShareCode } from '@hooks/useShareCode'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'
import { ShareButton } from '@styles/common.style'

const letterActions = [
  { text: 'Colleagues', copy: 'this is copy' },
  { text: 'Family', copy: 'this is copy2' },
  { text: 'Parents', copy: 'this is copy3' },
  { text: 'Friends', copy: 'this is copy4' },
]

export const TellYourCommunity: NextPage = () => {
  const nextStep = useNextStep()
  const shareCode = useShareCode()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const route = useRoute(steps.tellCommunity)

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

            <S.Community>
              <S.CommunityActions>
                <S.ActionsHeader>Letters</S.ActionsHeader>
                <Actions actions={letterActions} type='letter' />
              </S.CommunityActions>
              <S.CommunityActions>
                <S.ActionsHeader>Talking Points</S.ActionsHeader>
                <Actions actions={letterActions} type='talkingPoints' />
              </S.CommunityActions>
            </S.Community>

            <ShareButton type='button' onClick={() => shareCode()} small>
              Share
              <Image src={`/icons/icon_airplane.svg`} alt='' width={34} height={29} />
            </ShareButton>

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
