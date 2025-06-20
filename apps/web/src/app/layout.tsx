import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'
import ClientLayout from '@/clientLayout/ClientLayout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "PoliUni",
  description: "Poliglotas no Universo!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" data-theme="light">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          h-screen
          flex
          flex-col
          bg-base-100
          `}
      >
        <ClientLayout>
          <Navbar />
          <main className='grow bg-base-300 overflow-auto' style={{ scrollbarWidth: 'thin' }}>
            {children}
          </main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  )
}
