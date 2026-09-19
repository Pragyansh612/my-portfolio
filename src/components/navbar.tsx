"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsOpen((v) => !v)

  if (!mounted) return null

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-3 md:top-4 left-0 right-0 z-50 px-3 md:px-4"
    >
      <div
        className={`container mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-5 py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-extrabold text-primary-foreground transition-transform duration-300 group-hover:scale-105">
              PS
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Pragyansh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/50 bg-secondary/40 p-1">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    active ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-border/60 bg-secondary/40 p-2 text-foreground/80 transition-colors duration-300 hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              href={pathname === "/" ? "#contact" : "/contact"}
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-4px_hsl(var(--primary)/0.6)]"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-border/60 bg-secondary/40 p-2 text-foreground/80"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleMenu}
              className="rounded-full border border-border/60 bg-secondary/40 p-2 text-foreground/80"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <nav className="flex flex-col gap-1 px-3 py-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-xl px-3 py-2.5 text-base transition-colors duration-300 ${
                      pathname === item.href
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/80 hover:bg-secondary/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href={pathname === "/" ? "#contact" : "/contact"}
                  className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-base font-semibold text-primary-foreground"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
