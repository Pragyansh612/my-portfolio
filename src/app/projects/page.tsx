"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projects = [
  {
    title: "GenWeb",
    description:
      "AI-powered website builder built with Next.js, designed to streamline web development using modern tools like Clerk for authentication and Supabase for data storage.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Clerk", "Supabase", "AI Agents", "Python", "Django"],
    liveLink: "https://genwebai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/GenWeb",
    features: [
      "AI-powered content generation and website building",
      "User authentication with Clerk",
      "Database integration with Supabase",
      "Modern, responsive design templates",
    ],
    challenges: [
      "Implementing effective AI integration for website generation",
      "Creating an intuitive user interface for non-technical users",
      "Ensuring proper data storage and retrieval with Supabase",
    ],
    impact:
      "Simplified the web development process for users without technical expertise, enabling faster website creation.",
    role: "Lead Developer",
    date: "2024",
  },
  {
    title: "WanderWay",
    description:
      "Online booking platform for hotels, trains, flights, and more. Integrates with real-time APIs to provide up-to-date information and seamless booking experiences.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React.js", "API Integration", "Payment Gateway", "Real-time Data"],
    // liveLink: "https://example.com/wanderway",
    githubLink: "https://github.com/Pragyansh612/WanderWay",
    features: [
      "Real-time availability and pricing from multiple APIs",
      "Secure booking and payment system",
      "User profiles and booking history",
      "Search and filter functionality for accommodations and transportation",
    ],
    challenges: [
      "Integrating multiple third-party APIs for real-time data",
      "Building a secure payment processing system",
      "Ensuring consistent user experience across different service types",
    ],
    impact: "Created a centralized platform for travel booking needs, streamlining the process for users.",
    role: "Full-stack Developer",
    date: "2024",
  },
  {
    title: "Exodia Website",
    description:
      "Event management and registration platform for Exodia fest. The platform handles thousands of registrations for IIT Mandi's annual technical festival.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: "https://exodia-iit-mandiii.vercel.app/",
    // githubLink: "https://github.com/Pragyansh612/exodia",
    features: [
      "Secure user authentication and profile management",
      "Event registration with payment gateway integration",
      "Real-time updates and notifications",
      "Analytics dashboard for event organizers",
    ],
    challenges: [
      "Handling high traffic during peak registration periods",
      "Implementing a secure payment system for event tickets",
      "Creating a responsive design that works seamlessly on all devices",
    ],
    impact: "The platform successfully managed over 10,000 registrations, a 50% increase from the previous year.",
    role: "Head of Web Development",
    date: "2024",
  },
  {
    title: "IIT Mandi Cultural Council Website",
    description:
      "Developed an interactive platform to showcase cultural events, clubs, and announcements. The site serves as a central hub for all cultural activities at IIT Mandi.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Clerk"],
    liveLink: "https://cc.iitmandi.co.in/",
    githubLink: "",
    features: [
      "Event registration system with email notifications",
      "Interactive gallery with lightbox feature",
      "Team member profiles with social links",
      "Admin dashboard for content management",
    ],
    challenges: [
      "Implementing a scalable database structure to handle diverse event types",
      "Designing an intuitive UI that caters to both students and faculty",
      "Integrating a secure authentication system for admin access",
    ],
    impact:
      "The website has significantly improved engagement in cultural activities, with a 40% increase in event participation.",
    role: "Lead Developer",
    date: "2024",
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

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work showcasing my skills and experience in web development. Each project
            represents unique challenges and solutions I&apos;ve implemented.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-16">
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} className="glassmorphism-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gradient">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.role}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Challenges Overcome:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                  <div className="mt-6 flex gap-3">
                    {project.githubLink && (
                      <Button asChild variant="outline" size="sm" className="glassmorphism-button-outline">
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
                      <Button asChild size="sm" className="glassmorphism-button">
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}