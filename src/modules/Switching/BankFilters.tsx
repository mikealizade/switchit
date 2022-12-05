import { FC } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { accountTypes, accountFeatures } from '@utils/constants'
// import * as S from '@modules/Switching/PreSwitching.style'
import * as S from './ActionChooseBank.style'

type BankFilterProps = {
  selectedAccountTypes: string[]
  selectedFeatures: string[]
  selectAccountType: (types: string[]) => void
  selectFeatures: (features: string[]) => void
}

export const BankFilters: FC<BankFilterProps> = ({
  selectedAccountTypes,
  selectedFeatures,
  selectAccountType,
  selectFeatures,
}): JSX.Element => {
  const dispatch = useDispatch()
  const { push } = useRouter()

  const clearFilters = () => {
    selectAccountType([])
    selectFeatures([])
  }

  return (
    <S.BankFilter>
      <S.AccountList>
        <li>
          <h3>Account Type</h3>
        </li>
        {accountTypes.map(accountType => {
          return (
            <li key={accountType}>
              <S.AccountTypeButton
                type='button'
                isActive={selectedAccountTypes.includes(accountType)}
                onClick={() =>
                  selectAccountType(accountTypes => {
                    if (selectedAccountTypes.includes(accountType)) {
                      return selectedAccountTypes.filter((type: string) => type !== accountType)
                    }
                    return [...accountTypes, ...[accountType]]
                  })
                }
              >
                {accountType}
              </S.AccountTypeButton>
            </li>
          )
        })}
      </S.AccountList>
      <S.AccountList>
        <li>
          <h3>Account Features</h3>
        </li>
        {accountFeatures.map(({ type, text }: { type: string; text: string }) => {
          return (
            <li key={type}>
              <S.Label
                onClick={() =>
                  selectFeatures(features => {
                    if (selectedFeatures.includes(type)) {
                      return selectedFeatures.filter((feature: string) => feature !== type)
                    }
                    return [...features, ...[type]]
                  })
                }
              >
                <S.Checkbox isActive={selectedFeatures.includes(type)} />
                {text}
              </S.Label>
            </li>
          )
        })}
      </S.AccountList>
      <S.ClearFiltersButton onClick={clearFilters}>Clear Filters</S.ClearFiltersButton>
    </S.BankFilter>
  )
}
