import * as React from 'react'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import * as S from './Accordion.style'

const AccordionItem = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
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
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  fontSize: '2rem',
}))

type Award = {
  count: number
  type: string
  icon: string
}

export const Accordion = ({ data }: { data: any }) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <S.AccordionContainer>
      {data.map(({ count, type, icon }: Award, i: number) => (
        <AccordionItem
          key='type'
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header' sx={{ padding: 0 }}>
            <Typography
              sx={{ fontSize: '1.6rem', display: 'flex', alignItems: 'center', columnGap: '20px' }}
            >
              {count} x
              <Image src={`/icons/icon_${icon}.svg`} alt='' width={60} height={60} />
              {type}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: '1.5rem' }}>10/05/2023 - LSE University</Typography>
          </AccordionDetails>
        </AccordionItem>
      ))}
    </S.AccordionContainer>
  )
}
