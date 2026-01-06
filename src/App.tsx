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

      <div className="space-y-4">
        <Hero />

        <div className="gradient-line" />
        <About />

        <div className="gradient-line" />
        <Projects />

        <div className="gradient-line" />
        <Experience />

        <div className="gradient-line" />
        <Contact />
      </div>

      <footer className="py-12 border-t border-text-muted/10 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-mono text-xs text-text-muted">
            <span className="text-accent-cyan">©</span> 2026 midnight_terminal_v1.0.4
          </div>
          <div className="flex space-x-6 font-mono text-xs text-text-muted">
            <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-status-success mr-2" /> System_Online</span>
            <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-accent-violet mr-2" /> Encrypted_Channel</span>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}

export default App;
