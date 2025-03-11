import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import ProjectsSection from "./sections/Projects/ProjectsSection"
import Footer from "../../components/Footer/Footer"



const Home = () => {

    return (
      <>
        <NavBar />
        <Hero />
        <About />
        <ProjectsSection />
        <Footer />
      </>
    )
  }
  
  export default Home
  