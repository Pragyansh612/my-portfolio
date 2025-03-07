"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "PHP", level: 75 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Django", level: 70 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "PyTorch", level: 70 },
      { name: "TensorFlow", level: 65 },
      { name: "scikit-learn", level: 75 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VSCode", level: 95 },
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

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across various technologies and tools, allowing me to build comprehensive solutions for
            diverse projects.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="backdrop-blur-lg bg-background/30 border border-primary/10 rounded-xl p-6 shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
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
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

