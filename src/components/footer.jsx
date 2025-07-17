import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (
    <footer className="bg-blue-100 dark:bg-gray-900 py-12 px-4 md:px-8 border-t border-blue-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  Contact
                </Link>
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

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Ready to work together? Let's build something amazing.
            </p>
            <Link 
              to="/contact" 
              className="inline-block mt-2 text-blue-500 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
            >
              Contact Me →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Jim Alvarez. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 