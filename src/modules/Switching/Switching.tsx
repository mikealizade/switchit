import { useUser } from '@auth0/nextjs-auth0'
import { nanoid } from 'nanoid'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useSWR, { SWRResponse } from 'swr'
import { Card } from '@components/Card/Card'
import { SwitchingHero } from '@components/Hero/SwitchingHero'
import { Loader } from '@components/Loader/Loader'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useMediaQuery } from '@hooks/useMediaQuery'
import * as S from '@modules/Switching/Switching.style'
import { setAddNewJourney, setCurrentJourney, setCurrentJourneyId, Journey } from '@state/switchJourney/switchJourneySlice'
import { Content, Row } from '@styles/common.style'
import { journeyTypes, steps, noBankAccountSteps } from '@utils/constants'
import { actionsConfig, goodBanksConfig } from '@utils/data'
import { fetcher, filterActionType } from '@utils/functions'
import { CompletedJourneyCard } from './components/CompletedJourneyCard/CompletedJourneyCard'
import { JourneyCard } from './components/JourneyCard/JourneyCard'
import { JourneyName } from './components/JourneyName/JourneyName'
import { startJourneyConfig, startJourneyNoBankConfig } from './data'

export type JourneyStep = { step: string; text: string; route: string }
type JourneyFilter = { journeyType: string; completedSteps: number[] }

const getJourneys = (
  switchJourneys: Journey[],
  filter: ({ journeyType, completedSteps }: JourneyFilter) => boolean,
  resumeJourney: (route: string) => () => void,
  // addJourneyName: () => void,
  isJourneyComplete: boolean,
) => {
  return switchJourneys.filter(filter).map((journey: Journey) => {
    const { id, name, journeyType, goodBank, completedSteps = [] } = journey
    const currentJourneySteps = journeyType === journeyTypes.noBankAccount ? noBankAccountSteps : steps
    const progress = completedSteps.filter((step: number) => step <= currentJourneySteps.confirmSwitch).length
    const greenBank = goodBanksConfig[goodBank as keyof typeof goodBanksConfig]
    const actions = actionsConfig.filter(filterActionType(journeyType))

    const journeySteps =
      journeyType === journeyTypes.noBankAccount ? startJourneyNoBankConfig(String(goodBank)) : startJourneyConfig(String(goodBank))

    return (
      <Fragment key={id}>
        {isJourneyComplete ? (
          <CompletedJourneyCard journeyType={journeyType} name={name} greenBank={greenBank} />
        ) : (
          <JourneyCard
            progress={progress}
            greenBank={greenBank}
            journeySteps={journeySteps}
            actions={actions}
            completedSteps={completedSteps}
            isJourneyComplete={isJourneyComplete}
            resumeJourney={resumeJourney}
            // addJourneyName={addJourneyName}
          />
        )}
      </Fragment>
    )
  })
}

const Switching = (): JSX.Element => {
  const { user: { sub = '' } = {} } = useUser()
  const dispatch = useDispatch()
  const { push, pathname } = useRouter()
  const { isMobile } = useMediaQuery()
  const [value, setValue] = useState('')
  const [isAddName, setAddName] = useState(false)
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(sub ? `/api/db/findSwitchJourneys?id=${sub}` : null, fetcher, {
    revalidateOnFocus: false,
  }) as SWRResponse
  const activeJourneysFilter = ({ journeyType, completedSteps }: JourneyFilter) =>
    (journeyType === 'noBankAccount' && completedSteps.length < 7) || (journeyType === 'readyToSwitch' && completedSteps.length < 11)
  const completedJourneysFilter = ({ journeyType, completedSteps }: JourneyFilter) =>
    completedSteps.length === (journeyType === journeyTypes.noBankAccount ? 7 : 11)
  const [firstActiveJourney] = switchJourneys.filter(activeJourneysFilter)
  const { id: defaultJourneyId = '' } = firstActiveJourney ?? {}

  const journeyTabs = switchJourneys.filter(activeJourneysFilter).map(({ id, name }: { id: string; name: string }) => ({
    tab: name,
    currentJourneyId: id,
  }))

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

  const activeJourneys = getJourneys(
    switchJourneys,
    activeJourneysFilter,
    resumeJourney,
    // addJourneyName,
    false,
  )

  const completedJourneys = getJourneys(
    switchJourneys,
    completedJourneysFilter,
    resumeJourney,
    // addJourneyName,
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
      ? [<Loader key='loader' />]
      : !activeJourneys.length
      ? [
          <Row key='switchJourneys'>
            <S.NoJourneysTextContainer>
              <S.NoJourneysText>
                {`It's why you're here!`} Start your first switching
                <br />
                <br />
                journey by clicking on the pink plus sign {isMobile ? 'below' : 'on the right'}.
              </S.NoJourneysText>
              {isMobile && (
                <S.NewJourneyMobile onClick={addJourneyName}>
                  <Image src={'/icons/icon_plus.svg'} alt='' width={45} height={45} />
                </S.NewJourneyMobile>
              )}
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
        <title>Switch It Green | Switching Journey</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        {pathname === '/switching' && !isMobile && <SwitchingHero type='switching' hasLoaded={!!sub} />}
        <Card stretch>
          <S.SwitchingColumnContainer>
            {isAddName ? (
              <S.NoJourneysTextContainer>
                <JourneyName value={value} setValue={setValue} setAddName={setAddName} addNewJourney={addNewJourney} />
              </S.NoJourneysTextContainer>
            ) : (
              <>
                <StyledTabs wide>
                  <Tabs tabs={tabs} panels={panels} onSelectTab={onSelectTab}></Tabs>
                </StyledTabs>
                {!isMobile && (
                  <S.NewJourney onClick={addJourneyName}>
                    <Image src={'/icons/icon_plus.svg'} alt='' width={45} height={45} />
                  </S.NewJourney>
                )}
              </>
            )}
          </S.SwitchingColumnContainer>
        </Card>
      </Content>
    </>
  )
}

export default Switching
