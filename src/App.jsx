import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/loadingscreen';
import "./index.css";
import { Navbar } from './components/navbar';
import { Mobilemenu } from './components/mobilemenu';
import { About } from './components/about';
import { Hero } from './components/hero';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { ScrollButtons } from './components/scrollbuttons';
import { useScroll } from './hooks/useScroll';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollToSection } = useScroll();

  return (
    <ThemeProvider>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />
        <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <ScrollButtons />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App
