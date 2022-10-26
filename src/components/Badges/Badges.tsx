import type { NextPage } from 'next'
import { ProfileTitle } from '@modules/Profile/Profile.style'
import * as S from '@components/Badges/Badges.style'

export type Badge = {
  badge: string
  total: number
}

const icons: [string, string, string, string] = ['provider', 'programs', 'news', 'friends']

export const Badges: NextPage<{ data: Badge[] }> = ({ data = [] }): JSX.Element => {
  console.log('data', data)

  return (
    <S.Badges>
      <ProfileTitle>Awards Badges</ProfileTitle>

      <S.BadgesList>
        {data.map(({ badge, total }: Badge, i) => (
          <S.Item
            key={badge}
            style={{
              backgroundImage: `url(/icons/icon_${icons[i]}.svg)`,
            }}
          >
            {total} x {badge}
          </S.Item>
        ))}
      </S.BadgesList>
    </S.Badges>
  )
}
