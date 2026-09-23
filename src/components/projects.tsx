"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Brain, Code, Database, ExternalLink, Github, Globe, LineChart, Network, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import { cn } from "@/lib/utils"

interface Project {
  title: string
  category: string
  description: string
  icon: ReactNode
  tags: string[]
  liveLink?: string
  githubLink?: string
  features: string[]
}

const projects: Project[] = [
  {
    title: "NetSched",
    category: "Distributed Systems",
    description:
      "Network-aware distributed task scheduler that places work using CPU/memory, queue state, latency, bandwidth, and failure risk — with concurrent Go/C++ runtimes and custom TCP messaging.",
    icon: <Network className="h-6 w-6" />,
    tags: ["Go", "C++", "Linux", "TCP", "Docker"],
    githubLink: "https://github.com/Pragyansh612/NetSched",
    features: ["Network-aware node selection", "Heartbeats & orphan-task recovery", "FIFO / RR / least-loaded / network-aware"],
  },
  {
    title: "ASD Generalization Study",
    category: "Deep Learning Research",
    description:
      "Research identifying multi-face inter-speaker context as the dominant driver of cross-dataset overfitting in Active Speaker Detection — validated across 13+ model variants on AVA-ActiveSpeaker and Columbia.",
    icon: <Brain className="h-6 w-6" />,
    tags: ["PyTorch", "Computer Vision", "Transformers", "Audio-Visual"],
    githubLink: "https://github.com/Pragyansh612/ASD_Group10",
    features: [
      "Cross-domain drop cut from -27.87pp to -0.69pp",
      "94.11% AVA mAP · 70.96% Columbia F1 (FCAI)",
      "1st place, IIT Mandi CS671 DL Hackathon",
    ],
  },
  {
    title: "WebSync",
    category: "AI · Monitoring",
    description:
      "AI-powered uptime monitoring with LLM-based anomaly detection across 200+ endpoints and real-time alerting for 3x faster incident response.",
    icon: <Globe className="h-6 w-6" />,
    tags: ["Next.js", "FastAPI", "PostgreSQL", "LLMs"],
    liveLink: "https://websyncai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/websync",
    features: ["Anomaly detection on 200+ endpoints", "Real-time alerting workflows", "Downtime reduced by 15%"],
  },
  {
    title: "GenWeb",
    category: "AI Platform",
    description:
      "One-click AI website generator that cut deployment from 4+ hours to under 10 minutes, powering 300+ published sites in its first 30 days.",
    icon: <Sparkles className="h-6 w-6" />,
    tags: ["Next.js", "Node.js", "Firebase", "Tailwind"],
    liveLink: "https://genwebai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/GenWeb",
    features: ["AI component generation", "Automated Firebase hosting", "300+ sites in 30 days"],
  },
  {
    title: "Food Delivery ETA Prediction",
    category: "Machine Learning",
    description:
      "End-to-end ML pipeline over 40,197 cleaned orders comparing Linear Regression, Random Forest, and XGBoost to predict delivery ETAs.",
    icon: <LineChart className="h-6 w-6" />,
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    githubLink: "https://github.com/Pragyansh612/Food-Delivery-ETA-Prediction",
    features: ["3.10 min MAE · 0.84 R²", "Leakage analysis", "5-fold cross-validation"],
  },
  {
    title: "ProdByShyrap",
    category: "Creative Platform",
    description:
      "Music kit sharing platform with free drum kits, loops and samples for producers worldwide — audio streaming, downloads and profiles.",
    icon: <Zap className="h-6 w-6" />,
    tags: ["React.js", "Supabase", "TypeScript", "Tailwind"],
    liveLink: "https://prodbyshyrap.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/prodbyshyrap",
    features: ["Audio streaming", "Download management", "Content categorization"],
  },
  {
    title: "IIT Mandi Cultural Council",
    category: "Event Platform",
    description:
      "Central hub for campus cultural activities — event management, registrations, galleries and team profiles.",
    icon: <Code className="h-6 w-6" />,
    tags: ["Next.js", "Tailwind", "MongoDB", "Framer Motion"],
    liveLink: "https://cc.iitmandi.co.in/",
    features: ["Event registration", "Dynamic galleries", "Team management"],
  },
  {
    title: "WanderWay",
    category: "Travel Platform",
    description:
      "Travel booking platform integrating hotels, trains and flights through real-time APIs with payments and a user dashboard.",
    icon: <Database className="h-6 w-6" />,
    tags: ["Next.js", "React.js", "APIs", "Payments"],
    githubLink: "https://github.com/Pragyansh612/WanderWay",
    features: ["Multi-service booking", "Real-time pricing", "Payment integration"],
  },
  {
    title: "Exodia Event Platform",
    category: "Event Management",
    description:
      "Technical-fest platform with authentication, registrations and payments — trusted with thousands of sign-ups.",
    icon: <Globe className="h-6 w-6" />,
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    liveLink: "https://exodia-iit-mandiii.vercel.app/",
    features: ["Event management", "User authentication", "Payment integration"],
  },
]

function ProjectCard({ project, index, className }: { project: Project; index: number; className?: string }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors duration-500 hover:border-primary/60 md:p-9",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/0 blur-3xl transition-colors duration-700 group-hover:bg-primary/25" />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-8 right-4 select-none font-display text-[10rem] font-extrabold leading-none text-foreground/[0.035]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative mb-6 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-fuchsia-500 text-primary-foreground">
          {project.icon}
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <p className="relative mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{project.category}</p>
      <h3 className="relative mb-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">{project.title}</h3>
      <p className="relative mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>

      <ul className="relative mb-6 space-y-1.5 text-sm text-foreground/80">
        {project.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
            {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto">
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-foreground/75">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </Link>
          )}
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-violet-500 px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

function MoreCard({ className }: { className?: string }) {
  return (
    <Link
      href="https://github.com/Pragyansh612"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col justify-between rounded-3xl border border-dashed border-border p-9 transition-colors duration-500 hover:border-primary",
        className
      )}
    >
      <Github className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
      <div>
        <p className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          More on <span className="font-serif font-normal italic text-primary">GitHub</span>
        </p>
        <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary">
          github.com/Pragyansh612
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

export default function Projects() {
  const runwayRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [dist, setDist] = useState(0)
  const [vh, setVh] = useState(800)

  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      setVh(window.innerHeight)
      setDist(Math.max(0, track.scrollWidth - window.innerWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener("resize", measure)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  return (
    <section id="projects" className="relative">
      <div className="container mx-auto px-4 pt-24 md:pt-32">
        <SectionHeading
          index="04"
          align="left"
          eyebrow="Selected Work"
          title={
            <>
              Things I&apos;ve <span className="font-serif font-normal italic text-primary">built</span>
            </>
          }
          description="Scroll to travel through the projects — systems engineering, deep learning research, and full-stack platforms built end to end."
        />
      </div>

      {/* Desktop: pinned horizontal journey */}
      <div ref={runwayRef} className="relative hidden md:block" style={{ height: dist + vh }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max items-stretch gap-6 pl-[max(1rem,calc((100vw-80rem)/2+1rem))] pr-[20vw]"
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} className="h-[33rem] w-[min(36rem,72vw)] shrink-0" />
            ))}
            <MoreCard className="h-[33rem] w-[min(28rem,60vw)] shrink-0" />
          </motion.div>

          <div className="absolute bottom-10 left-[max(1rem,calc((100vw-80rem)/2+1rem))] flex items-center gap-4">
            <div className="h-0.5 w-[min(24rem,50vw)] overflow-hidden rounded-full bg-border">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full origin-left bg-gradient-to-r from-primary to-gold"
              />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Keep scrolling &rarr;</span>
          </div>
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="container mx-auto grid gap-4 px-4 pb-24 md:hidden">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
        <MoreCard className="min-h-[14rem]" />
      </div>
    </section>
  )
}
