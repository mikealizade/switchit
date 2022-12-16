import { FC, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button, TextButton } from '@components/Button/Button'
import { useSaveStep } from '@hooks/useSaveStep'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import * as S from './ActionChooseBank.style'
import starling from '../../../public/icons/icon_starling.png'
import monzo from '../../../public/icons/icon_monzo.png'
import triodos from '../../../public/icons/icon_triodos.png'
import nationwide from '../../../public/icons/icon_nationwide.png'

type BanksTableProps = {
  bankData: BankData[]
}

type BankData = {
  route: string
  icon: string
  bank: string
  details: string
  score: string
  fee: string
  project: string
  meta: {
    personal: string[]
    student: string[]
  }
}

const logo = {
  starling: {
    img: starling,
    width: 89,
    height: 28,
  },
  monzo: {
    img: monzo,
    width: 60,
    height: 58,
  },
  triodos: {
    img: triodos,
    width: 119,
    height: 15,
  },
  nationwide: {
    img: nationwide,
    width: 121,
    height: 27,
  },
}

export const BanksTable: FC<BanksTableProps> = ({ bankData }): JSX.Element => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const saveStep = useSaveStep()
  const { currentJourney } = useGetCurrentJourney()
  const [expandedRow, setExpandRow] = useState<number | null>(null)

  const expandRow = (index: number | null) => (): void => {
    setExpandRow(index)
  }

  const onNext = (route: string) => (): void => {
    dispatch(
      setJourneyData({
        completedSteps: Array.from(new Set([...currentJourney!.completedSteps, 2])),
      }),
    )
    saveStep(2)
    push(`/switching/make-the-switch/${route}`)
  }

  return (
    <S.BanksTable>
      <thead>
        <tr>
          <th scope='col'>Bank</th>
          <th scope='col'>Details</th>
          <th scope='col'>Switch It Score</th>
          <th scope='col'>Monthly Fee</th>
          <th scope='col'>Latest Green Project</th>
          <th scope='col'></th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {bankData.map(
          ({ route, icon, bank, details, score, fee, project, meta }: BankData, i: number) => (
            <>
              <tr key={bank}>
                <td scope='row'>
                  <Image
                    src={logo[icon as keyof typeof logo].img.src}
                    alt={bank}
                    width={logo[icon as keyof typeof logo].width}
                    height={logo[icon as keyof typeof logo].height}
                  />
                </td>
                <td>{details}</td>
                <td>{score}</td>
                <td>{fee}</td>
                <td>{project}</td>
                <td>
                  <Button type='button' mode='primary' size='small' onClick={onNext(route)}>
                    Make The Switch
                  </Button>
                </td>
                <td>
                  <TextButton
                    type='button'
                    mode='primary'
                    onClick={expandRow(expandedRow === i ? null : i)}
                  >
                    Details{' '}
                    <Image
                      src={`/icons/icon_chevron_${expandedRow === i ? 'down' : 'right'}.svg`}
                      alt=''
                      width={15}
                      height={15}
                    />
                  </TextButton>
                </td>
              </tr>
              <S.ExpandableRow isExpanded={expandedRow === i}>
                <td colSpan={7}>
                  <S.BankMeta>
                    {meta.personal.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </S.BankMeta>
                </td>
              </S.ExpandableRow>
            </>
          ),
        )}
      </tbody>
    </S.BanksTable>
  )
}
