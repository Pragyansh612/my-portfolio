import type React from "react"
import "./globals.css"
import { DM_Sans, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import ScrollProgress from "@/components/scroll-progress"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" })
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Pragyansh Saxena | Software Engineer",
  description:
    "Portfolio of Pragyansh Saxena, a Software Engineer building production web, mobile, backend, and AI-powered systems.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          dmSans.className,
          dmSans.variable,
          bricolage.variable,
          instrumentSerif.variable,
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative z-10">
            <ScrollProgress />
            <Navbar />
            <main className="page-transition">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}