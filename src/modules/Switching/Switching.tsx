import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import useSWR, { SWRResponse } from 'swr'
import { nanoid } from 'nanoid'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '@components/Button/Button'
import { Hero } from '@components/Hero/Hero'
import { fetcher } from '@utils/functions'
import {
  setAddNewJourney,
  setCurrentJourney,
  setCurrentJourneyId,
  Journey,
} from '@state/switchJourney/switchJourneySlice'
import { Tabs } from '@components/Tabs/Tabs'
import { Card } from '@components/Card/Card'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import { actionsConfig, startJourneyConfig, steps } from '@utils/constants'
import { Content } from '@styles/common.style'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import * as S from '@modules/Switching/Switching.style'

type JourneySteps = { step: string; text: string; route: string }

const totalSteps = Object.keys(steps).length / 2

const getJourneys = (
  switchJourneys: Journey[],
  filter: ({ completedSteps }: { completedSteps: number[] }) => boolean,
  resumeJourney: (route: string) => () => void,
  selectAction: (index: number) => () => void,
) => {
  return switchJourneys.filter(filter).map((journey: Journey) => {
    const { id, name, badBank, goodBank, completedSteps = [] } = journey

    return (
      <S.JourneyCard key={id}>
        <S.Detail>
          <S.DetailHeader>Journey name</S.DetailHeader>
          <S.DetailText>{name}</S.DetailText>
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
          {startJourneyConfig.map(
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
        <ActionSelector selectAction={selectAction} isSwitchLanding />
      </S.JourneyCard>
    )
  })
}

const Switching = (): JSX.Element => {
  const { user: { sub = '' } = {} } = useUser()
  const dispatch = useDispatch()
  const { push } = useRouter()
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(
    sub ? `/api/db/findSwitchJourneys?id=${sub}` : null,
    fetcher,
    { revalidateOnFocus: false },
  ) as SWRResponse
  const filterActive = ({ completedSteps }: { completedSteps: number[] }) =>
    completedSteps.length < totalSteps
  const journeyTabs = switchJourneys
    .filter(filterActive)
    .map(({ id }: { id: string }, i: number) => ({
      tab: `Switching Journey ${i + 1}`,
      currentJourneyId: id,
    }))
  const [value, setValue] = useState('')
  const [{ id: defaultJourneyId = '' } = {}] = switchJourneys.filter(filterActive)

  const addNewJourney = () => {
    const id = nanoid()
    dispatch(setAddNewJourney({ id, isVerified: false, name: value }))
    push('/switching/select-bank')
  }

  const resumeJourney = (route: string) => () => {
    push(route)
  }

  const onSelectTab = (id: string) => () => {
    dispatch(setCurrentJourneyId(id))
  }

  const selectAction = (index: number) => () => {
    push(`/switching/${actionsConfig[index].route}`)
  }

  const activeJourneys = getJourneys(switchJourneys, filterActive, resumeJourney, selectAction)

  const completedJourneys = getJourneys(
    switchJourneys,
    ({ completedSteps }: { completedSteps: number[] }) => completedSteps.length === totalSteps,
    resumeJourney,
    selectAction,
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
        <>{completedJourneys}</>
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
            <StyledTabs wide>
              <Tabs tabs={tabs} panels={panels} onSelectTab={onSelectTab}></Tabs>
            </StyledTabs>
            <S.StartJourney onClick={addNewJourney}>
              <Image src={'/icons/icon_plus.svg'} alt='' width={45} height={45} />
            </S.StartJourney>
            {/* <S.PlainInput
              type='text'
              onChange={(e: any) => setValue(e.target.value)}
              value={value}
              placeholder='Enter your new journey name'
            /> */}
          </S.SwitchingColumnContainer>
        </Card>
      </Content>
    </>
  )
}

export default Switching
