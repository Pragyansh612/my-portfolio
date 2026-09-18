"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Phone, Mail, Github, Linkedin, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"
import { DotPattern } from "@/components/ui/dot-pattern"
import { NumberTicker } from "@/components/ui/number-ticker"
import Link from "next/link"

const roles = ["Software Engineer", "Full-Stack Developer", "AI/ML Engineer", "Backend Architect"]

const stats = [
  { value: 10000, suffix: "+", label: "Users Served" },
  { value: 99.9, suffix: "%", label: "Uptime Delivered", decimals: 1 },
  { value: 40, suffix: "%", label: "Latency Reduced" },
  { value: 50, suffix: "K+", label: "Embeddings Indexed" },
]

const floatingBadges = [
  { label: "Python", className: "-top-5 left-8 md:left-12", delay: 0 },
  { label: "Go", className: "top-1/3 -right-6 md:-right-16", delay: 0.6 },
  { label: "Next.js", className: "top-2/3 -left-6 md:-left-20", delay: 1.2 },
  { label: "RAG / LLMs", className: "-bottom-5 right-8 md:right-12", delay: 1.8 },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <DotPattern
        glow
        className="absolute inset-0 -z-20 h-full w-full bg-grid-fade [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black_20%,transparent_100%)] fill-primary/25"
      />
      <div className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px] animate-glow-pulse" />
      <div className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-gold/15 blur-[120px] animate-glow-pulse [animation-delay:1.5s]" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-eyebrow"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Open to Software Engineering roles
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                Hi, I&apos;m{" "}
                <span className="text-gradient">Pragyansh Saxena</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex h-9 items-center text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/85"
              >
                <span className="mr-2 text-muted-foreground">/</span>
                <span className="relative inline-grid">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={roles[roleIndex]}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="text-gradient-gold col-start-1 row-start-1"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              2+ years building production web, mobile, backend, and AI-powered systems.
              Delivered systems serving 10,000+ users at 99.9% uptime, cut API latency by up
              to 40%, and shipped RAG pipelines over 50,000+ embeddings using Python, Go,
              TypeScript, Next.js, FastAPI, and PostgreSQL.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
            >
              <Link href="mailto:saxenapragyansh@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                saxenapragyansh@gmail.com
              </Link>
              <Link href="tel:+917999610227" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                +91 7999610227
              </Link>
              <Link
                href="https://linkedin.com/in/pragyansh-saxena-3b94492b8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <Link href="#contact">
                <ShimmerButton
                  background="linear-gradient(110deg, hsl(var(--primary)), #a855f7)"
                  shimmerColor="#ffffff"
                  className="px-6 py-3 text-sm font-semibold"
                >
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ShimmerButton>
              </Link>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/70 bg-secondary/30 backdrop-blur-md hover:bg-secondary/60 hover:border-primary/40 transition-all duration-300"
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10 transition-all duration-300">
                <Link href="https://github.com/Pragyansh612" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-md px-3 py-3 text-center sm:text-left"
                >
                  <div className="font-display text-xl md:text-2xl font-bold text-gradient">
                    <NumberTicker
                      value={stat.value}
                      decimalPlaces={stat.decimals ?? 0}
                      className="text-gradient font-display"
                    />
                    {stat.suffix}
                  </div>
                  <div className="mt-0.5 text-[11px] md:text-xs text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className={`pointer-events-none absolute z-10 hidden sm:block ${badge.className}`}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
              >
                <span className="inline-flex items-center rounded-full border border-primary/25 bg-background/80 px-3 py-1.5 text-xs font-mono font-medium text-primary shadow-lg shadow-primary/10 backdrop-blur-md">
                  {badge.label}
                </span>
              </motion.div>
            ))}

            <div className="relative z-20 rounded-3xl">
              <MagicCard
                className="rounded-3xl p-[1px]"
                gradientColor="hsl(var(--primary) / 0.25)"
                gradientFrom="hsl(var(--primary))"
                gradientTo="hsl(var(--gold))"
              >
                <div className="relative overflow-hidden rounded-3xl p-6 lg:p-8">
                  <BorderBeam size={60} duration={8} colorFrom="hsl(var(--primary))" colorTo="hsl(var(--gold))" />
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-violet-500 to-purple-600 font-display text-2xl font-bold text-white shadow-lg shadow-primary/30">
                      PS
                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background bg-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">About Me</h3>
                      <p className="text-xs text-muted-foreground">Remote &middot; Available now</p>
                    </div>
                  </div>

                  <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground mb-6">
                    Software Engineer with 2+ years building production web, mobile, backend,
                    and AI-powered systems across startups and freelance engagements. Strong
                    background in backend architecture, distributed systems, and cloud
                    infrastructure.
                  </p>

                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {[
                      "Delivered systems serving 10,000+ users with 99.9% uptime",
                      "Reduced API latency by up to 40% with CI/CD automation",
                      "Built RAG pipelines over 50,000+ embeddings",
                      "Proficient across Python, Go, TypeScript & cloud infra",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MagicCard>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 hidden justify-center md:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
