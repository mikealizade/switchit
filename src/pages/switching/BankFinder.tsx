import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button } from '@components/Button/Button'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { fetcher } from '@utils/functions'
import { setSelectedBank } from '@state/bank/bankSlice'
import * as S from '@pages/switching/Switching.style'
import { Select } from '@components/Select/Select'

export const BankFinder = (): JSX.Element => {
  const dispatch = useDispatch()
  const { replace } = useRouter()
  const { data, error } = useSWR('/api/bankdata', fetcher)
  const [banks, setBanks] = useState([])
  const [isBankSelected, selectBank] = useState(false)

  const onChange = (value: string) => {
    selectBank(true)
    dispatch(setSelectedBank(value))
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
            options={banks.sort(({ label: a }, { label: b }) => (a < b ? -1 : a > b ? 1 : 0))}
            onChange={onChange}
          />
        </S.BankList>
        <S.Buttons>
          <Button type='button' mode='secondary' onClick={() => {}}>
            {`I don't have a bank account yet`}
          </Button>
          <Button
            type='button'
            mode='secondary'
            onClick={() => {
              replace('/switching/bankscore')
            }}
          >
            {`My bank isn't listed`}
          </Button>
          <Button
            type='button'
            disabled={!isBankSelected}
            onClick={() => {
              replace('/switching/bankscore')
            }}
          >
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
      <ProgressBar step={1} />
    </S.BankFinder>
  )
}
