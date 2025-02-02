import Image from 'next/image'
import { FC, useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { Button, TextButton } from '@components/Button/Button'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { TextLink } from '@styles/common.style'
import * as S from './GreenBanks.style'
import monzo from '../../../../../public/icons/icon_monzo.png'
import nationwide from '../../../../../public/icons/icon_nationwide.png'
import starling from '../../../../../public/icons/icon_starling.png'
import triodos from '../../../../../public/icons/icon_triodos.png'

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
  projectLink: string
  donation: string
  meta: string[]
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
  const dispatch = useDispatch()
  const { currentJourney: { badBank = '' } = {} } = useGetCurrentJourney()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const nextStep = useNextStep()
  const [expandedRow, setExpandRow] = useState<number | null>(null)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const banks = bankData.filter(({ bank }) => bank !== badBank)

  const expandRow = (index: number | null) => (): void => {
    setExpandRow(index)
  }

  const onNext = (route: string) => (): void => {
    nextStep(steps.chooseGreenBank, `/switching/make-the-switch/${route}`, { goodBank: route })
  }

  return (
    <>
      {isMobile ? (
        <S.BanksList>
          {banks.map(({ route, icon, bank, details, donation, fee, project, projectLink, meta }: BankData, i: number) => (
            <S.BanksListItem key={route}>
              <S.Ellipsis onClick={expandRow(expandedRow === i ? null : i)}>
                <Image src={'/icons/icon_ellipsis.svg'} alt='' width={25} height={25} className='profile' />
              </S.Ellipsis>
              <S.BankItemHeader>
                <Image
                  src={logo[icon as keyof typeof logo].img.src}
                  alt={bank}
                  width={logo[icon as keyof typeof logo].width}
                  height={logo[icon as keyof typeof logo].height}
                />
                <S.BankItemName>{bank}</S.BankItemName>
                <S.BankItemHeaderDetails>{details}</S.BankItemHeaderDetails>
              </S.BankItemHeader>

              <S.BankItemDetails>
                <S.BankDetailsItem>
                  <S.DetailHeader>
                    Donation
                    <S.MoreInfo onClick={() => dispatch(toggleDrawer('donation'))}>
                      <Image src={`/icons/icon_moreinfo.svg`} alt='' width={13} height={20} />
                    </S.MoreInfo>
                  </S.DetailHeader>
                  {donation}
                </S.BankDetailsItem>
                <S.BankDetailsItem>
                  <S.DetailHeader>Monthly Fee</S.DetailHeader>
                  {fee}
                </S.BankDetailsItem>
                <S.BankDetailsItem>
                  <S.DetailHeader>Latest Green Project</S.DetailHeader>
                  <TextLink onClick={() => dispatch(toggleDrawer(projectLink))}>{project}</TextLink>
                </S.BankDetailsItem>
              </S.BankItemDetails>
              <S.ExpandableRowMobile isExpanded={expandedRow === i}>
                <S.BankMeta>
                  {meta.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </S.BankMeta>
              </S.ExpandableRowMobile>
              <Button type='button' mode='primary' size='small' onClick={onNext(route)}>
                Make The Switch
              </Button>
            </S.BanksListItem>
          ))}
        </S.BanksList>
      ) : (
        <S.BanksTable>
          <thead>
            <tr>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'>Monthly Fee</th>
              <th scope='col'>Latest Green Project</th>
              <th scope='col'>
                <S.DonationHeader>
                  Bank Donation
                  <S.MoreInfo onClick={() => dispatch(toggleDrawer('donation'))}>
                    <Image src={`/icons/icon_moreinfo.svg`} alt='' width={13} height={20} />
                  </S.MoreInfo>
                </S.DonationHeader>
              </th>
              <th scope='col'>Bank Details</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {banks.map(({ route, icon, bank, details, donation, fee, project, projectLink, meta }: BankData, i: number) => (
              <Fragment key={bank}>
                <tr>
                  <td scope='row'>
                    <Image
                      src={logo[icon as keyof typeof logo].img.src}
                      alt={bank}
                      width={logo[icon as keyof typeof logo].width}
                      height={logo[icon as keyof typeof logo].height}
                    />
                  </td>
                  <td>{details}</td>
                  <td>{fee}</td>
                  <td>
                    <TextLink onClick={() => dispatch(toggleDrawer(projectLink))}>{project}</TextLink>
                  </td>
                  <td>{donation}</td>
                  <td>
                    <TextButton type='button' mode='primary' onClick={expandRow(expandedRow === i ? null : i)}>
                      <Image src={`/icons/icon_chevron_${expandedRow === i ? 'down' : 'right'}.svg`} alt='' width={15} height={15} />
                    </TextButton>
                  </td>
                  <td>
                    <Button type='button' mode='primary' size='small' onClick={onNext(route)}>
                      Switch
                    </Button>
                  </td>
                </tr>
                <S.ExpandableRow isExpanded={expandedRow === i}>
                  <td colSpan={7}>
                    <S.BankMeta>
                      {meta.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </S.BankMeta>
                  </td>
                </S.ExpandableRow>
              </Fragment>
            ))}
          </tbody>
        </S.BanksTable>
      )}
    </>
  )
}
