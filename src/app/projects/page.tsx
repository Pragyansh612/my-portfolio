"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Users, Calendar, Code, Globe, Brain, Zap, Database, Trophy, Target, Network, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagicCard } from "@/components/ui/magic-card"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"

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

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <div className="relative min-h-screen overflow-hidden pb-20 pt-32 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.08),transparent_60%)]" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A showcase of systems engineering, AI-powered products, and full-stack platforms — with the challenges, decisions, and impact behind each one."
        />

        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-6">
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <MagicCard
                className="rounded-2xl"
                gradientColor="hsl(var(--primary) / 0.12)"
                gradientFrom="hsl(var(--primary))"
                gradientTo="hsl(var(--gold))"
              >
                <div className="p-5 md:p-7">
                  {/* Header */}
                  <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="flex flex-1 items-start gap-3.5">
                      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg shadow-primary/25">
                        {project.icon}
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-bold md:text-2xl">{project.title}</h2>
                        <span className="mt-1.5 inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          {project.category}
                        </span>
                      </div>
                    </div>
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
                        <Button asChild size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground md:ml-[3.6rem]">
                    <div className="flex items-center">
                      <Users className="mr-1.5 h-4 w-4 text-primary" />
                      <span className="font-medium">{project.role}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1.5 h-4 w-4 text-primary" />
                      {project.date}
                    </div>
                  </div>

                  <p className="mb-5 leading-relaxed text-foreground/85 md:ml-[3.6rem]">{project.description}</p>

                  <div className="grid grid-cols-1 gap-5 md:ml-[3.6rem] md:grid-cols-3">
                    <div>
                      <h3 className="mb-2 flex items-center text-sm font-semibold text-primary">
                        <Target className="mr-2 h-4 w-4" />
                        Key Features
                      </h3>
                      <div className="space-y-1.5 text-sm text-muted-foreground">
                        {project.features.slice(0, 3).map((f) => (
                          <div key={f} className="flex items-start">
                            <div className="mr-2 mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 flex items-center text-sm font-semibold text-gold">
                        <Code className="mr-2 h-4 w-4" />
                        Technical Challenges
                      </h3>
                      <div className="space-y-1.5 text-sm text-muted-foreground">
                        {project.challenges.slice(0, 2).map((c) => (
                          <div key={c} className="flex items-start">
                            <div className="mr-2 mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 flex items-center text-sm font-semibold text-emerald-400">
                        <Trophy className="mr-2 h-4 w-4" />
                        Impact &amp; Results
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/50 pt-4 md:ml-[3.6rem]">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/60 bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-muted-foreground">Interested in collaborating on innovative projects?</p>
          <Link href="#contact">
            <ShimmerButton
              background="linear-gradient(110deg, hsl(var(--primary)), #a855f7)"
              className="mx-auto px-6 py-3 text-sm font-semibold"
            >
              Start a Conversation
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
