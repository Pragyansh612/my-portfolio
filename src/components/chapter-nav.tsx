"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const chapters = [
  { id: "home", label: "Intro" },
  { id: "story", label: "Story" },
  { id: "skills", label: "Toolkit" },
  { id: "experience", label: "Career" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
]

export default function ChapterNav() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    chapters.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Page chapters"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 xl:flex"
    >
      {chapters.map((c, i) => {
        const isActive = active === c.id
        return (
          <a key={c.id} href={`#${c.id}`} className="group flex items-center gap-3 py-1.5">
            <span
              className={cn(
                "h-px transition-all duration-500",
                isActive ? "w-10 bg-primary" : "w-4 bg-muted-foreground/40 group-hover:w-7 group-hover:bg-foreground"
              )}
            />
            <span
              className={cn(
                "hidden font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 2xl:inline",
                isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100"
              )}
            >
              {String(i + 1).padStart(2, "0")} {c.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
