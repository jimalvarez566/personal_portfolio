import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/loadingscreen';
import "./index.css";
import { Navbar } from './components/navbar';
import { Mobilemenu } from './components/mobilemenu';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ProjectsPage } from './pages/Projects';
import { ContactPage } from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <Router>
          <div className="min-h-screen">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App
