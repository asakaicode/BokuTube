'use client'
/* stylelint-disable */

import Head from 'next/head'
import { useCallback, useEffect } from 'react'
import VStack from '~/components/Stack/VStack'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './globals.css'

const MAIN_WIDTH = 1198

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const onResize = useCallback(() => {
    const width = window.innerWidth - 244 - 27 * 2
    const adjusted = width < MAIN_WIDTH ? width : MAIN_WIDTH
    const scale = adjusted / MAIN_WIDTH
    document.documentElement.style.setProperty('--main-scale', scale.toString())
  }, [])

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [onResize])

  return (
    <html lang="ja">
      <Head>
        <title>BokuTube - Top</title>
        <meta
          name="description"
          content="BokuTube is a video sharing platform."
        />
      </Head>
      <body>
        <header className="fixed top-0 left-0 z-10">
          <VStack>
            <Header />
            <Sidebar />
          </VStack>
        </header>
        <main className="absolute top-[54px] left-[244px] mt-[25px] ml-[27px] scaledMain">
          {children}
        </main>
      </body>
    </html>
  )
}
