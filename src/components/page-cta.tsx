import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function PageCTA() {
  return (
    <section className="relative mt-24 border-t border-border py-24 text-center md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[22rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[130px]" />
      <div className="container mx-auto px-4">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Next chapter</p>
        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          Like what you see?
          <br />
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-primary via-violet-400 to-fuchsia-400 bg-clip-text font-serif font-normal italic text-transparent">
            talk
          </span>
          <span className="text-gold">.</span>
        </h2>
        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-violet-500 px-8 py-4 font-semibold text-primary-foreground shadow-[0_0_40px_-10px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:shadow-[0_0_60px_-8px_hsl(var(--primary)/0.9)]"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
