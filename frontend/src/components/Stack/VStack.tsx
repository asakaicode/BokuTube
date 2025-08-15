'use client'

import { Stack } from '@mui/material'

const VStack: React.FC<{
  children: React.ReactNode
  spacing?: number
  tailwindStyle?: string
}> = ({ children, spacing, tailwindStyle }) => {
  return (
    <Stack direction="column" spacing={spacing ?? 2} className={tailwindStyle}>
      {children}
    </Stack>
  )
}

export default VStack
