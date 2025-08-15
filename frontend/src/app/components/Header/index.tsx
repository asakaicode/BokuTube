'use client'

import { TextField, Typography } from '@mui/material'
import React from 'react'
import GridItem from '~/components/Grid/GridItem'
import MainLogo from '~/components/Icons/MainLogo'
import HStack from '~/components/Stack/HStack'

const Header: React.FC = () => {
  return (
    <HStack spacing={2}>
      <GridItem size={4} tailwindStyle="w-[240px] h-[54px]">
        <MainLogo />
      </GridItem>
      <GridItem size={4}>
        <TextField />
      </GridItem>
      <GridItem size={4}>
        <Typography>aaa</Typography>
      </GridItem>
    </HStack>
  )
}

export default Header
