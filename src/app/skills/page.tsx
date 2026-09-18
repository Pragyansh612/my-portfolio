"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
import {
  Code,
  Database,
  Globe,
  Brain,
  Server,
  Cloud,
  CheckCircle2,
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-4 h-4" />,
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
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
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
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
    color: "from-purple-500/10 to-indigo-500/10",
    borderColor: "border-purple-500/20",
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
    color: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
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
    color: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
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
    color: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
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
    color: "from-teal-500/10 to-cyan-500/10",
    borderColor: "border-teal-500/20",
    skills: [
      { name: "Pytest / Jest", level: 82, description: "Unit, integration, and functional test suites with automated regression checks" },
      { name: "Test Automation", level: 80, description: "CI-gated automated testing to improve release reliability and code coverage" },
      { name: "System Design", level: 82, description: "Designing scalable, maintainable architectures for distributed applications" },
      { name: "Agile / Scrum", level: 85, description: "Sprint planning, code reviews, and cross-functional team collaboration" },
      { name: "RBAC & Access Control", level: 80, description: "Role-based access control for secure, multi-tenant applications" },
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const skillBar = {
  hidden: { width: 0 },
  show: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1, delay: 0.2, ease: "easeOut" }
  })
}

export default function SkillsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* <Button asChild variant="ghost" className="mb-8 hover:bg-primary/10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button> */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8 lg:mb-10 mt-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My comprehensive expertise spans across modern technologies, enabling me to build intelligent, 
            scalable solutions from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className={`group relative backdrop-blur-xl bg-background/40 dark:bg-background/20 border ${category.borderColor} hover:border-primary/30 rounded-lg p-4 lg:p-5 shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 via-purple-400/10 to-purple-500/10 text-primary mr-3 group-hover:scale-105 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm lg:text-base">{skill.name}</span>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-1.5 w-full bg-muted/20 dark:bg-muted/10 rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={skillBar}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="h-full bg-gradient-to-r from-primary via-purple-400 to-purple-500 rounded-full relative overflow-hidden"
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite] delay-1000"></div>
                      </motion.div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{skill.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}