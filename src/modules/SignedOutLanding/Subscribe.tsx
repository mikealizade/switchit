import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import useSWRMutation from 'swr/mutation'
import { useEmail } from '@hooks/useEmail'
import { Div } from '@styles/common.style'
import { sendRequest } from '@utils/functions'
import { EventType } from '@utils/types'
import * as S from './SignedOutHome.style'
import { Text } from './SignedOutLanding.style'

export const Subscribe: NextPage = (): JSX.Element => {
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const [value, setEmail] = useState('')
  const [hasEnteredEmail, setThanks] = useState(false)
  const [isError, setError] = useState(false)
  const sendEmail = useEmail('subscribe')

  const onChange = ({ target: { value } }: EventType) => {
    setEmail(value)
  }

  const saveEmail = async () => {
    try {
      const body = {
        filter: {},
        payload: { $push: { [`emails`]: value } },
        collection: 'newsletter',
        upsert: false,
      }

      request(body)
      sendEmail(value)
      setThanks(true)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    if (hasEnteredEmail) {
      const delay = setTimeout(() => {
        setThanks(false)
        setEmail('')
        clearTimeout(delay)
      }, 3000)
    }
  }, [hasEnteredEmail])

  return (
    <S.Subscribe rowGap={40}>
      <S.SubscribeHeader>Subscribe</S.SubscribeHeader>
      <>
        {isError ? (
          <Text>Sorry, we {`couldn't`} subscribe you to our newsletter. Please try again later.</Text>
        ) : hasEnteredEmail ? (
          <S.NewsletterThanks>Thanks for subscribing. {`We'll`} be in touch.</S.NewsletterThanks>
        ) : (
          <>
            <S.SubscribeForm>
              <>
                <S.EmailField value={value} onChange={onChange} placeholder='Email' />
                <S.EmailButton onClick={saveEmail}>Submit</S.EmailButton>
              </>
            </S.SubscribeForm>
            <Div width='30%' flex='none'>
              <S.TextContainer mobileWidth={50}>
                <Text>Subscribe to our newsletter for news, insights, and updates.</Text>
                <Text>
                  No spam - <em>just the juicy bits</em>
                </Text>
              </S.TextContainer>
            </Div>
          </>
        )}
      </>
    </S.Subscribe>
  )
}
