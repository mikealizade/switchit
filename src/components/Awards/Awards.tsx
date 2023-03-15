import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/Awards/Awards.style'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import { Title } from '@styles/common.style'

export type Award = {
  badge: string
  total: number
  id: string
}

export const Awards: NextPage<{ data: Award[] }> = ({ data = [] }): JSX.Element => {
  const noPoints = data.every(({ total }) => total < 1)

  return (
    <S.Awards>
      <Title>
        Awards
        <Ellipsis section='awardsbadges' />
      </Title>

      <S.AwardsList noPoints={noPoints}>
        {data.map(({ badge, total, id: icon }: Award) => {
          const image = icon === 'programs' ? `${icon}_awards` : icon
          return (
            <S.Item key={badge} noPoints={noPoints}>
              {icon === 'programs' ? (
                <Image src={`/icons/icon_${image}${noPoints ? '_brown' : ''}.svg`} alt='' width={35} height={35} />
              ) : (
                <Image src={`/icons/icon_${image}.svg`} alt='' width={45} height={44} />
              )}
              {!noPoints && (
                <S.AwardData>
                  <S.Total>x {total}</S.Total>
                  <S.Label>{badge}</S.Label>
                </S.AwardData>
              )}
            </S.Item>
          )
        })}
      </S.AwardsList>
      {noPoints && <S.NoPoints>Collect badges by reading our resources, switching providers, inviting friends and more.</S.NoPoints>}
    </S.Awards>
  )
}
