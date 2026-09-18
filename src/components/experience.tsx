"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, ExternalLink, Trophy } from "lucide-react"
import Link from "next/link"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"
import SectionHeading from "@/components/section-heading"

const experiences = [
  {
    title: "Software Engineer",
    company: "Instafarms",
    period: "Jun 2025 – Present",
    location: "Remote",
    current: true,
    description:
      "Shipped 3 production web and mobile apps and deployed GCP-hosted RAG pipelines over 50,000+ embeddings. Managed Linux VMs with Docker/Nginx at 99.9% uptime and optimized PostgreSQL for a 50% faster dashboard.",
    techStack: ["Next.js", "React Native", "TypeScript", "GCP", "PostgreSQL", "Docker", "Nginx", "GitHub Actions"],
    website: null,
  },
  {
    title: "Full Stack Developer Intern",
    company: "Dynish",
    period: "Mar 2025 – Jun 2025",
    location: "Remote",
    current: false,
    description:
      "Improved frontend performance 25% via React/Next.js SSR, replaced manual workflows with NLP-powered FastAPI services, and migrated auth to Firebase, cutting login failures and infra costs.",
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
      "Designed asynchronous FastAPI microservices to eliminate blocking I/O under concurrent workloads, and integrated LLM-powered automation pipelines with optimized PostgreSQL data access.",
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
      "Refactored backend architecture and optimized SQL query execution paths, reducing API latency by 40% for real-time financial analytics.",
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
      "Designed role-based access control and scalable analytics dashboards, enabling secure multi-role access and improved system observability.",
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
      "Built reusable UI components and optimized client-side rendering, improving page performance and UI consistency.",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    website: "https://www.artly.co.in/",
  },
]

const achievements = [
  {
    title: "2nd Place, KrackHack Hackathon (IIT Mandi)",
    detail: "Built and delivered a working AI prototype within 24 hours among 50+ participating teams.",
  },
  {
    title: "Programming Club Website Lead",
    detail: "Led the Programming Club website rebuild, improving page-load performance by 40% for 1,000+ students.",
  },
  {
    title: "Ranneti Annual Fest Registration Portal",
    detail: "Delivered the registration portal, processing 10,000+ registrations with zero downtime over 3 days.",
  },
  {
    title: "Event Web Development Lead",
    detail: "Led web development teams for major college festivals including Ranneti and Exodia.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="experience" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.08),transparent_60%)]" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Career Journey"
          title="Professional Experience"
          description="From freelance engagements to a full-time engineering role — building production systems across startups and industries."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative mx-auto max-w-3xl"
        >
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent md:left-[19px]" />

          {experiences.map((exp) => (
            <motion.div key={exp.company + exp.period} variants={item} className="relative mb-6 pl-10 last:mb-0 md:pl-14">
              <div
                className={`absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background md:h-10 md:w-10 ${
                  exp.current
                    ? "bg-gradient-to-br from-primary to-purple-600 shadow-lg shadow-primary/40"
                    : "bg-secondary"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${exp.current ? "bg-white animate-pulse" : "bg-muted-foreground"}`}
                />
              </div>

              <MagicCard
                className="rounded-2xl"
                gradientColor="hsl(var(--primary) / 0.12)"
                gradientFrom="hsl(var(--primary))"
                gradientTo="hsl(var(--gold))"
              >
                <div className="relative overflow-hidden rounded-2xl p-5 md:p-6">
                  {exp.current && (
                    <BorderBeam size={70} duration={7} colorFrom="hsl(var(--primary))" colorTo="hsl(var(--gold))" />
                  )}

                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold md:text-xl">{exp.title}</h3>
                        {exp.current && (
                          <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-base font-medium text-foreground/80">{exp.company}</p>
                    </div>
                    {exp.website && (
                      <Link
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-border/60 p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground md:text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
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

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-gold" />
            <h3 className="font-display text-xl font-semibold">Leadership &amp; Achievements</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur-md transition-colors hover:border-gold/40"
              >
                <h4 className="mb-1.5 flex items-start gap-2 text-sm font-semibold text-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-gold to-primary" />
                  {a.title}
                </h4>
                <p className="pl-3.5 text-sm text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
