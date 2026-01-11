import MainLayout from './layouts/MainLayout';
import Navbar from './components/shared/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <MainLayout>
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-200 mt-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <div>
            © 2026 Khalid. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/khalidGir" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/khalid-girma-5a864a2a0/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}

export default App;
