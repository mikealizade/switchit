import { FC, useState } from 'react'
import Image from 'next/image'
import { Button, TextButton } from '@components/Button/Button'
import * as S from './ActionChooseBank.style'

type BanksTableProps = {
  bankData: BankData[]
}

type BankData = {
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

export const BanksTable: FC<BanksTableProps> = ({ bankData }): JSX.Element => {
  const [expandedRow, setExpandRow] = useState<number | null>(null)

  const expandRow = (index: number | null) => () => {
    setExpandRow(index)
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
        {bankData.map(({ bank, details, score, fee, project, meta }: BankData, i: number) => (
          <>
            <tr key={bank}>
              <td scope='row'>{bank}</td>
              <td>{details}</td>
              <td>{score}</td>
              <td>{fee}</td>
              <td>{project}</td>
              <td>
                <Button type='button' mode='primary' size='small' onClick={() => {}}>
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
        ))}
      </tbody>
    </S.BanksTable>
  )
}