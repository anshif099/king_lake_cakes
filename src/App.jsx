import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import ParallaxBreak from './components/parallax-break'
import Gallery from './components/gallery'
import MoreCreations from './components/more-creations'
import Process from './components/process'
import Specialties from './components/specialties'
import Contact from './components/contact'
import Footer from './components/footer'
import kinglakePromiseImage from './assets/TheKinglakePromise.png'
import bookConsultationImage from './assets/BookYourConsultation.png'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ParallaxBreak
          quote="No two cakes share the same design. Each piece is created once, and once only."
          label="The Kinglake Promise"
          image={kinglakePromiseImage}
        />
        <Gallery />
        <MoreCreations />
        <Process />
        <ParallaxBreak
          quote="Available strictly by private appointment. Limited commissions accepted each month."
          label="Book Your Consultation"
          image={bookConsultationImage}
        />
        <Specialties />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
