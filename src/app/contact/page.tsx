"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Github, Mail, Globe, Send, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Pragyansh612",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:saxenapragyansh@gmail.com",
    },
    {
      name: "Website",
      icon: <Globe className="h-5 w-5" />,
      url: "#",
    },
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out and I'll get back
            to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glassmorphism dark:glassmorphism-dark p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-background/50 border-primary/20"
                  />
                </div>
                {/* <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                    className="bg-background/50 border-primary/20"
                  />
                </div> */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="min-h-[150px] bg-background/50 border-primary/20"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full glassmorphism-button group">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between gap-8"
          >
            <div className="glassmorphism dark:glassmorphism-dark p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Feel free to reach out to me through any of the following channels. I'm always open to discussing new
                  projects, opportunities, or partnerships.
                </p>
                <div className="space-y-4 mt-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <div className="p-3 rounded-full bg-primary/10">{link.icon}</div>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glassmorphism dark:glassmorphism-dark p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Currently available for freelance projects and full-time opportunities. Let's create something amazing
                together!
              </p>
              <Button asChild size="lg" className="glassmorphism-button group w-full">
                <Link href="#contact-form">
                  Get in Touch
                  <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

