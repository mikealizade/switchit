import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import useSWR, { SWRResponse } from 'swr'
import { nanoid } from 'nanoid'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '@components/Button/Button'
import { Hero } from '@components/Hero/Hero'
import { fetcher, filterActionType } from '@utils/functions'
import {
  setAddNewJourney,
  setCurrentJourney,
  setCurrentJourneyId,
  Journey,
} from '@state/switchJourney/switchJourneySlice'
import { Tabs } from '@components/Tabs/Tabs'
import { Card } from '@components/Card/Card'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import {
  actionsConfig,
  startJourneyConfig,
  startJourneyNoBankConfig,
  journeyTypes,
  steps,
  noBankAccountSteps,
} from '@utils/constants'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { Action } from '@utils/types'
import { Content } from '@styles/common.style'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import * as S from '@modules/Switching/Switching.style'
import { JourneyName } from './components/JourneyName/JourneyName'

type JourneySteps = { step: string; text: string; route: string }
type JourneyFilter = { journeyType: string; completedSteps: number[] }

const getJourneys = (
  switchJourneys: Journey[],
  actions: Action[],
  journeySteps: { step: string; text: string; route: string }[],
  filter: ({ journeyType, completedSteps }: JourneyFilter) => boolean,
  resumeJourney: (route: string) => () => void,
  selectAction: (index: number) => () => void,
  isJourneyComplete: boolean,
) => {
  return switchJourneys.filter(filter).map((journey: Journey) => {
    const { id, name, badBank, goodBank, completedSteps = [] } = journey

    return (
      <S.JourneyCard key={id}>
        <S.Detail>
          <S.DetailHeader>Journey name</S.DetailHeader>
          <S.DetailName>{name}</S.DetailName>
          <S.DetailHeader>Latest Green Project Funded</S.DetailHeader>
          <S.DetailText>Solar Farm</S.DetailText>
          <S.DetailHeader>The Switch</S.DetailHeader>
          <S.DetailText>
            {badBank || '[not yet selected]'} to {goodBank || '[not yet selected]'}
          </S.DetailText>
          <S.DetailHeader>Impact</S.DetailHeader>
          <S.DetailText>£1.51b switched</S.DetailText>
        </S.Detail>
        <S.Steps>
          {journeySteps.map(
            ({ step, text, route }: JourneySteps, i: number): JSX.Element | null => {
              const isComplete = completedSteps.includes(i + 1)
              const firstIncompleteStep = i + 1 === Number(completedSteps?.at(-1)) + 1

              if (isComplete || firstIncompleteStep) {
                return (
                  <S.Step key={step} isIncomplete={!isComplete}>
                    <Image
                      src={`/icons/icon_radio_${isComplete ? '' : 'un'}checked.svg`}
                      alt=''
                      width={25}
                      height={25}
                    />
                    <S.StepDetail>
                      <strong>{step}</strong>
                      <span>{text}</span>
                    </S.StepDetail>
                    {!isComplete && route && (
                      <Button
                        type='button'
                        size='small'
                        mode='primary'
                        onClick={resumeJourney(route)}
                      >
                        Next
                      </Button>
                    )}
                  </S.Step>
                )
              }
              return null
            },
          )}
        </S.Steps>
        <ActionSelector
          actions={actions}
          selectAction={selectAction}
          isSwitchLanding
          isJourneyComplete={isJourneyComplete}
        />
      </S.JourneyCard>
    )
  })
}

const Switching = (): JSX.Element => {
  const { user: { sub = '' } = {} } = useUser()
  const dispatch = useDispatch()
  const { push } = useRouter()
  const [value, setValue] = useState('')
  const [isAddName, setAddName] = useState(false)
  const { currentJourney, currentJourneyType = '' } = useGetCurrentJourney()
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(
    sub ? `/api/db/findSwitchJourneys?id=${sub}` : null,
    fetcher,
    { revalidateOnFocus: false },
  ) as SWRResponse
  const currentSteps =
    currentJourneyType === journeyTypes.noBankAccount ? noBankAccountSteps : steps
  const totalSteps = Object.keys(currentSteps).length / 2
  const filterActive = ({ completedSteps }: { completedSteps: number[] }) =>
    completedSteps.length < totalSteps
  const journeyTabs = switchJourneys
    .filter(filterActive)
    .map(({ id }: { id: string }, i: number) => ({
      tab: `Switching Journey ${i + 1}`,
      currentJourneyId: id,
    }))
  const [{ id: defaultJourneyId = '' } = {}] = switchJourneys.filter(filterActive)
  const actions = actionsConfig.filter(filterActionType(currentJourneyType))
  const goodBank = currentJourney!?.goodBank
  const journeySteps =
    currentJourneyType === journeyTypes.noBankAccount
      ? startJourneyNoBankConfig(goodBank)
      : startJourneyConfig(goodBank)

  console.log('switchJourneys', switchJourneys)

  const addNewJourney = () => {
    const id = nanoid()
    dispatch(setAddNewJourney({ id, isVerified: false, name: value }))
    push('/switching/select-bank')
  }

  const addJourneyName = () => {
    setAddName(true)
  }

  const resumeJourney = (route: string) => () => {
    push(route)
  }

  const onSelectTab = (id: string) => () => {
    dispatch(setCurrentJourneyId(id))
  }

  const selectAction = (index: number) => () => {
    push(`/switching/${actions[index].route}`)
  }

  const activeJourneys = getJourneys(
    switchJourneys,
    actions,
    journeySteps,
    filterActive,
    resumeJourney,
    selectAction,
    false,
  )

  const completedJourneys = getJourneys(
    switchJourneys,
    actions,
    journeySteps,
    ({ journeyType, completedSteps }: JourneyFilter) =>
      completedSteps.length === (journeyType === journeyTypes.noBankAccount ? 7 : 11),
    resumeJourney,
    selectAction,
    true,
  )

  const tabs = [
    ...(activeJourneys.length
      ? journeyTabs
      : !activeJourneys.length && completedJourneys.length
      ? [
          {
            tab: 'Switching Journey 1',
            currentJourneyId: '',
          },
        ]
      : []),
    ...(completedJourneys.length ? [{ tab: `Completed Journeys`, currentJourneyId: '' }] : []), //TODO how are completed journeys shown in ui / set currentJourneyId?
  ]

  useEffect(() => {
    if (switchJourneys.length) {
      dispatch(
        setCurrentJourney({
          currentJourneyId: defaultJourneyId,
          journeys: switchJourneys,
        }),
      )
    }
  }, [switchJourneys, defaultJourneyId, dispatch])

  const panels: React.ReactNode[] = [
    ...(isValidating
      ? [<S.JourneyCard key='loading'>Loading...</S.JourneyCard>]
      : !activeJourneys.length
      ? [
          <S.Row key='switchJourneys'>
            <S.NoJourneysTextContainer>
              <S.NoJourneysText>
                {`It's why you're here!`} Start your first switching journey by clicking on the pink
                plus sign on the right
              </S.NoJourneysText>
              <S.NoJourneysText>
                Have multiple bank accounts? No problem! {`We'll`} switch one at a time
              </S.NoJourneysText>
            </S.NoJourneysTextContainer>
          </S.Row>,
        ]
      : activeJourneys),
    <S.Row key='completedJourneys'>
      {completedJourneys.length ? (
        <div style={{ overflow: 'auto' }}>{completedJourneys}</div>
      ) : (
        <S.JourneyCard>You {`haven't`} completed any journeys</S.JourneyCard>
      )}
    </S.Row>,
  ]

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <Hero type='switching' />
        <Card>
          <S.SwitchingColumnContainer>
            {isAddName ? (
              <S.NoJourneysTextContainer>
                <JourneyName
                  value={value}
                  setValue={setValue}
                  setAddName={setAddName}
                  addNewJourney={addNewJourney}
                />
              </S.NoJourneysTextContainer>
            ) : (
              <>
                <StyledTabs wide>
                  <Tabs tabs={tabs} panels={panels} onSelectTab={onSelectTab}></Tabs>
                </StyledTabs>
                <S.StartJourney onClick={addJourneyName}>
                  <Image src={'/icons/icon_plus.svg'} alt='' width={45} height={45} />
                </S.StartJourney>
              </>
            )}
          </S.SwitchingColumnContainer>
        </Card>
      </Content>
    </>
  )
}

export default Switching
