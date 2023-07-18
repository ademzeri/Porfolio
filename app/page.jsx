import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <div className="scroll-smooth ">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  )
}
