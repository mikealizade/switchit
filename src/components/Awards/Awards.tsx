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
        {data.map(({ badge, total, id: icon }: Award, i: number) => (
          <S.Item key={badge} noPoints={noPoints}>
            <Image
              src={`/icons/icon_${icon}${noPoints ? '_brown' : ''}.svg`}
              alt=''
              width={55}
              height={i === 1 ? 38 : 48}
            />
            {!noPoints && (
              <S.AwardData>
                <S.Total>x {total}</S.Total>
                <S.Label>{badge}</S.Label>
              </S.AwardData>
            )}
          </S.Item>
        ))}
      </S.AwardsList>
      {noPoints && (
        <S.NoPoints>
          Collect badges by reading our resources, switching providers, inviting friends and more.
        </S.NoPoints>
      )}
    </S.Awards>
  )
}
