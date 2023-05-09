/* eslint-disable @next/next/no-img-element */
import { useUser } from '@auth0/nextjs-auth0'
import axios from 'axios'
import { NextPage } from 'next'
// import Image from 'next/image'
import { useRef, useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { Button } from '@components/Button/Button'
import { useToast } from '@hooks/useToast'
import * as S from '@modules/Profile/components/ProfileHead/ProfileHead.style'
import { updateUser } from '@state/user/userSlice'
import { sendRequest } from '@utils/functions'

export const FileUploader: NextPage<{ isProfile?: boolean }> = ({ isProfile }) => {
  const { user: { sub } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const dispatch = useDispatch()
  const toast = useToast()
  const fileInput = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<any>(null)

  const handleClick = () => {
    fileInput.current!.click()
  }

  const validateFileSize = () => {
    const maxfilesize = 5_000_000 // 5MB
    const filesize = file?.size

    return filesize > maxfilesize
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
    if (validateFileSize()) {
      toast('The maximum file size is 5MB', 'error')
      return
    }

    if (file) {
      const uploadedFileDetail = async () => await uploadFile()
      uploadedFileDetail()
    }
  }, [file, uploadFile])

  return (
    <>
      {isProfile ? (
        <S.EditProfile onClick={handleClick}>
          <img src={'/icons/icon_edit_profile.svg'} alt='Edit profile picture' width={26} height={26} />
        </S.EditProfile>
      ) : (
        <Button type='button' mode='primary' onClick={handleClick}>
          Update Profile Picture
        </Button>
      )}
      <input type='file' ref={fileInput} onChange={(e: any) => setFile(e.target.files[0])} style={{ display: 'none' }} />
    </>
  )
}
