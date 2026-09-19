"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import Reveal from "@/components/reveal"
import PageCTA from "@/components/page-cta"
import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Software Engineer",
    company: "Instafarms",
    period: "Jun 2025 – Present",
    location: "Remote",
    current: true,
    description:
      "Architecting and shipping production web and mobile applications, GCP-hosted RAG pipelines, and cloud infrastructure serving hundreds of daily active users.",
    responsibilities: [
      "Architected and shipped 3 production web and mobile applications using Next.js, React Native, and TypeScript",
      "Designed and deployed horizontally scalable RAG pipelines on GCP with semantic vector search over 50,000+ embeddings",
      "Provisioned and managed 5 Linux VMs with Docker and Nginx, building GitHub Actions CI/CD with automated test gates",
      "Optimized PostgreSQL schemas, composite indexes, and SQL queries using telemetry-driven performance monitoring",
    ],
    achievements: [
      "Reduced API response latency by 35% and onboarding overhead by 20%",
      "Cut LLM query latency by 40% for 500+ daily active users",
      "Achieved 99.9% uptime while reducing deployment cycles by 30%",
      "Reduced dashboard query execution time by 50%",
    ],
    techStack: ["Next.js", "React Native", "TypeScript", "GCP", "PostgreSQL", "Docker", "Nginx", "GitHub Actions", "RAG"],
    website: null,
  },
  {
    title: "Full Stack Developer Intern",
    company: "Dynish",
    period: "Mar 2025 – Jun 2025",
    location: "Remote",
    current: false,
    description:
      "Built full-stack features and NLP-powered services for enhanced user experiences, and migrated the authentication layer to Firebase.",
    responsibilities: [
      "Improved frontend performance through React.js refactoring and Next.js server-side rendering",
      "Replaced manual data-processing workflows with NLP-powered FastAPI services",
      "Migrated the authentication layer to Firebase to resolve recurring login failures",
      "Developed unit and functional test suites with automated regression checks",
      "Contributed across React.js, TypeScript, PostgreSQL, and AWS in a 6-person Agile/Scrum team",
    ],
    achievements: [
      "Improved frontend performance by 25%, contributing to an 18% increase in user retention",
      "Saved 15+ engineering hours per week by automating 4 manual workflows",
      "Resolved 60% of recurring login failures and cut cloud infra costs by $200/month",
      "Increased sprint velocity by 22%",
    ],
    techStack: ["React.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS", "Firebase", "Python", "FastAPI"],
    website: "https://dynish.app/",
  },
  {
    title: "SDE Intern – Backend, Freelance",
    company: "Nextfront Technologies",
    period: "Jul 2025 – Sep 2025",
    location: "Remote",
    current: false,
    description:
      "Designed asynchronous FastAPI microservices and integrated LLM-powered automation pipelines for internal services.",
    responsibilities: [
      "Designed asynchronous FastAPI microservices to eliminate blocking I/O under concurrent workloads",
      "Optimized PostgreSQL data-access patterns for internal services",
      "Integrated LLM-powered automation pipelines using Python, FastAPI, Docker, and REST APIs",
    ],
    achievements: ["Improved backend throughput and reduced response latency across internal services"],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs"],
    website: null,
  },
  {
    title: "SDE, Freelance",
    company: "Finuance",
    period: "Dec 2024 – Feb 2025",
    location: "Remote",
    current: false,
    description:
      "Refactored backend architecture and optimized query execution paths for a real-time financial analytics platform.",
    responsibilities: [
      "Refactored backend architecture using Django, Next.js, PostgreSQL, and Docker",
      "Optimized SQL query execution paths for real-time financial analytics workloads",
    ],
    achievements: ["Reduced API latency by 40% for real-time financial analytics"],
    techStack: ["Django", "Next.js", "PostgreSQL", "Docker"],
    website: null,
  },
  {
    title: "Full Stack Developer, Freelance",
    company: "Asynq",
    period: "Sep 2024 – Nov 2024",
    location: "Remote",
    current: false,
    description:
      "Designed role-based access control and scalable analytics dashboards for secure, multi-role access.",
    responsibilities: [
      "Designed role-based access control (RBAC) using Next.js, Node.js, Django, MongoDB, and AWS",
      "Built scalable analytics dashboards to improve system observability",
    ],
    achievements: ["Enabled secure multi-role access and improved system observability"],
    techStack: ["Next.js", "Node.js", "Django", "MongoDB", "AWS"],
    website: "https://www.asynq.ai/",
  },
  {
    title: "Developer, Freelance",
    company: "Artly",
    period: "Aug 2024 – Nov 2024",
    location: "Remote",
    current: false,
    description:
      "Built reusable UI components and optimized client-side rendering for an art-focused platform.",
    responsibilities: [
      "Built reusable UI components using Next.js, MongoDB, and Tailwind CSS",
      "Optimized client-side rendering for better page performance",
    ],
    achievements: ["Improved page performance and UI consistency across the platform"],
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    website: "https://www.artly.co.in/",
  },
]

const achievements = [
  { metric: "#2", title: "KrackHack Hackathon", detail: "Built a working AI prototype in 24 hours among 50+ teams at IIT Mandi." },
  { metric: "40%", title: "Programming Club Website", detail: "Led the rebuild — faster page loads for 1,000+ students." },
  { metric: "10K+", title: "Ranneti Registration Portal", detail: "Processed 10,000+ registrations with zero downtime over 3 days." },
  { metric: "Lead", title: "Fest Web Development", detail: "Led web development teams for Ranneti and Exodia festivals." },
]

export default function ExperiencePage() {
  const listRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.6", "end 0.6"] })

  return (
    <div className="relative overflow-x-clip pt-32 md:pt-40">
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 top-[40rem] -z-10 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="container mx-auto px-4">
        <SectionHeading
          index="/ 02"
          eyebrow="Career"
          align="left"
          title={
            <>
              Where I&apos;ve{" "}
              <span className="font-serif font-normal italic text-primary">shipped</span>
            </>
          }
          description="Freelance engagements, internships and a full-time engineering role — building scalable web applications, AI integrations and production infrastructure across startups."
        />

        <div ref={listRef} className="relative">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border md:left-[9px]" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-primary via-fuchsia-500 to-gold md:left-[9px]"
          />

          {experiences.map((exp) => (
            <Reveal key={exp.company + exp.period} className="relative pb-16 pl-9 md:pb-24 md:pl-16">
              <span
                className={cn(
                  "absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-background md:h-5 md:w-5",
                  exp.current ? "bg-gradient-to-br from-primary to-fuchsia-500 shadow-[0_0_20px_hsl(var(--primary)/0.8)]" : "bg-muted-foreground"
                )}
              />

              <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
                <div className="self-start lg:sticky lg:top-28">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{exp.period}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-4xl font-bold leading-none tracking-tight md:text-5xl">{exp.company}</h2>
                    {exp.current && (
                      <span className="rounded-full bg-gradient-to-r from-primary to-fuchsia-500 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                        Now
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-base text-muted-foreground">{exp.title}</p>
                  <p className="mt-2 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </p>
                  {exp.website && (
                    <Link
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Visit {exp.company}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>

                <div>
                  <p className="text-lg leading-relaxed text-foreground/85">{exp.description}</p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">What I did</h3>
                      <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2.5">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Impact</h3>
                      <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/85">
                        {exp.achievements.map((a) => (
                          <li key={a} className="flex gap-2.5">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
                    {exp.techStack.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-10 bg-border" />
            Beyond the day job
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="font-display text-5xl font-extrabold tracking-tight text-gradient">{a.metric}</div>
                <h4 className="mt-4 font-semibold">{a.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <PageCTA />
    </div>
  )
}
