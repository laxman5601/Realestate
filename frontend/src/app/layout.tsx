import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ApolloWrapper } from '@/components/providers/ApolloWrapper'
import { ToastProvider } from '@/components/providers/ToastProvider'
import SiteHeader from '@/components/common/SiteHeader'
import SiteFooter from '@/components/common/SiteFooter'
import '@/styles/globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HireBuyer - Find the Right Property',
  description:
    'HireBuyer finds the best property matches using verified builder data, geospatial insights, and smart recommendations.',
  keywords: [
    'real estate',
    'property matching',
    'builder credibility',
    'investment properties',
    'hyderabad real estate',
    'PWA',
    'search',
  ],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hirebuyer.example.com',
    title: 'HireBuyer',
    description: 'Find the right property with trusted builder ratings and smart match recommendations.',
    siteName: 'HireBuyer',
    images: [
      {
        url: 'https://hirebuyer.example.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HireBuyer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireBuyer',
    description: 'Find the right property with trusted builder ratings and smart match recommendations.',
    images: ['https://hirebuyer.example.com/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        <ApolloWrapper>
          <ToastProvider>
            <div className="min-h-screen">
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </ToastProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
