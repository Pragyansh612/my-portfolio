"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import SectionHeading from "@/components/section-heading"

const words: { w: string; accent?: boolean }[] = [
  { w: "I" },
  { w: "build" },
  { w: "backend-heavy", accent: true },
  { w: "products" },
  { w: "that" },
  { w: "stay" },
  { w: "fast", accent: true },
  { w: "at" },
  { w: "scale" },
  { w: "—" },
  { w: "from" },
  { w: "RAG", accent: true },
  { w: "pipelines" },
  { w: "and" },
  { w: "distributed" },
  { w: "schedulers" },
  { w: "to" },
  { w: "the" },
  { w: "interfaces", accent: true },
  { w: "people" },
  { w: "actually" },
  { w: "touch." },
]

const facts = [
  { k: "2+", v: "years shipping production software" },
  { k: "6", v: "teams & clients built for" },
  { k: "8", v: "projects taken from idea to deploy" },
]

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  accent?: boolean
}) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span
      style={{ opacity }}
      className={accent ? "mr-[0.28em] inline-block font-serif font-normal italic text-primary" : "mr-[0.28em] inline-block"}
    >
      {children}
    </motion.span>
  )
}

export default function Story() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] })

  return (
    <section ref={ref} id="story" className="relative py-24 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="container mx-auto px-4">
        <SectionHeading index="01" eyebrow="The short version" align="left" title="Story so far" />

        <p className="max-w-5xl font-display text-[clamp(1.9rem,4.6vw,4.2rem)] font-semibold leading-[1.12] tracking-tight">
          {words.map((item, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, Math.min(1, (i + 3) / words.length)]}
              accent={item.accent}
            >
              {item.w}
            </Word>
          ))}
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.v} className="bg-card p-6 md:p-8">
              <div className="font-display text-5xl font-extrabold tracking-tight text-gradient md:text-6xl">{f.k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
