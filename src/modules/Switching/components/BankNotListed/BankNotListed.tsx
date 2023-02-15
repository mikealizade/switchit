import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWRMutation from 'swr/mutation'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Input } from '@components/Input/Input.style'
import { Select } from '@components/Select/Select'
import { useToast } from '@hooks/useToast'
import * as S from '@modules/Switching/Switching.style'
import { Form, Content, NarrowContent } from '@styles/common.style'
import { actionText } from '@utils/constants'
import { countries } from '@utils/countries'
import { sendRequest } from '@utils/functions'

type NotListedBank = {
  value: string
  country: string
}

type Sort = { label: string }

export const BankNotListed: NextPage = () => {
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const { push } = useRouter()
  const toast = useToast()
  const [country, setCountry] = useState('')
  const [isConfirmation, setConfirmation] = useState(false)
  const [value, setValue] = useState('')
  const sortSelect = ({ label: a }: Sort, { label: b }: Sort) => (a < b ? -1 : a > b ? 1 : 0)
  const header = isConfirmation ? 'Thanks for letting us know!' : 'Add Your Bank To Our Database'
  const subHeader = isConfirmation ? '' : actionText.bankNotListed

  const onSelectCountry = (value: string) => {
    setCountry(value)
  }

  const saveNotListedBank = async (notListedBank: NotListedBank) => {
    try {
      const body = {
        filter: {},
        payload: { $push: { [`banksNotListed`]: notListedBank } },
        collection: 'banksNotListed',
        upsert: false,
      }

      request(body)
    } catch (error) {
      toast('An error occurred submitting your bank', 'error')
    }
  }

  const onSubmit = (): void => {
    setConfirmation(true)
    saveNotListedBank({ value, country })
  }

  const resetForm = (): void => {
    setConfirmation(false)
    setValue('')
    setCountry('')
  }

  return (
    <>
      <Head>
        <title>Switch It Green | Your Bank Is Not Listed</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <S.SwitchingColumnContainer>
          <S.SwitchingColumn>
            <Card column padded>
              <ActionHeader header={header} subHeader={subHeader} />
              <NarrowContent>
                {isConfirmation ? (
                  <>
                    <p>
                      {`Though we haven't gotten to your bank yet, we still recommend switching.
                      Here's why: If we don't have information on your bank yet, that probably means
                      they don't have any environmental policy. That means we automatically score
                      your bank 3/5.`}
                    </p>
                    <p>
                      If they {`don't`} have one at all. Why risk it when you know you could be
                      doing good.
                    </p>
                    <S.Buttons>
                      <Button type='button' onClick={() => push('/switching/green-banks')}>
                        Show Me Green Banks
                      </Button>
                    </S.Buttons>
                  </>
                ) : (
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
                    <S.Buttons>
                      <Button type='button' mode='secondary' onClick={resetForm}>
                        Cancel
                      </Button>
                      <Button type='button' disabled={!value || !country} onClick={onSubmit}>
                        Submit
                      </Button>
                    </S.Buttons>
                  </Form>
                )}
              </NarrowContent>
            </Card>
          </S.SwitchingColumn>
        </S.SwitchingColumnContainer>
      </Content>
    </>
  )
}
