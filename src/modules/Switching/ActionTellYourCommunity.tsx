import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText, steps } from '@utils/constants'
import { useNextStep } from '@hooks/useNextStep'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

export const ActionTellYourCommunity: NextPage = () => {
  const nextStep = useNextStep()

  const onNext = (): void => {
    nextStep(steps.tellCommunity, '/switching/action-leave-reviews')
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

            <h3>Letters</h3>
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
