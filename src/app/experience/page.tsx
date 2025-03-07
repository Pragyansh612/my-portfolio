"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const experiences = [
  {
    title: "Software Development Engineering Intern",
    company: "Finuance",
    period: "Dec 2024 - Feb 2025",
    location: "Remote",
    description: "Developed and optimized financial web applications with a focus on performance and security.",
    responsibilities: [
      "Implemented responsive designs for improved user experience across devices",
      "Integrated backend APIs for seamless data flow",
      "Optimized application performance, resulting in faster load times",
      "Collaborated with the design team to implement intuitive user interfaces",
      "Participated in code reviews and contributed to best practices documentation",
    ],
    achievements: [
      "Reduced page load time by 40% through code optimization and lazy loading techniques",
      "Implemented a secure authentication system using JWT, enhancing overall application security",
      "Developed reusable UI components, increasing development efficiency by 30%",
    ],
    techStack: ["React.js", "Node.js", "PostgreSQL", "Bootstrap"],
  },
  {
    title: "Full Stack Developer",
    company: "Asynq",
    period: "Dec 2024 - Jan 2025",
    location: "Remote",
    description: "Built optimized web applications with a focus on UI/UX, performance, and security.",
    responsibilities: [
      "Designed and implemented scalable backend architectures using Node.js and Express",
      "Developed responsive and interactive front-end interfaces using React.js and Next.js",
      "Implemented RESTful APIs and integrated third-party services",
      "Optimized database queries and implemented caching strategies for improved performance",
      "Conducted unit and integration testing to ensure code quality and reliability",
    ],
    achievements: [
      "Developed a real-time notification system using WebSockets, improving user engagement by 25%",
      "Created a custom dashboard with interactive data visualizations, enhancing data interpretation for clients",
      "Implemented a CI/CD pipeline using GitHub Actions, reducing deployment time by 50%",
    ],
    techStack: ["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Artly",
    period: "Sep 2024 - Nov 2024",
    location: "Remote",
    description: "Developed interactive web pages and improved UI performance for an art-focused platform.",
    responsibilities: [
      "Collaborated with designers to implement pixel-perfect, responsive interfaces",
      "Optimized front-end performance through efficient rendering and asset optimization",
      "Integrated third-party APIs to enhance application functionality",
      "Assisted in database schema design and optimization",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
    achievements: [
      "Redesigned the product gallery, increasing user engagement by 25%",
      "Optimized database queries, reducing load times by 30%",
      "Implemented a responsive design system, ensuring consistent user experience across all devices",
    ],
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
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
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Work Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey has equipped me with valuable skills and experience in developing modern web
            applications. Here&apos;s a detailed look at my work history:
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <div className="glassmorphism-card">
                <h2 className="text-2xl font-semibold text-gradient mb-2">{exp.title}</h2>
                <h3 className="text-xl font-medium mb-4">{exp.company}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
                <p className="mb-6 text-foreground/90">{exp.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Key Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className="text-muted-foreground">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

