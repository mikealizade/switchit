import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { PostToSocials as Socials } from '@modules/Programs/Programs'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useNextStep } from '@hooks/useNextStep'
import { actionText } from '@utils/constants'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

export const PostToSocials: NextPage = () => {
  const nextStep = useNextStep()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()

  const onNext = (): void => {
    nextStep(steps.postSocials, '/switching/tell-your-community')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column>
            <ActionHeader
              header='Action: Post To Socials'
              subHeader='Get the word out'
              text={actionText.postToSocials}
            />

            <Socials />
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
