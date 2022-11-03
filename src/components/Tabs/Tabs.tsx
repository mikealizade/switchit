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
}): JSX.Element => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <S.Tabs>
      <TabsPanel
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'
        centered={centered}
        className='profile-tabs'
      >
        {tabs.map((tab: string, i: number) => (
          <Tab disableRipple key={tab} label={tab} {...a11yProps(i)} />
        ))}
      </TabsPanel>
      <>
        {panels.map((panel: React.ReactNode, i: number) => {
          return (
            <Panel key={`panel-${panel}`} value={value} index={i}>
              {panel}
            </Panel>
          )
        })}
      </>
    </S.Tabs>
  )
}
