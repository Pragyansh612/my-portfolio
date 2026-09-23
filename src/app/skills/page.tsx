"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Brain, Server, Cloud, CheckCircle2, Smartphone } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import SectionHeading from "@/components/section-heading"
import Reveal from "@/components/reveal"
import PageCTA from "@/components/page-cta"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-4 h-4" />,
    accent: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Python", level: 92, description: "Primary language for backend services, automation, ML pipelines, and data processing" },
      { name: "Go", level: 80, description: "Concurrent, network-aware distributed systems and backend microservices" },
      { name: "TypeScript", level: 90, description: "Type-safe frontend and backend development across React, Next.js, and Node.js" },
      { name: "JavaScript", level: 90, description: "Modern ES6+ features, async programming, and full-stack web development" },
      { name: "C++", level: 78, description: "Systems programming, data structures and algorithms, and performance-critical code" },
      { name: "SQL", level: 85, description: "Complex queries, schema design, and query optimization across relational databases" },
      { name: "Java", level: 68, description: "Object-oriented programming fundamentals and backend coursework" },
      { name: "Bash", level: 78, description: "Shell scripting for automation, deployment, and Linux server administration" },
      { name: "Dart", level: 60, description: "Cross-platform mobile development experience via Flutter" },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Globe className="w-4 h-4" />,
    accent: "from-emerald-500 to-green-400",
    skills: [
      { name: "React.js", level: 92, description: "Expertise in hooks, context API, state management, and scalable component architectures" },
      { name: "Next.js", level: 90, description: "Proficient in SSR, SSG, API routes, and building performant full-stack applications" },
      { name: "Tailwind CSS", level: 92, description: "Rapid UI development with utility-first approach and custom design system creation" },
      { name: "Redux / Zustand", level: 80, description: "Predictable state management for medium-to-large single-page applications" },
      { name: "HTML/CSS", level: 95, description: "Mastery in semantic HTML, modern CSS features, animations, and responsive design" },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-4 h-4" />,
    accent: "from-teal-400 to-emerald-500",
    skills: [
      { name: "React Native", level: 82, description: "Cross-platform mobile app development with native performance optimization and real-time data sync" },
      { name: "Dart", level: 65, description: "Cross-platform mobile development experience via Flutter" },
      { name: "Cross-Platform App Development", level: 80, description: "Shipping a single codebase across iOS and Android with native-feeling UX" },
      { name: "REST API Integration", level: 88, description: "Wiring mobile clients to backend services with resilient, well-typed API layers" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-4 h-4" />,
    accent: "from-violet-500 to-purple-400",
    skills: [
      { name: "FastAPI", level: 90, description: "High-performance async APIs and microservices with automatic docs and type validation" },
      { name: "Django", level: 78, description: "Robust web applications with ORM, admin interface, and security best practices" },
      { name: "Node.js / Express.js", level: 82, description: "Scalable server-side applications, middleware, and RESTful API development" },
      { name: "REST APIs", level: 90, description: "Design and implementation of scalable, well-documented API architectures" },
      { name: "GraphQL / gRPC", level: 68, description: "Schema-driven and high-performance RPC-based service communication" },
      { name: "WebSockets", level: 78, description: "Real-time, bidirectional communication for live features and notifications" },
      { name: "Microservices", level: 82, description: "Decomposing systems into independently deployable, asynchronous services" },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-4 h-4" />,
    accent: "from-orange-500 to-amber-400",
    skills: [
      { name: "PostgreSQL", level: 88, description: "Schema design, composite indexes, and query optimization for high-traffic workloads" },
      { name: "MongoDB", level: 85, description: "NoSQL database design, aggregation pipelines, and performance optimization" },
      { name: "Redis", level: 78, description: "Caching, session storage, and pub/sub for low-latency application layers" },
      { name: "Supabase", level: 85, description: "Postgres-backed BaaS with real-time subscriptions and row-level security" },
      { name: "Firebase Firestore", level: 85, description: "Real-time database, authentication, hosting, and cloud functions integration" },
      { name: "MySQL / SQLite", level: 80, description: "Relational database management, stored procedures, and performance tuning" },
    ],
  },
  {
    title: "AI/ML & Data Science",
    icon: <Brain className="w-4 h-4" />,
    accent: "from-pink-500 to-rose-400",
    skills: [
      { name: "PyTorch", level: 85, description: "Research-grade model development, training pipelines, and ablation studies for computer vision and audio-visual learning" },
      { name: "Computer Vision", level: 84, description: "Active speaker detection, cross-dataset generalization, and video-based model evaluation" },
      { name: "Deep Learning", level: 85, description: "Designing, training, and diagnosing neural architectures for real research problems" },
      { name: "Transformers", level: 80, description: "Transformer-based temporal modeling for sequence and multi-modal tasks" },
      { name: "LLMs & Prompt Engineering", level: 90, description: "Designing reliable prompts and integrating LLMs into production applications" },
      { name: "RAG Systems", level: 88, description: "Retrieval-Augmented Generation with semantic vector search over 50,000+ embeddings" },
      { name: "LangChain", level: 85, description: "Building LLM applications, RAG pipelines, and intelligent document processing" },
      { name: "Vector Databases", level: 82, description: "Embedding storage and semantic search for context-aware AI applications" },
      { name: "Scikit-learn / XGBoost", level: 85, description: "Classical ML algorithms, feature engineering, and model evaluation techniques" },
      { name: "TensorFlow", level: 74, description: "Model development and deployment for production ML pipelines" },
      { name: "Hugging Face", level: 80, description: "Fine-tuning and deploying transformer models for NLP tasks" },
      { name: "OpenCV", level: 72, description: "Image processing and computer vision pipelines" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    accent: "from-indigo-500 to-blue-400",
    skills: [
      { name: "AWS", level: 80, description: "Cloud infrastructure, EC2, S3, Lambda functions, and serverless architectures" },
      { name: "GCP", level: 82, description: "Provisioning and scaling RAG pipelines and backend services on Google Cloud" },
      { name: "Docker / Kubernetes", level: 82, description: "Containerization, multi-stage builds, and orchestration for scalable deployments" },
      { name: "Linux / Nginx", level: 85, description: "VM provisioning, reverse proxying, and production server administration" },
      { name: "GitHub Actions / CI/CD", level: 85, description: "Automated build, test, and deployment pipelines with quality gates" },
      { name: "Vercel / Firebase", level: 88, description: "Modern deployment platforms for frontend and full-stack applications" },
    ],
  },
  {
    title: "Testing & Engineering",
    icon: <CheckCircle2 className="w-4 h-4" />,
    accent: "from-teal-500 to-cyan-400",
    skills: [
      { name: "Pytest / Jest", level: 82, description: "Unit, integration, and functional test suites with automated regression checks" },
      { name: "Test Automation", level: 80, description: "CI-gated automated testing to improve release reliability and code coverage" },
      { name: "System Design", level: 82, description: "Designing scalable, maintainable architectures for distributed applications" },
      { name: "Agile / Scrum", level: 85, description: "Sprint planning, code reviews, and cross-functional team collaboration" },
      { name: "RBAC & Access Control", level: 80, description: "Role-based access control for secure, multi-tenant applications" },
    ],
  },
]

const marqueeTech = Array.from(new Set(skillCategories.flatMap((c) => c.skills.map((s) => s.name))))

export default function SkillsPage() {
  return (
    <div className="relative overflow-x-clip pt-32 md:pt-40">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-96 -z-10 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="container mx-auto px-4">
        <SectionHeading
          index="/ 01"
          eyebrow="Toolkit"
          align="left"
          title={
            <>
              Everything I{" "}
              <span className="font-serif font-normal italic text-primary">work with</span>
            </>
          }
          description="Eight areas, honestly rated — from systems languages and distributed backends to deep learning research, mobile apps, cloud infrastructure, and the engineering practices that keep it all reliable."
        />
      </div>

      <div className="relative overflow-hidden py-10 md:py-14">
        <div className="-rotate-1 scale-105 bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500 py-3.5 text-primary-foreground">
          <Marquee className="[--duration:45s] [--gap:2rem]" repeat={4}>
            {marqueeTech.map((t) => (
              <span key={t} className="flex items-center gap-8 font-display text-xl font-extrabold uppercase tracking-tight md:text-2xl">
                {t}
                <span className="text-base text-gold">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-10">
        {skillCategories.map((c, i) => {
          const avg = Math.round(c.skills.reduce((n, s) => n + s.level, 0) / c.skills.length)
          return (
            <Reveal key={c.title} className="grid gap-8 border-t border-border py-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 md:py-16">
              <div className="self-start lg:sticky lg:top-28">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-fuchsia-500 text-primary-foreground">
                    {c.icon}
                  </span>
                </div>
                <h2 className="font-display text-4xl font-bold leading-none tracking-tight md:text-5xl">{c.title}</h2>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {c.skills.length} tools &middot; avg {avg}%
                </p>
              </div>

              <ul className="divide-y divide-border/70">
                {c.skills.map((s) => (
                  <li key={s.name} className="py-5 first:pt-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">{s.name}</span>
                      <span className="font-mono text-xs text-primary">{s.level}%</span>
                    </div>
                    <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-gold"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>

      <PageCTA />
    </div>
  )
}
