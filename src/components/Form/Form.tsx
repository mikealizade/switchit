import type { NextPage } from 'next'
import { useEffect } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { Input } from '@components/Input/Input'

export const Form: NextPage<{ data?: any; disabled?: boolean }> = ({
  data,
  disabled,
}): JSX.Element => {
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
          name='age'
          label='Age'
          {...(data && { defaultValue: data.age })}
          {...methods}
          minLength={1}
          maxLength={50}
          pattern='alpha'
          message='Please enter a valid name'
          disabled={disabled}
          required={false}
        />
        <Input
          name='location'
          label='Where do you live?'
          {...(data && { defaultValue: data.location })}
          {...methods}
          minLength={1}
          maxLength={50}
          pattern='alpha'
          message='Please enter a valid name'
          disabled={disabled}
          required={false}
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
