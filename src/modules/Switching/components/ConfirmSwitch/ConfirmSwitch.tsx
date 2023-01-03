import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import { useNextStep } from '@hooks/useNextStep'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText } from '@utils/constants'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { EventType } from '@utils/types'
import { setSignature } from '@state/generic/genericSlice'
import { Buttons } from '@modules/Switching/Switching.style'
import { Form, Content } from '@styles/common.style'
import * as S from './ConfirmSwitch.style'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const ConfirmSwitch: NextPage = () => {
  const { back } = useRouter()
  const dispatch = useDispatch()
  const signature = useSelector((state: RootState) => state.generic.signature)
  const [value, setValue] = useState(signature)
  const nextStep = useNextStep()
  const date = new Date() // TODO datepicker or select?
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()

  const onSubmit = (): void => {
    nextStep(steps.confirmSwitch, '/switching/select-action')
  }

  const onSign = ({ target: { value } }: EventType): void => {
    setValue(value)
    dispatch(setSignature(value))
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

            <S.Agreement>
              Labore nisi exercitation aute tempor in anim eu. Duis laboris ipsum mollit sit in et
              cupidatat. Sunt cupidatat proident Lorem tempor ad elit eu elit laborum exercitation
              aliquip occaecat excepteur. Ullamco consequat eiusmod veniam ad consequat esse esse.
              Nostrud consectetur mollit laborum eiusmod culpa ullamco non labore id adipisicing
              voluptate adipisicing. Occaecat officia nisi amet ex aliqua aliquip ad duis qui quis
              aute. Minim adipisicing id do cillum adipisicing in.
            </S.Agreement>
            <S.Signature>
              <Form row>
                <fieldset>
                  <S.Label htmlFor='bankName'>
                    <S.SignatureInput name='signature' onChange={onSign} value={value} />
                    Signature
                  </S.Label>
                  <S.Date>
                    <Image src={`/icons/icon_date.svg`} alt='' width={20} height={20} />
                    <div>
                      {date.getDay() + 1} {monthNames[date.getMonth()]} {date.getFullYear()}
                    </div>
                  </S.Date>
                </fieldset>
                <Buttons>
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
                </Buttons>
              </Form>
            </S.Signature>
          </Card>
          <ProgressBar step={steps.confirmSwitch} />
        </Content>
      </ErrorBoundary>
    </>
  )
}
