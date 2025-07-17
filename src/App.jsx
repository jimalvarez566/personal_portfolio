import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/loadingscreen';
import "./index.css";
import { Navbar } from './components/navbar';
import { Mobilemenu } from './components/mobilemenu';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load page components
const HomePage = lazy(() => import('./pages/Home').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/About').then(module => ({ default: module.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/Projects').then(module => ({ default: module.ProjectsPage })));
const ContactPage = lazy(() => import('./pages/Contact').then(module => ({ default: module.ContactPage })));

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
            <Suspense fallback={<div></div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App
