"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const experiences = [
  {
    title: "Software Engineer",
    company: "Instafarms",
    period: "Jun 2025 – Present",
    location: "Remote",
    description: "Shipped 3 production web and mobile apps and deployed GCP-hosted RAG pipelines over 50,000+ embeddings. Managed Linux VMs with Docker/Nginx at 99.9% uptime and optimized PostgreSQL for a 50% faster dashboard.",
    techStack: ["Next.js", "React Native", "TypeScript", "GCP", "PostgreSQL", "Docker", "Nginx", "GitHub Actions"],
    website: null
  },
  {
    title: "Full Stack Developer Intern",
    company: "Dynish",
    period: "Mar 2025 – Jun 2025",
    location: "Remote",
    description: "Improved frontend performance 25% via React/Next.js SSR, replaced manual workflows with NLP-powered FastAPI services, and migrated auth to Firebase, cutting login failures and infra costs.",
    techStack: ["React.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS", "Firebase", "Python", "FastAPI"],
    website: "https://dynish.app/"
  },
  {
    title: "SDE Intern – Backend, Freelance",
    company: "Nextfront Technologies",
    period: "Jul 2025 – Sep 2025",
    location: "Remote",
    description: "Designed asynchronous FastAPI microservices to eliminate blocking I/O under concurrent workloads, and integrated LLM-powered automation pipelines with optimized PostgreSQL data access.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs"],
    website: null
  },
  {
    title: "SDE, Freelance",
    company: "Finuance",
    period: "Dec 2024 – Feb 2025",
    location: "Remote",
    description: "Refactored backend architecture and optimized SQL query execution paths, reducing API latency by 40% for real-time financial analytics.",
    techStack: ["Django", "Next.js", "PostgreSQL", "Docker"],
    website: null
  },
  {
    title: "Full Stack Developer, Freelance",
    company: "Asynq",
    period: "Sep 2024 – Nov 2024",
    location: "Remote",
    description: "Designed role-based access control and scalable analytics dashboards, enabling secure multi-role access and improved system observability.",
    techStack: ["Next.js", "Node.js", "Django", "MongoDB", "AWS"],
    website: "https://www.asynq.ai/"
  },
  {
    title: "Developer, Freelance",
    company: "Artly",
    period: "Aug 2024 – Nov 2024",
    location: "Remote",
    description: "Built reusable UI components and optimized client-side rendering, improving page performance and UI consistency.",
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
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
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            My journey through various tech companies has equipped me with diverse skills in full-stack development, 
            AI integration, and modern web technologies across multiple industries.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent transform md:-translate-x-[1px]"></div>

          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item} className="relative mb-12 last:mb-0">
              <div
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-purple-600 shadow-lg shadow-primary/30 transform -translate-x-2 md:-translate-x-2 z-10 border-2 border-background">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 animate-pulse opacity-40"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="backdrop-blur-lg bg-background/40 border border-primary/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-primary group-hover:text-purple-600 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      {exp.website && (
                        <Button asChild variant="ghost" size="sm" className="w-fit mt-2 sm:mt-0 opacity-70 hover:opacity-100">
                          <Link href={exp.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-foreground/90">{exp.company}</h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="mb-5 text-foreground/80 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-3">
                      <h5 className="text-sm font-semibold text-primary">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for opposite side */}
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-lg bg-background/30 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary">Leadership & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">2nd Place, KrackHack Hackathon (IIT Mandi)</h4>
                <p className="text-muted-foreground">Built and delivered a working AI prototype within 24 hours among 50+ participating teams.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Programming Club Website Lead</h4>
                <p className="text-muted-foreground">Led the Programming Club website rebuild at IIT Mandi, improving page-load performance by 40% for 1,000+ students.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Ranneti Annual Fest Registration Portal</h4>
                <p className="text-muted-foreground">Delivered the registration portal, processing 10,000+ registrations with zero downtime over 3 days.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Event Web Development Lead</h4>
                <p className="text-muted-foreground">Led web development teams for major college festivals including Ranneti and Exodia, managing end-to-end project delivery.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}