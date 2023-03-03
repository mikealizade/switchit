import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { useState } from 'react'
import * as S from './Accordion.style'

type Award = {
  total: number
  badge: string
  id: string
}

const AccordionItem = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
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
))(() => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  fontSize: '2rem',
}))

export const Accordion = ({ data }: { data: any }) => {
  const [expanded, setExpanded] = useState<string | false>('')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <S.AccordionContainer>
      {data.map(({ total, badge, id: icon }: Award, i: number) => (
        <AccordionItem
          key={`badge${i}`}
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header' sx={{ padding: 0 }}>
            <Typography
              sx={{ fontSize: '1.6rem', display: 'flex', alignItems: 'center', columnGap: '20px' }}
            >
              {total} x
              <Image src={`/icons/icon_${icon}.svg`} alt='' width={60} height={60} />
              {badge}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: '1.5rem' }}></Typography>
          </AccordionDetails>
        </AccordionItem>
      ))}
    </S.AccordionContainer>
  )
}
