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
  Journey,
} from '@state/switchJourney/switchJourneySlice'
import { Tabs } from '@components/Tabs/Tabs'
import { Card } from '@components/Card/Card'
import { Content } from '@styles/common.style'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import * as S from '@modules/Switching/Switching.style'
import { startJourneyConfig } from '@utils/constants'

const totalSteps = 7

const getJourneys = (
  switchJourneys: Journey[],
  filter: ({ completedSteps }: { completedSteps: number[] }) => boolean,
  resumeJourney: (id: string, journey: Journey) => () => void,
) => {
  return switchJourneys.filter(filter).map((journey: Journey) => {
    const { id, name, completedSteps } = journey

    return (
      <S.JourneyCard key={id} column>
        <S.Detail>
          <S.DetailHeader>Journey name</S.DetailHeader>
          <S.DetailText>{name}</S.DetailText>
          <S.DetailHeader>Latest Green Project Funded</S.DetailHeader>
          <S.DetailText>Solar Farm</S.DetailText>
          <S.DetailHeader>The Switch</S.DetailHeader>
          <S.DetailText>Barclays to Starling</S.DetailText>
          <S.DetailHeader>Impact</S.DetailHeader>
          <S.DetailText>£1.51b switched</S.DetailText>
        </S.Detail>
        <S.Steps>
          {startJourneyConfig.map(({ step, text }: { step: string; text: string }, i: number) => {
            const isComplete = completedSteps.includes(i + 1)
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
                {!isComplete && (
                  <Button
                    type='button'
                    size='small'
                    mode='primary'
                    onClick={resumeJourney(id, journey)}
                  >
                    Next
                  </Button>
                )}
              </S.Step>
            )
          })}
        </S.Steps>
      </S.JourneyCard>
    )
  })
}

const Switching = (): JSX.Element => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const { switchJourneys = [] } = useSelector((state: RootState) => state.user)
  const [value, setValue] = useState('')
  const tabs = ['Switching Journeys', 'Completed Journeys']

  const addNewJourney = () => {
    const id = nanoid()
    dispatch(setAddNewJourney({ id, isActive: true, name: value }))
    push('/switching/selectBank')
  }

  const resumeJourney = (id: string, journey: Journey) => () => {
    dispatch(
      setCurrentJourney({
        currentJourneyId: id,
        journeys: [journey],
      }),
    )
    push('/switching/selectaction') //TODO insert correct route for next step
  }

  const activeJourneys = getJourneys(
    switchJourneys,
    ({ completedSteps }: { completedSteps: number[] }) => completedSteps.length < totalSteps,
    resumeJourney,
  )

  const completedJourneys = getJourneys(
    switchJourneys,
    ({ completedSteps }: { completedSteps: number[] }) => completedSteps.length === totalSteps,
    resumeJourney,
  )

  const panels: [React.ReactNode, React.ReactNode] = [
    <S.Row key='row1'>
      {!switchJourneys.length ? (
        <S.NoJourneysTextContainer>
          <S.NoJourneysText>
            {`It's why you're here!`} Start your first switching journey by clicking on the pink
            plus sign on the right
          </S.NoJourneysText>
          <S.NoJourneysText>
            Have multiple bank accounts? No problem! {`We'll`} switch one at a time
          </S.NoJourneysText>
        </S.NoJourneysTextContainer>
      ) : (
        <>
          {/* <JourneyCard>
            <StartJourneyContainer>
              <NewJourneyInput
                type='text'
                onChange={(e: any) => setValue(e.target.value)}
                value={value}
                placeholder='Enter your new journey name'
              />
              <StartJourney isActive={!!value} onClick={addNewJourney}>
                <Image src={'/icons/icon_plus.svg'} alt='' width={45} height={45} />
                Start a Switching Journey
              </StartJourney>
              <p>
                Have multiple bank accounts? No problem!
                <br /> {`We'll switch one at a time.`}
              </p>
            </StartJourneyContainer>
          </JourneyCard> */}
          {activeJourneys}
        </>
      )}
    </S.Row>,
    <S.Row key='row2'>
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
          </S.SwitchingColumnContainer>
        </Card>
      </Content>
    </>
  )
}

export default Switching
