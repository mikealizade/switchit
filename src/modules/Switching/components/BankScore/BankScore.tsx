import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import useSWR from 'swr'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import ProgressProvider from '@components/CircularProgressBar/ProgressProvider'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useNextStep } from '@hooks/useNextStep'
import {
  SwitchingColumnContainer,
  SwitchingColumn,
  Buttons,
  Header,
} from '@modules/Switching/Switching.style'
import { Content } from '@styles/common.style'
import { steps } from '@utils/constants'
import { fetcher } from '@utils/functions'
import * as S from '../BankScore/BankScore.style'

// TODO links to good bank buttons

type BankResult = { score: number; scoreHeadline: string; scoreCopy: string; info: string }

const colourConfig = {
  '1': '#DE2E2E',
  '2': '#FF7200',
  '3': '#FCB11B',
  '4': '#E9DE3A',
  '5': '#59B800',
}

export const BankScore = (): JSX.Element => {
  const { back, push } = useRouter()
  const { data, error } = useSWR('/api/bankdata', fetcher)
  const nextStep = useNextStep()
  const { currentJourney: { badBank = '' } = {} } = useGetCurrentJourney()
  const [{ score, scoreHeadline, scoreCopy, info }, setBankScore] = useState<BankResult>({
    score: 0,
    scoreHeadline: '',
    scoreCopy: '',
    info: '',
  })
  const [valueEnd, setValueEnd] = useState(0)
  const isGoodBank = score === 5

  const onNext = (): void => {
    nextStep(steps.checkBankScore, '/switching/green-banks')
  }

  useEffect(() => {
    if (data && badBank) {
      const { bankScore = [], bankData = [] } = JSON.parse(String(data))
      const { score: selectedScore, pertinentInformation: info } = bankData.find(
        ({ bank }: { bank: string }) => bank === badBank,
      )
      const result = bankScore.find(({ score }: { score: number }) => score === selectedScore)
      setBankScore({ ...result, info })
      setValueEnd((score / 5) * 100)
    }
  }, [data, score, badBank])

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
              <Header>
                The results are in for <strong>{badBank}</strong> and your bank scored ...
              </Header>
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
                    Why did {badBank} score {score}/5
                  </S.BankDataHeader>
                  {info}
                </S.BankData>

                <>
                  {isGoodBank ? (
                    <Buttons>
                      <Button
                        type='button'
                        size='small'
                        mode='secondary'
                        onClick={() => push('/switching/select-bank')}
                      >
                        Check Another Bank Score
                      </Button>
                      <Button type='button' size='small' onClick={() => undefined}>
                        What Else Can I Do To Act?
                      </Button>
                      <Button
                        type='button'
                        size='small'
                        onClick={() => push('/switching/green-banks')}
                      >
                        Other Green Banks
                      </Button>
                    </Buttons>
                  ) : (
                    <Buttons>
                      <Button type='button' mode='secondary' onClick={() => back()}>
                        Back
                      </Button>
                      <Button type='button' onClick={onNext}>
                        Next
                      </Button>
                    </Buttons>
                  )}
                </>
              </S.BankRating>
            </Card>
          </SwitchingColumn>
        </SwitchingColumnContainer>
        <ProgressBar step={steps.checkBankScore} />
      </Content>
    </>
  )
}
