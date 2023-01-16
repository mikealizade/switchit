import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { SocialPost } from '@components/SocialPost/SocialPost'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { Program } from '@modules/Programs/Programs.style'
import * as S from '@modules/Switching/Switching.style'
import { Content, TabsContainer } from '@styles/common.style'
import { actionText } from '@utils/constants'
import { FollowUs } from './FollowUs'
import { Post } from './Post'
import { PostsContainer } from './PostToSocials.style'
import { socialPostsConfig } from './data'

const tabs: string[] = ['Twitter', 'Instagram Stories', 'Instagram Posts']

export const PostToSocials: NextPage = () => {
  const nextStep = useNextStep()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()

  const panels: [React.ReactNode, React.ReactNode, React.ReactNode] = [
    <PostsContainer key='twitter'>
      {socialPostsConfig.twitter.map((postsArray, i) => {
        return <Post key={i} post={postsArray.join('\n\n')} type='twitter' index={i} />
      })}
    </PostsContainer>,
    <PostsContainer key='facebook'>
      {socialPostsConfig.instagramStories.map((postsArray, i) => {
        return <Post key={i} post={postsArray.join('\n\n')} type='instagramStories' index={i} />
      })}
    </PostsContainer>,
    <PostsContainer key='instagram'>
      {socialPostsConfig.instagramPosts.map((postsArray, i) => {
        return <Post key={i} post={postsArray.join('\n\n')} type='instagramPosts' index={i} />
      })}
    </PostsContainer>,
  ]

  const onNext = (): void => {
    nextStep(steps.postSocials, '/switching/tell-your-community')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column>
            <ActionHeader
              header='Action: Post To Socials'
              subHeader='Get the word out'
              text={actionText.postToSocials}
            />

            <TabsContainer>
              <StyledTabs>
                <Tabs tabs={tabs} panels={panels}></Tabs>
              </StyledTabs>
            </TabsContainer>

            <S.Buttons>
              <FollowUs />
              <Button type='button' size='small' onClick={onNext}>
                Next Impact Action
              </Button>
            </S.Buttons>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}
