import { useEffect } from 'react'
import type { NextPage } from 'next'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { Input } from '@components/Input/Input'
import { FormButtons } from '@components/FormButtons/FormButtons'

export const Form: NextPage<{ data?: any; disabled?: boolean }> = ({ data, disabled }) => {
  const methods = useForm()
  const { handleSubmit, reset } = methods

  const onSubmit = (data: FieldValues): void => {
    console.log('>> data', data)
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
          name='firstName'
          label='First name'
          {...(data && { defaultValue: data.firstName })}
          {...methods}
          minLength={1}
          maxLength={50}
          pattern='alpha'
          message='Please enter a valid name'
          disabled={disabled}
          required
        />
        <Input
          name='lastName'
          label='Surname'
          {...(data && { defaultValue: data.lastName })}
          {...methods}
          minLength={1}
          maxLength={50}
          pattern='alpha'
          message='Please enter a valid name'
          disabled={disabled}
          required
        />
        <Input
          name='email'
          label='Email'
          {...(data && { defaultValue: data.email })}
          {...methods}
          pattern='email'
          message='Please enter a valid email address'
          disabled={disabled}
          required={false}
          // validate={checkEmail}
        />
        <FormButtons disabled={false} isSubmitting={false} onCancel={onCancel} />
      </form>
    </FormProvider>
  )
}
