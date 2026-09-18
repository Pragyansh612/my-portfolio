"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.08),transparent_70%)]"></div>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-medium text-base md:text-lg"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary via-purple-400 to-purple-500 bg-clip-text text-transparent leading-tight"
              >
                Pragyansh Saxena
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 leading-tight font-semibold"
              >
                Software Engineer
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              2+ years building production web, mobile, backend, and AI-powered systems.
              Delivered systems serving 10,000+ users with 99.9% uptime, cut API latency by up to
              40%, and shipped RAG pipelines over 50,000+ embeddings using Python, Go, TypeScript,
              Next.js, FastAPI, and PostgreSQL.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>saxenapragyansh@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 7999610227</span>
              </div>
              <Link
                href="https://linkedin.com/in/pragyansh-saxena-3b94492b8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                <span>LinkedIn</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-primary via-purple-400 to-purple-500 hover:from-primary/90 hover:via-purple-400/90 hover:to-purple-500/90 transition-all duration-300 group border-0">
                <Link href="#contact">
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-md bg-background/40 border-primary/30 hover:bg-background/60 hover:border-primary/50 transition-all duration-300">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10 transition-all duration-300">
                <Link href="https://github.com/Pragyansh612" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="backdrop-blur-xl bg-background/30 dark:bg-background/20 border border-primary/20 rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4 bg-gradient-to-r from-primary via-purple-400 to-purple-500 bg-clip-text text-transparent">
                    About Me
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base mb-4 leading-relaxed">
                    Software Engineer with 2+ years of experience building production web, mobile,
                    backend, and AI-powered systems across startups and freelance engagements.
                    Strong background in backend architecture, distributed systems, asynchronous
                    programming, databases, cloud infrastructure, and full-stack development.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3 text-sm lg:text-base">Key Highlights</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm lg:text-base">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Delivered systems serving 10,000+ users with 99.9% uptime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Reduced API latency by up to 40% and automated deployments with CI/CD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Built RAG pipelines and semantic vector search over 50,000+ embeddings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Proficient across Python, Go, TypeScript, and modern cloud infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}