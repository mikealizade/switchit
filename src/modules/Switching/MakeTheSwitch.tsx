import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch } from 'react-redux'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useSaveStep } from '@hooks/useSaveStep'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'
import { steps } from '@utils/constants'
import * as S from './Switching.style'
import { Content, ButtonContainer } from '@styles/common.style'

const linkConfig = {
  starling: {
    link: 'https://www.starlingbank.com',
    name: 'Starling Bank',
  },
  monzo: {
    link: 'https://monzo.com',
    name: 'Monzo',
  },
  triodos: {
    link: 'https://www.triodos.co.uk',
    name: 'Triodos Bank',
  },
  nationwide: {
    link: 'https://www.nationwide.co.uk',
    name: 'Nationwide Building Society',
  },
}

const MakeTheSwitch: NextPage<{ bankName: string }> = ({ bankName }) => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { currentJourney } = useGetCurrentJourney()
  const saveStep = useSaveStep()
  const bank = linkConfig[bankName as keyof typeof linkConfig]

  const onMakeTheSwitch = () => {
    dispatch(
      setJourneyData({
        goodBank: bank.name,
        completedSteps: Array.from(new Set([...currentJourney!.completedSteps, steps.makeSwitch])),
      }),
    )
    saveStep(steps.makeSwitch) // await?
    window.open(bank.link, '_blank')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column>
            <ActionHeader header='Choose Your Bank' subHeader={`You've selected ${bank.name}`} />
            <S.TextContent>
              <S.Text>{`This will take you to ${bank.name}'s`} website</S.Text>
              <S.Text>
                After switching make sure sure to come back and complete your switching journey
              </S.Text>
            </S.TextContent>
            <ButtonContainer alignLeft>
              <Button
                type='button'
                size='small'
                mode='secondary'
                onClick={() => push('/switching/green-banks')}
              >
                Back To Green Banks
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
            </ButtonContainer>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}

export default MakeTheSwitch
