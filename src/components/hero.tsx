"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-medium"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight"
              >
                Pragyansh Saxena
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-foreground/80 leading-tight"
              >
                Full Stack Developer
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              I build modern, responsive web applications with a focus on performance, accessibility, and user
              experience. Specializing in React, Next.js, and Node.js ecosystems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="glassmorphism-button group">
                <Link href="/contact">
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glassmorphism-button-outline">
                <Link href="/projects">View My Work</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glassmorphism-card">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">About Me</h3>
              <p className="text-muted-foreground mb-4">
                I&apos;m a passionate Full Stack Developer currently pursuing my B.Tech at
                the Indian Institute of Technology, Mandi. With a strong foundation in both front-end and back-end
                technologies, I specialize in creating efficient, scalable, and user-friendly web applications.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in tech has been marked by a continuous desire to learn and innovate. From leading web
                development teams for major events to contributing to open-source projects, I&apos;ve honed my skills in a
                variety of real-world scenarios.
              </p>
              <p className="text-muted-foreground">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to the developer
                community, or working on personal projects that challenge my skills and creativity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

