import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useSWR from 'swr'
import { Button } from '@components/Button/Button'
import { Select } from '@components/Select/Select'
import { ViewResearch } from '@components/ViewResearch/ViewResearch'
import { useNextStep } from '@hooks/useNextStep'
import { Buttons } from '@modules/Switching/Switching.style'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'
import { Subheader, BoldLink } from '@styles/common.style'
import { journeyTypes, steps } from '@utils/constants'
import { fetcher } from '@utils/functions'
import * as S from './BankFinder.style'

type Sort = { label: string }

export const BankFinder = (): JSX.Element => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const nextStep = useNextStep()
  const { data } = useSWR('/api/json/bankdata', fetcher)
  const [banks, setBanks] = useState([])
  const [isBankSelected, selectBank] = useState(false)
  const sortSelect = ({ label: a }: Sort, { label: b }: Sort) => (a < b ? -1 : a > b ? 1 : 0)

  const onSelectBank = (bank: string): void => {
    selectBank(true)
    dispatch(setJourneyData({ badBank: bank, journeyType: journeyTypes.readyToSwitch }))
  }

  const onNoBankAccountSelect = (route: string): void => {
    dispatch(setJourneyData({ journeyType: journeyTypes.noBankAccount }))
    push(route)
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
          <Subheader>{`I'm currently banking with`}</Subheader>
          <Select
            name='bankfinder'
            defaultValue={{ value: '', label: 'Select your bank...' }}
            options={banks.sort(sortSelect)}
            onChange={onSelectBank}
          />
        </S.BankList>
        <BoldLink onClick={() => onNoBankAccountSelect('/switching/green-banks')}>I {`don't`} have a bank account yet</BoldLink>
        <BoldLink onClick={() => onNoBankAccountSelect('/switching/bank-not-listed')}>My bank {`isn't`} listed</BoldLink>
      </S.BankSelector>
      <Buttons>
        <Button type='button' mode='secondary' onClick={() => push('/switching')}>
          Previous Step
        </Button>
        <Button type='button' disabled={!isBankSelected} onClick={onNext}>
          Next Step
        </Button>
      </Buttons>
      <ViewResearch />
    </S.BankFinder>
  )
}
