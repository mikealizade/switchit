import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Button, TextButton } from '@components/Button/Button'
import { Input } from '@components/Input/Input'
import { RootState } from '@state/store'
import { Form } from '@styles/common.style'
import { defaultProfile } from './data'

export const SignUpFormStep2: NextPage<{
  data?: any
  nextSlide: () => void
  previousSlide: () => void
}> = ({ data }): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  const methods = useForm()
  const { replace } = useRouter()
  const { handleSubmit, reset } = methods
  const [referralCode, setReferralCode] = useState('')

  const onSubmit = async (data: FieldValues): Promise<void> => {
    try {
      const userData = { ...user, ...defaultProfile, ...data, referralCode }

      window.localStorage.setItem('userData', JSON.stringify(userData))
      replace('/api/auth/signup')
    } catch (error) {
      //toast
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('referralCode')

    code && setReferralCode(code)
  }, [setReferralCode])

  useEffect(() => {
    reset && reset(data)
  }, [data, reset])

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <Input
            name='programCode'
            label='Do you have a program code?'
            {...(data && { defaultValue: data.programCode })}
            {...methods}
            minLength={1}
            maxLength={50}
            required={false}
          />
          <p>Find out more about our school programs at our …</p>
          <Input
            name='referralCode'
            label='Do you have a referral code?'
            {...(data || (referralCode && { defaultValue: data?.referralCode || referralCode }))}
            {...methods}
            minLength={1}
            maxLength={50}
            required={false}
          />
          <p>
            Did you know you can … *earn point, etc by sending your friends, family and collegues
            invites? Find more on our communities page.
          </p>
          <Button type='submit'>Next</Button>
          <TextButton type='submit' mode='text'>
            Skip
          </TextButton>
        </fieldset>
      </Form>
    </FormProvider>
  )
}
