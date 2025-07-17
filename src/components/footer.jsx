import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-blue-100 dark:bg-gray-900 py-12 px-4 md:px-8 border-t border-blue-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={scrollToSection('home')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={scrollToSection('about')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={scrollToSection('projects')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={scrollToSection('contact')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/jimalvarez566" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jim-alvarez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-end items-start">
            <button
              onClick={scrollToTop}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="Back to top"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jim Alvarez. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 