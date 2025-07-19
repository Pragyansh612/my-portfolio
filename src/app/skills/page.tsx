"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowLeft,
  Code, 
  Database, 
  Globe, 
  Brain,
  Server,
  Cloud,
  Layers
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-4 h-4" />,
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "Python", level: 90, description: "Advanced proficiency in data science, web development, AI/ML, and automation scripting" },
      { name: "JavaScript", level: 85, description: "Expert in ES6+ features, async programming, and modern web development patterns" },
      { name: "TypeScript", level: 85, description: "Strong typing expertise for large-scale applications and better code maintainability" },
      { name: "PHP", level: 75, description: "Experienced in server-side scripting, CMS development, and WordPress customization" },
      { name: "C++", level: 75, description: "Solid foundation in object-oriented programming, algorithms, and competitive programming" },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Globe className="w-4 h-4" />,
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
    skills: [
      { name: "React.js", level: 90, description: "Expertise in hooks, context API, state management, and building scalable component architectures" },
      { name: "Next.js", level: 85, description: "Proficient in SSR, SSG, API routes, and building performant full-stack applications" },
      { name: "React Native", level: 80, description: "Cross-platform mobile app development with native performance optimization" },
      { name: "HTML/CSS", level: 95, description: "Mastery in semantic HTML, modern CSS features, animations, and responsive design principles" },
      { name: "Tailwind CSS", level: 90, description: "Rapid UI development with utility-first approach and custom design system creation" },
      { name: "Bootstrap", level: 85, description: "Experienced in responsive grid systems and component-based design workflows" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-4 h-4" />,
    color: "from-purple-500/10 to-indigo-500/10",
    borderColor: "border-purple-500/20",
    skills: [
      { name: "Node.js", level: 80, description: "Building scalable server-side applications, microservices, and real-time systems" },
      { name: "Express.js", level: 80, description: "RESTful API development, middleware implementation, and authentication systems" },
      { name: "Django", level: 75, description: "Robust web applications with ORM, admin interface, and security best practices" },
      { name: "FastAPI", level: 80, description: "High-performance async APIs with automatic documentation and type validation" },
      { name: "REST APIs", level: 85, description: "Design and implementation of scalable, well-documented API architectures" },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-4 h-4" />,
    color: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "MongoDB", level: 85, description: "NoSQL database design, aggregation pipelines, and performance optimization" },
      { name: "PostgreSQL", level: 75, description: "Advanced SQL features, database optimization, and complex query design" },
      { name: "MySQL", level: 80, description: "Relational database management, stored procedures, and performance tuning" },
      { name: "Firebase", level: 80, description: "Real-time database, authentication, hosting, and cloud functions integration" },
      { name: "Supabase", level: 80, description: "Open-source Firebase alternative with PostgreSQL backend and real-time subscriptions" },
    ],
  },
  {
    title: "AI/ML & Data Science",
    icon: <Brain className="w-4 h-4" />,
    color: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "PyTorch", level: 75, description: "Deep learning model development, training, and neural network architectures" },
      { name: "TensorFlow", level: 70, description: "Machine learning model creation, deployment, and production pipelines" },
      { name: "scikit-learn", level: 78, description: "Classical ML algorithms, data preprocessing, and model evaluation techniques" },
      { name: "OpenAI APIs", level: 85, description: "GPT integration, prompt engineering, and AI-powered application development" },
      { name: "LangChain", level: 80, description: "Building LLM applications, RAG systems, and intelligent document processing" },
      { name: "RAG Systems", level: 82, description: "Retrieval-Augmented Generation for context-aware AI applications and chatbots" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    color: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "AWS", level: 75, description: "Cloud infrastructure, EC2, S3, Lambda functions, and serverless architectures" },
      { name: "Docker", level: 75, description: "Containerization, multi-stage builds, and development environment standardization" },
      { name: "Git/GitHub", level: 90, description: "Advanced version control, collaborative workflows, CI/CD, and project management" },
      { name: "Vercel", level: 85, description: "Modern deployment platform for frontend applications with edge functions" },
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