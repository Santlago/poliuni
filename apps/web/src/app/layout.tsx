import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
          min-h-screen
          flex
          flex-col
          bg-base-100
          `}
      >
        <Navbar />
        <main className='grow container p-4'>
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
