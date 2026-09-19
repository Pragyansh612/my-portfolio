"use client"

import { useState } from "react"
import { ExternalLink, Github, Network, Globe, Brain, LineChart, Zap, Code, Database } from "lucide-react"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import Reveal from "@/components/reveal"
import PageCTA from "@/components/page-cta"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "NetSched — Network-Aware Distributed Task Scheduler",
    description: "A distributed task scheduler that selects execution nodes using CPU/memory availability, queue state, network latency, bandwidth, transfer cost, and failure risk, with concurrent Go/C++ scheduler and worker runtimes.",
    icon: <Network className="w-6 h-6" />,
    tags: ["Go", "C++", "Linux", "TCP", "Docker"],
    liveLink: "",
    githubLink: "https://github.com/Pragyansh612/NetSched",
    features: [
      "Custom TCP messaging, task queues, and resource accounting",
      "Heartbeats, acknowledgements, and node-state tracking",
      "FIFO, Round Robin, Least-Loaded, and network-aware scheduling strategies",
      "Automatic orphan-task recovery on node failure"
    ],
    challenges: [
      "Designing normalized multi-factor placement costs across heterogeneous nodes",
      "Building fault detection and recovery for orphaned tasks without central coordination",
      "Implementing low-overhead concurrent TCP messaging in Go and C++"
    ],
    impact: "Applied OS, data structures, networking, and concurrency concepts to build a scheduler that handles failure detection and recovery for distributed task execution.",
    role: "Solo Developer",
    date: "2025",
    category: "Distributed Systems"
  },
  {
    title: "WebSync",
    description: "AI-powered uptime monitoring platform providing automated LLM-based anomaly detection, real-time alerting, and event storage to reduce downtime and speed up incident response.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["Next.js", "FastAPI", "PostgreSQL", "LLMs"],
    liveLink: "https://websyncai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/websync",
    features: [
      "Automated LLM-based anomaly detection across 200+ endpoints",
      "Real-time monitoring with instant, customizable alerts",
      "PostgreSQL event storage for historical incident analysis",
      "Real-time alerting workflows for faster response"
    ],
    challenges: [
      "Implementing efficient real-time monitoring without overwhelming server resources",
      "Integrating LLM diagnostics to surface meaningful insights from monitoring data",
      "Creating an alerting system that scales cleanly across many monitored sites"
    ],
    impact: "Reduced client downtime by 15% and enabled 3x faster incident response compared with manual monitoring.",
    role: "Solo Developer",
    date: "2025",
    category: "AI/ML Tool"
  },
  {
    title: "GenWeb",
    description: "One-click AI website generation platform that automates hosting and component generation, cutting deployment time from 4+ hours to under 10 minutes.",
    icon: <Brain className="w-6 h-6" />,
    tags: ["Next.js", "Node.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://genwebai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/GenWeb",
    features: [
      "AI-powered website generation and content creation",
      "Automated Firebase hosting for published sites",
      "Reusable AI-generated component library",
      "Responsive design templates with modern UI/UX"
    ],
    challenges: [
      "Creating seamless AI integration for automated website generation",
      "Building an intuitive interface for users without technical background",
      "Automating hosting and deployment reliably at scale"
    ],
    impact: "Reduced website deployment time from 4+ hours to under 10 minutes, supporting 300+ published websites within 30 days.",
    role: "Lead Developer",
    date: "2025",
    category: "AI Platform"
  },
  {
    title: "Food Delivery ETA Prediction",
    description: "End-to-end ML pipeline over 40,197 cleaned food delivery orders, engineering distance, temporal, traffic, categorical, and distance-traffic interaction features to predict delivery ETAs.",
    icon: <LineChart className="w-6 h-6" />,
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    liveLink: "",
    githubLink: "https://github.com/Pragyansh612/Food-Delivery-ETA-Prediction",
    features: [
      "Feature engineering across distance, temporal, traffic, and categorical signals",
      "Compared Linear Regression, Random Forest, and XGBoost on a time-based split",
      "Random Forest achieved 3.097 min MAE, 3.802 min RMSE, and 0.840 R²",
      "Leakage analysis excluding post-order fields and target-proxy features"
    ],
    challenges: [
      "Preventing data leakage from post-order and target-proxy fields",
      "Engineering distance-traffic interaction features that generalize across regions",
      "Validating generalization with time-based splits and 5-fold cross-validation"
    ],
    impact: "Produced a validated ETA model with sub-3.1-minute MAE, demonstrating rigorous feature engineering and leakage-aware evaluation.",
    role: "Solo Developer",
    date: "2025",
    category: "Machine Learning"
  },
  {
    title: "ProdByShyrap",
    description: "Comprehensive music kit sharing platform offering free drum kits, loops, and samples for music producers worldwide. Features audio streaming, user management, and content categorization systems.",
    icon: <Zap className="w-6 h-6" />,
    tags: ["React.js", "Supabase", "TypeScript", "Tailwind CSS"],
    liveLink: "https://prodbyshyrap.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/prodbyshyrap",
    features: [
      "High-quality audio streaming with progressive loading",
      "Advanced download management system",
      "User profile creation and management",
      "Smart content categorization and search functionality"
    ],
    challenges: [
      "Optimizing audio streaming performance for various file sizes",
      "Creating efficient content delivery system for large audio files",
      "Implementing user-friendly interface for music producers"
    ],
    impact: "Provided free resources to over 1000+ music producers, fostering creativity and collaboration in the music production community.",
    role: "Full-stack Developer",
    date: "2025",
    category: "Creative Platform"
  },
  {
    title: "IIT Mandi Cultural Council Website",
    description: "Interactive platform serving as the central hub for all cultural activities at IIT Mandi. Features comprehensive event management, registration systems, and dynamic content showcasing.",
    icon: <Code className="w-6 h-6" />,
    tags: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Clerk"],
    liveLink: "https://cc.iitmandi.co.in/",
    githubLink: "",
    features: [
      "Event registration system with automated email notifications",
      "Interactive photo galleries with lightbox functionality",
      "Team member profiles with integrated social media links",
      "Admin dashboard for seamless content management"
    ],
    challenges: [
      "Designing scalable database architecture for diverse event types",
      "Creating intuitive interface suitable for both students and faculty",
      "Implementing secure admin authentication and role-based access"
    ],
    impact: "Increased cultural event participation by 40% and streamlined communication between organizers and students across the campus.",
    role: "Lead Developer",
    date: "2024",
    category: "Educational Platform"
  },
  {
    title: "WanderWay",
    description: "Comprehensive travel booking platform integrating hotels, trains, flights, and more. Features real-time API integrations providing up-to-date information and seamless booking experiences.",
    icon: <Database className="w-6 h-6" />,
    tags: ["Next.js", "React.js", "API Integration", "Payment Gateway", "Real-time Data"],
    liveLink: "",
    githubLink: "https://github.com/Pragyansh612/WanderWay",
    features: [
      "Real-time availability and pricing from multiple travel APIs",
      "Secure integrated payment processing system",
      "Comprehensive user profiles with booking history tracking",
      "Advanced search and filter functionality for all travel services"
    ],
    challenges: [
      "Integrating and synchronizing data from multiple third-party travel APIs",
      "Building robust and secure payment processing infrastructure",
      "Ensuring consistent user experience across different service categories"
    ],
    impact: "Created unified platform for travel bookings, simplifying the travel planning process and providing users with comprehensive travel solutions.",
    role: "Full-stack Developer",
    date: "2024",
    category: "Travel Platform"
  },
  {
    title: "Exodia Website",
    description: "Comprehensive event management platform for IIT Mandi's annual technical festival. Successfully handled thousands of registrations with advanced user authentication and payment integration.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: "https://exodia-iit-mandiii.vercel.app/",
    githubLink: "",
    features: [
      "Robust user authentication and profile management system",
      "Event registration with integrated payment gateway",
      "Real-time updates and push notifications for participants",
      "Comprehensive analytics dashboard for event organizers"
    ],
    challenges: [
      "Handling massive traffic spikes during peak registration periods",
      "Implementing secure and reliable payment processing for event tickets",
      "Creating responsive design that performs seamlessly across all devices"
    ],
    impact: "Successfully managed over 10,000 registrations with 50% increase from previous year, establishing new benchmark for festival management.",
    role: "Head of Web Development",
    date: "2024",
    category: "Event Management"
  },
]

const filters = [
  { key: "all", label: "All" },
  { key: "systems", label: "Systems & AI" },
  { key: "web", label: "Web platforms" },
] as const

const systemsCategories = ["Distributed Systems", "AI/ML Tool", "AI Platform", "Machine Learning"]

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all")

  const visible = projects.filter((p) => {
    if (filter === "all") return true
    const isSystems = systemsCategories.includes(p.category)
    return filter === "systems" ? isSystems : !isSystems
  })

  return (
    <div className="relative overflow-x-clip pt-32 md:pt-40">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-[45rem] -z-10 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="container mx-auto px-4">
        <SectionHeading
          index="/ 03"
          eyebrow="Selected Work"
          align="left"
          title={
            <>
              Things I&apos;ve <span className="font-serif font-normal italic text-primary">built</span>
            </>
          }
          description="Systems engineering, AI-powered products and full-stack platforms — with the challenges, decisions and impact behind each one."
        />

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300",
                filter === f.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-2 font-mono text-xs text-muted-foreground">{visible.length} projects</span>
        </div>

        <div>
          {visible.map((p, i) => (
            <Reveal key={p.title} className="group grid gap-8 border-t border-border py-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14 md:py-16">
              <div className="self-start lg:sticky lg:top-28">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-fuchsia-500 text-primary-foreground">
                    {p.icon}
                  </span>
                </div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{p.category}</p>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary md:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {p.role} &middot; {p.date}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.githubLink && (
                    <Link
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </Link>
                  )}
                  {p.liveLink && (
                    <Link
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-violet-500 px-4 py-2 text-sm font-semibold text-primary-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live demo
                    </Link>
                  )}
                </div>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-foreground/85">{p.description}</p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Key features</h3>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Technical challenges</h3>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      {p.challenges.map((c) => (
                        <li key={c} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 p-5">
                  <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Impact</h3>
                  <p className="text-sm leading-relaxed text-foreground/85">{p.impact}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <PageCTA />
    </div>
  )
}
