import type { Metadata } from 'next'
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
        <header>
          <Header />
          <Sidebar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
