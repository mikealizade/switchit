import { FC, useEffect, useState } from 'react'
import * as S from './ProgressBar.style'

type Bar = {
  borderRadius: string
  background: string
  foreground: string
  height: string
  lineHeight: string
  fontFamily: string
  steps: [] | string[]
}

const barConfig = {
  journey: {
    borderRadius: '16px',
    background: 'var(--beige)',
    foreground: 'var(--sushi)',
    height: '18px',
    lineHeight: '24px',
    fontFamily: 'sans-serif',
    steps: ['Current Bank', 'Bank Score', 'Green Banks', 'Switch', 'Confirm'],
  },
  impact: {
    borderRadius: '25px',
    background: 'var(--haze)',
    foreground: 'var(--nileBlue)',
    height: '40px',
    lineHeight: '46px',
    fontFamily: 'sans-serif',
    steps: [],
  },
}

const containerStyle = (bar: Bar) => {
  return {
    borderRadius: bar.borderRadius,
    background: bar.background,
  }
}

const contentStyle = (bar: Bar) => {
  return {
    background: bar.foreground,
    height: bar.height,
    textAlign: 'center',
    lineHeight: bar.lineHeight,
    fontFamily: 'sans-serif',
    borderRadius: bar.borderRadius,
  }
}

export const ProgressBar: FC<{ step: number; type?: string }> = ({ step, type = 'journey' }) => {
  const bar = barConfig[type as keyof typeof barConfig]
  const stepPercentage = type === 'journey' ? 20 : 16.66
  const [style, setStyle] = useState<Record<string, string>>({
    ...contentStyle,
    width: `${(step - 1) * 20}%`,
  })

  useEffect(() => {
    const delay = setTimeout(() => {
      setStyle({ ...contentStyle(bar), width: `${step * stepPercentage}%`, transition: '1s' })
    }, 800)

    return () => {
      clearTimeout(delay)
    }
  }, [step, type, bar, stepPercentage])

  return (
    <S.ProgressBarContainer>
      {type === 'impact' && <S.Header>Impact Bar</S.Header>}
      <div style={containerStyle(bar)}>
        <div style={{ ...style }}></div>
      </div>
      {!!bar.steps.length && (
        <S.Steps>
          {bar.steps.map((item: string, i: number) => {
            const index = (i += 1)
            return (
              <S.Item key={item} isActive={step >= index}>
                {item}
              </S.Item>
            )
          })}
        </S.Steps>
      )}
    </S.ProgressBarContainer>
  )
}
