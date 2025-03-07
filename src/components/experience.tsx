"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Development Engineering Intern",
    company: "Finuance",
    period: "Dec 2024 - Feb 2025",
    location: "Remote",
    description: "Developed and optimized financial web applications with a focus on performance and security.",
    techStack: ["React.js", "Node.js", "PostgreSQL", "Bootstrap"],
  },
  {
    title: "Full Stack Developer",
    company: "Asynq",
    period: "Dec 2024 - Jan 2025",
    location: "Remote",
    description:
      "Built optimized web applications with a focus on UI/UX and security. Implemented responsive designs and integrated backend APIs.",
    techStack: ["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Artly",
    period: "Sep 2024 - Nov 2024",
    location: "Remote",
    description:
      "Developed interactive web pages and improved UI performance. Collaborated with design team to implement pixel-perfect interfaces.",
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

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey has equipped me with valuable skills and experience in developing modern web
            applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform md:translate-x-[-0.5px] hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item} className="mb-12 md:mb-0 relative">
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary/20 backdrop-blur-sm border border-primary transform md:translate-x-[-12px] hidden md:block"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="backdrop-blur-lg bg-background/30 border border-primary/10 rounded-xl p-6 shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="mb-4 text-foreground/80">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

