import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button } from '@components/Button/Button'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { fetcher } from '@utils/functions'
import { setJourneyData, setSelectedBank } from '@state/switchJourney/switchJourneySlice'
import { Select } from '@components/Select/Select'
import { useNextStep } from '@hooks/useNextStep'
import { journeyTypes, steps } from '@utils/constants'
import * as S from '@modules/Switching/PreSwitching.style'

type Sort = { label: string }

export const BankFinder = (): JSX.Element => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const nextStep = useNextStep()
  const { data, error } = useSWR('/api/bankdata', fetcher)
  const [banks, setBanks] = useState([])
  const [isBankSelected, selectBank] = useState(false)
  const sortSelect = ({ label: a }: Sort, { label: b }: Sort) => (a < b ? -1 : a > b ? 1 : 0)

  const onSelectBank = (bank: string) => {
    selectBank(true)
    dispatch(setSelectedBank(bank))
    dispatch(setJourneyData({ badBank: bank }))
  }

  const onNoBankAccountSelect = () => {
    dispatch(setJourneyData({ journeyType: journeyTypes.noBankAccount }))
    push('/switching/select-action')
  }

  const onNext = (): void => {
    nextStep(steps.selectBank, '/switching/bank-score')
  }

  useEffect(() => {
    if (data) {
      const { bankData } = JSON.parse(String(data))
      const banks = bankData.map(({ bank }: { bank: string }) => ({
        value: bank,
        label: bank,
      }))
      setBanks(banks)
    }
  }, [data])

  return (
    <S.BankFinder>
      <S.BankSelector>
        <S.BankList>
          <S.Subheader>{`I'm currently banking with...`}</S.Subheader>
          <Select
            name='bankfinder'
            defaultValue={{ value: '', label: 'Select your bank...' }}
            options={banks.sort(sortSelect)}
            onChange={onSelectBank}
          />
        </S.BankList>
        <S.Buttons>
          <Button type='button' mode='secondary' onClick={onNoBankAccountSelect}>
            I {`don't`} have a bank account yet
          </Button>
          <Button type='button' mode='secondary' onClick={() => push('/switching/bank-not-listed')}>
            My bank {`isn't`} listed
          </Button>
          <Button type='button' disabled={!isBankSelected} onClick={onNext}>
            Next
          </Button>
        </S.Buttons>
      </S.BankSelector>
      <S.ViewResearch>
        <p>
          Interested in our research? We have conducted a thorough analysis of the financial
          services sector.{' '}
          <a href='#' target='_blank'>
            Find our resources and criteria for recommendation.
          </a>
        </p>
      </S.ViewResearch>
      <ProgressBar step={steps.checkBankScore} />
    </S.BankFinder>
  )
}
