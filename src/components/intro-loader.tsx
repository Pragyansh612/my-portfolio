"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function IntroLoader() {
  const [phase, setPhase] = useState<"show" | "exit" | "done">("show")
  const [count, setCount] = useState(0)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem("intro-seen") === "1"
      sessionStorage.setItem("intro-seen", "1")
    } catch {}
    if (seen) {
      setPhase("done")
      return
    }

    document.body.style.overflow = "hidden"
    const start = performance.now()
    let raf = 0
    let timeout: ReturnType<typeof setTimeout>
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500)
      setCount(Math.round(p * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setPhase("exit")
        timeout = setTimeout(() => setPhase("done"), 800)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (phase === "done") document.body.style.overflow = ""
  }, [phase])

  if (phase === "done") return null

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-background p-6 md:p-10"
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        <span>Portfolio &mdash; 2026</span>
        <span>Software Engineer</span>
      </div>

      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.8rem,9vw,8rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
        >
          Pragyansh
          <br />
          <span className="bg-gradient-to-r from-primary via-violet-400 to-fuchsia-400 bg-clip-text font-serif font-normal italic text-transparent">
            Saxena
          </span>
        </motion.h1>
      </div>

      <div>
        <div className="mb-3 flex items-end justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Loading experience</span>
          <span className="font-display text-5xl font-bold tabular-nums md:text-7xl">{count}</span>
        </div>
        <div className="h-px w-full bg-border">
          <div
            className="h-full bg-gradient-to-r from-primary to-gold"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  )
}
