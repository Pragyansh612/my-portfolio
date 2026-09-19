import Hero from "@/components/hero"
import Story from "@/components/story"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import ChapterNav from "@/components/chapter-nav"
import IntroLoader from "@/components/intro-loader"

export default function Home() {
  return (
    <main className="min-h-screen">
      <IntroLoader />
      <ChapterNav />
      <Hero />
      <Story />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
