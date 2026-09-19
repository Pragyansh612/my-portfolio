"use client"

import { motion } from "framer-motion"
import { Github, Mail, Linkedin, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border/60 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Pragyansh Saxena. Built with Next.js &amp; Tailwind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-3"
          >
            <Link
              href="https://github.com/Pragyansh612"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/60 p-2 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/pragyansh-saxena-3b94492b8"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/60 p-2 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:saxenapragyansh@gmail.com"
              className="rounded-full border border-border/60 p-2 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
            <button
              onClick={scrollToTop}
              className="rounded-full bg-primary p-2 text-primary-foreground transition-transform duration-300 hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
