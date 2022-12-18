import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Card } from '@components/Card/Card'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { Button } from '@components/Button/Button'
import { fetcher } from '@utils/functions'
import { Content } from '@styles/common.style'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import ProgressProvider from '@modules/Dashboard/components/SwitchingJourney/ProgressProvider'
import { useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { steps } from '@utils/constants'
import { useNextStep } from '@hooks/useNextStep'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { ButtonContainer } from '@styles/common.style'
import { SwitchingColumnContainer, SwitchingColumn } from '@modules/Switching/Switching.style'
import * as S from '@modules/Switching/PreSwitching.style'

// TODO links to good bank buttons

type BankResult = { score: number; scoreHeadline: string; scoreCopy: string; info: string }

const colourConfig = {
  '1': '#DE2E2E',
  '2': '#FF7200',
  '3': '#FCB11B',
  '4': '#E9DE3A',
  '5': '#7DBC42',
}

export const BankScore = (): JSX.Element => {
  const { push } = useRouter()
  const selectedBank = useSelector((state: RootState) => state.switchJourneys.currentSelectedBank)
  const { data, error } = useSWR('/api/bankdata', fetcher)
  const nextStep = useNextStep()
  const { currentJourney: { badBank = '' } = {} } = useGetCurrentJourney()
  const currentBank = selectedBank || badBank

  const [{ score, scoreHeadline, scoreCopy, info }, setBankScore] = useState<BankResult>({
    score: 0,
    scoreHeadline: '',
    scoreCopy: '',
    info: '',
  })
  const [valueEnd, setValueEnd] = useState(0)

  const onNext = (): void => {
    nextStep(steps.checkBankScore, '/switching/green-banks')
  }

  useEffect(() => {
    if (data && currentBank) {
      const { bankScore = [], bankData = [] } = JSON.parse(String(data))
      const { score: selectedScore, pertinentInformation: info } = bankData.find(
        ({ bank }: { bank: string }) => bank === currentBank,
      )
      const result = bankScore.find(({ score }: { score: number }) => score === selectedScore)
      setBankScore({ ...result, info })
      setValueEnd((score / 5) * 100)
    }
  }, [data, score, currentBank])

  // if (!selectedBank) push('/switching')

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <SwitchingColumnContainer>
          <SwitchingColumn>
            <Card column padded rowGap={40}>
              <S.Header>
                The results are in for <strong>{currentBank}</strong> and your bank scored ...
              </S.Header>
              <S.Rating>
                <S.RatingHeader>{scoreHeadline}</S.RatingHeader>
                <p>{scoreCopy}</p>
              </S.Rating>
              <S.BankInfo>
                <S.BankScoreContainer>
                  <ProgressProvider valueStart={1} valueEnd={valueEnd}>
                    {(value: number) => (
                      <CircularProgressbarWithChildren
                        value={value}
                        circleRatio={0.7}
                        strokeWidth={17}
                        styles={buildStyles({
                          rotation: 0.65,
                          strokeLinecap: 'round',
                          pathTransitionDuration: 0.5,
                          pathColor: colourConfig[`${score}` as keyof typeof colourConfig],
                          textColor: '#222',
                          trailColor: '#e2dfda',
                        })}
                      >
                        <S.ProgressText>{score}/5</S.ProgressText>
                      </CircularProgressbarWithChildren>
                    )}
                  </ProgressProvider>
                </S.BankScoreContainer>
              </S.BankInfo>

              <S.BankRating>
                <S.BankData>
                  <S.BankDataHeader>
                    Why did {selectedBank} score {score}/5
                  </S.BankDataHeader>
                  {info}
                </S.BankData>

                <ButtonContainer alignLeft={score === 5} column>
                  {score === 5 ? (
                    <>
                      <Button type='button' onClick={() => {}}>
                        Check Another Bank
                      </Button>
                      <Button type='button' onClick={() => {}}>
                        {`I'm Still Interested In Other Green Banks`}
                      </Button>
                      <Button type='button' onClick={() => {}}>
                        What Else Can I Do To Act?
                      </Button>
                    </>
                  ) : (
                    <Button type='button' onClick={onNext}>
                      Next
                    </Button>
                  )}
                </ButtonContainer>
              </S.BankRating>
              <ProgressBar step={steps.chooseGreenBank} />
            </Card>
          </SwitchingColumn>
        </SwitchingColumnContainer>
      </Content>
    </>
  )
}
