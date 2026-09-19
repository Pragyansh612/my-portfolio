"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { ExternalLink, Github, Code, Globe, Database, Brain, Zap, Network, LineChart, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagicCard } from "@/components/ui/magic-card"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"

interface Project {
  title: string
  description: string
  icon: ReactNode
  tags: string[]
  liveLink?: string
  githubLink?: string
  features: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "NetSched",
    description:
      "Network-aware distributed task scheduler that selects execution nodes using CPU/memory availability, queue state, latency, bandwidth, and failure risk, with concurrent Go/C++ runtimes and custom TCP messaging.",
    icon: <Network className="w-7 h-7" />,
    tags: ["Go", "C++", "Linux", "TCP", "Docker"],
    githubLink: "https://github.com/Pragyansh612/NetSched",
    features: [
      "Network-aware node selection",
      "Custom TCP messaging & heartbeats",
      "Multi-strategy scheduling",
      "Automatic orphan-task recovery",
    ],
    featured: true,
  },
  {
    title: "WebSync",
    description:
      "AI-powered uptime monitoring platform with automated LLM-based anomaly detection across 200+ endpoints and real-time alerting for faster incident response.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["Next.js", "FastAPI", "PostgreSQL", "LLMs"],
    liveLink: "https://websyncai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/websync",
    features: ["Real-time monitoring", "AI-based anomaly detection", "3x faster incident response"],
  },
  {
    title: "GenWeb",
    description:
      "One-click AI website generator that cut deployment time from 4+ hours to under 10 minutes, supporting 300+ published websites within 30 days.",
    icon: <Brain className="w-6 h-6" />,
    tags: ["Next.js", "Node.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://genwebai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/GenWeb",
    features: ["AI code generation", "Automated Firebase hosting", "One-click deployment"],
  },
  {
    title: "Food Delivery ETA Prediction",
    description:
      "End-to-end ML pipeline over 40,197 cleaned orders comparing Linear Regression, Random Forest, and XGBoost to predict delivery ETAs.",
    icon: <LineChart className="w-6 h-6" />,
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    githubLink: "https://github.com/Pragyansh612/Food-Delivery-ETA-Prediction",
    features: ["Feature engineering", "3.10 min MAE, 0.84 R²", "Leakage analysis & 5-fold CV"],
  },
  {
    title: "ProdByShyrap",
    description:
      "Comprehensive music kit sharing platform offering free drum kits, loops, and samples for music producers and creators worldwide.",
    icon: <Zap className="w-6 h-6" />,
    tags: ["React.js", "Supabase", "TypeScript", "Tailwind CSS"],
    liveLink: "https://prodbyshyrap.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/prodbyshyrap",
    features: ["Audio streaming", "Download management", "Content categorization"],
  },
  {
    title: "IIT Mandi Cultural Council",
    description:
      "Interactive platform for cultural events with comprehensive event management, registration systems, and dynamic content display.",
    icon: <Code className="w-6 h-6" />,
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Framer Motion"],
    liveLink: "https://cc.iitmandi.co.in/",
    features: ["Event registration", "Dynamic galleries", "Team management"],
  },
  {
    title: "WanderWay",
    description:
      "Full-featured travel booking platform integrating hotels, trains, flights with real-time APIs for seamless booking experiences.",
    icon: <Database className="w-6 h-6" />,
    tags: ["Next.js", "React.js", "API Integration", "Payment Gateway"],
    githubLink: "https://github.com/Pragyansh612/WanderWay",
    features: ["Multi-service booking", "Real-time pricing", "Payment integration"],
  },
  {
    title: "Exodia Event Platform",
    description:
      "Comprehensive event management platform with advanced user authentication, registration systems, and integrated payment processing.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    liveLink: "https://exodia-iit-mandiii.vercel.app/",
    features: ["Event management", "User authentication", "Payment integration"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex gap-2">
      {project.githubLink && (
        <Button asChild variant="outline" size="sm" className="border-border/60 hover:border-primary/40 hover:bg-primary/10">
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-3.5 w-3.5" />
            Code
          </Link>
        </Button>
      )}
      {project.liveLink && (
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            Live
          </Link>
        </Button>
      )}
    </div>
  )
}

function FeaturedCard({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <MagicCard
      className={`h-full rounded-2xl ${className}`}
      gradientColor="hsl(var(--primary) / 0.15)"
      gradientFrom="hsl(var(--primary))"
      gradientTo="hsl(var(--gold))"
    >
      <div className="flex h-full flex-col p-6 lg:p-7">
        <div className="mb-5 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            {project.icon}
          </div>
          <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold">
            Featured
          </span>
        </div>

        <h3 className="font-display text-xl font-bold mb-2.5 lg:text-2xl">{project.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
          {project.description}
        </p>

        <div className="mb-5 grid grid-cols-2 gap-2">
          {project.features.map((f) => (
            <div key={f} className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {f}
            </div>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              {tag}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </MagicCard>
  )
}

function CompactCard({ project }: { project: Project }) {
  return (
    <MagicCard
      className="h-full rounded-2xl"
      gradientColor="hsl(var(--primary) / 0.12)"
      gradientFrom="hsl(var(--primary))"
      gradientTo="hsl(var(--gold))"
    >
      <div className="flex h-full flex-col p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {project.icon}
          </div>
          <div className="flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.githubLink && (
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
        <h3 className="mb-2 font-display text-base font-semibold">{project.title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-border/60 bg-secondary/40 px-2 py-0.5 text-[11px] text-foreground/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MagicCard>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  const [feature, ...rest] = projects
  const secondaryFeatured = rest.slice(0, 2)
  const compact = rest.slice(2)

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.08),transparent_60%)]" />
      <div className="container mx-auto px-4">
        <SectionHeading
          index="04"
          align="left"
          eyebrow="Selected Work"
          title={
            <>
              Things I&apos;ve <span className="font-serif font-normal italic text-primary">built</span>
            </>
          }
          description="A mix of systems engineering, AI-powered products, and full-stack platforms — built end to end, from architecture to deployment."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_1fr] lg:grid-rows-2"
        >
          <motion.div variants={item} className="lg:row-span-2">
            <FeaturedCard project={feature} />
          </motion.div>
          {secondaryFeatured.map((p) => (
            <motion.div key={p.title} variants={item}>
              <FeaturedCard project={p} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {compact.map((p) => (
            <motion.div key={p.title} variants={item} className="group">
              <CompactCard project={p} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-muted-foreground">Interested in collaborating on innovative projects?</p>
          <Link href="#contact">
            <ShimmerButton
              background="hsl(var(--primary))"
              className="mx-auto px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Let&apos;s Build Something Amazing
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
