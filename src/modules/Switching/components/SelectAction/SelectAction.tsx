import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import {
  SwitchingColumnContainer,
  SwitchingColumn,
  Buttons,
} from '@modules/Switching/Switching.style'
import * as S from '@modules/Switching/Switching.style'
import { setActionCard } from '@state/generic/genericSlice'
import { Content } from '@styles/common.style'
import { steps, journeyTypes } from '@utils/constants'
import { actionsConfig } from '@utils/data'
import { Action } from '@utils/types'

export const SelectAction = (): JSX.Element => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { currentJourneyType } = useGetCurrentJourney()
  const [selectedRoute, setRoute] = useState(actionsConfig[0].route)
  const [currentAction, setAction] = useState<Action | null>(null)
  const filterActionType = ({ type }: { type: string }) =>
    currentJourneyType === journeyTypes.noBankAccount
      ? type !== 'breakup' && type !== 'reviews'
      : currentJourneyType === journeyTypes.notReadyToSwitch
      ? type !== 'hello'
      : true
  const actions = actionsConfig.filter(filterActionType)

  const selectAction = (index: number) => () => {
    setRoute(actions[index].route)
    setAction(actions[index])
    dispatch(setActionCard(index))
  }

  return (
    <>
      <Head>
        <title>Switch It Green | Maximise Your Switching Journey</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platformp' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <SwitchingColumnContainer>
          <SwitchingColumn>
            <Card column padded>
              <ActionHeader
                header={`Let's design your switching journey, and maximise your impact`}
                subHeader={`We have developed six additional lobbying steps to harness the power of your switch. Complete the full set to reach your full switching potential. We've done all the hard parts for you, so you can spend more time spreading the word. `}
              />

              <ActionSelector
                currentAction={currentAction}
                actions={actions}
                selectAction={selectAction}
                isDefault
              />

              <S.Section>
                <Buttons>
                  <Button
                    type='button'
                    mode='secondary'
                    onClick={() => {
                      push('/switching')
                    }}
                  >
                    Switching Journey Overview
                  </Button>
                  <Button
                    type='button'
                    disabled={!currentAction}
                    onClick={() => {
                      push(selectedRoute)
                    }}
                  >
                    Take This Step
                  </Button>
                </Buttons>
              </S.Section>
            </Card>
          </SwitchingColumn>
        </SwitchingColumnContainer>
        <ProgressBar step={steps.breakupLetter} />
      </Content>
    </>
  )
}
