import MainLayout from './layouts/MainLayout';
import Navbar from './components/shared/Navbar';
import CustomCursor from './components/shared/CustomCursor';
import ScrollProgress from './components/shared/ScrollProgress';
import Footer from './components/shared/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import GitHubActivity from './components/sections/GitHubActivity';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import ResumeSection from './components/sections/ResumeSection';

function App() {
    return (
        <MainLayout>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <GitHubActivity />
                <Projects />
                <Blog />
                <Contact />
                <ResumeSection />
            </main>
            <Footer />
        </MainLayout>
    );
}

export default App;
