"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase, ExternalLink, Trophy, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Dynish",
    period: "Mar 2025 – Jun 2025",
    location: "Remote",
    description: "Built full-stack features and integrated NLP models for enhanced user experiences. Developed scalable web applications using modern frameworks and cloud technologies.",
    responsibilities: [
      "Developed and deployed full-stack web applications with modern React.js and TypeScript",
      "Integrated advanced NLP models to enhance user interaction and experience",
      "Implemented scalable backend solutions using FastAPI and Python",
      "Collaborated with cross-functional teams to deliver high-quality features",
      "Optimized application performance and implemented responsive design patterns",
    ],
    achievements: [
      "Successfully integrated NLP models that improved user engagement by 35%",
      "Developed reusable components that reduced development time by 40%",
      "Implemented cloud-based solutions using AWS and Firebase for better scalability",
    ],
    techStack: ["React.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS", "Firebase", "Python", "FastAPI"],
    website: "https://dynish.app/"
  },
  {
    title: "Software Development Engineering Intern",
    company: "Finuance",
    period: "Dec 2024 – Feb 2025",
    location: "Remote",
    description: "Optimized and developed financial web applications with focus on performance, security, and user experience. Implemented RAG systems and integrated OpenAI APIs for intelligent features.",
    responsibilities: [
      "Developed and optimized financial web applications with emphasis on security",
      "Implemented RAG (Retrieval-Augmented Generation) systems for intelligent data processing",
      "Integrated OpenAI APIs to provide AI-powered financial insights and recommendations",
      "Collaborated with backend teams to ensure seamless API integration and data flow",
      "Participated in code reviews and contributed to best practices documentation",
    ],
    achievements: [
      "Reduced page load time by 40% through advanced optimization techniques and lazy loading",
      "Implemented secure authentication system using JWT, enhancing overall application security",
      "Developed intelligent RAG system that improved data retrieval accuracy by 50%",
    ],
    techStack: ["React.js", "Next.js", "Django", "PostgreSQL", "Docker", "OpenAI APIs", "RAG", "Python", "Tailwind CSS"],
    website: null
  },
  {
    title: "Full Stack Developer",
    company: "Asynq",
    period: "Dec 2024 – Jan 2025",
    location: "Remote",
    description: "Built secure, performant UI/UX applications with emphasis on scalability and modern design patterns. Worked with LangChain for AI integrations and cloud deployment.",
    responsibilities: [
      "Designed and implemented scalable backend architectures using Node.js and Django",
      "Developed responsive and interactive front-end interfaces using React.js and Next.js",
      "Integrated LangChain for advanced AI-powered features and automation",
      "Implemented RESTful APIs and optimized database queries for improved performance",
      "Deployed applications on AWS with focus on scalability and reliability",
    ],
    achievements: [
      "Developed real-time notification system using WebSockets, improving user engagement by 25%",
      "Created custom dashboard with interactive data visualizations for enhanced user experience",
      "Implemented CI/CD pipeline using modern DevOps practices, reducing deployment time by 50%",
    ],
    techStack: ["Next.js", "Node.js", "Django", "MongoDB", "Tailwind CSS", "AWS", "LangChain"],
    website: "https://www.asynq.ai/"
  },
  {
    title: "Full Stack Developer Intern",
    company: "Artly",
    period: "Sep 2024 – Nov 2024",
    location: "Remote",
    description: "Created interactive UI components and optimized application performance for an art-focused platform. Collaborated with design team to implement responsive, pixel-perfect interfaces.",
    responsibilities: [
      "Collaborated with designers to implement pixel-perfect, responsive interfaces",
      "Developed interactive web pages and optimized UI performance for better user experience",
      "Integrated third-party APIs to enhance application functionality and features",
      "Participated in agile development processes including daily stand-ups and sprint planning",
      "Assisted in database schema design and optimization for improved data handling",
    ],
    achievements: [
      "Redesigned the product gallery interface, increasing user engagement by 25%",
      "Optimized database queries and caching strategies, reducing load times by 30%",
      "Implemented responsive design system ensuring consistent experience across all devices",
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
              Leadership & Additional Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Programming Club Website Lead
                </h4>
                <p className="text-muted-foreground ml-4">
                  Led development and maintenance of the programming club&apos;s website, enhancing community engagement.
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