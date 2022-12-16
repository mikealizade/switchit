import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { nanoid } from 'nanoid'
import { useUser } from '@auth0/nextjs-auth0'
import { RootState } from '@state/store'
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
import { actionsConfig } from '@utils/constants'
import { Content } from '@styles/common.style'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import * as S from '@modules/Switching/Switching.style'
import { startJourneyConfig } from '@utils/constants'

import { ActionSelector } from '@components/ActionSelector/ActionSelector'

type JourneySteps = { step: string; text: string; route: string }

const totalSteps = 5

const getJourneys = (
  switchJourneys: Journey[],
  filter: ({ completedSteps }: { completedSteps: number[] }) => boolean,
  resumeJourney: (id: string, route: string) => () => void,
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
              const firstIncompleteStep = i + 1 === completedSteps.at(-1) + 1

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
                        onClick={resumeJourney(id, route)}
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
        <ActionSelector selectAction={selectAction} />
      </S.JourneyCard>
    )
  })
}

const Switching = (): JSX.Element => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const [selectedRoute, setRoute] = useState(actionsConfig[0].route)
  const { switchJourneys = [] } = useSelector((state: RootState) => state.user)
  const [value, setValue] = useState('')
  const journeyTabs = Array.from(Array(switchJourneys.length).keys()).map(
    tab => `Switching Journey ${tab + 1}`,
  )
  const tabs = [...journeyTabs, 'Completed Journeys']

  const addNewJourney = () => {
    const id = nanoid()
    dispatch(setAddNewJourney({ id, isVerified: false, name: value }))
    push('/switching/selectBank')
  }

  const resumeJourney = (id: string, route: string) => () => {
    dispatch(setCurrentJourneyId(id))
    push(route) //TODO insert correct route for next step
  }

  const selectAction = (index: number) => () => {
    push(`/switching/${actionsConfig[index].route}`)
  }

  const activeJourneys = getJourneys(
    switchJourneys,
    ({ completedSteps }: { completedSteps: number[] }) => completedSteps.length < totalSteps,
    resumeJourney,
    selectAction,
  )

  const completedJourneys = getJourneys(
    switchJourneys,
    ({ completedSteps }: { completedSteps: number[] }) => completedSteps.length === totalSteps,
    resumeJourney,
    selectAction,
  )

  useEffect(() => {
    if (switchJourneys.length) {
      dispatch(
        setCurrentJourney({
          currentJourneyId: '',
          currentSelectedBank: '',
          journeys: switchJourneys,
        }),
      )
    }
  }, [switchJourneys, dispatch])

  const panels: React.ReactNode[] = [
    ...(!switchJourneys.length
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
      {!completedJourneys.length ? (
        <p>{`You haven't completed any journeys`}</p>
      ) : (
        <>{completedJourneys}</>
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
              <Tabs tabs={tabs} panels={panels}></Tabs>
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
