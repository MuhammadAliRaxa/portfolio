import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Muhammad Ali Raza | Flutter & Mobile App Developer',
  description: 'Portfolio of Muhammad Ali Raza — Results-driven Flutter Developer & CS Graduate with 15+ production apps shipped for Android and iOS using clean architecture, Bloc, Riverpod, and Firebase.',
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
