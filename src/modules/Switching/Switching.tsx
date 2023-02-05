import { useUser } from '@auth0/nextjs-auth0'
import { nanoid } from 'nanoid'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useSWR, { SWRResponse } from 'swr'
import { Card } from '@components/Card/Card'
import { SwitchingHero } from '@components/Hero/SwitchingHero'
import { Loader } from '@components/Loader/Loader'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import * as S from '@modules/Switching/Switching.style'
import {
  setAddNewJourney,
  setCurrentJourney,
  setCurrentJourneyId,
  Journey,
} from '@state/switchJourney/switchJourneySlice'
import { Content, Row } from '@styles/common.style'
import { journeyTypes, steps, noBankAccountSteps } from '@utils/constants'
import { actionsConfig, goodBanksConfig } from '@utils/data'
import { fetcher, filterActionType } from '@utils/functions'
import { Action } from '@utils/types'
import { CompletedJourneyCard } from './components/CompletedJourneyCard/CompletedJourneyCard'
import { JourneyCard } from './components/JourneyCard/JourneyCard'
import { JourneyName } from './components/JourneyName/JourneyName'
import { startJourneyConfig, startJourneyNoBankConfig } from './data'

export type JourneyStep = { step: string; text: string; route: string }
type JourneyFilter = { journeyType: string; completedSteps: number[] }

const getJourneys = (
  switchJourneys: Journey[],
  actions: Action[],
  journeySteps: JourneyStep[],
  filter: ({ journeyType, completedSteps }: JourneyFilter) => boolean,
  getConfirmSwitchStep: (step: number) => boolean,
  resumeJourney: (route: string) => () => void,
  selectAction: (index: number) => () => void,
  isJourneyComplete: boolean,
) => {
  return switchJourneys.filter(filter).map((journey: Journey) => {
    const { id, name, goodBank, completedSteps = [] } = journey
    const progress = completedSteps.filter(getConfirmSwitchStep).length
    const greenBank = goodBanksConfig[goodBank as keyof typeof goodBanksConfig]

    return (
      <>
        {isJourneyComplete ? (
          <CompletedJourneyCard
            key={id}
            name={name}
            greenBank={greenBank}
            switchingStepsCompleted={journeySteps.length}
          />
        ) : (
          <JourneyCard
            key={id}
            progress={progress}
            greenBank={greenBank}
            journeySteps={journeySteps}
            actions={actions}
            completedSteps={completedSteps}
            isJourneyComplete={isJourneyComplete}
            selectAction={selectAction}
            resumeJourney={resumeJourney}
          />
        )}
      </>
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
  const getConfirmSwitchStep = (step: number) => step <= currentSteps.confirmSwitch
  const journeyTabs = switchJourneys
    .filter(filterActive)
    .map(({ id, name }: { id: string; name: string }) => ({
      tab: name,
      currentJourneyId: id,
    }))
  // const [{ id: defaultJourneyId = '' } = {}] = switchJourneys.filter(filterActive)
  const actions = actionsConfig.filter(filterActionType(currentJourneyType))
  const goodBank = currentJourney?.goodBank
  const journeySteps =
    currentJourneyType === journeyTypes.noBankAccount
      ? startJourneyNoBankConfig(String(goodBank))
      : startJourneyConfig(String(goodBank))

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
    getConfirmSwitchStep,
    resumeJourney,
    selectAction,
    false,
  )

  console.log('activeJourneys', activeJourneys)

  const completedJourneys = getJourneys(
    switchJourneys,
    actions,
    journeySteps,
    ({ journeyType, completedSteps }: JourneyFilter) =>
      completedSteps.length === (journeyType === journeyTypes.noBankAccount ? 7 : 11),
    getConfirmSwitchStep,
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
    ...(completedJourneys.length ? [{ tab: 'Completed Journeys', currentJourneyId: '' }] : []),
  ]

  useEffect(() => {
    if (switchJourneys.length) {
      const [{ id: defaultJourneyId = '' } = {}] = switchJourneys.filter(filterActive)

      dispatch(
        setCurrentJourney({
          currentJourneyId: defaultJourneyId,
          journeys: switchJourneys,
        }),
      )
    }
  }, [switchJourneys, dispatch])

  const panels: React.ReactNode[] = [
    ...(isValidating
      ? [<Loader key='loader' />]
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
        <Row wrap>{completedJourneys}</Row>
      ) : (
        <S.JourneyCard>You {`haven't`} completed any journeys</S.JourneyCard>
      )}
    </Row>,
  ]

  return (
    <>
      <Head>
        <title>SwitchIt | Switching</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <SwitchingHero type='switching' hasLoaded={!!sub} />
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
