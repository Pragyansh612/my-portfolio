"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "GenWeb",
    description:
      "AI-powered website builder built with Next.js, designed to streamline web development using modern tools like Clerk for authentication and Supabase for data storage.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Clerk", "Supabase", "AI Agents", "Python", "Django"],
    liveLink: "https://genwebai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/GenWeb",
  },
  {
    title: "IIT Mandi Cultural Council Website",
    description:
      "Developed an interactive platform for cultural events with event registration, gallery, and team information features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Framer Motion"],
    liveLink: "https://cc.iitmandi.co.in/",
    githubLink: "",
  },
  {
    title: "WanderWay",
    description:
      "Online booking platform for hotels, trains, flights, and more. Integrates with real-time APIs to provide up-to-date information and seamless booking experiences.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React.js", "API Integration", "Payment Gateway", "Real-time Data"],
    // liveLink: "https://example.com/wanderway",
    githubLink: "https://github.com/Pragyansh612/WanderWay",
  },
  {
    title: "Exodia Website",
    description:
      "Led web development for an event management platform with user authentication, event registration, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://exodia-iit-mandiii.vercel.app/",
    // githubLink: "https://github.com/Pragyansh612/exodia",
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

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and experience in web development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group backdrop-blur-lg bg-background/30 border border-primary/10 rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubLink && (
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button asChild size="sm">
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}