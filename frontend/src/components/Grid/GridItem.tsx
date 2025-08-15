"use client"

import { Grid } from '@mui/material'

const GridItem: React.FC<{
  size: number
  children: React.ReactNode
  tailwindStyle?: string
}> = ({ size, children, tailwindStyle }) => {
  return (
    <Grid xs={size} className={tailwindStyle}>
      {children}
    </Grid>
  )
}

export default GridItem
