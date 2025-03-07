import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
}

export default function GlassmorphicCard({ children, className }: GlassmorphicCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-lg bg-background/30 border border-primary/10 rounded-xl shadow-lg relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-30",
        "after:absolute after:inset-0 after:bg-gradient-to-tr after:from-transparent after:to-primary/5 after:opacity-30",
        className,
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30"></div>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-30"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

