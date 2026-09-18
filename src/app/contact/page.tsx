"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Mail, Send, Clock, MessageCircle, Linkedin, CircleCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { MagicCard } from "@/components/ui/magic-card"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"

const contactMethods = [
  {
    name: "Email",
    value: "saxenapragyansh@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:saxenapragyansh@gmail.com",
    description: "Send me an email anytime",
  },
  {
    name: "LinkedIn",
    value: "Pragyansh Saxena",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/pragyansh-saxena-3b94492b8",
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    value: "Pragyansh612",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/Pragyansh612",
    description: "Check out my projects",
  },
  {
    name: "Response Time",
    value: "Within 24 hours",
    icon: <Clock className="w-5 h-5" />,
    href: "#",
    description: "Quick response guaranteed",
  },
]

const faqs = [
  {
    q: "What services do I offer?",
    a: "Full-stack web development, AI/RAG integration, backend systems, and cloud infrastructure.",
  },
  {
    q: "What's my typical response time?",
    a: "I respond to all inquiries within 24 hours, usually much sooner during business hours.",
  },
  {
    q: "What type of projects interest me?",
    a: "Systems engineering, AI-powered products, and projects that solve real-world problems at scale.",
  },
  {
    q: "Do I work remotely?",
    a: "Yes — I work with teams globally and am experienced in remote, async collaboration.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        throw new Error(data.message || "Something went wrong")
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
    <div className="relative min-h-screen overflow-hidden pb-20 pt-32 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent_60%)]" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Talk"
          description="Have a project in mind or want to discuss opportunities? Reach out and I'll get back to you as soon as possible."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Contact Form */}
          <motion.div variants={item} initial="hidden" animate={isInView ? "show" : "hidden"} className="lg:col-span-2">
            <MagicCard
              className="h-full rounded-2xl"
              gradientColor="hsl(var(--primary) / 0.12)"
              gradientFrom="hsl(var(--primary))"
              gradientTo="hsl(var(--gold))"
            >
              <div className="p-6 md:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-xl font-semibold">Send Me a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-border/60 bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">
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
                        className="border-border/60 bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-border/60 bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">
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
                      className="resize-none border-border/60 bg-background/50"
                    />
                  </div>

                  <ShimmerButton
                    type="submit"
                    disabled={isSubmitting}
                    background="linear-gradient(110deg, hsl(var(--primary)), #a855f7)"
                    className="w-full py-3 text-sm font-semibold disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </ShimmerButton>
                </form>
              </div>
            </MagicCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-6">
            <motion.div variants={item} className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-md">
              <h3 className="mb-5 font-display text-lg font-semibold">Contact Information</h3>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.name}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group -m-2 flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-primary/5"
                  >
                    <div className="shrink-0 rounded-lg bg-primary/10 p-2 text-primary transition-transform duration-300 group-hover:scale-105">
                      {method.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-medium text-foreground/90">{method.name}</h4>
                      <p className="truncate text-sm text-muted-foreground">{method.value}</p>
                      <p className="text-xs text-muted-foreground/70">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card/40 to-gold/10 p-6 backdrop-blur-md"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                <CircleCheck className="h-3.5 w-3.5" />
                Currently Available
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Open for full-time Software Engineering roles</p>
                <p>Available for select freelance projects</p>
                <p>Interested in innovative collaborations</p>
                <p>Responsive within 24 hours</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-md">
              <h3 className="mb-3 font-display text-lg font-semibold">Let&apos;s Connect</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Prefer a quick chat? Reach out directly through your preferred platform.
              </p>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1 border-border/60 hover:border-primary/40 hover:bg-primary/10">
                  <Link href="mailto:saxenapragyansh@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 border-border/60 hover:border-primary/40 hover:bg-primary/10">
                  <Link href="https://github.com/Pragyansh612" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
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
          className="mt-8"
        >
          <div className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-md md:p-7">
            <h3 className="mb-6 text-center font-display text-xl font-semibold">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h4 className="mb-1.5 flex items-start gap-2 text-sm font-semibold text-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-gold" />
                    {faq.q}
                  </h4>
                  <p className="pl-3.5 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
