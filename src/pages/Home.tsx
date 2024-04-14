import { AboutMe } from "../components/AboutMe"
import { Experience } from "../components/Experience"
import { HeroSection } from "../components/HeroSection"
import { Projects } from "../components/Projects"

export const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <Experience/>
      <Projects/>
    </div>
  )
}


