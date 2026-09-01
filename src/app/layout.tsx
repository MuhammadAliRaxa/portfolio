import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Apex Mobile Labs | Enterprise Mobile App Engineering Studio',
  description: 'Apex Mobile Labs architects and delivers mission-critical cross-platform mobile applications for iOS and Android using Flutter, Clean Architecture, and scalable cloud systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-dark-950 text-white">
        {children}
      </body>
    </html>
  )
}
