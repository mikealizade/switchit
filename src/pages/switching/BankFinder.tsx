import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button } from '@components/Button/Button'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { fetcher } from '@utils/functions'
import { setSelectedBank } from '@state/bank/bankSlice'
import { Modal } from '@components/Modal/Modal'
import { Input } from '@components/Input/Input'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { countries } from '@utils/countries'
import * as S from '@modules/Switching/PreSwitching.style'
import { Select } from '@components/Select/Select'

const BankFinder = (): JSX.Element => {
  const dispatch = useDispatch()
  const methods = useForm()
  const { replace } = useRouter()
  const { data, error } = useSWR('/api/bankdata', fetcher)
  const [banks, setBanks] = useState([])
  const [isBankSelected, selectBank] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [country, setCountry] = useState('')
  const { handleSubmit, reset } = methods

  const onSelectBank = (value: string) => {
    selectBank(true)
    dispatch(setSelectedBank(value))
  }

  const onSelectCountry = (value: string) => {
    setCountry(value)
  }

  const onSubmit = (data: any): void => {
    // dispatch(setUser({ ...user, ...data }))
  }

  const onCancel = (): void => {
    setOpen(false)
  }

  const onToggleModal = (): void => {
    setOpen(!isOpen)
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
    <>
      <S.BankFinder>
        <S.BankSelector>
          <S.BankList>
            <S.Subheader>{`I'm currently banking with...`}</S.Subheader>
            <Select
              name='bankfinder'
              defaultValue={{ value: '', label: 'Select your bank...' }}
              options={banks.sort(({ label: a }, { label: b }) => (a < b ? -1 : a > b ? 1 : 0))}
              onChange={onSelectBank}
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
                setOpen(true)
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

      <Modal title='Help Us Help You' btnText='Submit' isOpen={isOpen} toggleModal={onToggleModal}>
        <p>
          {`Looks like we haven't gotten to your bank yet but we're always digging into new providers.
        Submit your bank below and we'll reach out when we've got the data`}
        </p>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <fieldset>
              <Input
                name='bankName'
                label='Bank'
                // {...(bankName && { defaultValue: bankName })}
                {...methods}
                minLength={1}
                maxLength={50}
                pattern='alpha'
                message='Please enter a bank name'
                disabled={false}
                required={false}
              />
              <Select
                name='countries'
                defaultValue={{ value: '', label: 'Select country' }}
                options={countries.sort(({ label: a }, { label: b }) =>
                  a < b ? -1 : a > b ? 1 : 0,
                )}
                onChange={onSelectCountry}
              />
            </fieldset>
            <FormButtons disabled={false} isSubmitting={false} onCancel={onCancel} />
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}

export default BankFinder
