import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Answr — Every Call. Every Lead. Answered.',
  description:
    'AI-powered missed call text-back for local businesses in the Eastside. We text back every missed call in under 30 seconds so your leads book with you, not your competitor.',
  keywords: 'missed call text back, AI receptionist, local business automation, Bellevue, Sammamish, Redmond, Kirkland',
  openGraph: {
    title: 'Answr — Every Call. Every Lead. Answered.',
    description: 'Stop losing customers to missed calls. Our AI texts back every caller in under 30 seconds, 24/7.',
    url: 'https://answr.info',
    siteName: 'Answr',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
