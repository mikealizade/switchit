import { FC } from 'react'
import * as S from './GreenBanks.style'
import { accountTypes, accountFeatures } from './data'

type BankFilterProps = {
  selectedAccountTypes: string[]
  selectedFeatures: string[]
  selectAccountType: (types: string[] | ((types: string[]) => string[])) => void
  selectFeatures: (features: string[] | ((types: string[]) => string[])) => void
}

export const BankFilters: FC<BankFilterProps> = ({
  selectedAccountTypes,
  selectedFeatures,
  selectAccountType,
  selectFeatures,
}): JSX.Element => {
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
                  selectAccountType((accountTypes: string[]): string[] => {
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
                  selectFeatures((features: string[]): string[] => {
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
