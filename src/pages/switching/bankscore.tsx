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
import { Column } from '@styles/common.style'
import * as S from '@modules/Switching/PreSwitching.style'

// TODO links to good bank buttons

type BankResult = { score: number; scoreHeadline: string; scoreCopy: string; info: string }

const colourConfig = {
  '1': '#DE2E2E',
  '2': '#DE2E2E',
  '3': '#F99844',
  '4': '#F99844',
  '5': '#7DBC42',
}

const BankScore = (): JSX.Element => {
  const { replace } = useRouter()
  const selectedBank = useSelector((state: RootState) => state.selectedBank)
  const { data, error } = useSWR('/api/bankdata', fetcher)
  const [{ score, scoreHeadline, scoreCopy, info }, setBankScore] = useState<BankResult>({
    score: 0,
    scoreHeadline: '',
    scoreCopy: '',
    info: '',
  })
  const [valueEnd, setValueEnd] = useState(0)

  useEffect(() => {
    if (data && selectedBank) {
      const { bankScore = [], bankData = [] } = JSON.parse(String(data))
      const { score: selectedScore, pertinentInformation: info } = bankData.find(
        ({ bank }: { bank: string }) => bank === selectedBank,
      )
      const result = bankScore.find(({ score }: { score: number }) => score === selectedScore)
      setBankScore({ ...result, info })
      setValueEnd((score / 5) * 100)
    }
  }, [data, score, selectedBank, replace])

  if (!selectedBank) replace('/switching')

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <S.SwitchingColumnContainer>
          <S.SwitchingColumn>
            <Card column padded>
              <S.Header>
                The results are in for <strong>{selectedBank}</strong> and your bank scored ...
              </S.Header>
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
                <S.BankData>{info}</S.BankData>
              </S.BankInfo>

              <S.BankRating>
                <S.Rating>
                  <S.RatingHeader>{scoreHeadline}</S.RatingHeader>
                  <p>{scoreCopy}</p>
                </S.Rating>
                <S.ButtonContainer alignLeft={score === 5}>
                  {score === 5 ? (
                    <>
                      <Button type='button' onClick={() => {}}>
                        Check Another Bank
                      </Button>
                      <Button type='button' onClick={() => {}}>
                        I’m Still Interested In Other Green Banks
                      </Button>
                      <Button type='button' onClick={() => {}}>
                        What Else Can I Do To Act?
                      </Button>
                    </>
                  ) : (
                    <Button
                      type='button'
                      onClick={() => {
                        replace('/switching/choosejourney')
                      }}
                    >
                      Next
                    </Button>
                  )}
                </S.ButtonContainer>
              </S.BankRating>
              {/* <ProgressBar step={2} /> */}
            </Card>
          </S.SwitchingColumn>
          <Column>
            <Card stretch column>
              <h2>Impact Card</h2>
            </Card>
          </Column>
        </S.SwitchingColumnContainer>
      </Content>
    </>
  )
}

export default BankScore
