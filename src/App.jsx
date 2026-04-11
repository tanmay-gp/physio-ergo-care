import Header from './sections/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import ClinicGallery from './sections/ClinicGallery'
import Credentials from './sections/Credentials'
import About from './sections/About'
import Publications from './sections/Publications'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Credentials />
        <About />
        <Publications />
        <Contact />
        <ClinicGallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
