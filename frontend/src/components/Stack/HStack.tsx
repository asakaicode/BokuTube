import { Stack } from '@mui/material'

const HStack: React.FC<{
  children: React.ReactNode
  spacing?: number
}> = ({ children, spacing }) => {
  return (
    <Stack direction="row" spacing={spacing ?? 2}>
      {children}
    </Stack>
  )
}

export default HStack
