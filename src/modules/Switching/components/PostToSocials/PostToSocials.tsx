import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { EditableContent } from '@components/EditableContent/EditableContent'
import { Fallback } from '@components/Fallback/Fallback'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import * as S from '@modules/Switching/Switching.style'
import { Content, TabsContainer } from '@styles/common.style'
import { actionText } from '@utils/constants'
import { FollowUs } from './FollowUs'
import { PostsContainer } from './PostToSocials.style'
import { socialPostsConfig } from './data'

const tabs: string[] = ['Twitter', 'Instagram Posts']

export const PostToSocials: NextPage = () => {
  const nextStep = useNextStep()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()

  const panels: [React.ReactNode, React.ReactNode] = [
    <PostsContainer key='twitter'>
      {socialPostsConfig.twitter.map((postsArray, i) => {
        return (
          <EditableContent
            key={i}
            btnText='Post'
            data={postsArray.join('\n\n')}
            type='post'
            meta='twitter'
          />
        )
      })}
    </PostsContainer>,
    <PostsContainer key='instagram'>
      {socialPostsConfig.instagramPosts.map((postsArray, i) => {
        return (
          <EditableContent
            key={i}
            btnText='Post'
            data={postsArray.join('\n\n')}
            type='instagramPosts'
            meta='instagramPosts'
          />
        )
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
              header='Post To Socials'
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
