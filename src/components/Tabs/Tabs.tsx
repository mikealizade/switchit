import { useState } from 'react'
import type { NextPage } from 'next'
import TabsPanel from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
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
  onSelectTab: (id: string) => () => void
}

const Panel = ({ children, value, index, ...rest }: TabPanelProps) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...rest}
      className='panel'
    >
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

export const Tabs: NextPage<TabsProps> = ({
  tabs = [],
  panels = [],
  centered = true,
  onSelectTab,
}): JSX.Element => {
  const [value, setValue] = useState(0)

  const onChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <S.Tabs>
      <TabsPanel
        value={value}
        onChange={onChange}
        aria-label='Switching Journeys'
        centered={centered}
        className='profile-tabs'
      >
        {tabs.map((tab, i: number) => (
          <Tab
            disableRipple
            key={tab.tab}
            label={tab.tab}
            {...a11yProps(i)}
            onClick={onSelectTab(tab.currentJourneyId)}
          />
        ))}
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
    </S.Tabs>
  )
}
