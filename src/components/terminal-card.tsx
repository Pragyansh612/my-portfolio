"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Line =
  | { kind: "command"; text: string; pad?: boolean }
  | { kind: "output"; text: string }
  | { kind: "highlight"; text: string }

const script: Line[] = [
  { kind: "command", text: "whoami" },
  { kind: "output", text: "software engineer @ instafarms" },
  { kind: "command", text: "cat highlights.md", pad: true },
  { kind: "highlight", text: "10,000+ users served @ 99.9% uptime" },
  { kind: "highlight", text: "1st place — CS671 Deep Learning Hackathon" },
  { kind: "highlight", text: "RAG pipelines over 50,000+ embeddings" },
  { kind: "highlight", text: "SOTA cross-domain generalization (ASD research)" },
]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function Cursor({ className }: { className?: string }) {
  return <span className={cn("ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-primary", className)} />
}

export default function TerminalCard() {
  const [revealedCount, setRevealedCount] = useState(0)
  const [typingChars, setTypingChars] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true
    let cancelled = false

    async function run() {
      await sleep(500)
      for (let i = 0; i < script.length; i++) {
        if (cancelled) return
        const line = script[i]
        if (line.kind === "command") {
          for (let c = 1; c <= line.text.length; c++) {
            if (cancelled) return
            setTypingChars(c)
            await sleep(26 + Math.random() * 32)
          }
          await sleep(320)
        } else {
          await sleep(i === 1 ? 200 : 130)
        }
        if (cancelled) return
        setRevealedCount(i + 1)
        setTypingChars(0)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  const typingIndex = revealedCount < script.length ? revealedCount : -1
  const typingLine = typingIndex >= 0 ? script[typingIndex] : null
  const isDone = revealedCount === script.length

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/90 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-muted-foreground">pragyansh@portfolio ~ zsh</span>
      </div>
      <div className="min-h-[20rem] space-y-1 p-5 font-mono text-[13px] leading-7 md:min-h-[21rem] md:p-6">
        {script.slice(0, revealedCount).map((line, i) => {
          if (line.kind === "command") {
            return (
              <p key={i} className={line.pad ? "pt-2" : undefined}>
                <span className="text-primary">$</span> {line.text}
              </p>
            )
          }
          if (line.kind === "output") {
            return (
              <p key={i} className="text-muted-foreground">
                {line.text}
              </p>
            )
          }
          return (
            <p key={i} className="flex gap-2 text-foreground/85">
              <span className="text-primary">✓</span>
              {line.text}
            </p>
          )
        })}

        {typingLine?.kind === "command" && (
          <p className={typingLine.pad ? "pt-2" : undefined}>
            <span className="text-primary">$</span> {typingLine.text.slice(0, typingChars)}
            <Cursor />
          </p>
        )}

        {isDone && (
          <p className="pt-2">
            <span className="text-primary">$</span>
            <Cursor />
          </p>
        )}
      </div>
    </div>
  )
}
