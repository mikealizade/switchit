import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch } from 'react-redux'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useSaveStep } from '@hooks/useSaveStep'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'
import { goodBanksConfig } from '@utils/data'
import * as S from '../../Switching.style'
import { Content, ButtonContainer } from '@styles/common.style'

const MakeTheSwitch: NextPage<{ bankName: string }> = ({ bankName }) => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const saveStep = useSaveStep()
  const { currentJourney } = useGetCurrentJourney()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const bank = goodBanksConfig[bankName as keyof typeof goodBanksConfig]

  const onMakeTheSwitch = () => {
    dispatch(
      setJourneyData({
        goodBank: bank.name,
        completedSteps: Array.from(new Set([...currentJourney!.completedSteps, steps.makeSwitch])),
      }),
    )
    saveStep(steps.makeSwitch, bank.name)
    window.open(bank.link, '_blank', 'noreferrer')
  }

  console.log('bankName', bankName)

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column stretch>
            <ActionHeader
              header='Choose Your Bank'
              subHeader={`You've selected ${bank?.fullName}`}
            />
            <S.TextContent>
              <S.Text>{`This will take you to ${bank?.fullName}'s`} website</S.Text>
              <S.Text>
                After switching make sure sure to come back and complete your switching journey
              </S.Text>
            </S.TextContent>
            <S.Buttons>
              <Button
                type='button'
                size='small'
                mode='secondary'
                onClick={() => push('/switching/green-banks')}
              >
                Back
              </Button>
              <Button type='button' size='small' mode='primary' onClick={onMakeTheSwitch}>
                Make The Switch
              </Button>
              <Button
                type='button'
                size='small'
                mode='primary'
                onClick={() => push('/switching/confirm-switch')}
              >
                I Made The Switch, Take Me To Verify
              </Button>
            </S.Buttons>
          </Card>
          <ProgressBar step={steps.chooseGreenBank} />
        </Content>
      </ErrorBoundary>
    </>
  )
}

export default MakeTheSwitch
