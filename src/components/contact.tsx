"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { ArrowUpRight, Github, Mail, Send, Linkedin, MapPin, CircleCheck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { MagicCard } from "@/components/ui/magic-card"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import SectionHeading from "@/components/section-heading"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        setFormData({ name: "", email: "", message: "" })
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

  const socialLinks = [
    { name: "GitHub", handle: "@Pragyansh612", icon: <Github className="h-5 w-5" />, url: "https://github.com/Pragyansh612" },
    { name: "LinkedIn", handle: "Pragyansh Saxena", icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/pragyansh-saxena-3b94492b8" },
    { name: "Email", handle: "saxenapragyansh@gmail.com", icon: <Mail className="h-5 w-5" />, url: "mailto:saxenapragyansh@gmail.com" },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent_60%)]" />
      <div className="container mx-auto px-4">
        <SectionHeading
          index="05"
          align="left"
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="font-serif font-normal italic text-primary">great</span>
            </>
          }
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you — I usually reply within a day."
        />

        <a
          href="mailto:saxenapragyansh@gmail.com"
          className="group mb-14 block border-y border-border py-8 transition-colors duration-500 hover:border-primary/60 md:py-12"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Say hello &mdash; I reply within a day
          </p>
          <div className="flex items-center justify-between gap-6">
            <span className="min-w-0 break-all font-display text-[clamp(1.5rem,5.2vw,4.75rem)] font-extrabold leading-none tracking-tight transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-violet-400 group-hover:to-gold group-hover:bg-clip-text group-hover:text-transparent">
              saxenapragyansh@gmail.com
            </span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:h-24 md:w-24">
              <ArrowUpRight className="h-6 w-6 md:h-10 md:w-10" />
            </span>
          </div>
        </a>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <MagicCard
              className="h-full rounded-2xl"
              gradientColor="hsl(var(--primary) / 0.12)"
              gradientFrom="hsl(var(--primary))"
              gradientTo="hsl(var(--gold))"
            >
              <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold">Send Me a Message</h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-border/60 bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="border-border/60 bg-background/50"
                    />
                  </div>
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
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="min-h-[150px] border-border/60 bg-background/50"
                  />
                </div>
                <ShimmerButton
                  type="submit"
                  disabled={isSubmitting}
                  background="hsl(var(--primary))"
                  className="w-full py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
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
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-md md:p-7">
              <h3 className="mb-5 font-display text-lg font-semibold">Contact Information</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-transparent p-2 -m-2 transition-colors hover:border-primary/20 hover:bg-primary/5"
                  >
                    <div className="rounded-full bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-105">
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{link.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{link.handle}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-3 p-2 -m-2">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-xs text-muted-foreground">India &middot; Open to Remote</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card/40 to-gold/10 p-6 backdrop-blur-md md:p-7">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                <CircleCheck className="h-3.5 w-3.5" />
                Available for opportunities
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">Let&apos;s Connect</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Currently open to full-time Software Engineering roles and select freelance
                projects. Let&apos;s create something amazing together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
