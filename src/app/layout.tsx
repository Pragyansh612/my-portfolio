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

const title = "Pragyansh Saxena | Software Engineer"
const description =
  "Software Engineer with 2+ years building production web, mobile, backend, and AI/ML systems — including deep learning research with state-of-the-art results on speaker-detection benchmarks."

export const metadata = {
  metadataBase: new URL("https://pragyansh.vercel.app"),
  title,
  description,
  keywords: [
    "Pragyansh Saxena",
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Deep Learning",
    "React Native",
    "Next.js",
    "FastAPI",
  ],
  openGraph: {
    title,
    description,
    url: "https://pragyansh.vercel.app",
    siteName: "Pragyansh Saxena",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
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