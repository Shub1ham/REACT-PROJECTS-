import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Program from "./components/Program"
import Title from "./components/Title"
import Cam from './components/Cam'
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Title subtitle={"OUR PROGRAMS"} title={'What We Offer'}></Title>
    <Program ></Program>
    <About></About>
    <Title subtitle={'gallery'} title={'campus photo'}></Title>
    <Cam></Cam>
    <Title subtitle={'testimonials'} title={'What Student Says'}></Title>
    <Testimonials></Testimonials>
    <Title subtitle={'contact us'} title={'Get in Touch'}></Title>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
