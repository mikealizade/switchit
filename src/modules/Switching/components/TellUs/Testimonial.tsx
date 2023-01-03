import React, { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0'
import useSWRMutation from 'swr/mutation'
import useSWR, { SWRResponse } from 'swr'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from 'sanitize-html'
import { useToast } from '@hooks/useToast'
import { Button } from '@components/Button/Button'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { sendRequest, fetcher } from '@utils/functions'
import { steps, sanitiseConfig } from '@utils/constants'
import { Checkbox, Label } from '@styles/common.style'
import { Buttons } from '@modules/Switching/Switching.style'
import * as S from './TellUs.style'

type JourneyId = { id: string }

type TestimononialProps = {
  onNext: () => void
}

const getDefaultTestimonial = () => 'Write your testimonial here.'

// TODO when savinvg journey steps to db, currently not refetching on any of the action pages

export const Testimonial: NextPage<TestimononialProps> = ({ onNext }) => {
  const { user: { sub = '' } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const text = useRef('')
  const toast = useToast()
  const { currentJourneyId, currentJourney: { completedSteps = [] } = {} } = useGetCurrentJourney()
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(
    sub ? `/api/db/findSwitchJourneys?id=${sub}` : null,
    fetcher,
    { revalidateOnFocus: false },
  ) as SWRResponse
  const [{ testimonial = '' } = {}] = switchJourneys?.filter(
    ({ id }: JourneyId) => id === currentJourneyId,
  )
  const [, setTestimonial] = useState('')
  const [isEditable, setEdit] = useState(false)
  const [canPostPublicly, setCanPostPublicly] = useState(false)
  const isStepCompleted = completedSteps.includes(steps.tellUs)

  const onSave = async () => {
    try {
      const saveBody = {
        filter: { sub, 'switchJourneys.id': currentJourneyId },
        payload: {
          $set: {
            [`switchJourneys.$.testimonial`]: sanitizeHtml(text.current, sanitiseConfig),
          },
        },
        collection: 'users',
        upsert: false,
      }

      request(saveBody)

      // TODO success msg even when errors!
      toast('Your testimonial was saved successfully', 'success')
    } catch (error) {
      toast('An error occurred saving your testimonial', 'error')
    }
  }

  const onSend = async () => {
    onNext()

    try {
      const sendBody = {
        filter: {},
        payload: {
          $push: {
            testimonials: {
              dateSent: new Date(),
              testimonial: sanitizeHtml(text.current, sanitiseConfig),
              userId: sub,
              canPostPublicly,
            },
          },
        },
        collection: 'userTestimonials',
        upsert: false,
      }

      request(sendBody)

      toast('Your testimonial was sent successfully', 'success')
    } catch (error) {
      toast('An error occurred sending your testimonial', 'error')
    }
  }

  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    text.current = value
  }

  const onToggleEditable = () => {
    setEdit(!isEditable)
  }

  useEffect(() => {
    if (testimonial) {
      text.current = testimonial
      setTestimonial(text.current)
    } else {
      text.current = getDefaultTestimonial()
      setTestimonial(text.current)
    }
  }, [testimonial, text])

  return (
    <>
      <S.Testimonial>
        {!isEditable && !text.current ? (
          <S.TestimonialImage>
            <Image src={`/icons/icon_testimonial.svg`} alt='' width={60} height={42} />
          </S.TestimonialImage>
        ) : (
          <ContentEditable
            className='editable'
            tagName='div'
            html={isValidating ? 'Loading testimonial...' : text.current}
            disabled={!isEditable}
            onChange={onChange}
            onBlur={onToggleEditable}
          />
        )}
      </S.Testimonial>

      {!isStepCompleted && (
        <Label htmlFor='canPostPublicly' onClick={() => setCanPostPublicly(!canPostPublicly)}>
          <Checkbox id='canPostPublicly' isActive={canPostPublicly} />
          Allow us to post publicly
        </Label>
      )}

      <Buttons>
        <Button
          type='button'
          onClick={onToggleEditable}
          mode='secondary'
          size='small'
          disabled={isStepCompleted}
        >
          Edit
        </Button>
        <Button
          type='button'
          size='small'
          mode='secondary'
          onClick={onSave}
          disabled={!text.current || isStepCompleted}
        >
          Save
        </Button>
        <Button
          type='button'
          size='small'
          onClick={onSend}
          disabled={!text.current || isStepCompleted}
        >
          Send
        </Button>
      </Buttons>
    </>
  )
}
