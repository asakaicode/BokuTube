"use client"

import { Home } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import HStack from '~/components/Stack/HStack'
import VStack from '~/components/Stack/VStack'

const Sidebar: React.FC = () => {
  return (
    <VStack spacing={2}>
      <HStack spacing={2}>
        <Home />
        <Typography>ホーム</Typography>
      </HStack>
    </VStack>
  )
}

export default Sidebar
