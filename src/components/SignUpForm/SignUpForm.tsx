import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import { useEffect } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Button, TextButton } from '@components/Button/Button'
import { Input } from '@components/Input/Input'
import { InfoLink } from '@modules/Signup/Signup.style'
import { setUser } from '@state/user/userSlice'
import { Form } from '@styles/common.style'

export const SignUpForm: NextPage<{
  data?: any
  disabled?: boolean
  nextSlide: () => void
  previousSlide: () => void
  setToggleModal: (arg: boolean) => void
}> = ({ data, disabled, nextSlide, previousSlide, setToggleModal }): JSX.Element => {
  const { user = {}, error = {}, isLoading = false } = useUser()
  const dispatch = useDispatch()
  const methods = useForm()
  const { handleSubmit, reset } = methods

  const onSubmit = (data: FieldValues): void => {
    dispatch(setUser({ ...user, ...data }))
    nextSlide()
  }

  const onToggleModal = (): void => {
    setToggleModal(true)
  }

  useEffect(() => {
    reset && reset(data)
  }, [data, reset])

  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
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
            <InfoLink onClick={onToggleModal}>Why do we want to know this information?</InfoLink>
            <Button type='submit' disabled={false}>
              {'Next'}
            </Button>
            <TextButton type='button' mode='text' onClick={nextSlide}>
              Skip
            </TextButton>
          </fieldset>
        </Form>
      </FormProvider>
    </>
  )
}
