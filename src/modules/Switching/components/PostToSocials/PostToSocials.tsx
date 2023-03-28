import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { EditableContent } from '@components/EditableContent/EditableContent'
import { Fallback } from '@components/Fallback/Fallback'
import { SocialMediaLinks } from '@components/SocialMediaLinks/SocialMediaLinks'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import * as S from '@modules/Switching/Switching.style'
import { Content, TabsContainer } from '@styles/common.style'
import { actionHeaderSubText } from '@utils/constants'
import { PostsContainer } from './PostToSocials.style'
import { socialPostsConfig } from './data'

const tabs: string[] = ['Twitter', 'Instagram Posts']

export const PostToSocials: NextPage = () => {
  const nextStep = useNextStep()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const { addPoints } = useUpdatePoints('actions')
  const { currentJourney: { badBank = '' } = {} } = useGetCurrentJourney()

  console.log('badBank:', badBank)

  const panels: [React.ReactNode, React.ReactNode] = [
    <PostsContainer key='twitter'>
      {socialPostsConfig(badBank).twitter.map((postsArray, i) => {
        return (
          <li key={i}>
            <EditableContent btnText='Post' data={postsArray.join('\n\n')} type='post' meta='twitter' />
          </li>
        )
      })}
    </PostsContainer>,
    <PostsContainer key='instagram'>
      {socialPostsConfig(badBank).instagramPosts.map((postsArray, i) => {
        return (
          <li key={i}>
            <EditableContent btnText='Post' data={postsArray.join('\n\n')} type='instagramPosts' meta='instagramPosts' />
          </li>
        )
      })}
    </PostsContainer>,
  ]

  const onNext = (): void => {
    nextStep(steps.postSocials, '/switching/tell-your-community')
    addPoints(100, true)
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded>
            <ActionHeader header='Post To Socials' subHeader={actionHeaderSubText.postToSocials} />

            <TabsContainer>
              <StyledTabs>
                <Tabs tabs={tabs} panels={panels}></Tabs>
              </StyledTabs>
            </TabsContainer>

            <S.Buttons>
              <SocialMediaLinks />
              <Button type='button' onClick={onNext}>
                Next Impact Action
              </Button>
            </S.Buttons>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}
