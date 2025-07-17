import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { LoadingScreen } from './components/loadingscreen';
import "./index.css";
import { Navbar } from './components/navbar';
import { Mobilemenu } from './components/mobilemenu';
import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { useScroll } from './hooks/useScroll';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollToSection } = useScroll();

  return (
    <ThemeProvider>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <Router>
          <div className="min-h-screen">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />
            <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App
