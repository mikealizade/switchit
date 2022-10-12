import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useUser } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { Input } from '@components/Input/Input'
import { Button, TextButton } from '@components/Button/Button'

export const SignUpForm: NextPage<{
  data?: any
  disabled?: boolean
  nextSlide: () => void
  previousSlide: () => void
}> = ({ data, disabled, nextSlide, previousSlide }) => {
  const { user = {}, error = {}, isLoading = false } = useUser()
  const dispatch = useDispatch()
  const methods = useForm()
  const { handleSubmit, reset } = methods

  const onSubmit = (data: FieldValues): void => {
    dispatch(setUser({ ...user, ...data }))
    nextSlide()
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
          name='age'
          label='Age'
          {...(data && { defaultValue: data.age })}
          {...methods}
          minLength={1}
          maxLength={50}
          // pattern='alpha'
          // message='Please enter a valid name'
          // disabled={disabled}
          required={false}
        />
        <Input
          name='location'
          label='Where do you live?'
          {...(data && { defaultValue: data.location })}
          {...methods}
          minLength={1}
          maxLength={50}
          // pattern='alpha'
          // message='Please enter a valid name'
          // disabled={disabled}
          required={false}
        />
        <Button type='submit' disabled={false}>
          {'Next'}
        </Button>
        <TextButton type='button' mode='text' onClick={nextSlide}>
          Skip
        </TextButton>
      </form>
    </FormProvider>
  )
}
