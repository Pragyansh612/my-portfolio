"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Mail, Send, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"

const contactMethods = [
  {
    name: "Email",
    value: "saxenapragyansh@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:saxenapragyansh@gmail.com",
    description: "Send me an email anytime"
  },
  {
    name: "GitHub",
    value: "Pragyansh612",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/Pragyansh612",
    description: "Check out my projects"
  },
  {
    name: "Response Time",
    value: "Within 24 hours",
    icon: <Clock className="w-5 h-5" />,
    href: "#",
    description: "Quick response guaranteed"
  }
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          action: <ToastAction altText="Close">Close</ToastAction>,
        })
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-lg bg-background/40 border border-primary/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Send Me a Message
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/90">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="backdrop-blur-sm bg-background/50 border-primary/30 focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/90">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="backdrop-blur-sm bg-background/50 border-primary/30 focus:border-primary/60 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground/90">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="backdrop-blur-sm bg-background/50 border-primary/30 focus:border-primary/60 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/90">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={6}
                    className="backdrop-blur-sm bg-background/50 border-primary/30 focus:border-primary/60 transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <motion.div variants={item} className="backdrop-blur-lg bg-background/40 border border-primary/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground/90 text-sm">{method.name}</h4>
                      <p className="text-sm text-muted-foreground truncate">{method.value}</p>
                      <p className="text-xs text-muted-foreground/80">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={item} className="backdrop-blur-lg bg-background/40 border border-primary/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Currently Available
                </h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Open for freelance projects</p>
                <p>Available for full-time opportunities</p>
                <p>Interested in innovative collaborations</p>
                <p>Responsive within 24 hours</p>
              </div>
            </motion.div>

            {/* Quick Connect */}
            <motion.div variants={item} className="backdrop-blur-lg bg-background/40 border border-primary/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Prefer a quick chat? Reach out directly through your preferred platform.
              </p>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 flex-1">
                  <Link href="mailto:saxenapragyansh@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 flex-1">
                  <Link href="https://github.com/Pragyansh612" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="backdrop-blur-lg bg-background/40 border border-primary/20 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-foreground/90 mb-2">💼 What services do I offer?</h4>
                <p className="text-muted-foreground">Full-stack web development, AI integration, custom web applications, and modern frontend solutions.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground/90 mb-2">⏱️ What&apos;s my typical response time?</h4>
                <p className="text-muted-foreground">I respond to all inquiries within 24 hours, usually much sooner during business hours.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground/90 mb-2">🎯 What type of projects interest me?</h4>
                <p className="text-muted-foreground">Innovative web applications, AI-powered solutions, and projects that solve real-world problems.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground/90 mb-2">🌍 Do I work remotely?</h4>
                <p className="text-muted-foreground">Yes, I work with clients globally and am experienced in remote collaboration.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}