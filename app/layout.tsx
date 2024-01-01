import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({subsets: ['latin'], weight: '400'})

export const metadata: Metadata = {
  title: 'Netatwork',
  description: 'Generated by create next app',
}

type LayoutProps = {
  children: React.ReactNode
}

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
export default RootLayout