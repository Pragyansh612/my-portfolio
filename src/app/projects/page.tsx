"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Users, Calendar, Code, Globe, Brain, Zap, Database, Trophy, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
// import { ArrowLeft } from "lucide-react"

const projects = [
  {
    title: "WebSync",
    description: "Advanced website monitoring tool that provides real-time alerts and AI-powered diagnostics to ensure optimal site performance and uptime. Built with modern React architecture and intelligent monitoring systems.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["React.js", "TypeScript", "Supabase", "Gemini API", "LLM", "Tailwind CSS"],
    liveLink: "https://websyncai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/websync",
    features: [
      "Real-time website monitoring with instant alerts",
      "AI-powered diagnostics using Gemini API",
      "Performance analytics and uptime tracking",
      "Intelligent alert system with customizable thresholds"
    ],
    challenges: [
      "Implementing efficient real-time monitoring without overwhelming server resources",
      "Integrating AI diagnostics to provide meaningful insights from monitoring data",
      "Creating responsive alerts system that scales with multiple websites"
    ],
    impact: "Provides website owners with proactive monitoring and AI-driven insights, reducing downtime and improving overall site performance.",
    role: "Solo Developer",
    date: "2025",
    category: "AI/ML Tool"
  },
  {
    title: "GenWeb",
    description: "Revolutionary AI-powered website builder that streamlines web development using cutting-edge tools like Clerk for authentication, Supabase for data storage, and intelligent code generation agents.",
    icon: <Brain className="w-6 h-6" />,
    tags: ["Next.js", "React.js", "Tailwind CSS", "Clerk", "Supabase", "AI Agents", "Python", "Django"],
    liveLink: "https://genwebai.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/GenWeb",
    features: [
      "AI-powered content generation and website building",
      "Secure user authentication with Clerk integration",
      "Real-time database operations with Supabase",
      "Responsive design templates with modern UI/UX"
    ],
    challenges: [
      "Creating seamless AI integration for automated website generation",
      "Building intuitive interface for users without technical background",
      "Implementing scalable architecture to handle multiple concurrent users"
    ],
    impact: "Democratized web development by enabling non-technical users to create professional websites, reducing development time by up to 70%.",
    role: "Lead Developer",
    date: "2025",
    category: "AI Platform"
  },
  {
    title: "ProdByShyrap",
    description: "Comprehensive music kit sharing platform offering free drum kits, loops, and samples for music producers worldwide. Features audio streaming, user management, and content categorization systems.",
    icon: <Zap className="w-6 h-6" />,
    tags: ["React.js", "Supabase", "TypeScript", "Tailwind CSS"],
    liveLink: "https://prodbyshyrap.vercel.app/",
    githubLink: "https://github.com/Pragyansh612/prodbyshyrap",
    features: [
      "High-quality audio streaming with progressive loading",
      "Advanced download management system",
      "User profile creation and management",
      "Smart content categorization and search functionality"
    ],
    challenges: [
      "Optimizing audio streaming performance for various file sizes",
      "Creating efficient content delivery system for large audio files",
      "Implementing user-friendly interface for music producers"
    ],
    impact: "Provided free resources to over 1000+ music producers, fostering creativity and collaboration in the music production community.",
    role: "Full-stack Developer",
    date: "2025",
    category: "Creative Platform"
  },
  {
    title: "IIT Mandi Cultural Council Website",
    description: "Interactive platform serving as the central hub for all cultural activities at IIT Mandi. Features comprehensive event management, registration systems, and dynamic content showcasing.",
    icon: <Code className="w-6 h-6" />,
    tags: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Clerk"],
    liveLink: "https://cc.iitmandi.co.in/",
    githubLink: "",
    features: [
      "Event registration system with automated email notifications",
      "Interactive photo galleries with lightbox functionality",
      "Team member profiles with integrated social media links",
      "Admin dashboard for seamless content management"
    ],
    challenges: [
      "Designing scalable database architecture for diverse event types",
      "Creating intuitive interface suitable for both students and faculty",
      "Implementing secure admin authentication and role-based access"
    ],
    impact: "Increased cultural event participation by 40% and streamlined communication between organizers and students across the campus.",
    role: "Lead Developer",
    date: "2024",
    category: "Educational Platform"
  },
  {
    title: "WanderWay",
    description: "Comprehensive travel booking platform integrating hotels, trains, flights, and more. Features real-time API integrations providing up-to-date information and seamless booking experiences.",
    icon: <Database className="w-6 h-6" />,
    tags: ["Next.js", "React.js", "API Integration", "Payment Gateway", "Real-time Data"],
    liveLink: "",
    githubLink: "https://github.com/Pragyansh612/WanderWay",
    features: [
      "Real-time availability and pricing from multiple travel APIs",
      "Secure integrated payment processing system",
      "Comprehensive user profiles with booking history tracking",
      "Advanced search and filter functionality for all travel services"
    ],
    challenges: [
      "Integrating and synchronizing data from multiple third-party travel APIs",
      "Building robust and secure payment processing infrastructure",
      "Ensuring consistent user experience across different service categories"
    ],
    impact: "Created unified platform for travel bookings, simplifying the travel planning process and providing users with comprehensive travel solutions.",
    role: "Full-stack Developer",
    date: "2024",
    category: "Travel Platform"
  },
  {
    title: "Exodia Website",
    description: "Comprehensive event management platform for IIT Mandi's annual technical festival. Successfully handled thousands of registrations with advanced user authentication and payment integration.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: "https://exodia-iit-mandiii.vercel.app/",
    githubLink: "",
    features: [
      "Robust user authentication and profile management system",
      "Event registration with integrated payment gateway",
      "Real-time updates and push notifications for participants",
      "Comprehensive analytics dashboard for event organizers"
    ],
    challenges: [
      "Handling massive traffic spikes during peak registration periods",
      "Implementing secure and reliable payment processing for event tickets",
      "Creating responsive design that performs seamlessly across all devices"
    ],
    impact: "Successfully managed over 10,000 registrations with 50% increase from previous year, establishing new benchmark for festival management.",
    role: "Head of Web Development",
    date: "2024",
    category: "Event Management"
  },
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and cutting-edge technologies through impactful projects that demonstrate expertise in full-stack development and modern web technologies.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <div className="backdrop-blur-lg bg-background/40 border border-primary/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary mt-1">
                      {project.icon}
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">
                        {project.title}
                      </h2>
                      <div className="text-xs text-muted-foreground mb-2">
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    {project.githubLink && (
                      <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button asChild size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ml-11">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-primary" />
                    <span className="font-medium">{project.role}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    {project.date}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 text-foreground/90 leading-relaxed ml-11">{project.description}</p>

                {/* Compact Content */}
                <div className="ml-11 space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center text-sm text-primary">
                      <Target className="h-4 w-4 mr-2" />
                      Key Features
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-primary/60 mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center text-sm text-primary">
                      <Code className="h-4 w-4 mr-2" />
                      Technical Challenges
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {project.challenges.slice(0, 2).map((challenge, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-orange-500/60 mt-2 mr-2 flex-shrink-0"></div>
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center text-sm text-primary">
                      <Trophy className="h-4 w-4 mr-2" />
                      Impact & Results
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 pt-4 border-t border-primary/10 ml-11">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tech) => (
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="backdrop-blur-lg bg-background/30 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Interested in collaborating on innovative projects?
            </h3>
            <p className="text-muted-foreground mb-4">
              Let&apos;s discuss how we can build something amazing together.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-primary/25"
            >
              <Link href="#contact">
                Start a Conversation
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}