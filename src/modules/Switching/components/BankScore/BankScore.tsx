import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import useSWR from 'swr'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import ProgressProvider from '@components/CircularProgressBar/ProgressProvider'
import { Modal } from '@components/Modal/Modal'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useModal } from '@hooks/useModal'
import { useNextStep } from '@hooks/useNextStep'
import { SwitchingColumnContainer, SwitchingColumn, Buttons, Header } from '@modules/Switching/Switching.style'
import { Content, CopyContainer, BoldLink } from '@styles/common.style'
import { steps } from '@utils/constants'
import { fetcher } from '@utils/functions'
import * as S from '../BankScore/BankScore.style'

type BankResult = {
  score: number
  scoreHeadline: string
  scoreCopy: string
  info: string
  summary: string
}

const colourConfig = {
  '1': '#DE2E2E',
  '2': '#FF7200',
  '3': '#FCB11B',
  '4': '#E9DE3A',
  '5': '#59B800',
}

export const BankScore = (): JSX.Element => {
  const { push } = useRouter()
  const { data } = useSWR('/api/json/bankdata', fetcher)
  const nextStep = useNextStep()
  const [isModalVisible, setToggleModal] = useModal()

  const { currentJourney: { badBank = '' } = {} } = useGetCurrentJourney()
  const [{ score, scoreHeadline, scoreCopy, info, summary }, setBankScore] = useState<BankResult>({
    score: 0,
    scoreHeadline: '',
    scoreCopy: '',
    info: '',
    summary: '',
  })
  const [valueEnd, setValueEnd] = useState(0)
  const isGoodBank = score === 5

  const onNext = (): void => {
    nextStep(steps.checkBankScore, '/switching/green-banks')
  }

  const onToggleModal = (isVisible: boolean) => (): void => {
    setToggleModal(isVisible!)
  }

  useEffect(() => {
    if (data && badBank) {
      const { bankScore = [], bankData = [] } = JSON.parse(String(data))
      const { score: selectedScore, pertinentInformation: info, summary } = bankData.find(({ bank }: { bank: string }) => bank === badBank)
      const result = bankScore.find(({ score }: { score: number }) => score === selectedScore)
      setBankScore({ ...result, info, summary })
      setValueEnd((score / 5) * 100)
    }
  }, [data, score, badBank])

  return (
    <>
      <Head>
        <title>Switch It Green | Bank Score</title>
        <meta name='description' content='Switch to a green bank on our Green Banking Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <SwitchingColumnContainer>
          <SwitchingColumn>
            <Card column padded rowGap={40} stretch>
              <Header>
                Review your {`Bank's`} Score: <strong>{badBank}</strong>
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
                <S.BankData>
                  <CopyContainer display='flex' dangerouslySetInnerHTML={{ __html: summary }} bold />
                  <BoldLink onClick={onToggleModal(true)}>
                    Why did {badBank} score {score}/5?
                  </BoldLink>
                </S.BankData>
              </S.BankInfo>

              <S.BankRating>
                <>
                  {isGoodBank ? (
                    <Buttons>
                      <Button type='button' size='small' mode='secondary' onClick={() => push('/switching/select-bank')}>
                        Check Another Bank Score
                      </Button>
                      <Button type='button' size='small' onClick={() => push('/resources/article/5')}>
                        Other Actions I Can Take
                      </Button>
                      <Button type='button' size='small' onClick={() => push('/switching/green-banks')}>
                        Other Green Banks
                      </Button>
                    </Buttons>
                  ) : (
                    <Buttons>
                      <Button type='button' mode='secondary' onClick={() => push('/switching/select-bank')}>
                        Previous Step
                      </Button>
                      <Button type='button' onClick={onNext}>
                        Next Step
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
      {isModalVisible && (
        <Modal
          title={`Why did ${badBank} score ${score}/5?`}
          confirmText='OK'
          showCancel={false}
          onConfirm={onToggleModal(false)}
          onClose={onToggleModal(false)}
        >
          <CopyContainer display='flex' dangerouslySetInnerHTML={{ __html: info }} />
        </Modal>
      )}
    </>
  )
}
