import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import { Button } from '@components/Button/Button'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { Input } from '@components/Input/Input'
import { Textarea } from '@components/Textarea/Textarea'
import { useToast } from '@hooks/useToast'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Buttons } from '@modules/Switching/Switching.style'
import { Div } from '@styles/common.style'
import { sendRequest, formatDate } from '@utils/functions'
import * as S from './ContactUs.style'
import { PageSection, Text, PageHeader } from '../SignedOutLanding/SignedOutLanding.style'

export const ContactUs: NextPage<{ data?: any; disabled?: boolean }> = ({
  data,
  disabled,
}): JSX.Element => {
  const methods = useForm()
  const toast = useToast()
  const { handleSubmit, reset, watch } = methods
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const [nickname, email, message] = watch(['nickname', 'email', 'message'])
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const save = async (data: FieldValues): Promise<void> => {
    try {
      const body = {
        filter: {},
        payload: {
          $push: {
            contactUsForm: data,
          },
        },
        collection: 'contactUsForm',
        upsert: false,
      }

      request(body)
    } catch {
      toast('An error has occurred.', 'error')
    }
  }

  const onSubmit = async (data: FieldValues): Promise<void> => {
    const contactUsData = {
      ...data,
      date: formatDate(new Date()),
    }

    await save(contactUsData)
    setHasSubmitted(true)
    reset()
  }

  useEffect(() => {
    reset && reset(data)
  }, [data, reset])

  return (
    <SignedOutLayout>
      <PageSection grey rowGap={60}>
        {hasSubmitted ? (
          <>
            <PageHeader>Super!</PageHeader>
            <Div rowGap={40}>
              <Text>{`We'll`} be in touch.</Text>
              <Buttons>
                <Button type='button' mode='primary' onClick={() => setHasSubmitted(false)}>
                  Done
                </Button>
              </Buttons>
            </Div>
          </>
        ) : (
          <>
            <PageHeader>Hello!</PageHeader>
            <Text>
              Questions about our student programs? Press inquiries? Use the form below to get in
              touch.
            </Text>
            <FormProvider {...methods}>
              <S.ContactUsForm onSubmit={handleSubmit(onSubmit)} className='form'>
                <fieldset>
                  <S.InputsContainer>
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
                  </S.InputsContainer>
                  <Textarea name='message' {...methods} label='Message' height={220} required />
                </fieldset>
                <FormButtons
                  disabled={!nickname || !email || !message}
                  isSubmitting={false}
                  text='Submit'
                />
              </S.ContactUsForm>
            </FormProvider>
          </>
        )}
      </PageSection>
    </SignedOutLayout>
  )
}
