import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas-neue',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VANE Performance | Elite Personal Coaching by Jaxson Vane',
  description: 'Transform your body and life with the Jaxson Method. Science-backed personal training for busy professionals. Limited spots available.',
  keywords: 'personal training, fitness coaching, elite coaching, Jaxson Vane, VANE Performance',
  robots: 'index, follow',
  openGraph: {
    title: 'VANE Performance | Transform Your Life',
    description: 'Join elite professionals getting results with the Jaxson Method. Science-backed personal training.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VANE Performance | Elite Personal Coaching',
    description: 'Transform your body and life with the Jaxson Method.',
  },
}

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
