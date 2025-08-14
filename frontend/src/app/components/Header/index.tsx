import { TextField, Typography } from '@mui/material'
import React from 'react'
import GridContainer from '~/components/Grid/GridContainer'
import GridItem from '~/components/Grid/GridItem'

const Header: React.FC = () => {
  return (
    <GridContainer tailwindStyle="h-[54px]">
      <GridItem size={4}>
        <Typography variant="h1">BokuTube</Typography>
      </GridItem>
      <GridItem size={4}>
        <TextField />
      </GridItem>
      <GridItem size={4}>
        <Typography>aaa</Typography>
      </GridItem>
    </GridContainer>
  )
}

export default Header
