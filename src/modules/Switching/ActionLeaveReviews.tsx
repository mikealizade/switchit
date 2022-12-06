import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText } from '@utils/constants'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

export const ActionLeaveReviews: NextPage = () => {
  const { push } = useRouter()

  const onNext = () => {
    push('/switching/action-tell-us')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column>
            <ActionHeader
              header='Action: Leave Reviews'
              subHeader='Get the word out'
              text={actionText.leaveReviews}
            />

            <h3>Letters</h3>
            <S.Buttons>
              <Button type='button' size='small' onClick={onNext}>
                Next
              </Button>
            </S.Buttons>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}
