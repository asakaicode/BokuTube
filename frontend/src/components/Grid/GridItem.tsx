import { Grid } from '@mui/material'

const GridItem: React.FC<{
  size: number
  children: React.ReactNode
  tailwindStyle?: string
}> = ({ size, children, tailwindStyle }) => {
  return (
    <Grid item size={size} className={tailwindStyle}>
      {children}
    </Grid>
  )
}

export default GridItem
