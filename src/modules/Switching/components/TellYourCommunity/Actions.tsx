import type { NextPage } from 'next'
import Image from 'next/image'
import { CopyIconHover } from '@styles/common.style'
import { onCopy } from '@utils/functions'
import * as S from './TellYourCommunity.style'

type ActionsProps = { text: string; copy: string }[]

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

export const Actions: NextPage<{ actions: ActionsProps; type: string }> = ({ actions, type }) => {
  return (
    <S.Actions>
      {actions.map(({ text }: { text: string }) => (
        <S.Action key={text}>
          For Your {text}
          <CopyIconHover onClick={onCopy(copyConfig[`${type}${text}` as keyof typeof copyConfig])}>
            <Image src={`/icons/icon_copy.svg`} alt='' width={25} height={32} />
          </CopyIconHover>
        </S.Action>
      ))}
    </S.Actions>
  )
}
