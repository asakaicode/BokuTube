'use client'

import { Stack } from '@mui/material'

const HStack: React.FC<{
  children: React.ReactNode
  spacing?: number
  tailwindStyle?: string
}> = ({ children, spacing, tailwindStyle }) => {
  return (
    <Stack direction="row" spacing={spacing ?? 2} className={tailwindStyle}>
      {children}
    </Stack>
  )
}

export default HStack
