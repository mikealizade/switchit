import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import * as S from '@components/SelectActionCard/SelectActionCard.style'
import { RootState } from '@state/store'
import { actionsConfig } from '@utils/data'

export const SelectActionCard: NextPage<{ action: any; isActive: boolean }> = ({
  action: { actionTitle, actionText, icon },
  isActive = false,
}): JSX.Element => {
  return (
    <S.SelectActionCard className={isActive ? 'isActive' : ''}>
      <S.HeaderContainer>
        <Image src={`/icons/icon_${icon}.svg`} alt='' width={70} height={70} />
        <S.Header>{actionTitle}</S.Header>
      </S.HeaderContainer>
      <S.Text>{actionText}</S.Text>
    </S.SelectActionCard>
  )
}

export const SelectActionCards = () => {
  const actionCardIndex = useSelector((state: RootState) => state.generic.actionCardIndex)

  return (
    <S.SelectActionContainer>
      {actionsConfig.map((action, i) => (
        <SelectActionCard key={action.route} action={action} isActive={i === actionCardIndex} />
      ))}
    </S.SelectActionContainer>
  )
}
