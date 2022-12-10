import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button } from '@components/Button/Button'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { fetcher } from '@utils/functions'
import { setSelectedBank, setJourneyType } from '@state/switchingJourney/switchingJourneySlice'
import { countries } from '@utils/countries'
import { Select } from '@components/Select/Select'
import { Modal } from '@components/Modal/Modal'
import { useModal } from '@hooks/useModal'
import { useToast } from '@hooks/useToast'
import { journeyTypes } from '@utils/constants'
import { Input } from '@components/Input/Input.style'
import * as S from '@modules/Switching/PreSwitching.style'
import { Form } from '@styles/common.style'

type Sort = { label: string }

type NotListedBank = {
  value: string
  country: string
}

const BankFinder = (): JSX.Element => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const toast = useToast()
  const { data, error } = useSWR('/api/bankdata', fetcher)
  const [banks, setBanks] = useState([])
  const [isBankSelected, selectBank] = useState(false)
  const [country, setCountry] = useState('')
  const [isConfirmation, setConfirmation] = useState(false)
  const [value, setValue] = useState('')
  const [isModalVisible, setToggleModal] = useModal()
  const sortSelect = ({ label: a }: Sort, { label: b }: Sort) => (a < b ? -1 : a > b ? 1 : 0)

  const onSelectBank = (value: string) => {
    selectBank(true)
    dispatch(setSelectedBank(value))
  }

  const onSelectCountry = (value: string) => {
    setCountry(value)
  }

  const onNoBankAccountSelect = () => {
    dispatch(setJourneyType(journeyTypes.noBankAccount))
    push('/switching/selectaction')
  }

  const saveNotListedBank = async (notListedBank: NotListedBank) => {
    try {
      const body = {
        filter: {},
        payload: { $push: { [`banksNotListed`]: notListedBank } },
        collection: 'banksNotListed',
        upsert: false,
      }

      await fetcher(`/api/db/updateOne`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    } catch (error) {
      toast('An error occurred submitting your bank', 'error')
    }
  }

  const onSubmit = (): void => {
    if (!isConfirmation) {
      setConfirmation(true)
      saveNotListedBank({ value, country })
    }
    if (isConfirmation) {
      resetForm()
    }
  }

  const onCancel = (): void => {
    setToggleModal(false)
  }

  const resetForm = (): void => {
    setToggleModal(false)
    setConfirmation(false)
    setValue('')
    setCountry('')
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
              options={banks.sort(sortSelect)}
              onChange={onSelectBank}
            />
          </S.BankList>
          <S.Buttons>
            <Button type='button' mode='secondary' onClick={onNoBankAccountSelect}>
              {`I don't have a bank account yet`}
            </Button>
            <Button
              type='button'
              mode='secondary'
              onClick={() => {
                setToggleModal(true)
              }}
            >
              {`My bank isn't listed`}
            </Button>
            <Button
              type='button'
              disabled={!isBankSelected}
              onClick={() => {
                push('/switching/bankscore')
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

      {isModalVisible && (
        <Modal
          title={isConfirmation ? '' : 'Help Us Help You'}
          confirmText={isConfirmation ? 'Done' : `Submit`}
          showCancel={!isConfirmation}
          cancelText='Cancel'
          onConfirm={onSubmit}
          onClose={onCancel}
          isDisabled={!value || !country}
        >
          {isConfirmation ? (
            <p>Thanks for letting us know!</p>
          ) : (
            <>
              <p>
                {`Looks like we haven't gotten to your bank yet but we're always digging into new providers.
        Submit your bank below and we'll reach out when we've got the data.`}
              </p>
              <Form>
                <fieldset>
                  <label htmlFor='bankName'>
                    Bank
                    <Input
                      id='bankName'
                      name='bankName'
                      value={value}
                      onChange={e => setValue(e.target.value)}
                    />
                  </label>
                  <label>
                    Country
                    <Select
                      name='countries'
                      defaultValue={{ value: '', label: 'Select country' }}
                      options={countries.sort(sortSelect)}
                      onChange={onSelectCountry}
                    />
                  </label>
                </fieldset>
              </Form>
            </>
          )}
        </Modal>
      )}
    </>
  )
}

export default BankFinder
