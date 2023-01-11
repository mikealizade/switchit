import type { NextPage } from 'next'
import * as S from '@components/Badges/Badges.style'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import { Title } from '@styles/common.style'

export type Badge = {
  badge: string
  total: number
}

const icons: [string, string, string, string] = ['provider', 'programs', 'news', 'friends']

export const Badges: NextPage<{ data: Badge[] }> = ({ data = [] }): JSX.Element => {
  return (
    <S.Badges>
      <Title>
        Awards Badges
        <Ellipsis section='awardsbadges' />
      </Title>

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
