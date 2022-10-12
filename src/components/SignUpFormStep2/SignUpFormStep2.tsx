import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { updateUser } from '@state/user/userSlice'
import { Input } from '@components/Input/Input'
import { Button, TextButton } from '@components/Button/Button'
import { FormButtons } from '@components/FormButtons/FormButtons'
import Router from 'next/router'

export const SignUpFormStep2: NextPage<{
  data?: any
  disabled?: boolean
  nextSlide: () => void
  previousSlide: () => void
}> = ({ data, disabled, nextSlide, previousSlide }) => {
  const methods = useForm()
  const { replace } = useRouter()
  const dispatch = useDispatch()
  const { handleSubmit, reset } = methods

  const onSubmit = (data: FieldValues): void => {
    dispatch(updateUser(data))
  }

  const onCancel = (): void => {
    reset()
  }

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
        <Input
          name='referralCode'
          label='Do you have a referral code?'
          {...(data && { defaultValue: data.referralCode })}
          {...methods}
          minLength={1}
          maxLength={50}
          required={false}
        />
        <Button type='submit' disabled={false}>
          {'Next'}
        </Button>
        <TextButton
          type='button'
          mode='text'
          onClick={() => {
            //go to sign up
          }}
        >
          Skip
        </TextButton>
      </form>
    </FormProvider>
  )
}
