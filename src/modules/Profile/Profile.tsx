import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch, useSelector } from 'react-redux'
import { Awards, Award } from '@components/Awards/Awards'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { User } from '@components/User/User'
import { SharingCodes } from '@modules/Dashboard/components/SharingCodes/SharingCodes'
import { RootState } from '@state/store'
import * as S from '@styles/common.style'
import { ClimateImpactReport } from './components/ClimateImpactReport/ClimateImpactReport'
import { PointsTotal, PointsTotalProps } from './components/PointsTotal/PointsTotal'
import { ProfileHead } from './components/ProfileHead/ProfileHead'
import { ProfileSummary, ProfileSummaryProps } from './components/ProfileSummary/ProfileSummary'
import { SwitchingFriends } from './components/SwitchingFriends/SwitchingFriends'

export type User = {
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
  programCode: string
  referralCode: string
  profile: {
    badges: Award[]
    summary: ProfileSummaryProps
    sharingCodes: Array<string>
    switchItPoints: PointsTotalProps
  }
}

const Profile = (): JSX.Element => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const [userData, setUserData] = useState<User>(user)
  const { profile: { badges = [], sharingCodes = [], switchItPoints = [], summary = {} } = {} } = userData

  useEffect(() => {
    if (user) {
      setUserData(user)
    }
  }, [user, dispatch])

  return (
    <>
      <Head>
        <title>Switch It Green | Your Profile</title>
        <meta name='description' content='Switch to a green bank on our Green Banking Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <S.ColumnContainer>
            <S.Column>
              <Card column stretch>
                <ProfileHead />
                <ProfileSummary data={summary} />
              </Card>
            </S.Column>
            <S.Column>
              <Card>
                <SharingCodes total={sharingCodes.length} hasEllipsis />
              </Card>
              <Card>
                <Awards data={badges} />
              </Card>
              <Card column>
                <PointsTotal data={switchItPoints} />
              </Card>
            </S.Column>
            <S.ProfileColumnRight>
              <Card stretch>
                <SwitchingFriends />
              </Card>
              <Card>
                <ClimateImpactReport />
              </Card>
            </S.ProfileColumnRight>
          </S.ColumnContainer>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}

export default Profile
