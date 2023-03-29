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
  const { push, back } = useRouter()
  const toast = useToast()
  const [country, setCountry] = useState('')
  const [isConfirmation, setConfirmation] = useState(false)
  const [value, setValue] = useState('')
  const sortSelect = ({ label: a }: Sort, { label: b }: Sort) => (a < b ? -1 : a > b ? 1 : 0)
  const header = isConfirmation ? 'Bank Submitted' : 'Add Your Bank To Our Database'
  const subHeader = isConfirmation ? 'You can still make the switch' : actionText.bankNotListed

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

  return (
    <>
      <Head>
        <title>Switch It Green | Your Bank Is Not Listed</title>
        <meta name='description' content='Switch to a green bank on our Green Banking Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <S.SwitchingColumnContainer>
          <S.SwitchingColumn>
            <Card column padded stretch>
              <ActionHeader header={header} subHeader={subHeader} />
              {isConfirmation ? (
                <>
                  <NarrowContent width='75%'>
                    <p>
                      {`We'll get our research team digging into your current bank ASAP but you don't need to wait for them to make the switch! If we don't have the research on your bank yet, it usually means one of two things: either they don't have an environmental policy at all (meaning they would automatically score a 2/5 or below); or, they are not a registered bank (they can offer banking services but will store your money somewhere else - most likely a with a bank that is investing in fossil fuels). Switching to your new bank will work just the same, so you can continue your switching journey now. Next step: choose a new provider.`}
                    </p>
                  </NarrowContent>

                  <S.Buttons align='right'>
                    <Button type='button' onClick={() => push('/switching/green-banks')}>
                      Show Me Green Banks
                    </Button>
                  </S.Buttons>
                </>
              ) : (
                <Form>
                  <fieldset>
                    <NarrowContent width='75%'>
                      <label htmlFor='bankName'>
                        Bank
                        <Input id='bankName' name='bankName' value={value} onChange={e => setValue(e.target.value)} />
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
                    </NarrowContent>
                  </fieldset>
                  <S.Buttons>
                    <Button type='button' mode='secondary' onClick={() => back()}>
                      Back
                    </Button>
                    <Button type='button' disabled={!value || !country} onClick={onSubmit}>
                      Submit
                    </Button>
                  </S.Buttons>
                </Form>
              )}
            </Card>
          </S.SwitchingColumn>
        </S.SwitchingColumnContainer>
      </Content>
    </>
  )
}
