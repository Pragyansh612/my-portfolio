"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90, description: "Proficient in data analysis, web development, and automation" },
      { name: "JavaScript", level: 85, description: "Expert in modern ES6+ features and async programming" },
      { name: "PHP", level: 75, description: "Experienced in server-side scripting and CMS development" },
      { name: "C++", level: 80, description: "Strong understanding of object-oriented programming and algorithms" },
      { name: "HTML/CSS", level: 95, description: "Mastery in creating responsive and accessible web layouts" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", level: 90, description: "Expertise in building complex, state-driven user interfaces" },
      { name: "Next.js", level: 85, description: "Proficient in server-side rendering and static site generation" },
      { name: "Node.js", level: 80, description: "Experienced in building scalable backend services and APIs" },
      { name: "Express", level: 75, description: "Skilled in creating RESTful APIs and middleware" },
      { name: "Tailwind CSS", level: 90, description: "Mastery in rapid UI development with utility-first approach" },
      { name: "Django", level: 70, description: "Proficient in building robust web applications with Python" },
      {
        name: "Bootstrap",
        level: 85,
        description: "Experienced in creating responsive designs with pre-built components",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85, description: "Proficient in NoSQL database design and operations" },
      { name: "MySQL", level: 80, description: "Experienced in relational database management and complex queries" },
      { name: "PostgreSQL", level: 75, description: "Skilled in advanced SQL features and database optimization" },
      { name: "Firebase", level: 80, description: "Proficient in real-time database and authentication services" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "PyTorch", level: 70, description: "Experienced in building and training neural networks" },
      {
        name: "TensorFlow",
        level: 65,
        description: "Proficient in creating machine learning models and data pipelines",
      },
      { name: "scikit-learn", level: 75, description: "Skilled in implementing various machine learning algorithms" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90, description: "Expert in version control and collaborative development" },
      { name: "GitHub", level: 90, description: "Proficient in project management and CI/CD workflows" },
      {
        name: "VSCode",
        level: 95,
        description: "Mastery in utilizing extensions and optimizing development environment",
      },
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function SkillsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Technical Skills</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My expertise spans across various technologies and tools, allowing me to build comprehensive solutions for
            diverse projects. Here's a detailed breakdown of my skills:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item} className="glassmorphism-card">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

