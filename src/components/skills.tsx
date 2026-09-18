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
import { Marquee } from "@/components/ui/marquee"
import { MagicCard } from "@/components/ui/magic-card"
import { NumberTicker } from "@/components/ui/number-ticker"
import SectionHeading from "@/components/section-heading"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    accent: "from-blue-500 to-cyan-400",
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
    accent: "from-emerald-500 to-green-400",
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
    accent: "from-violet-500 to-purple-400",
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
    accent: "from-orange-500 to-amber-400",
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
    accent: "from-pink-500 to-rose-400",
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
    accent: "from-indigo-500 to-blue-400",
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
    accent: "from-teal-500 to-cyan-400",
    skills: [
      { name: "Pytest / Jest", level: 82 },
      { name: "Test Automation", level: 80 },
      { name: "System Design", level: 82 },
      { name: "Agile / Scrum", level: 85 },
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
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
    transition: { duration: 1.2, delay: 0.2, ease: "easeOut" },
  }),
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent_60%)]" />

      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What I Work With"
          title="Technical Skills"
          description="Comprehensive expertise across the stack — from systems and distributed backends to AI pipelines and modern frontends."
        />
      </div>

      <div className="relative mb-14 w-full">
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
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <MagicCard
                className="h-full rounded-2xl"
                gradientColor="hsl(var(--primary) / 0.15)"
                gradientFrom="hsl(var(--primary))"
                gradientTo="hsl(var(--gold))"
              >
                <div className="h-full p-5 lg:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="font-display text-base lg:text-lg font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground/90">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-muted-foreground">
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
                      </div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
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
    </section>
  )
}
