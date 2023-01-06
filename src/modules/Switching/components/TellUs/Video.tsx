import React, { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0'
import useSWR, { SWRResponse } from 'swr'
import ContentEditable from 'react-contenteditable'
import { VideoUploader } from './VideoUploader'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { fetcher } from '@utils/functions'
import { steps } from '@utils/constants'
import { Checkbox, Label } from '@styles/common.style'
import { Buttons } from '@modules/Switching/Switching.style'
import * as S from './TellUs.style'

type JourneyId = { id: string }

type TestimononialProps = {
  onNext: () => void
}

export const Video: NextPage<TestimononialProps> = ({ onNext }) => {
  const { user: { sub = '' } = {} } = useUser()
  const text = useRef('')
  const { currentJourneyId, currentJourney: { completedSteps = [] } = {} } = useGetCurrentJourney()
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(
    sub ? `/api/db/findSwitchJourneys?id=${sub}` : null,
    fetcher,
    { revalidateOnFocus: false },
  ) as SWRResponse
  const [{ videoUri = '' } = {}] = switchJourneys?.filter(
    ({ id }: JourneyId) => id === currentJourneyId,
  )
  const [, setTestimonial] = useState('')
  const [canPostPublicly, setCanPostPublicly] = useState(false)
  const [file, setFile] = useState<any>(null)
  const [isUploaded, setIsUploaded] = useState(false)

  const isStepCompleted = !!(completedSteps.includes(steps.tellUs) && videoUri)

  useEffect(() => {
    if (videoUri) {
      text.current = 'You have previously uploaded a video'
      setTestimonial(text.current)
    }
  }, [videoUri, text])

  console.log('videoUri', videoUri)

  return (
    <>
      <S.Testimonial>
        <S.TestimonialImage>
          {isUploaded || videoUri ? (
            <Image src='/icons/icon_radio_checked.svg' alt='' width={83} height={55} />
          ) : !file?.name ? (
            <Image src='/icons/icon_ellipsis.svg' alt='' width={88} height={88} />
          ) : (
            <div>{isValidating ? 'Loading...' : `${file?.name} is ready to upload`}</div>
          )}
        </S.TestimonialImage>
      </S.Testimonial>

      {!isStepCompleted && (
        <Label htmlFor='canPostPublicly' onClick={() => setCanPostPublicly(!canPostPublicly)}>
          <Checkbox id='canPostPublicly' isActive={canPostPublicly} />
          Allow us to post publicly
        </Label>
      )}

      <Buttons>
        <VideoUploader
          file={file}
          isUploaded={isUploaded}
          isStepCompleted={isStepCompleted}
          canPostPublicly={canPostPublicly}
          setFile={setFile}
          setIsUploaded={setIsUploaded}
        />
      </Buttons>
    </>
  )
}
