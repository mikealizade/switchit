import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText, steps } from '@utils/constants'
import { useNextStep } from '@hooks/useNextStep'
import { useShareCode } from '@hooks/useShareCode'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'
import Image from 'next/image'
import { ShareButton } from '@styles/common.style'

const copyConfig = {
  letterColleagues: 'letterColleagues',
  letterFamily: 'letterFamily',
  letterParents: 'letterParents',
  letterFriends: 'letterFriendswefwewerwerwe',
  talkingPointsColleagues: 'talkingPointsColleagues',
  talkingPointsFamily: 'talkingPointsFamily',
  talkingPointsParents: 'talkingPointsParents',
  talkingPointsFriends: 'talkingPointsFriends',
}

const letterActions = [
  { text: 'Colleagues', copy: 'this is copy' },
  { text: 'Family', copy: 'this is copy2' },
  { text: 'Parents', copy: 'this is copy3' },
  { text: 'Friends', copy: 'this is copy4' },
]

export const ActionTellYourCommunity: NextPage = () => {
  const nextStep = useNextStep()
  const shareCode = useShareCode()

  const onCopy = (str: string) => () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(str)
    }
    return Promise.reject('The Clipboard API is not available.')
  }

  const onNext = (): void => {
    nextStep(steps.tellCommunity, '/switching/action-leave-reviews')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded>
            <ActionHeader
              header='Action: Tell Your Community'
              subHeader='Aunts and uncles not on Instagram?'
              text={actionText.tellCommunity}
            />

            <S.CommunityActions>
              <S.Actions>
                {letterActions.map(({ text }) => (
                  <S.Action key={text}>
                    For Your {text}
                    <S.CopyIcon
                      onClick={onCopy(copyConfig[`letter${text}` as keyof typeof copyConfig])}
                    >
                      <Image src={`/icons/icon_copy.svg`} alt='' width={25} height={32} />
                    </S.CopyIcon>
                  </S.Action>
                ))}
              </S.Actions>
              <S.Actions>
                {letterActions.map(({ text, copy }) => (
                  <S.Action key={text}>
                    For Your {text}
                    <S.CopyIcon
                      onClick={onCopy(copyConfig[`letter${text}` as keyof typeof copyConfig])}
                    >
                      <Image src={`/icons/icon_copy.svg`} alt='' width={25} height={32} />
                    </S.CopyIcon>
                  </S.Action>
                ))}
              </S.Actions>
            </S.CommunityActions>
            <ShareButton type='button' onClick={() => shareCode()} small>
              Share
              <Image src={`/icons/icon_airplane.svg`} alt='' width={34} height={29} />
            </ShareButton>
            <S.Buttons>
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
