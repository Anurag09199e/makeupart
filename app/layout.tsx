import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display as PlayfairDisplay, Poppins } from "next/font/google"
import "./globals.css"

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kanika Chanda | Professional Makeup Artist",
  description:
    "Kanika Chanda is a professional makeup artist based in Gurgaon, Delhi and NCR, offering bridal, party, and photoshoot makeup services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
