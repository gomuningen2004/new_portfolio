import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold text-gray-900">
              GA
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
                About
              </a>
              <a href="#education" className="text-gray-700 hover:text-teal-600 transition-colors">
                Education
              </a>
              <a href="#technologies" className="text-gray-700 hover:text-teal-600 transition-colors">
                Technologies
              </a>
              <a href="#projects" className="text-gray-700 hover:text-teal-600 transition-colors">
                Projects
              </a>
              <a href="#certifications" className="text-gray-700 hover:text-teal-600 transition-colors">
                Certifications
              </a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <About />
        <Education />
        <Technologies />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;