import { FC, useEffect, useState } from 'react'
import * as S from './ProgressBar.style'

const containerStyle = {
  borderRadius: '16px',
  background: 'var(--beige)',
}

const contentStyle = {
  background: 'var(--sushi)',
  height: '18px',
  textAlign: 'center',
  lineHeight: '24px',
  fontFamily: 'sans-serif',
  borderRadius: '16px',
} as const

const steps: string[] = [
  'Select Bank',
  'Bank Score',
  'Switching Status',
  'Switching Journey',
  'The Switch',
]

export const ProgressBar: FC<{ step: number }> = ({ step }) => {
  const [style, setStyle] = useState<Record<string, string>>({
    ...contentStyle,
    width: `${(step - 1) * 20}%`,
  })

  useEffect(() => {
    const delay = setTimeout(() => {
      setStyle({ ...contentStyle, width: `${step * 20}%`, transition: '1s' })
    }, 800)

    return () => {
      clearTimeout(delay)
    }
  }, [step])

  return (
    <S.ProgressBarContainer>
      <div style={containerStyle}>
        <div style={{ ...style }}></div>
      </div>
      <S.Steps>
        {steps.map((item: string, i: number) => {
          const index = (i += 1)
          return (
            <S.Item key={item} isActive={step >= index}>
              {item}
            </S.Item>
          )
        })}
      </S.Steps>
    </S.ProgressBarContainer>
  )
}
