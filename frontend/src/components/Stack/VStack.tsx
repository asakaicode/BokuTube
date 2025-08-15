"use client"

import { Stack } from '@mui/material'

const VStack: React.FC<{
  children: React.ReactNode
  spacing?: number
}> = ({ children, spacing }) => {
  return (
    <Stack direction="column" spacing={spacing ?? 2}>
      {children}
    </Stack>
  )
}

export default VStack
