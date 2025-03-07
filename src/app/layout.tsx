import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
// import ParticleBackground from "@/components/particle-background"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pragyansh Saxena | Full Stack Developer",
  description:
    "Professional portfolio of Pragyansh Saxena, a Full Stack Developer specializing in React, Next.js, and Node.js.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* <ParticleBackground /> */}
          <div className="relative z-10">
            <Navbar />
            <main className="page-transition">{children}</main>
            <Toaster />
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}