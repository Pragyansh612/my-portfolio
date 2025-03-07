"use client"

import { motion } from "framer-motion"
import { Github, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Pragyansh Saxena. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4 mt-4 md:mt-0"
          >
            <Link
              href="https://github.com/Pragyansh612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:saxenapragyansh@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
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

