import { useRef, useEffect, useState, useCallback } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '@components/Button/Button'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateUser } from '@state/user/userSlice'
import useSWRMutation from 'swr/mutation'
import { sendRequest } from '@utils/functions'

export const FileUploader = () => {
  const { user: { sub } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const dispatch = useDispatch()
  const fileInput = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<any>(null)

  const handleClick = () => {
    fileInput.current!.click()
  }

  const uploadFile = useCallback(async () => {
    try {
      const { data: { url } = {} } = await axios.post('/api/s3/upload', {
        // TODO remove axios
        name: `user_profile_images/${file.name}`,
        type: file.type,
      })
      const picture = url.split('?')[0]

      const response = await axios.put(url, file, {
        headers: {
          'Content-type': file.type,
          'Access-Control-Allow-Origin': '*',
        },
      })

      if (response.status === 200) {
        try {
          const body = {
            filter: { sub },
            payload: { $set: { picture } },
            collection: 'users',
            upsert: false,
          }

          request(body)

          dispatch(updateUser({ picture }))
        } catch (error) {
          //error
        }
      }
    } catch (error) {
      //error
    }

    setFile(null)
  }, [file, sub, dispatch, request])

  useEffect(() => {
    if (file) {
      const uploadedFileDetail = async () => await uploadFile()
      uploadedFileDetail()
    }
  }, [file, uploadFile])

  return (
    <>
      <Button type='button' mode='primary' onClick={handleClick}>
        Update Profile Picture
      </Button>
      <input
        type='file'
        ref={fileInput}
        onChange={(e: any) => setFile(e.target.files[0])}
        style={{ display: 'none' }}
      />
    </>
  )
}
