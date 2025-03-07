import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <div className="text-center mt-8 mb-16">
        <Button asChild size="lg" className="glassmorphism-button">
          <Link href="/skills">View All Skills</Link>
        </Button>
      </div>
      <Experience />
      <div className="text-center mt-8 mb-16">
        <Button asChild size="lg" className="glassmorphism-button">
          <Link href="/experience">View Full Experience</Link>
        </Button>
      </div>
      <Projects />
      <div className="text-center mt-8 mb-16">
        <Button asChild size="lg" className="glassmorphism-button">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
      <Contact />
      <div className="text-center mt-8 mb-16">
        <Button asChild size="lg" className="glassmorphism-button">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
      {/* <Footer /> */}
    </main>
  )
}

