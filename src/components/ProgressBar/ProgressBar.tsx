import { FC, useEffect, useState } from 'react'
import * as S from './ProgressBar.style'

const containerStyle = {
  borderRadius: '16px',
  background: 'var(--beige',
}

const contentStyle = {
  background: 'var(--sushi)',
  height: '18px',
  textAlign: 'center',
  lineHeight: '24px',
  fontFamily: 'sans-serif',
  transition: '1s',
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
  const [newStep, setStep] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setStep(step)
    }, 300)
  }, [step])

  const state = `${newStep * 20}%`
  return (
    <S.ProgressBarContainer>
      <div style={containerStyle}>
        <div style={{ ...contentStyle, width: state }}></div>
      </div>
      <S.Steps>
        {steps.map((step: string, i: number) => {
          const index = (i += 1)
          return (
            <S.Item key={step} isActive={newStep === index}>
              {step}
            </S.Item>
          )
        })}
      </S.Steps>
    </S.ProgressBarContainer>
  )
}
