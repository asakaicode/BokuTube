import type { Metadata } from 'next'
import VStack from '~/components/Stack/VStack'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: 'BokuTube - Top',
  description: 'BokuTube is a video sharing platform.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="fixed top-0 left-0 z-10">
          <VStack>
            <Header />
            <Sidebar />
          </VStack>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
