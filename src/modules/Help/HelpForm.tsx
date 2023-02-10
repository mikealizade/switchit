import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { Button } from '@components/Button/Button'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { Textarea } from '@components/Textarea/Textarea'
import { useToast } from '@hooks/useToast'
import { RootState } from '@state/store'
import { Text, Title, Div, Buttons, LargeTitle } from '@styles/common.style'
import { sendRequest, formatDate } from '@utils/functions'

export const HelpForm: NextPage<{ data?: any; disabled?: boolean }> = (): JSX.Element => {
  const { email, nickname } = useSelector((state: RootState) => state.user)
  const methods = useForm()
  const toast = useToast()
  const { handleSubmit, reset, watch } = methods
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const message = watch('message')
  const [isQuestionSent, setIsQuestionSent] = useState(false)

  const save = async (data: FieldValues): Promise<void> => {
    try {
      const body = {
        filter: {},
        payload: {
          $push: {
            userHelpQuestions: {
              created: formatDate(new Date()),
              email,
              name: nickname,
              ...data,
            },
          },
        },
        collection: 'userHelpQuestions',
        upsert: false,
      }
      request(body)
      setIsQuestionSent(true)
    } catch {
      toast('An error has occurred sending your question.', 'error')
    }
  }

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await save(data)
  }

  useEffect(() => {
    reset && reset()
  }, [isQuestionSent, reset])

  return (
    <>
      {isQuestionSent ? (
        <>
          <LargeTitle>Thanks for your question!</LargeTitle>
          <Buttons align='right'>
            <Button
              type='submit'
              disabled={false}
              size='small'
              onClick={() => setIsQuestionSent(false)}
            >
              Okay
            </Button>
          </Buttons>
        </>
      ) : (
        <>
          <LargeTitle>Still Have Questions?</LargeTitle>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
              <Div rowGap={30}>
                <Text>Write them here and {`we'll`} get back to you.</Text>
                <fieldset>
                  <Textarea name='message' {...methods} height={340} />
                </fieldset>
                <FormButtons disabled={!message} isSubmitting={false} text='Submit' size='small' />
              </Div>
            </form>
          </FormProvider>
        </>
      )}
    </>
  )
}
