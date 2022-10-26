import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { updateUser } from '@state/user/userSlice'
import { Input } from '@components/Input/Input'
import { Button, TextButton } from '@components/Button/Button'
import { defaultProfile } from '@utils/constants'

export const SignUpFormStep2: NextPage<{
  data?: any
  nextSlide: () => void
  previousSlide: () => void
}> = ({ data, nextSlide, previousSlide }): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  const methods = useForm()
  const { replace } = useRouter()
  const dispatch = useDispatch()
  const { handleSubmit, reset } = methods

  const onSubmit = async (data: FieldValues): Promise<void> => {
    try {
      const userData = { ...user, ...defaultProfile, ...data }
      const body = {
        filter: { sub: user.sub },
        payload: userData,
        collection: 'users',
        upsert: false,
      }
      const response = await fetch('/api/db/upsertOne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const { result } = await response.json()

      dispatch(updateUser(userData))

      if (result === 'success') replace('/dashboard')
    } catch (error) {
      //toast
    }
  }

  // const onCancel = (): void => {
  //   reset()
  // }

  useEffect(() => {
    reset && reset(data)
  }, [data, reset])

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
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
          {...(data && { defaultValue: data.referralCode })}
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
      </form>
    </FormProvider>
  )
}
