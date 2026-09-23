"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Cloud, CheckCircle2, Code, Database, Globe, Brain, Server, Smartphone } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Languages",
    slug: "languages",
    icon: <Code className="h-4 w-4" />,
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
    title: "Frontend",
    slug: "frontend",
    icon: <Globe className="h-4 w-4" />,
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux / Zustand", level: 80 },
    ],
  },
  {
    title: "Mobile",
    slug: "mobile",
    icon: <Smartphone className="h-4 w-4" />,
    skills: [
      { name: "React Native", level: 82 },
      { name: "Dart", level: 65 },
      { name: "Cross-Platform Dev", level: 80 },
      { name: "REST API Integration", level: 88 },
    ],
  },
  {
    title: "Backend & APIs",
    slug: "backend",
    icon: <Server className="h-4 w-4" />,
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Django", level: 78 },
      { name: "Node.js / Express", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 82 },
    ],
  },
  {
    title: "Databases",
    slug: "databases",
    icon: <Database className="h-4 w-4" />,
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 78 },
      { name: "Supabase", level: 85 },
      { name: "Firestore", level: 85 },
    ],
  },
  {
    title: "AI / ML",
    slug: "ai-ml",
    icon: <Brain className="h-4 w-4" />,
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "Computer Vision", level: 84 },
      { name: "Deep Learning", level: 85 },
      { name: "Transformers", level: 80 },
      { name: "LLMs & RAG", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "Scikit-learn", level: 85 },
      { name: "Vector DBs", level: 82 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud",
    icon: <Cloud className="h-4 w-4" />,
    skills: [
      { name: "AWS", level: 80 },
      { name: "GCP", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Linux / Nginx", level: 85 },
      { name: "GitHub Actions", level: 85 },
    ],
  },
  {
    title: "Engineering",
    slug: "engineering",
    icon: <CheckCircle2 className="h-4 w-4" />,
    skills: [
      { name: "Pytest / Jest", level: 82 },
      { name: "Test Automation", level: 80 },
      { name: "System Design", level: 82 },
      { name: "Agile / Scrum", level: 85 },
    ],
  },
]

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
}

const row = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
}

function Dots({ level }: { level: number }) {
  const filled = Math.max(1, Math.round(level / 20))
  return (
    <span className="flex items-center gap-1" aria-label={`${filled} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn("h-2 w-2 rounded-full", i < filled ? "bg-primary" : "bg-border")}
        />
      ))}
    </span>
  )
}

export default function Skills() {
  const [active, setActive] = useState(0)
  const cat = skillCategories[active]

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="02"
          eyebrow="Toolkit"
          align="left"
          title={
            <>
              The stack I{" "}
              <span className="font-serif font-normal italic text-primary">build with</span>
            </>
          }
          description="Hover a category to explore the tools I reach for — from systems languages and distributed backends to deep learning research, mobile apps, and modern frontends."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div role="tablist" aria-label="Skill categories" className="flex flex-col">
            {skillCategories.map((c, i) => {
              const isActive = active === i
              return (
                <button
                  key={c.slug}
                  role="tab"
                  aria-selected={isActive}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex items-center gap-4 border-t border-border py-5 pl-4 text-left transition-colors duration-300 last:border-b md:gap-6 md:py-6",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-bar"
                      className="absolute left-0 top-0 h-full w-[3px] bg-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className={cn("font-mono text-xs", isActive && "text-primary")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                    {c.title}
                  </span>
                  <span className="ml-auto font-mono text-xs">{c.skills.length}</span>
                  <ArrowUpRight
                    className={cn(
                      "h-5 w-5 shrink-0 transition-all duration-300",
                      isActive ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 opacity-0"
                    )}
                  />
                </button>
              )
            })}
          </div>

          <div className="self-start lg:sticky lg:top-28">
            <div className="rounded-3xl bg-gradient-to-br from-primary/60 via-border to-gold/40 p-px shadow-[0_0_60px_-20px_hsl(var(--primary)/0.5)]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-card p-6 md:p-9 lg:min-h-[28rem]">
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-4 select-none font-display text-[12rem] font-extrabold leading-none text-foreground/[0.04]"
              >
                {String(active + 1).padStart(2, "0")}
              </span>

              <div className="mb-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em]">
                <span className="flex items-center gap-2 text-primary">
                  {cat.icon}
                  {"// "}
                  {cat.slug}
                </span>
                <span className="text-muted-foreground">{cat.skills.length} tools</span>
              </div>

              <motion.ul
                key={cat.slug}
                variants={list}
                initial="hidden"
                animate="show"
                className="relative grid gap-x-10 sm:grid-cols-2"
              >
                {cat.skills.map((s) => (
                  <motion.li
                    key={s.name}
                    variants={row}
                    className="flex items-center justify-between gap-3 border-b border-border/70 py-3.5"
                  >
                    <span className="font-medium">{s.name}</span>
                    <Dots level={s.level} />
                  </motion.li>
                ))}
              </motion.ul>

              <p className="relative mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </span>
                Proficiency &middot; daily driver &rarr; familiar
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
