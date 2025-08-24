'use client'

import HStack from '~/components/Stack/HStack'
import VStack from '~/components/Stack/VStack'
import MovieCard from './components/MovieCard'

export default function Home() {
  return (
    <VStack spacing={59}>
      <HStack spacing={27}>
        <MovieCard />
        <MovieCard />
      </HStack>
    </VStack>
  )
}
