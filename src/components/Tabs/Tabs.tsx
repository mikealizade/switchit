import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabsPanel from '@mui/material/Tabs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from '@components/Tabs/Tabs.style'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

interface TabsProps {
  tabs: Array<string>
  panels: Array<React.ReactNode>
  centered?: boolean
  hasMobileButtons?: boolean
  onSelectTab?: (id: string) => () => void
}

const Panel = ({ children, value, index, ...rest }: TabPanelProps) => {
  return (
    <div role='tabpanel' hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...rest} className='panel'>
      {value === index && <>{children}</>}
    </div>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const isStringArray = (array: string[]): array is string[] => typeof array[0] === 'string'

export const Tabs: NextPage<TabsProps> = ({ tabs = [], panels = [], hasMobileButtons = false, onSelectTab }): JSX.Element => {
  const {
    replace,
    query: { tab },
  } = useRouter()
  const tabIndex = isStringArray(tabs) ? tabs.findIndex(item => item.toLowerCase().replace(/\s/, '') === tab) : 0
  const [value, setValue] = useState(tabIndex >= 0 ? tabIndex : 0)

  const onChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    tab && replace('/help', undefined, { shallow: true })
  }

  return (
    <S.Tabs className={hasMobileButtons ? 'hasMobileButtons' : ''}>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: '85vw', sm: '90vw' },
        }}
      >
        <TabsPanel value={value} onChange={onChange} aria-label='Switching Journeys' className='tabs-menu' variant='scrollable'>
          {tabs.map((tab: any, i: number) => {
            const tabItem = onSelectTab ? tab.tab : tab

            return (
              <Tab
                disableRipple
                key={tabItem}
                label={tabItem}
                {...a11yProps(i)}
                {...(onSelectTab && { onClick: onSelectTab(tab.currentJourneyId) })}
              />
            )
          })}
        </TabsPanel>
        <>
          {panels.map((panel: React.ReactNode, i: number) => {
            return (
              <Panel key={`panel-${i}`} value={value} index={i}>
                {panel}
              </Panel>
            )
          })}
        </>
      </Box>
    </S.Tabs>
  )
}
