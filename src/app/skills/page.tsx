"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code,
  Database,
  Globe,
  Brain,
  Server,
  Cloud,
  CheckCircle2,
} from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import SectionHeading from "@/components/section-heading"

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
      { name: "React Native", level: 82, description: "Cross-platform mobile app development with native performance optimization" },
      { name: "Tailwind CSS", level: 92, description: "Rapid UI development with utility-first approach and custom design system creation" },
      { name: "Redux / Zustand", level: 80, description: "Predictable state management for medium-to-large single-page applications" },
      { name: "HTML/CSS", level: 95, description: "Mastery in semantic HTML, modern CSS features, animations, and responsive design" },
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
      { name: "LLMs & Prompt Engineering", level: 90, description: "Designing reliable prompts and integrating LLMs into production applications" },
      { name: "RAG Systems", level: 88, description: "Retrieval-Augmented Generation with semantic vector search over 50,000+ embeddings" },
      { name: "LangChain", level: 85, description: "Building LLM applications, RAG pipelines, and intelligent document processing" },
      { name: "Vector Databases", level: 82, description: "Embedding storage and semantic search for context-aware AI applications" },
      { name: "Scikit-learn / XGBoost", level: 85, description: "Classical ML algorithms, feature engineering, and model evaluation techniques" },
      { name: "PyTorch / TensorFlow", level: 76, description: "Deep learning model development, training, and neural network architectures" },
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

const marqueeTech = Array.from(
  new Set(skillCategories.flatMap((c) => c.skills.map((s) => s.name)))
)

const stats = [
  { label: "Technologies", value: 30, suffix: "+" },
  { label: "Frameworks", value: 15, suffix: "+" },
  { label: "AI/ML Tools", value: 10, suffix: "+" },
  { label: "Cloud Services", value: 8, suffix: "+" },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

const skillBar = {
  hidden: { width: 0 },
  show: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1, delay: 0.15, ease: "easeOut" },
  }),
}

export default function SkillsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <div className="relative min-h-screen overflow-hidden pb-20 pt-32 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.12),transparent_60%)]" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What I Work With"
          title="Technical Skills"
          description="My comprehensive expertise spans modern technologies, enabling me to build intelligent, scalable solutions from concept to deployment."
        />
      </div>

      <div className="relative mb-12 w-full">
        <Marquee pauseOnHover className="[--duration:35s]">
          {marqueeTech.map((tech) => (
            <span
              key={tech}
              className="mx-1.5 inline-flex items-center rounded-full border border-border/60 bg-card/50 px-4 py-2 font-mono text-sm text-muted-foreground backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <MagicCard
                className="h-full rounded-2xl"
                gradientColor="hsl(var(--primary) / 0.12)"
                gradientFrom="hsl(var(--primary))"
                gradientTo="hsl(var(--gold))"
              >
                <div className="p-5 lg:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="font-display text-lg font-semibold lg:text-xl">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground md:text-base">{skill.name}</span>
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted/40">
                          <motion.div
                            custom={skill.level}
                            variants={skillBar}
                            initial="hidden"
                            animate={isInView ? "show" : "hidden"}
                            className={`h-full rounded-full bg-gradient-to-r ${category.accent}`}
                          />
                        </div>
                        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border/60 bg-card/40 p-4 text-center backdrop-blur-md transition-colors duration-300 hover:border-primary/30 lg:p-6"
            >
              <div className="font-display text-2xl font-bold text-gradient lg:text-3xl">
                <NumberTicker value={stat.value} className="text-gradient font-display" />
                {stat.suffix}
              </div>
              <div className="mt-1 text-xs text-muted-foreground lg:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
