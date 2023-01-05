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
import { fetcher, filterActionType, filterSteps } from '@utils/functions'
import {
  setAddNewJourney,
  setCurrentJourney,
  setCurrentJourneyId,
  Journey,
} from '@state/switchJourney/switchJourneySlice'
import { Tabs } from '@components/Tabs/Tabs'
import { Card } from '@components/Card/Card'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import { CircularProgressBar } from '@components/CircularProgressBar/CircularProgressBar'
import { journeyTypes, steps, noBankAccountSteps } from '@utils/constants'
import { actionsConfig, goodBanksConfig } from '@utils/data'
import { startJourneyConfig, startJourneyNoBankConfig } from './data'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { Action } from '@utils/types'
import { JourneyName } from './components/JourneyName/JourneyName'
import { Content, Row } from '@styles/common.style'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import * as S from '@modules/Switching/Switching.style'

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
    const { id, goodBank, completedSteps = [] } = journey
    const progress = completedSteps.filter(filterSteps).length
    const greenBank = goodBanksConfig[goodBank as keyof typeof goodBanksConfig]

    return (
      <S.JourneyCard key={id} isJourneyComplete={isJourneyComplete}>
        {!isJourneyComplete && (
          <S.Detail>
            <S.DetailHeader>Green Account</S.DetailHeader>
            <S.DetailText>
              {greenBank?.fullName || '[not yet selected]'}
              {/* {badBank || '[not yet selected]'} to {goodBank || '[not yet selected]'} */}
            </S.DetailText>
            <S.DetailHeader>Latest Green Project Funded</S.DetailHeader>
            <S.DetailText>{greenBank?.latestGreenProject}</S.DetailText>
            <S.DetailHeader>Impact</S.DetailHeader>
            <S.DetailText>£1.51b switched</S.DetailText>
          </S.Detail>
        )}
        <S.JourneySection>
          <S.JourneySectionHeader>Progress</S.JourneySectionHeader>
          <S.JourneySectionContent>
            <CircularProgressBar progress={progress} />
            <S.NextStep>
              {journeySteps.map(({ text, route }: JourneySteps, i: number) => {
                const isComplete = completedSteps.includes(i + 1)
                const isFirstIncompleteStep = i + 1 === Number(completedSteps?.at(-1)) + 1

                if (isFirstIncompleteStep) {
                  return (
                    <>
                      {!isComplete && isFirstIncompleteStep && route && (
                        <Button
                          type='button'
                          size='small'
                          mode='primary'
                          onClick={resumeJourney(route)}
                        >
                          Next Step
                        </Button>
                      )}
                      <span>{text}</span>
                    </>
                  )
                }
                return null
              })}
            </S.NextStep>
          </S.JourneySectionContent>
        </S.JourneySection>
        {!isJourneyComplete && (
          <S.JourneySection>
            <S.JourneySectionHeader>Maximise</S.JourneySectionHeader>
            <S.JourneySectionContent>
              <ActionSelector
                actions={actions}
                selectAction={selectAction}
                isSwitchLanding
                isJourneyComplete={isJourneyComplete}
              />
            </S.JourneySectionContent>
          </S.JourneySection>
        )}
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
    .map(({ id, name }: { id: string; name: string }) => ({
      tab: name,
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

  const addNewJourney = (): void => {
    const id = nanoid()
    dispatch(setAddNewJourney({ id, isVerified: false, name: value }))
    push('/switching/select-bank')
  }

  const addJourneyName = (): void => {
    setAddName(true)
  }

  const resumeJourney = (route: string) => (): void => {
    push(route)
  }

  const onSelectTab = (id: string) => (): void => {
    dispatch(setCurrentJourneyId(id))
  }

  const selectAction = (index: number) => (): void => {
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
          <Row key='switchJourneys'>
            <S.NoJourneysTextContainer>
              <S.NoJourneysText>
                {`It's why you're here!`} Start your first switching journey by clicking on the pink
                plus sign on the right
              </S.NoJourneysText>
              <S.NoJourneysText>
                Have multiple bank accounts? No problem! {`We'll`} switch one at a time
              </S.NoJourneysText>
            </S.NoJourneysTextContainer>
          </Row>,
        ]
      : activeJourneys),
    <Row key='completedJourneys'>
      {completedJourneys.length ? (
        <Row>{completedJourneys}</Row>
      ) : (
        <S.JourneyCard>You {`haven't`} completed any journeys</S.JourneyCard>
      )}
    </Row>,
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
        <Card stretch={isAddName}>
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
