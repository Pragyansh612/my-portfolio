"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: "center" | "left"
  index?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  index,
}: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("mb-12 md:mb-16", align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl")}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-primary",
          align === "center" && "justify-center"
        )}
      >
        {index && <span>{index}</span>}
        <span className="h-px w-10 bg-primary/60" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      )}
    </motion.div>
  )
}
