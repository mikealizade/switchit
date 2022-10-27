import { useEffect, useState } from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0'
import { User } from '@components/User/User'
import { Badge } from '@components/Badges/Badges'
import { Card } from '@components/Card/Card'
import { ProfileHead } from '@components/ProfileHead/ProfileHead'
import { ProfileSummary, ProfileSummaryProps } from '@components/ProfileSummary/ProfileSummary'
import { SharingCodes } from '@components/SharingCodes/SharingCodes'
import {
  ClimateImpactReport,
  ClimateImpactReportProps,
} from '@components/ClimateImpactReport/ClimateImpactReport'
import { Badges } from '@components/Badges/Badges'
import { fetcher } from '@utils/functions'
import { PointsTotal, PointsTotalProps } from '@components/PointsTotal/PointsTotal'
import { CheckList } from '@components/CheckList/CheckList'
import * as S from '@modules/Profile/Profile.style'

// fetch custom hook
//---//
// mongodb compass
// error handling / errorboundary
//protect routes withPageAuthRequired

// case 00105328

type User = {
  _id: string
  nickname: string
  name: string
  picture: string
  updated_at: string
  email: string
  email_verified: string
  sub: string
  sid: string
  age: number
  location: string
  programCode: string
  referralCode: string
  points: number
  profile: {
    badges: Badge[]
    climateImpactReport: ClimateImpactReportProps
    summary: ProfileSummaryProps
    sharingCodes: number
    switchItPoints: PointsTotalProps
  }
}

const Profile = (): JSX.Element => {
  const {
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()
  const { data: { user } = {}, error } = useSWR(sub ? `/api/db/user/${sub}` : null, fetcher)
  const [userData, setUserData] = useState<User>()
  const {
    profile: {
      badges = [],
      sharingCodes = 0,
      climateImpactReport = {},
      switchItPoints = [],
      summary = {},
    } = {},
  } = userData || {}
  const [points, setTotalPoints] = useState(switchItPoints)

  useEffect(() => {
    const totalPoints = switchItPoints.reduce((acc: number, { points }: any) => acc + points, 0)

    setTotalPoints(totalPoints)
  }, [switchItPoints])

  useEffect(() => {
    user?._id && setUserData(user)
  }, [user])

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <S.Content>
        <S.ProfileContainer>
          <S.ProfileColumn>
            <Card column>
              <ProfileHead points={points} />
              <ProfileSummary data={summary} />
              <Card column shadow>
                <PointsTotal data={switchItPoints} points={points} />
              </Card>
            </Card>
          </S.ProfileColumn>
          <S.ProfileColumn>
            <Card>
              <SharingCodes total={sharingCodes} />
            </Card>
            <Card>
              <Badges data={badges} />
            </Card>
            <Card>
              <ClimateImpactReport data={climateImpactReport} />
            </Card>
          </S.ProfileColumn>
        </S.ProfileContainer>
      </S.Content>
    </>
  )
}

export default Profile
