import type { NextPage } from 'next'
import { useEffect } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { Input } from '@components/Input/Input'
import { RadioGroup } from '@components/RadioGroup/RadioGroup'
import { Textarea } from '@components/Textarea/Textarea'
import { useToast } from '@hooks/useToast'
import { sendRequest, formatDate } from '@utils/functions'
import * as S from './RegisterInterestForm.style'

export const RegisterInterestForm: NextPage<{
  data?: any
  disabled?: boolean
  onSendSuccess: any
}> = ({ data, disabled, onSendSuccess }): JSX.Element => {
  const methods = useForm()
  const toast = useToast()
  const { handleSubmit, reset, watch } = methods
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const [nickname, email] = watch(['nickname', 'email'])

  const save = async (data: FieldValues): Promise<void> => {
    try {
      const body = {
        filter: {},
        payload: {
          $push: {
            interestedUsers: { ...data, created: formatDate(new Date()) },
          },
        },
        collection: 'usersInterestInSwitchIt',
        upsert: false,
      }

      request(body)
      onSendSuccess()
    } catch {
      toast('An error has occurred registering your interest.', 'error')
    }
  }

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await save(data)
  }

  useEffect(() => {
    reset && reset(data)
  }, [data, reset])

  return (
    <S.RegisterInterestForm>
      <FormProvider {...methods}>
        <S.RegisterInterest onSubmit={handleSubmit(onSubmit)} className='form'>
          <fieldset>
            <Input
              name='nickname'
              label='Name'
              {...methods}
              minLength={1}
              maxLength={50}
              pattern='alpha'
              message='Please enter a valid name'
              disabled={disabled}
              required
              placeholder='Jane Doe'
            />
            <Input
              name='email'
              label='Email'
              {...methods}
              minLength={1}
              maxLength={50}
              pattern='email'
              message='Please enter a valid email'
              disabled={disabled}
              required
              placeholder='you@email.com'
            />
            <Input
              name='institution'
              label='Institution'
              {...methods}
              minLength={1}
              maxLength={50}
              disabled={false}
              required={false}
              placeholder='School or University'
            />
          </fieldset>
          <S.RadioGroupContainer>
            <RadioGroup
              label='I am'
              name='staffOrStudent'
              labels={['University Staff', 'A student', 'Other']}
              {...methods}
              disabled={false}
              row
            />
          </S.RadioGroupContainer>
          <fieldset>
            <Textarea name='message' {...methods} label='Message' height={200} />
          </fieldset>
          <FormButtons disabled={!nickname || !email} isSubmitting={false} text='Submit' />
        </S.RegisterInterest>
      </FormProvider>
    </S.RegisterInterestForm>
  )
}
