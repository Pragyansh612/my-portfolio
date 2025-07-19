"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Code, Globe, Database, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "WebSync",
    description:
      "Advanced website monitoring tool that provides real-time alerts and AI-powered diagnostics to ensure optimal site performance and uptime.",
    icon: <Globe className="w-8 h-8" />,
    tags: ["React.js", "TypeScript", "Supabase", "Gemini API", "LLM", "Tailwind CSS"],
    liveLink: "https://websyncai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/websync",
    features: ["Real-time monitoring", "AI-based alerts", "Performance diagnostics", "Uptime tracking"]
  },
  {
    title: "GenWeb",
    description:
      "Revolutionary AI-powered website builder that streamlines web development using cutting-edge tools and intelligent code generation.",
    icon: <Brain className="w-8 h-8" />,
    tags: ["Next.js", "Clerk", "Supabase", "Django", "Tailwind", "AI Agents"],
    liveLink: "https://genwebai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/GenWeb",
    features: ["AI code generation", "Modern authentication", "Real-time collaboration", "Responsive design"]
  },
  {
    title: "ProdByShyrap",
    description:
      "Comprehensive music kit sharing platform offering free drum kits, loops, and samples for music producers and creators worldwide.",
    icon: <Zap className="w-8 h-8" />,
    tags: ["React.js", "Supabase", "TypeScript", "Tailwind CSS"],
    liveLink: "https://prodbyshyrap.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/prodbyshyrap",
    features: ["Audio streaming", "Download management", "User profiles", "Content categorization"]
  },
  {
    title: "IIT Mandi Cultural Council",
    description:
      "Interactive platform for cultural events with comprehensive event management, registration systems, and dynamic content display.",
    icon: <Code className="w-8 h-8" />,
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Framer Motion"],
    liveLink: "https://cc.iitmandi.co.in/",
    features: ["Event registration", "Dynamic galleries", "Team management", "Responsive design"]
  },
  {
    title: "WanderWay",
    description:
      "Full-featured travel booking platform integrating hotels, trains, flights with real-time APIs for seamless booking experiences.",
    icon: <Database className="w-8 h-8" />,
    tags: ["Next.js", "React.js", "API Integration", "Payment Gateway", "Real-time Data"],
    githubLink: "https://github.com/Pragyansh612/WanderWay",
    features: ["Multi-service booking", "Real-time pricing", "Payment integration", "User dashboard"]
  },
  {
    title: "Exodia Event Platform",
    description:
      "Comprehensive event management platform with advanced user authentication, registration systems, and integrated payment processing.",
    icon: <Globe className="w-8 h-8" />,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://exodia-iit-mandiii.vercel.app/",
    features: ["Event management", "User authentication", "Payment integration", "Registration system"]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
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
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and cutting-edge technologies through impactful projects that demonstrate expertise in full-stack development and modern web technologies.
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
              className="group relative backdrop-blur-xl bg-background/40 border border-primary/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

              <div className="relative p-8 h-full flex flex-col">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubLink && (
                      <Button asChild variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button asChild variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  {project.features && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-primary">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.githubLink && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                      >
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                      >
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on innovative projects?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-xl hover:shadow-primary/25 transition-all duration-300"
          >
            <Link href="#contact">
              Let's Build Something Amazing
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}