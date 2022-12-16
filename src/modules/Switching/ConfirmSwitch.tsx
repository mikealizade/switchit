import { useState } from 'react'
import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useSaveStep } from '@hooks/useSaveStep'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText } from '@utils/constants'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'
import { Form, Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

export const ConfirmSwitch: NextPage = () => {
  const { push, back } = useRouter()
  const dispatch = useDispatch()
  const { currentJourney } = useGetCurrentJourney()
  const [value, setValue] = useState('')
  const saveStep = useSaveStep()
  const date = new Date() // TODO datepicker or select?

  const onSubmit = (): void => {
    dispatch(
      setJourneyData({
        completedSteps: Array.from(new Set([...currentJourney!.completedSteps, 4])),
      }),
    )
    saveStep(4)
    push('/switching/selectaction')
  }

  const onCancel = (): void => {
    setValue('')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded>
            <ActionHeader
              header='Sign The Agreement'
              subHeader={`Let's get you verified`}
              text={actionText.confirmSwitch}
            />

            <p>
              Labore nisi exercitation aute tempor in anim eu. Duis laboris ipsum mollit sit in et
              cupidatat. Sunt cupidatat proident Lorem tempor ad elit eu elit laborum exercitation
              aliquip occaecat excepteur. Ullamco consequat eiusmod veniam ad consequat esse esse.
              Nostrud consectetur mollit laborum eiusmod culpa ullamco non labore id adipisicing
              voluptate adipisicing. Occaecat officia nisi amet ex aliqua aliquip ad duis qui quis
              aute. Minim adipisicing id do cillum adipisicing in.
            </p>
            <S.Signature>
              <Form row>
                <fieldset>
                  <label htmlFor='bankName'>
                    <S.SignatureInput
                      name='signature'
                      onChange={(e: any) => setValue(e.target.value)}
                      value={value}
                    />
                    Signature
                  </label>
                  <div>
                    {date.getDay()} / {date.getMonth()} / {date.getFullYear()}
                  </div>
                </fieldset>
                <S.Buttons>
                  <Button type='button' mode='secondary' onClick={() => back()}>
                    Back
                  </Button>
                  <Button type='button' mode='secondary' onClick={onCancel}>
                    Cancel
                  </Button>
                  <Button type='button' disabled={!value} onClick={onSubmit}>
                    {/* TODO handle isSubmitting */}
                    Submit
                  </Button>
                </S.Buttons>
              </Form>
            </S.Signature>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}
