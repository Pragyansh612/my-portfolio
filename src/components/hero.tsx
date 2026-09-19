"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import { cn } from "@/lib/utils"

const roles = ["Software Engineer", "Full-Stack Developer", "AI / ML Engineer", "Backend Architect"]

const stats = [
  { value: 10000, suffix: "+", label: "Users served" },
  { value: 99.9, suffix: "%", label: "Uptime delivered", decimals: 1 },
  { value: 40, suffix: "%", label: "Latency reduced" },
  { value: 50, suffix: "K+", label: "Embeddings indexed" },
]

const marqueeItems = ["Python", "Go", "TypeScript", "Next.js", "FastAPI", "PostgreSQL", "RAG", "GCP", "Docker", "React Native"]

const highlights = [
  "10,000+ users served @ 99.9% uptime",
  "API latency cut by up to 40%",
  "RAG pipelines over 50,000+ embeddings",
  "Python · Go · TypeScript · Cloud",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const driftY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const driftOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15])

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${e.clientX - r.left}px`)
        el.style.setProperty("--my", `${e.clientY - r.top}px`)
      })
    }
    el.addEventListener("pointermove", onMove)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden pt-32 md:pt-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-lines [mask-image:radial-gradient(ellipse_80%_70%_at_50%_25%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block [background:radial-gradient(520px_circle_at_var(--mx,70%)_var(--my,30%),rgba(var(--primary-rgb),0.14),transparent_65%)]"
      />
      <div className="pointer-events-none absolute -left-32 -top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 -z-10 h-64 w-64 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container mx-auto px-4">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for work
          </span>
          <span className="hidden sm:inline">Portfolio &mdash; 2026</span>
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <MapPin className="h-3 w-3" />
            India &middot; Remote
          </span>
        </motion.div>

        <motion.div style={{ y: driftY, opacity: driftOpacity }} className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3.4rem,9vw,9rem)] font-extrabold leading-[0.88] tracking-[-0.045em]"
            >
              <span className="block">Pragyansh</span>
              <span className="block font-serif font-normal italic tracking-[-0.02em]">
                <span className="bg-gradient-to-r from-primary via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Saxena
                </span>
                <span className="text-gold">.</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-medium md:text-2xl"
            >
              <span className="h-px w-10 bg-primary" />
              <span className="text-muted-foreground">I&apos;m a</span>
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-display font-bold underline decoration-gold decoration-[3px] underline-offset-[6px]"
              >
                {roles[roleIndex]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              2+ years building production web, mobile, backend, and AI-powered systems across
              startups and freelance engagements &mdash; with a strong background in backend
              architecture, distributed systems, and cloud infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-violet-500 px-7 py-4 font-semibold text-primary-foreground shadow-[0_0_40px_-10px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:shadow-[0_0_60px_-8px_hsl(var(--primary)/0.9)]"
              >
                Hire me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-semibold transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                View my work
              </Link>
              <div className="ml-1 flex items-center gap-2">
                {[
                  { href: "https://github.com/Pragyansh612", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/pragyansh-saxena-3b94492b8", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:saxenapragyansh@gmail.com", icon: Mail, label: "Email" },
                  { href: "tel:+917999610227", icon: Phone, label: "Phone" },
                ].map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: terminal + badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <Link
              href="#contact"
              aria-label="Open to roles, contact me"
              className="absolute -right-3 -top-14 z-20 hidden h-28 w-28 items-center justify-center sm:flex md:-right-6"
            >
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]">
                <defs>
                  <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text className="fill-foreground font-mono text-[10.5px] uppercase tracking-[0.22em]">
                  <textPath href="#badge-circle">Open to roles • Let&apos;s build • </textPath>
                </text>
              </svg>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-fuchsia-500 text-primary-foreground">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>

            <div className="overflow-hidden rounded-2xl border border-border bg-card/90 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-muted-foreground">pragyansh@portfolio ~ zsh</span>
              </div>
              <div className="space-y-1 p-5 font-mono text-[13px] leading-7 md:p-6">
                <p>
                  <span className="text-primary">$</span> whoami
                </p>
                <p className="text-muted-foreground">software engineer @ instafarms</p>
                <p className="pt-2">
                  <span className="text-primary">$</span> cat highlights.md
                </p>
                {highlights.map((h) => (
                  <p key={h} className="flex gap-2 text-foreground/85">
                    <span className="text-primary">✓</span>
                    {h}
                  </p>
                ))}
                <p className="pt-2">
                  <span className="text-primary">$</span>
                  <span className="ml-2 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-primary" />
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 border-y border-border md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "px-5 py-7 md:px-8 md:py-10",
                i % 2 === 1 && "border-l",
                i >= 2 && "border-t md:border-t-0",
                i > 0 && "md:border-l"
              )}
            >
              <div className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                <NumberTicker
                  value={stat.value}
                  decimalPlaces={stat.decimals ?? 0}
                  className="font-display tracking-tight text-foreground"
                />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee band */}
      <div className="relative mt-20 overflow-hidden py-10 md:py-14">
        <div className="-rotate-2 scale-110 bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500 py-4 text-primary-foreground shadow-[0_0_80px_-10px_hsl(var(--primary)/0.6)]">
          <Marquee className="[--duration:32s] [--gap:2.5rem]" repeat={4}>
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-10 font-display text-2xl font-extrabold uppercase tracking-tight md:text-4xl"
              >
                {item}
                <span className="text-lg text-gold">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
