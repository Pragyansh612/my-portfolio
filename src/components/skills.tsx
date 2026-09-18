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
  CheckCircle2
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "Python", level: 92 },
      { name: "Go", level: 80 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "C++", level: 78 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Globe className="w-5 h-5" />,
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 82 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux / Zustand", level: 80 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-5 h-5" />,
    color: "from-purple-400/10 to-purple-500/10",
    borderColor: "border-purple-400/20",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Django", level: 78 },
      { name: "Node.js / Express.js", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 82 },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    color: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 78 },
      { name: "Supabase", level: 85 },
      { name: "Firebase Firestore", level: 85 },
    ],
  },
  {
    title: "AI/ML & Data Science",
    icon: <Brain className="w-5 h-5" />,
    color: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "LLMs & RAG", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "Scikit-learn", level: 85 },
      { name: "PyTorch", level: 78 },
      { name: "Vector Databases", level: 82 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-indigo-500/10 to-blue-500/10",
    borderColor: "border-indigo-500/20",
    skills: [
      { name: "AWS", level: 80 },
      { name: "GCP", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Linux / Nginx", level: 85 },
      { name: "GitHub Actions / CI/CD", level: 85 },
    ],
  },
  {
    title: "Testing & Engineering",
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "from-teal-500/10 to-cyan-500/10",
    borderColor: "border-teal-500/20",
    skills: [
      { name: "Pytest / Jest", level: 82 },
      { name: "Test Automation", level: 80 },
      { name: "System Design", level: 82 },
      { name: "Agile / Scrum", level: 85 },
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const skillBar = {
  hidden: { width: 0 },
  show: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1.2, delay: 0.3, ease: "easeOut" }
  })
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.08),transparent_60%)]"></div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive expertise in modern technologies for building intelligent, scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className={`group relative backdrop-blur-xl bg-background/40 dark:bg-background/20 border ${category.borderColor} hover:border-primary/30 rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              
              {/* Header */}
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="p-2 lg:p-3 rounded-lg lg:rounded-xl bg-gradient-to-r from-primary/10 via-purple-400/10 to-purple-500/10 text-primary mr-3 group-hover:scale-105 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-base lg:text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3 lg:space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm lg:text-base">{skill.name}</span>
                    </div>
                    
                    <div className="relative h-2 w-full bg-muted/20 dark:bg-muted/10 rounded-full overflow-hidden">
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
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { label: "Technologies", value: "30+" },
            { label: "Frameworks", value: "15+" },
            { label: "AI/ML Tools", value: "10+" },
            { label: "Cloud Services", value: "8+" },
          ].map((stat, index) => (
            <div key={index} className="text-center backdrop-blur-xl bg-background/30 dark:bg-background/20 border border-primary/10 hover:border-primary/20 rounded-xl p-4 lg:p-6 transition-all duration-300">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1 lg:mb-2">{stat.value}</div>
              <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}