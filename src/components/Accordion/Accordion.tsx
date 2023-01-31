import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { useState } from 'react'
import { ParagraphCopy, CopyIcon } from '@styles/common.style'
import { onCopy } from '@utils/functions'
import * as S from './Accordion.style'

type FAQ = {
  text: string
  copy: string | string[]
}

const AccordionItem = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:not(:last-child)': {
    borderBottom: '1px solid #ada9a3',
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<Image src={'/icons/icon_chevron_right.svg'} alt='' width={18} height={18} />}
    {...props}
  />
))(() => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  fontSize: '2rem',
  padding: '8px 0 20px',
  rowGap: '25px',
  display: 'flex',
  flexDirection: 'column',
}))

export const Accordion = ({ data, hasCopyIcon = false }: { data: any; hasCopyIcon?: boolean }) => {
  const [expanded, setExpanded] = useState<string | false>('')
  const [hasCopied, setHasCopied] = useState(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const onCopyText = (content: string) => {
    onCopy(content)()
    setHasCopied(true)

    const delay = setTimeout(() => {
      setHasCopied(false)
      clearTimeout(delay)
    }, 1000)
  }

  return (
    <S.AccordionContainer>
      {data.map(({ text, copy }: FAQ, i: number) => {
        const content = Array.isArray(copy) ? copy.join('\n\n') : copy
        return (
          <AccordionItem
            key={`type${i}`}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
          >
            <AccordionSummary
              aria-controls='panel1d-content'
              id='panel1d-header'
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontSize: '1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '20px',
                }}
              >
                {text}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {hasCopyIcon && (
                <CopyIcon onClick={() => onCopyText(content)}>
                  <Image
                    src={`/icons/icon_copy${hasCopied ? '_on' : ''}.svg`}
                    alt=''
                    width={25}
                    height={32}
                  />
                </CopyIcon>
              )}

              {Array.isArray(copy) ? (
                <ParagraphCopy>
                  {copy.map((item: string, i: number) => (
                    <S.Para key={`para-${i}`}>{item}</S.Para>
                  ))}
                </ParagraphCopy>
              ) : (
                <Typography sx={{ fontSize: '1.5rem' }}>{copy}</Typography>
              )}
            </AccordionDetails>
          </AccordionItem>
        )
      })}
    </S.AccordionContainer>
  )
}
