import { useUser } from '@auth0/nextjs-auth0'
import axios from 'axios'
import { NextPage } from 'next'
import { useRef, useState } from 'react'
import useSWRMutation from 'swr/mutation'
import { Button } from '@components/Button/Button'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useToast } from '@hooks/useToast'
import { sendRequest } from '@utils/functions'

export const VideoUploader: NextPage<{
  file: any
  isStepCompleted: boolean
  isUploaded: boolean
  canPostPublicly: boolean
  setFile: (file: any) => void
  setIsUploaded: (file: any) => void
}> = ({ file, isStepCompleted, isUploaded, canPostPublicly = false, setFile, setIsUploaded }) => {
  const { user: { sub } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const toast = useToast()
  const { currentJourneyId } = useGetCurrentJourney()
  const fileInput = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleClick = () => {
    fileInput.current!.click()
  }

  const validateFileSize = () => {
    const maxfilesize = 1024 * 1024 * 60 // 1024 * 1024 = 1MB, so 60MB // about 30 secs to upload
    const filesize = file?.size

    return filesize > maxfilesize
  }

  const save = async (videoUri: string) => {
    try {
      const body = {
        filter: { sub, 'switchJourneys.id': currentJourneyId },
        payload: {
          $set: {
            'switchJourneys.$.videoUri': videoUri,
          },
        },
        collection: 'users',
        upsert: false,
      }

      request(body)
    } catch (error) {
      toast('An error occurred uploading your video', 'error')
    }
  }

  const send = async (videoUri: string) => {
    try {
      const body = {
        filter: {},
        payload: {
          $push: {
            testimonials: {
              dateSent: new Date(),
              video: videoUri,
              userId: sub,
              canPostPublicly,
            },
          },
        },
        collection: 'userTestimonials',
        upsert: false,
      }

      request(body)
      // nextStep(steps.tellUs)
    } catch (error) {
      toast('An error occurred uploading your video', 'error')
    }
  }

  const uploadFile = async () => {
    try {
      setIsUploading(true)
      const { data: { url } = {} } = await axios.post('/api/s3/upload', {
        // TODO remove axios
        name: `user_videos/${file.name}`,
        type: file.type,
      })
      const videoUri = url.split('?')[0]
      const response = await axios.put(url, file, {
        headers: {
          'Content-type': file.type,
          'Access-Control-Allow-Origin': '*',
        },
      })

      if (response.status === 200) {
        save(videoUri)
        send(videoUri)
      }

      setIsUploaded(true)
      toast('Uploaded your video successfully', 'success')
    } catch (error) {
      toast('An error occurred uploading your video', 'error')
    }

    setIsUploading(false)
    setFile(null)
  }

  const onUpload = () => {
    if (validateFileSize()) {
      toast('The maximum file size is 1MB', 'error')
      return
    }

    const uploadedFileDetail = async () => await uploadFile()
    uploadedFileDetail()
  }

  return (
    <>
      <Button
        type='button'
        size='small'
        mode='secondary'
        onClick={handleClick}
        disabled={isStepCompleted || isUploading || isUploaded}
      >
        Attach
      </Button>
      <input
        type='file'
        ref={fileInput}
        onChange={(e: any) => setFile(e.target.files[0])}
        style={{ display: 'none' }}
      />
      <Button
        type='button'
        size='small'
        onClick={onUpload}
        disabled={!file?.name || isUploading || isUploaded}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>
    </>
  )
}
