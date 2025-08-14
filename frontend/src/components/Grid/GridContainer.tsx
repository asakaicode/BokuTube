import { Grid } from '@mui/material'

const GridContainer: React.FC<{
  children: React.ReactNode
  tailwindStyle?: string
}> = ({ children, tailwindStyle }) => {
  return (
    <Grid container className={tailwindStyle}>
      {children}
    </Grid>
  )
}

export default GridContainer
