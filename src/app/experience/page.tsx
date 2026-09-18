"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase, ExternalLink, Trophy} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const experiences = [
  {
    title: "Software Engineer",
    company: "Instafarms",
    period: "Jun 2025 – Present",
    location: "Remote",
    description: "Architecting and shipping production web and mobile applications, GCP-hosted RAG pipelines, and cloud infrastructure serving hundreds of daily active users.",
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
    website: null
  },
  {
    title: "Full Stack Developer Intern",
    company: "Dynish",
    period: "Mar 2025 – Jun 2025",
    location: "Remote",
    description: "Built full-stack features and NLP-powered services for enhanced user experiences, and migrated the authentication layer to Firebase.",
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
    website: "https://dynish.app/"
  },
  {
    title: "SDE Intern – Backend, Freelance",
    company: "Nextfront Technologies",
    period: "Jul 2025 – Sep 2025",
    location: "Remote",
    description: "Designed asynchronous FastAPI microservices and integrated LLM-powered automation pipelines for internal services.",
    responsibilities: [
      "Designed asynchronous FastAPI microservices to eliminate blocking I/O under concurrent workloads",
      "Optimized PostgreSQL data-access patterns for internal services",
      "Integrated LLM-powered automation pipelines using Python, FastAPI, Docker, and REST APIs",
    ],
    achievements: [
      "Improved backend throughput and reduced response latency across internal services",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs"],
    website: null
  },
  {
    title: "SDE, Freelance",
    company: "Finuance",
    period: "Dec 2024 – Feb 2025",
    location: "Remote",
    description: "Refactored backend architecture and optimized query execution paths for a real-time financial analytics platform.",
    responsibilities: [
      "Refactored backend architecture using Django, Next.js, PostgreSQL, and Docker",
      "Optimized SQL query execution paths for real-time financial analytics workloads",
    ],
    achievements: [
      "Reduced API latency by 40% for real-time financial analytics",
    ],
    techStack: ["Django", "Next.js", "PostgreSQL", "Docker"],
    website: null
  },
  {
    title: "Full Stack Developer, Freelance",
    company: "Asynq",
    period: "Sep 2024 – Nov 2024",
    location: "Remote",
    description: "Designed role-based access control and scalable analytics dashboards for secure, multi-role access.",
    responsibilities: [
      "Designed role-based access control (RBAC) using Next.js, Node.js, Django, MongoDB, and AWS",
      "Built scalable analytics dashboards to improve system observability",
    ],
    achievements: [
      "Enabled secure multi-role access and improved system observability",
    ],
    techStack: ["Next.js", "Node.js", "Django", "MongoDB", "AWS"],
    website: "https://www.asynq.ai/"
  },
  {
    title: "Developer, Freelance",
    company: "Artly",
    period: "Aug 2024 – Nov 2024",
    location: "Remote",
    description: "Built reusable UI components and optimized client-side rendering for an art-focused platform.",
    responsibilities: [
      "Built reusable UI components using Next.js, MongoDB, and Tailwind CSS",
      "Optimized client-side rendering for better page performance",
    ],
    achievements: [
      "Improved page performance and UI consistency across the platform",
    ],
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    website: "https://www.artly.co.in/"
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ExperiencePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey across innovative startups building scalable web applications, AI integrations, and exceptional user experiences.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <div className="backdrop-blur-lg bg-background/40 border border-primary/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">
                      {exp.title}
                    </h2>
                    <h3 className="text-lg font-medium text-foreground/90 mb-2">{exp.company}</h3>
                  </div>
                  {exp.website && (
                    <Button asChild variant="outline" size="sm" className="w-fit border-primary/30 hover:bg-primary/10">
                      <Link href={exp.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Visit
                      </Link>
                    </Button>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 text-foreground/90 leading-relaxed">{exp.description}</p>

                {/* Compact Content */}
                <div className="space-y-4">
                  {/* Responsibilities - Compact */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center text-sm text-primary">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Key Responsibilities
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {exp.responsibilities.slice(0, 3).map((responsibility, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-primary/60 mt-2 mr-2 flex-shrink-0"></div>
                          {responsibility}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements - Compact */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center text-sm text-primary">
                      <Trophy className="h-4 w-4 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-green-500/60 mt-2 mr-2 flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <div className="backdrop-blur-lg bg-background/30 border border-primary/20 rounded-xl p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-4 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Leadership & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  2nd Place, KrackHack Hackathon (IIT Mandi)
                </h4>
                <p className="text-muted-foreground ml-4">
                  Built and delivered a working AI prototype within 24 hours among 50+ participating teams.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Programming Club Website Lead
                </h4>
                <p className="text-muted-foreground ml-4">
                  Led the Programming Club website rebuild, improving page-load performance by 40% for 1,000+ students.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Ranneti Annual Fest Registration Portal
                </h4>
                <p className="text-muted-foreground ml-4">
                  Delivered the registration portal, processing 10,000+ registrations with zero downtime over 3 days.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Event Web Development Lead
                </h4>
                <p className="text-muted-foreground ml-4">
                  Led web development for major college festivals including Ranneti and Exodia.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}