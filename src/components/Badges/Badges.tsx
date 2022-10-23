import type { NextPage } from 'next'
import { ProfileTitle } from '@modules/Profile/Profile.style'
import * as S from '@components/Badges/Badges.style'

export type Badge = {
  badge: 'Campaigns  Completed'
  total: 1
}

export const Badges: NextPage<{ data: Badge[] }> = ({ data = [] }) => {
  return (
    <S.Badges>
      <ProfileTitle>Awards Badges</ProfileTitle>

      <S.BadgesList>
        {data.map(({ badge, total }: { badge: string; total: number }) => (
          <S.Item key={badge}>
            {total} x {badge}
          </S.Item>
        ))}
      </S.BadgesList>
    </S.Badges>
  )
}
