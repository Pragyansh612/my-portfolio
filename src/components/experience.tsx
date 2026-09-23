"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Plus } from "lucide-react"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Software Engineer",
    company: "Instafarms",
    period: "Jun 2024 – Apr 2026",
    location: "Remote",
    current: true,
    description:
      "Shipped 3 production web and mobile apps with React Native and real-time sync for 500+ daily active users, and deployed GCP-hosted RAG pipelines over 50,000+ embeddings. Managed Linux VMs with Docker/Nginx at 99.9% uptime and optimized PostgreSQL for a 50% faster dashboard.",
    techStack: ["Next.js", "React Native", "TypeScript", "GCP", "PostgreSQL", "Docker", "Nginx", "GitHub Actions"],
    website: null,
  },
  {
    title: "Full Stack Developer Intern",
    company: "Dynish",
    period: "Mar 2024 – Jun 2024",
    location: "Remote",
    current: false,
    description:
      "Improved frontend performance 25% via React/Next.js SSR, replaced manual workflows with NLP-powered FastAPI services, and migrated auth to Firebase, cutting login failures and infra costs.",
    techStack: ["React.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS", "Firebase", "Python", "FastAPI"],
    website: "https://dynish.app/",
  },
]

const achievements = [
  {
    metric: "1st",
    title: "CS671 Deep Learning Hackathon",
    detail: "Won 1st place for the ASD Generalization Study — now headed for publication.",
  },
  {
    metric: "#2",
    title: "KrackHack Hackathon",
    detail: "Built a working AI prototype in 24 hours among 50+ teams at IIT Mandi.",
  },
  {
    metric: "40%",
    title: "Programming Club Website",
    detail: "Led the rebuild — faster page loads for 1,000+ students.",
  },
  {
    metric: "10K+",
    title: "Ranneti Registration Portal",
    detail: "Processed 10,000+ registrations with zero downtime over 3 days.",
  },
]

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-20 bottom-20 -z-10 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="container mx-auto px-4">
        <SectionHeading
          index="03"
          eyebrow="Career"
          align="left"
          title={
            <>
              Where I&apos;ve{" "}
              <span className="font-serif font-normal italic text-primary">shipped</span>
            </>
          }
          description="From freelance engagements to a full-time engineering role — building production systems across startups and industries."
        />

        <div className="border-b border-border">
          {experiences.map((exp, i) => {
            const isOpen = open === i
            return (
              <div key={exp.company + exp.period} className="border-t border-border">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-4 py-6 text-left md:gap-8 md:py-9"
                >
                  <span className="pt-2 font-mono text-xs text-muted-foreground md:pt-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className={cn(
                          "font-display text-3xl font-bold tracking-tight transition-colors duration-300 sm:text-4xl md:text-6xl",
                          isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        )}
                      >
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="rounded-full bg-gradient-to-r from-primary to-fuchsia-500 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                          Now
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground md:text-base">{exp.title}</p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:hidden">
                      {exp.period}
                    </p>
                  </div>

                  <div className="hidden pt-3 text-right font-mono text-xs uppercase leading-6 tracking-wider text-muted-foreground sm:block md:pt-5">
                    {exp.period}
                    <br />
                    {exp.location}
                  </div>

                  <span
                    className={cn(
                      "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:mt-3",
                      isOpen
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border group-hover:border-primary group-hover:text-primary"
                    )}
                  >
                    <Plus className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-45")} />
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                  inert={!isOpen}
                >
                  <div className="grid gap-6 pb-9 pl-9 md:grid-cols-[1.2fr_1fr] md:gap-12 md:pl-[4.25rem]">
                    <p className="text-base leading-relaxed text-foreground/80 md:text-lg">{exp.description}</p>
                    <div>
                      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {exp.website && (
                        <Link
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          Visit {exp.company}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-10 bg-border" />
            Beyond the day job
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="font-display text-5xl font-extrabold tracking-tight text-gradient">{a.metric}</div>
                <h4 className="mt-4 font-semibold">{a.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
