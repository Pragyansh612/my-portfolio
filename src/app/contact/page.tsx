"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, CircleCheck, Clock, Github, Linkedin, Mail, MapPin, Plus, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import SectionHeading from "@/components/section-heading"
import Reveal from "@/components/reveal"
import { cn } from "@/lib/utils"

const contactMethods = [
  { name: "Email", value: "saxenapragyansh@gmail.com", icon: Mail, href: "mailto:saxenapragyansh@gmail.com" },
  { name: "LinkedIn", value: "Pragyansh Saxena", icon: Linkedin, href: "https://linkedin.com/in/pragyansh-saxena-3b94492b8" },
  { name: "GitHub", value: "@Pragyansh612", icon: Github, href: "https://github.com/Pragyansh612" },
  { name: "Location", value: "India · Open to remote", icon: MapPin, href: null },
  { name: "Response time", value: "Within 24 hours", icon: Clock, href: null },
]

const faqs = [
  { q: "What services do I offer?", a: "Full-stack web development, AI/RAG integration, backend systems, and cloud infrastructure." },
  { q: "What's my typical response time?", a: "I respond to all inquiries within 24 hours, usually much sooner during business hours." },
  { q: "What type of projects interest me?", a: "Systems engineering, AI-powered products, and projects that solve real-world problems at scale." },
  { q: "Do I work remotely?", a: "Yes — I work with teams globally and am experienced in remote, async collaboration." },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

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
        headers: { "Content-Type": "application/json" },
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
    <div className="relative overflow-x-clip pb-24 pt-32 md:pt-40">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-80 -z-10 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="container mx-auto px-4">
        <SectionHeading
          index="/ 04"
          eyebrow="Get In Touch"
          align="left"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="font-serif font-normal italic text-primary">great</span>
            </>
          }
          description="Have a project in mind or want to discuss opportunities? Reach out and I'll get back to you as soon as possible."
        />

        <a
          href="mailto:saxenapragyansh@gmail.com"
          className="group mb-16 block border-y border-border py-8 transition-colors duration-500 hover:border-primary/60 md:py-12"
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

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-primary/60 via-border to-gold/40 p-px shadow-[0_0_60px_-20px_hsl(var(--primary)/0.5)]">
              <form onSubmit={handleSubmit} className="space-y-5 rounded-[calc(1.5rem-1px)] bg-card p-6 md:p-9">
                <h2 className="font-display text-2xl font-bold tracking-tight">Send me a message</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Full name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="h-11 border-border bg-background/60" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="h-11 border-border bg-background/60" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Subject
                  </label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required className="h-11 border-border bg-background/60" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Message
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." required rows={6} className="resize-none border-border bg-background/60" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-violet-500 px-8 py-4 font-semibold text-primary-foreground shadow-[0_0_40px_-10px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:shadow-[0_0_60px_-8px_hsl(var(--primary)/0.9)] disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {!isSubmitting && <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-400">
              <CircleCheck className="h-3.5 w-3.5" />
              Available for full-time roles &amp; select freelance
            </div>

            <ul className="divide-y divide-border border-y border-border">
              {contactMethods.map(({ name, value, icon: Icon, href }) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{name}</span>
                      <span className="block truncate font-medium">{value}</span>
                    </span>
                    {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />}
                  </>
                )
                return (
                  <li key={name}>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center gap-4 py-4">
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 py-4">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-24">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-10 bg-border" />
            Good to know
          </p>
          <div className="border-b border-border">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <div key={f.q} className="border-t border-border">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 py-6 text-left"
                  >
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span className={cn("flex-1 font-display text-xl font-semibold tracking-tight transition-colors md:text-2xl", isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                      {f.q}
                    </span>
                    <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300", isOpen ? "border-primary bg-primary text-primary-foreground" : "border-border group-hover:border-primary group-hover:text-primary")}>
                      <Plus className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-45")} />
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                    inert={!isOpen}
                  >
                    <p className="pb-6 pl-10 text-muted-foreground md:text-lg">{f.a}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
